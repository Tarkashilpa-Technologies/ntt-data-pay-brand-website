import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { getColorByDataType } from "../utils/utils";

export const NestedCollapse = ({
  propertyName,
  propertyValue,
  example,
  description,
  dataType,
  format,
}) => {
  const [open, setOpen] = useState(false);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  return (
    <div className=" fs-14 ml-30 overflow-auto">
      {propertyName}

      <button
        onClick={toggleCollapse}
        className="toggle-button btn border-0"
        type="button"
      >
        {!open ? (
          <img src="/images/chevron-right.svg" />
        ) : (
          <img src="/images/chevron-down.svg" />
        )}
      </button>

      <Collapse in={open}>
        <div className="ml-30">
          {dataType && (
            <p className="p-0 m-0 text-danger ">
              dataType :
              <span className={` text-break ${getColorByDataType(dataType)}`}>
                {dataType && dataType}
                {format && (
                  <span className=" text-break ">
                    {"  "} ({format && format})
                  </span>
                )}
              </span>
            </p>
          )}
          {example && (
            <p className="p-0 m-0 text-danger ">
              example :{" "}
              <span className="text-dark text-break ">
                {example && example}
              </span>
            </p>
          )}
          {description && (
            <p className="p-0 m-0 text-danger ">
              description :{" "}
              <span className="text-dark text-break ">
                {description && description}
              </span>
            </p>
          )}

          {typeof propertyValue === "object"
            ? Object.entries(propertyValue).map((key) => {
                if (key)
                  return (
                    <NestedCollapse
                      key={key[0]}
                      propertyName={key[0]}
                      propertyValue={key[1]?.properties}
                      example={key[1]?.example}
                      description={key[1]?.description}
                      dataType={key[1]?.type}
                      format={key[1]?.format}
                    />
                  );
              })
            : propertyValue}
        </div>
      </Collapse>
    </div>
  );
};

export default NestedCollapse;
