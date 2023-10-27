import React, { useEffect, useState } from "react";
import { NO_DESCRIPTION_AVAILABLE } from "../utils/messages";
import NestedCollapse from "./NestedCollapse";
import { FormLabel } from "react-bootstrap";
import { getColorByDataType } from "../utils/utils";

const ParametersTable = ({ data }) => {
  const [parameters, setParameters] = useState([]);
  const [requiredParameters, setRequiredParameters] = useState([]);
  useEffect(() => {
    function getParameters(obj, requiredParams = []) {
      const params = [];
      for (const key in obj) {
        const item = obj[key];
        const {
          required,
          description = "",
          type: objtype,
          example = "",
          properties,
        } = item || {};

        if (required) {
          requiredParams.push(...required);
        }

        if (key) {
          params.push({
            fieldname: key,
            description,
            objtype,
            example,
            properties,
          });
        }

        if (item.type === "object" && item.properties) {
          const nestedParams = getParameters(item.properties, requiredParams);
          params.push(...nestedParams.params);
          requiredParams = nestedParams.requiredParams;
        }
      }

      return { params, requiredParams };
    }

    const { params, requiredParams } = getParameters(data);
    setParameters(params);
    setRequiredParameters(requiredParams);
  }, [data]);

  console.log(requiredParameters);
  return (
    <table className="table table-hover p-2  ">
      <thead className="bg-theme">
        <tr>
          <td className="fw-bold bg-theme text-white ">Field Name </td>
          <td className="fw-bold bg-theme text-white">Description</td>
        </tr>
      </thead>
      <tbody>
        {parameters &&
          parameters?.map((field, index) => (
            <tr key={index} className="">
              <td className="align-top">
                <p className="m-0">
                  {field.fieldname}
                  {requiredParameters?.includes(field.fieldname) && (
                    <span
                      className=" text-danger ms-1"
                      style={{ fontSize: 20 }}
                    >
                      *
                    </span>
                  )}
                </p>

                <p
                  className={`text-secondary m-0 mt-1 ${
                    field?.objtype && getColorByDataType(field?.objtype)
                  }`}
                  style={{ fontSize: 15 }}
                >
                  ({field?.objtype})
                </p>
              </td>

              <td className=" align-top">
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
                    <FormLabel className="text-secondary text-break fs-13">
                      eg :- {field?.example}
                    </FormLabel>
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
