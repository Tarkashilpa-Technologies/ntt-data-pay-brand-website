import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { apisDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";

const ApiReferenceScreen = () => {
  const router = useRouter();
  const queryData = router.query?.data;
  const [selectedTitle, setSelectedTitle] = useState(0);
  const [apisListData, setApisListData] = useState([]);
  const [apiData, setApiData] = useState();
  // const JSONPrettyMon = require("react-json-pretty/dist/monikai");
  const dropdownData = [
    {
      title: "Dropdown Button",
      options: ["Another action", "Something else", "Another action"],
    },
    {
      title: "Dropdown Button",
      options: ["Another action", "Something else"],
    },
    {
      title: "Dropdown Button",
      options: ["Another action", "Something else", "Another action"],
    },
  ];
  const apisListDataApiCall = () => {
    // setShowLoader(true);

    console.log("api is getting call");
    apisDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        console.log(res?.data, "res?.data");
        setApisListData(res?.data?.data);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    apisListDataApiCall();
  }, []);

  useEffect(() => {
    if (apisListData) {
      apisListData?.map((data) => {
        if ((data?.attributes?.Title).replace(/\s+/g, "") == queryData) {
          return setApiData(data.attributes);
        }
      });
    }
  }, [setApisListData, queryData]);
  return (
    <div>
      <div className="api-reference-page">
        <div className="d-flex w-100 h-100" style={{ minHeight: 600 }}>
          <div style={{ width: 300 }} className="bg-primary pt-3 ">
            <div className="border-bottom">
              {" "}
              <input
                // onClick={() => router.back()}
                type="search"
                placeholder="Search"
                className="w-100 btn bg-primary text-white text-start rounded-0 border-0"
              />
            </div>
            <div>
              {" "}
              {apisListData?.map((dropdown, index) => {
                return (
                  <div key={index}>
                    <div className="bg-primary border-bottom p-1">
                      <button
                        className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary border-0 p-1 text-white"
                        onClick={() => {
                          setSelectedTitle(index);
                          setApiData(dropdown?.attributes);
                        }}
                      >
                        {dropdown?.attributes?.Title}
                      </button>
                    </div>
                    {selectedTitle == index && (
                      <div className="w-100 rounded-0 mt-0 bg-white">
                        <ul>
                          {dropdown?.options?.map((data, index) => {
                            return (
                              <li className="p-1" key={index}>
                                <label>{data}</label>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}

                    {/* <Dropdown size="full" className="bg-primary">
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary"
                      >
                        {dropdown?.title}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="w-100 rounded-0 mt-0">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-100 p-3 pt-4">
            <div className=" p-4">
              <div className="text-start">
                {" "}
                <h2 className="text-start">{apiData?.Title}</h2>
                <div className="w-100 overflow-auto">
                  <ReactMarkdown
                    components={{
                      p: ({ node, children }) => {
                        if (node.children[0].tagName == "img") {
                          const image = node.children[0];
                          return (
                            <div className="image">
                              <Image
                                src={image.properties.src}
                                alt={image.properties.alt}
                                width="600"
                                height="300"
                                className="w-100 h-100 d-flex justify-content-center"
                              />
                            </div>
                          );
                        } else if (node.children[0].tagName == "a") {
                          const a = node.children[0];
                          return (
                            <div className="a">
                              <a
                                href={a.href}
                                className="text-underline p-1 text-bg-primary"
                              ></a>
                            </div>
                          );
                        }
                        // Return default child if it's not an image
                        return <p>{children}</p>;
                      },
                    }}
                  >
                    {apiData?.Defination?.info?.description}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 bg-black">
            <div className="p-3 pt-4">
              <div className="text-white d-flex flex-column justify-content-center">
                {/* <JSONPretty
                  id="json-pretty"
                  data={dropdownData}
                  theme={JSONPrettyMon}
                  themeClassName="p-4"
                ></JSONPretty> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReferenceScreen;
