import React from "react";
import { generateExampleFromSchema } from "../utils/schema";
import JSONPretty from "react-json-pretty";
import { SELECT_FUNCTION_MESSAGE } from "../utils/messages";
import NestedCollapse from "./NestedCollapse";
import { extractRequiredArrays } from "../utils/utils";

const ApiEndpoint = ({ apiData }) => {
  const JSONPrettyMon = require("react-json-pretty/dist/monikai");

  return (
    <div>
      <div className="w-100">
        <h1 className="pt-4" id={"Api-Endpoints"}>
          Endpoint Documentation{" "}
        </h1>
        {apiData?.attributes?.Defination?.paths
          ? Object.entries(apiData?.attributes?.Defination?.paths)?.map(
              (path, index) => {
                return (
                  <div key={index}>
                    {Object.entries(path[1])?.map((apiName, index) => {
                      return (
                        <div key={index}>
                          <div>
                            <h2
                              className="py-3 m-0 pt-2"
                              id={apiName[1]?.summary.replace(/\s+/g, "-")}
                            >
                              {apiName[1]?.summary}
                            </h2>
                            <div className="fw-bold fs-6 rounded-1 border border-primary d-flex ">
                              <div className="border-end p-2 bg-primary text-white px-3">
                                {apiName[0].charAt(0).toUpperCase() +
                                  apiName[0].slice(1)}{" "}
                              </div>
                              <div className="text-decoration-underline p-2 text-primary">
                                {path[0]}
                              </div>
                            </div>
                            {apiName[1].requestBody?.summary && (
                              <p className="py-3 mb-0">
                                {apiName[1].requestBody?.summary}
                              </p>
                            )}
                            {apiName[1].requestBody?.description && (
                              <p className="mt-2 mb-0">
                                {apiName[1].requestBody?.description}
                              </p>
                            )}
                            <div>
                              {apiName[1].requestBody?.content &&
                                Object.entries(
                                  apiName[1].requestBody?.content
                                )?.map((item, index) => {
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
                                              const finalResult =
                                                result.replace(
                                                  /#\/components\/schemas\//g,
                                                  ""
                                                );
                                              const data =
                                                apiData?.attributes?.Defination
                                                  ?.components?.schemas &&
                                                Object.entries(
                                                  apiData?.attributes
                                                    ?.Defination?.components
                                                    ?.schemas
                                                )?.map((item, index) => {
                                                  if (finalResult === item[0]) {
                                                    return (
                                                      <div className="w-100 ">
                                                        <h4 className="pt-2 mb-2">
                                                          Request
                                                        </h4>

                                                        <h6 className="pt-2 m-0 mb-2">
                                                          Schema
                                                        </h6>
                                                        <div className=" bg-lightblue p-3">
                                                          {Object?.entries(
                                                            item[1]?.properties
                                                          )?.map((key1) => {
                                                            let requireList =
                                                              extractRequiredArrays(
                                                                item
                                                              );
                                                            return (
                                                              <NestedCollapse
                                                                propertyName={
                                                                  key1[0]
                                                                }
                                                                propertyValue={
                                                                  key1[1]
                                                                    ?.properties
                                                                }
                                                                requiredList={
                                                                  requireList
                                                                }
                                                              />
                                                            );
                                                          })}
                                                        </div>
                                                        <h6 className="pt-2 m-0 mb-2">
                                                          Example
                                                        </h6>

                                                        <JSONPretty
                                                          id="json-pretty"
                                                          data={generateExampleFromSchema(
                                                            item[1]?.properties
                                                          )}
                                                          theme={JSONPrettyMon}
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
                                })}
                            </div>
                          </div>
                          <div>
                            <h4
                              id={`Responses-${apiName[1]?.summary.replace(
                                /\s+/g,
                                "-"
                              )}`}
                            >
                              Responses
                            </h4>
                            <h6 className="pt-2 m-0 mb-2">Schema</h6>
                            <p>{apiName[1].responses?.description}</p>
                            {apiName[1].responses &&
                                Object.entries(apiName[1].responses)?.map(
                                  (apiResponse, index) => {
                                    // if(item[0] == 'application/json')
                                    return (
                                      <div key={index}>
                                        
                                        {apiResponse[1].content &&
                                          Object.entries(apiResponse[1].content)?.map(
                                            (content, index) => {
                                              if (
                                                content[0] == "application/json"
                                              ) {
                                                return (
                                                  <div>
                                                    {content[0] &&
                                                      Object.entries(
                                                        content[1]
                                                      )?.map((contentObj, index) => {
                                                        const result = `${
                                                          contentObj[0] &&
                                                          Object.entries(
                                                            contentObj[1]
                                                          )
                                                            ?.map(
                                                              (data, index) => {
                                                                return `${Object.entries(
                                                                  data[1]
                                                                )
                                                                  ?.map(
                                                                    (
                                                                      data,
                                                                      index
                                                                    ) => {
                                                                      return `${data[1].replace(
                                                                        / \n/g,
                                                                        ""
                                                                      )}`;
                                                                    }
                                                                  )
                                                                  .join("")}`;
                                                              }
                                                            )
                                                            .join("")
                                                        }`;
                                                        const finalResult =
                                                          result.replace(
                                                            /#\/components\/schemas\//g,
                                                            ""
                                                          );
                                                        const data =
                                                          apiData?.attributes
                                                            ?.Defination
                                                            ?.components
                                                            ?.schemas &&
                                                          Object.entries(
                                                            apiData?.attributes
                                                              ?.Defination
                                                              ?.components
                                                              ?.schemas
                                                          )?.map(
                                                            (item, index) => {
                                                              if (
                                                                finalResult ===
                                                                item[0]
                                                              ) {
                                                                return (
                                                                  <div className="w-100">
                                                                    <div className=" bg-lightblue p-3">
                                                                      {Object?.entries(
                                                                        item[1]
                                                                          ?.properties
                                                                      )?.map(
                                                                        (
                                                                          key1
                                                                        ) => {
                                                                          let requireList =
                                                                            extractRequiredArrays(
                                                                              item
                                                                            );
                                                                          return (
                                                                            <NestedCollapse
                                                                              propertyName={
                                                                                key1[0]
                                                                              }
                                                                              propertyValue={
                                                                                key1[1]
                                                                                  ?.properties
                                                                              }
                                                                              requiredList={
                                                                                requireList
                                                                              }
                                                                            />
                                                                          );
                                                                        }
                                                                      )}
                                                                    </div>

                                                                    <div className="py-2 mt-4">
                                                                      <h6>
                                                                        {
                                                                          apiResponse[0]
                                                                        }
                                                                        :{" "}
                                                                        <span className="fw-normal">
                                                                          {
                                                                            apiResponse[1]
                                                                              .description
                                                                          }
                                                                        </span>
                                                                      </h6>{" "}
                                                                    </div>
                                                                    <JSONPretty
                                                                      id="json-pretty"
                                                                      data={generateExampleFromSchema(
                                                                        item[1]
                                                                          ?.properties
                                                                      )}
                                                                      theme={
                                                                        JSONPrettyMon
                                                                      }
                                                                      themeClassName="p-4 fixed-height-data"
                                                                    ></JSONPretty>
                                                                  </div>
                                                                );
                                                              }
                                                            }
                                                          );
                                                        return (
                                                          <div>{data}</div>
                                                        );
                                                      })}
                                                  </div>
                                                );
                                              }
                                            }
                                          )}
                                      </div>
                                    );
                                  }
                                )}
                            <div>
                              {apiName[1].responses &&
                                Object.entries(apiName[1].responses)?.map(
                                  (item, index) => {
                                    return (
                                      <div key={index}>
                                        
                                        {item[1].content &&
                                          Object.entries(item[1].content)?.map(
                                            (contentEntry, contentIndex) => {
                                              if (
                                                contentEntry[0] ==
                                                "application/json"
                                              ) {
                                                return (
                                                  <div key={contentIndex}>
                                                    {contentEntry[0] &&
                                                      Object.entries(
                                                        contentEntry[1]
                                                      )?.map(
                                                        (
                                                          jsonEntry,
                                                          jsonIndex
                                                        ) => {
                                                          console.log(jsonEntry)
                                                          const result = `${
                                                            jsonEntry[0] &&
                                                            Object.entries(
                                                              jsonEntry[1]
                                                            )
                                                              ?.map(
                                                                (
                                                                  innerEntry,
                                                                  innerIndex
                                                                ) => {
                                                                  if (
                                                                    innerEntry[0] ==
                                                                    "ref"
                                                                  ) {
                                                                    return innerEntry[1];
                                                                  }
                                                                }
                                                              )
                                                              .join("")
                                                          }`;
                                                          const finalResult =
                                                            result.replace(
                                                              /#\/components\/schemas\//g,
                                                              ""
                                                            );
                                                          const data =
                                                            apiData?.attributes
                                                              ?.Defination
                                                              ?.components
                                                              ?.schemas &&
                                                            Object.entries(
                                                              apiData
                                                                ?.attributes
                                                                ?.Defination
                                                                ?.components
                                                                ?.schemas
                                                            )?.map(
                                                              (
                                                                schemaEntry,
                                                                schemaIndex
                                                              ) => {
                                                                if (
                                                                  finalResult ===
                                                                  schemaEntry[0]
                                                                ) {
                                                                  return (
                                                                    contentEntry[0] &&
                                                                    Object.entries(
                                                                      contentEntry[1]
                                                                    )?.map(
                                                                      (
                                                                        jsonEntry,
                                                                        jsonIndex
                                                                      ) => {
                                                                          if (
                                                                            jsonEntry[0] ==
                                                                            "example"
                                                                          ) {
                                                                            return Object.entries(
                                                                              jsonEntry[1]
                                                                            )?.map(
                                                                              (
                                                                                ex
                                                                              ) => {
                                                                                if (
                                                                                  ex[0] !==
                                                                                  "ref"
                                                                                ) {
                                                                                  schemaEntry[1].properties.payInstrument.properties.responseDetails.properties.description.example =
                                                                                    ex[1]?.description;
                                                                                  schemaEntry[1].properties.payInstrument.properties.responseDetails.properties.message.example =
                                                                                    ex[1]?.message;
                                                                                  schemaEntry[1].properties.payInstrument.properties.responseDetails.properties.statusCode.example =
                                                                                    ex[0];
                                                                                  return (
                                                                                    <div
                                                                                      className="w-100"
                                                                                      key={
                                                                                        schemaIndex
                                                                                      }
                                                                                    >
                                                                                      <p>
                                                                                        <b>
                                                                                          {
                                                                                            schemaEntry[1]
                                                                                              .properties
                                                                                              .payInstrument
                                                                                              .properties
                                                                                              .responseDetails
                                                                                              .properties
                                                                                              .statusCode
                                                                                              .example
                                                                                          }
                                                                                        </b>{" "}
                                                                                        {
                                                                                          " : "
                                                                                        }
                                                                                        {
                                                                                          schemaEntry[1]
                                                                                            ?.properties
                                                                                            ?.payInstrument
                                                                                            ?.properties
                                                                                            ?.responseDetails
                                                                                            ?.properties
                                                                                            ?.message
                                                                                            ?.example
                                                                                        }
                                                                                      </p>
                                                                                      <JSONPretty
                                                                                        id="json-pretty"
                                                                                        data={generateExampleFromSchema(
                                                                                          schemaEntry[1]
                                                                                            ?.properties
                                                                                        )}
                                                                                        theme={
                                                                                          JSONPrettyMon
                                                                                        }
                                                                                        themeClassName="p-4 fixed-height-data"
                                                                                      ></JSONPretty>
                                                                                    </div>
                                                                                  );
                                                                                }
                                                                              }
                                                                            );
                                                                          }
                                                                      }
                                                                    )
                                                                  );
                                                                }
                                                              }
                                                            );
                                                          return (
                                                            <div
                                                              key={jsonIndex}
                                                            >
                                                              {data}
                                                            </div>
                                                          );
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
                      );
                    })}
                  </div>
                );
              }
            )
          : SELECT_FUNCTION_MESSAGE}
      </div>
    </div>
  );
};

export default ApiEndpoint;
