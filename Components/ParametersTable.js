import React, { useEffect, useState } from "react";
import { NO_DESCRIPTION_AVAILABLE } from "../utils/messages";
import NestedCollapse from "./NestedCollapse";

const ParametersTable = ({ data }) => {
  const [parameters, setParameters] = useState([]);
  const [requiredParameters, setRequiredParameters] = useState([]);
  useEffect(() => {
    function getParameters(obj) {
      const params = [];
      const required = [];
      for (const key in obj) {
        const item = obj[key];
        if (item?.required) {
          required?.push(item?.required);
        }
        if (key) {
          const param = {
            fieldname: key,
            description: item?.description || "",
            objtype: item?.type,
            example: item?.example || "",
            properties: item?.properties,
          };
          params.push(param);
        }
        if (item.type === "object" && item.properties) {
          const nestedParams = getParameters(item.properties)?.params;
          params.push(...nestedParams);
        }
      }
      return {
        params: params,
        required: required,
      };
    }

    const extractedParameters = getParameters(data)?.params;
    setParameters(extractedParameters);
  }, [data]);
  console.log(parameters);
  return (
    <table className="table table-hover p-2  ">
      <thead className="bg-theme">
        <tr>
          <td className="fw-bold bg-theme text-white ">Field Name </td>
          <td className="fw-bold bg-theme text-white">Description</td>
        </tr>
      </thead>
      <tbody>
        {parameters.map((field, index) => (
          <tr key={index} className="">
            <td className="align-top">
              {field.fieldname}
              <span className=" text-danger ms-1" style={{ fontSize: 20 }}>
                *
              </span>
              <div className="text-secondary" style={{ fontSize: 15 }}>
                [{field?.objtype}]
              </div>
            </td>

            <td className=" align-middle">
              <div>
                {field.description ? (
                  field.description
                ) : (
                  <span className="text-secondary">
                    {NO_DESCRIPTION_AVAILABLE}
                  </span>
                )}
              </div>
              <div>
                {field?.example && (
                  <small className="text-secondary text-break">
                    eg:-{field?.example}
                  </small>
                )}
              </div>
              {field?.properties && (
                <div className="bg-lightgray">
                  <NestedCollapse
                    propertyName={field?.fieldname}
                    propertyValue={field?.properties}
                  />
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParametersTable;
