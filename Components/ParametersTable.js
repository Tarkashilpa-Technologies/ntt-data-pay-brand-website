import React, { useEffect, useState } from "react";
import { NO_DESCRIPTION_AVAILABLE } from "../utils/messages";

const ParametersTable = ({ data }) => {
  const [parameters, setParameters] = useState([]);

  useEffect(() => {
    function getParameters(obj) {
      const params = [];

      for (const key in obj) {
        const item = obj[key];
        if (key) {
          const param = {
            fieldname: key,
            description: item?.description || "",
            objtype: item?.type,
            example: item?.example || "",
          };

          params.push(param);
        }

        if (item.type === "object" && item.properties) {
          const nestedParams = getParameters(item.properties);
          params.push(...nestedParams);
        }
      }
      return params;
    }

    const extractedParameters = getParameters(data);
    setParameters(extractedParameters);
  }, [data]);

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
            <td className="align-middle">
              {field.fieldname}
              <span className=" text-danger ms-1" style={{ fontSize: 20 }}>
                *
              </span>
              <span className="text-secondary ms-1" style={{ fontSize: 13 }}>
                {field?.objtype}
              </span>
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ParametersTable;
