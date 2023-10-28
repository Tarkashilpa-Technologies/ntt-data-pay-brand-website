import React from "react";
import { generateExampleFromSchema } from "../utils/schema";
import JSONPretty from "react-json-pretty";
import { flattenObject, generateSchema } from "../utils/apiUtils";
import {
  NO_DESCRIPTION_AVAILABLE,
  SELECT_FUNCTION_MESSAGE,
} from "../utils/messages";
import ParametersTable from "./ParametersTable";

const ApiTryItOutDescription = ({ apiData, selectedFunction }) => {
  const JSONPrettyMon = require("react-json-pretty/dist/monikai");

  return (
    <div>
      <div className="w-100">
        <h1 className="pt-4" id={"Api-Endpoints"}>
          Endpoint Documentation{" "}
        </h1>
        {selectedFunction ? (
          <div>
            <div>
              <h2
                className="py-3 m-0 pt-4"
                id={selectedFunction?.summary.replace(/\s+/g, "-")}
              >
                {selectedFunction?.summary}
              </h2>
              <div className="fw-bold fs-6 rounded-1 border border-primary d-flex my-3">
                <div className="border-end p-2 bg-primary text-white px-3">
                  {selectedFunction?.method?.charAt(0).toUpperCase() +
                    selectedFunction?.method.slice(1)}{" "}
                </div>
                <div className="text-decoration-underline p-2 text-primary">
                  {selectedFunction?.api}
                </div>
              </div>
              {selectedFunction?.requestBody?.summary && (
                <p className="py-3 mb-0">
                  {selectedFunction?.requestBody?.summary}
                </p>
              )}
              {selectedFunction?.requestBody?.description && (
                <p className="py-3 mb-0">
                  {selectedFunction?.requestBody?.description}
                </p>
              )}
              <div>
                {selectedFunction?.requestBody?.content &&
                  Object.entries(selectedFunction?.requestBody?.content)?.map(
                    (item, index) => {
                      if (item[0] == "application/json") {
                        return (
                          <div className="position-relative">
                            {item[0] &&
                              Object.entries(item[1])?.map((item, index) => {
                                const result = `${
                                  item[0] &&
                                  Object.entries(item[1])
                                    ?.map((item, index) => {
                                      return `${Object.entries(item[1])
                                        ?.map((item, index) => {
                                          return `${item[1].replace(
                                            / \n/g,
                                            ""
                                          )}`;
                                        })
                                        .join("")}`;
                                    })
                                    .join("")
                                }`;
                                const finalResult = result.replace(
                                  /#\/components\/schemas\//g,
                                  ""
                                );
                                const data =
                                  apiData?.attributes?.Defination?.components
                                    ?.schemas &&
                                  Object.entries(
                                    apiData?.attributes?.Defination?.components
                                      ?.schemas
                                  )?.map((item, index) => {
                                    if (finalResult === item[0]) {
                                      return (
                                        <div className="w-100 react-markdown">
                                          <p className="py-2 fs-5 fw-bold px-0">
                                            Request :{" "}
                                          </p>
                                          <ParametersTable
                                            data={item[1]?.properties}
                                          />
                                          <p className="pt-3 fw-bold">
                                            Example :{" "}
                                          </p>
                                          <JSONPretty
                                            id="json-pretty"
                                            data={generateExampleFromSchema(
                                              item[1]?.properties
                                            )}
                                            theme={JSONPrettyMon}
                                            maxWidth={'100%'}
                                            themeClassName="p-4 fixed-height-data"
                                          ></JSONPretty>
                                          <div></div>
                                        </div>
                                      );
                                    }
                                  });
                                return <div>{data}</div>;
                              })}
                          </div>
                        );
                      }
                    }
                  )}
              </div>
            </div>
            <div>
              <h5 className="py-3">Responses</h5>
              <p className="m-0">{selectedFunction.responses?.description}</p>
              <div>
                {selectedFunction.responses &&
                  Object.entries(selectedFunction.responses)?.map(
                    (item, index) => {
                      // if(item[0] == 'application/json')
                      return (
                        <div key={index}>
                          <div className="py-2">
                            <b>{item[0]}</b> : {item[1].description}
                          </div>
                          {item[1].content &&
                            Object.entries(item[1].content)?.map(
                              (item, index) => {
                                if (item[0] == "application/json") {
                                  return (
                                    <div>
                                      {item[0] &&
                                        Object.entries(item[1])?.map(
                                          (item, index) => {
                                            const result = `${
                                              item[0] &&
                                              Object.entries(item[1])
                                                ?.map((item, index) => {
                                                  return `${Object.entries(
                                                    item[1]
                                                  )
                                                    ?.map((item, index) => {
                                                      return `${item[1].replace(
                                                        / \n/g,
                                                        ""
                                                      )}`;
                                                    })
                                                    .join("")}`;
                                                })
                                                .join("")
                                            }`;
                                            const finalResult = result.replace(
                                              /#\/components\/schemas\//g,
                                              ""
                                            );
                                            const data =
                                              apiData?.attributes?.Defination
                                                ?.components?.schemas &&
                                              Object.entries(
                                                apiData?.attributes?.Defination
                                                  ?.components?.schemas
                                              )?.map((item, index) => {
                                                if (finalResult === item[0]) {
                                                  return (
                                                    <div className="w-100">
                                                      <JSONPretty
                                                        id="json-pretty"
                                                        data={generateExampleFromSchema(
                                                          item[1]?.properties
                                                        )}
                                                        theme={JSONPrettyMon}
                                                        maxWidth={'100%'}
                                                        themeClassName="p-4 fixed-height-data"
                                                      ></JSONPretty>
                                                    </div>
                                                  );
                                                }
                                              });
                                            return <div>{data}</div>;
                                          }
                                        )}
                                    </div>
                                  );
                                }
                              }
                            )}
                        </div>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        ) : (
          SELECT_FUNCTION_MESSAGE
        )}
      </div>
    </div>
  );
};

export default ApiTryItOutDescription;
