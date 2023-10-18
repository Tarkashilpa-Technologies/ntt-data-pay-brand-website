import React from 'react'
import { generateExampleFromSchema } from '../utils/schema';
import JSONPretty from 'react-json-pretty';

const ApiEndpoints = ({apiData}) => {
    const JSONPrettyMon = require("react-json-pretty/dist/monikai");
  return (
    <div className="w-100">
                    <h1 className="pt-4">Api Endpoints </h1>
                    {apiData?.attributes?.Defination?.paths &&
                      Object.entries(
                        apiData?.attributes?.Defination?.paths
                      )?.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="py-2 fs-5">
                              <b>Pathname :</b> {" "}
                              <span className="text-decoration-underline">
                                "{item[0]}"
                              </span>
                            </div>
                            {Object.entries(item[1])?.map((item, index) => {
                              console.log(item, "item data");
                              return (
                                <div key={index}>
                                  <p className="py-2 m-0">
                                    {item[1]?.description}
                                  </p>
                                  <div>
                                    <div className="py-3 fs-5 fw-bold">
                                      {" "}
                                      Request Body {" "}
                                    </div>
                                    <p>{item[1].requestBody?.summary}</p>
                                    <p>{item[1].requestBody?.description}</p>
                                    <div className="fw-bold py-2 fs-5">
                                      {" "}
                                      Method : {item[0]}
                                    </div>

                                    <div>
                                      {item[1].requestBody?.content &&
                                        Object.entries(
                                          item[1].requestBody?.content
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
                                                          ?.map(
                                                            (item, index) => {
                                                              return `${Object.entries(
                                                                item[1]
                                                              )
                                                                ?.map(
                                                                  (
                                                                    item,
                                                                    index
                                                                  ) => {
                                                                    return `${item[1].replace(
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
                                                              const tableData =
                                                                generateExampleFromSchema(
                                                                  item[1]
                                                                    ?.properties
                                                                );
                                                              // console.log(tableData,"table data")
                                                              const getFieldDetails =
                                                                (
                                                                  obj,
                                                                  prefix = ""
                                                                ) => {
                                                                  const fields =
                                                                    [];

                                                                  for (const key in obj) {
                                                                    if (
                                                                      typeof obj[
                                                                        key
                                                                      ] ===
                                                                        "object" &&
                                                                      obj[
                                                                        key
                                                                      ] !== null
                                                                    ) {
                                                                      fields.push(
                                                                        ...getFieldDetails(
                                                                          obj[
                                                                            key
                                                                          ],
                                                                          `${prefix}${key}.`
                                                                        )
                                                                      );
                                                                    } else {
                                                                      fields.push(
                                                                        {
                                                                          id: `${prefix}${key}`,
                                                                          description:
                                                                            key,
                                                                        }
                                                                      );
                                                                    }
                                                                  }
                                                                  return fields;
                                                                };
                                                              const fieldDetails =
                                                                getFieldDetails(
                                                                  tableData
                                                                );

                                                              console.log(
                                                                item[1]
                                                                  ?.properties,
                                                                "item[1]?.properties"
                                                              );
                                                              return (
                                                                <div className="w-100 react-markdown">
                                                                  <p>
                                                                    Example :{" "}
                                                                  </p>
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
                                                                  <div>
                                                                    <h2 className="py-2">
                                                                      Specifications
                                                                      of API
                                                                      Request {" "}
                                                                    </h2>
                                                                    <table className="table table-hover p-2">
                                                                      <tbody>
                                                                        {fieldDetails.map(
                                                                          (
                                                                            field,
                                                                            index
                                                                          ) => (
                                                                            <tr
                                                                              key={
                                                                                index
                                                                              }
                                                                            >
                                                                              <td>
                                                                                {field.id
                                                                                  .split(
                                                                                    "."
                                                                                  )
                                                                                  .pop()}
                                                                              </td>
                                                                              <td className="text-break">
                                                                                {
                                                                                  field.description
                                                                                }
                                                                              </td>
                                                                            </tr>
                                                                          )
                                                                        )}
                                                                      </tbody>
                                                                    </table>
                                                                  </div>
                                                                </div>
                                                              );
                                                            }
                                                          }
                                                        );
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
                                    <h6 className="py-3 fs-5">Responses </h6>
                                    <p>{item[1].responses?.description}</p>
                                    <div>
                                      {item[1].responses &&
                                        Object.entries(item[1].responses)?.map(
                                          (item, index) => {
                                            if (item[0] == 200) {
                                              return (
                                                <div>
                                                  <div className="fw-bold py-lg-3 py-2">
                                                    1] {item[0]}
                                                  </div>
                                                  <p>{item[1].description}</p>
                                                  {item[1].content &&
                                                    Object.entries(
                                                      item[1].content
                                                    )?.map((item, index) => {
                                                      if (
                                                        item[0] ==
                                                        "application/json"
                                                      ) {
                                                        return (
                                                          <div>
                                                            {item[0] &&
                                                              Object.entries(
                                                                item[1]
                                                              )?.map(
                                                                (
                                                                  item,
                                                                  index
                                                                ) => {
                                                                  const result = `${
                                                                    item[0] &&
                                                                    Object.entries(
                                                                      item[1]
                                                                    )
                                                                      ?.map(
                                                                        (
                                                                          item,
                                                                          index
                                                                        ) => {
                                                                          return `${Object.entries(
                                                                            item[1]
                                                                          )
                                                                            ?.map(
                                                                              (
                                                                                item,
                                                                                index
                                                                              ) => {
                                                                                return `${item[1].replace(
                                                                                  / \n/g,
                                                                                  ""
                                                                                )}`;
                                                                              }
                                                                            )
                                                                            .join(
                                                                              ""
                                                                            )}`;
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
                                                                    apiData
                                                                      ?.attributes
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
                                                                        item,
                                                                        index
                                                                      ) => {
                                                                        if (
                                                                          finalResult ===
                                                                          item[0]
                                                                        ) {
                                                                          return (
                                                                            <div className="w-100">
                                                                              {/* <h3 className="py-3">{item[0]}</h3> */}
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
                                                                    <div>
                                                                      {data}
                                                                    </div>
                                                                  );
                                                                }
                                                              )}
                                                          </div>
                                                        );
                                                      }
                                                    })}
                                                </div>
                                              );
                                            } else {
                                              return (
                                                <div>
                                                  <div className='fw-bold py-2'>
                                                    {index + 1}] {item[0]}
                                                  </div>
                                                  <p>{item[1].description}</p>
                                                </div>
                                              );
                                            }
                                          }
                                        )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
  )
}

export default ApiEndpoints