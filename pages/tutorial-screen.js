import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { tutorialDataApi, tutorialGroupDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";
import Accordion from "react-bootstrap/Accordion";

const TutorialScreen = () => {
  const router = useRouter();
  const queryData = router.query?.data;
  const [tutorialsListData, setTutorialsListData] = useState([]);
  const [tutorialData, setTutorialData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState(0);
  const [isPageHelpful, setIsPageHelpful] = useState();

  const tutorialListDataApiCall = () => {
    // setShowLoader(true);
    tutorialGroupDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);

        setTutorialsListData(res?.data?.data);
        // setTutorialData(res?.data?.data[0]?.attributes);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    tutorialListDataApiCall();
  }, []);

  useEffect(() => {
    if (tutorialsListData) {
      tutorialsListData?.map((data) => {
        if ((data?.attributes?.Title).replace(/\s+/g, "") == queryData) {
          return setTutorialData(data.attributes);
        }
      });
    }
  }, [tutorialsListData, queryData]);

  // fetch on this page data
  const sidebarData = [];
  if (tutorialData?.default_tutorial) {
    const regex = /# ([^\n]+)/g;
    let match;
    while (
      (match = regex.exec(
        tutorialData?.default_tutorial?.data?.attributes?.Content
      )) !== null
    ) {
      sidebarData.push(match[1]);
    }
  }

  // page helpful array
  const pageHelpfulData = [
    {
      id: 1,
      value: "Issue with refund",
    },
    {
      id: 2,
      value: "Issue with activation (delay in KYC, follow-ups)",
    },
    {
      id: 3,
      value: "Issue with settlement",
    },
    {
      id: 4,
      value: "Issue with international payments",
    },
    {
      id: 5,
      value: "Unable to find information",
    },
    {
      id: 6,
      value: "Difficult to understand",
    },
    {
      id: 7,
      value: "Other",
    },
  ];

  return (
    <div>
      <div className="api-reference-page overflow-hidden">
        <div
          className="d-flex w-100 h-100 overflow-hidden"
          style={{ minHeight: 600 }}
        >
          <div style={{ width: 300 }} className="bg-primary pt-4">
            <div className="">
              {" "}
              <button
                className="w-100 btn bg-primary text-white text-start rounded-0 link-primary"
                onClick={() => router.back()}
              >
                {"<"} Back to home
              </button>
            </div>
            {/* <hr
              className=" bg-white mx-2 text-white m-0 border rounded"
              style={{ padding: 1 }}
            ></hr> */}
            <hr className="p-0 bg-white text-white m-0"></hr>
            <div>
              {" "}
              {tutorialsListData?.map((dropdown, index) => {
                console.log(dropdown, "dropdown data");
                return (
                  <div key={index}>
                    {/* <div
                      className={`bg-primary pointer  ${
                        selectedIndex == index ? "bg-white" : "bg-primary"
                      }`}
                    > */}
                    {/* <div
                        className={`w-100 cursor-pointer rounded-0 text-start d-flex justify-content-between align-items-center border-0 py-2 ps-2 ${
                          selectedIndex == index
                            ? "bg-white text-primary"
                            : "bg-primary text-white"
                        }`}
                        onClick={() => {
                          setTutorialData(dropdown?.attributes);
                          router.push(
                            `/tutorial-screen?data=${dropdown?.attributes?.Title.replace(
                              /\s+/g,
                              ""
                            )}`
                          );
                          setSelectedIndex(index);
                        }}
                      >
                        {dropdown?.attributes?.Title}
                      </div> */}
                    {/* </div> */}
                    {/* <hr className="p-0 bg-white text-white m-0"></hr> */}

                    <Accordion
                      defaultActiveKey="0"
                      className="border-0 bg-primary shadow-none rounded-0"
                    >
                      <Accordion.Item
                        eventKey="0"
                        className={`p-0 m-0 border-0 bg-primary rounded-0 ${
                          selectedIndex == index
                            ? "bg-white text-primary"
                            : "bg-primary text-white"
                        }`}
                      >
                        <Accordion.Header
                          className={`w-100 mb-0 cursor-pointer rounded-0 text-start d-flex justify-content-between align-items-center border-0 py-2 ps-2 ${
                            selectedIndex == index
                              ? "bg-white text-primary"
                              : "bg-primary text-white"
                          }`}
                          onClick={() => {
                            setTutorialData(dropdown?.attributes);
                            if (
                              dropdown?.attributes?.tutorials?.data?.length == 0
                            ) {
                              router.push(
                                `/tutorial-screen?data=${dropdown?.attributes?.Title.replace(
                                  /\s+/g,
                                  ""
                                )}`
                              );
                            }
                            setSelectedIndex(index);
                          }}
                        >
                          {dropdown?.attributes?.Title}
                        </Accordion.Header>
                        {dropdown?.attributes?.tutorials?.data?.length > 0 &&
                          dropdown?.attributes?.tutorials?.data?.map(
                            (tutorial, index) => {
                              return (
                                <Accordion.Body
                                  key={index}
                                  className={`text-white rounded-0`}
                                  onClick={() => {
                                    setTutorialData(tutorial?.attributes);
                                    router.push(
                                      `/tutorial-screen?data=${tutorial?.attributes?.Title.replace(
                                        /\s+/g,
                                        ""
                                      )}`
                                    );
                                  }}
                                >
                                  {tutorial?.attributes?.Title}
                                </Accordion.Body>
                              );
                            }
                          )}
                      </Accordion.Item>
                    </Accordion>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 w-100 p-4 mt-5 overflow-y-auto h-100">
            <div className="shadow p-5">
              <div className="text-start">
                {" "}
                <h2 className="text-start">{tutorialData?.Title}</h2>
                <div className="pb-3">
                  {" "}
                  <ReactMarkdown
                    components={{
                      p: ({ node, children }) => {
                        if (node.children[0].tagName == "img") {
                          const image = node.children[0];
                          return (
                            <div className="image d-flex justify-content-center w-100 my-5">
                              <img
                                src={image.properties.src}
                                alt={image.properties.alt}
                                width="600"
                                height="300"
                                className="w-100 h-100 d-flex justify-content-center"
                              />
                            </div>
                          );
                        }

                        // Return default child if it's not an image
                        return <div>{children}</div>;
                      },

                      a: ({ node, ...props }) => (
                        <a
                          className="fst-italic text-primary text-decoration-underline"
                          {...props}
                        />
                      ),
                      h1: ({ node, ...props }) => {
                        if (tutorialData?.Title) {
                          return (
                            <h2>
                              <a {...props} id={`#Make-Payouts`} />
                            </h2>
                          );
                        }
                        return <h2 {...props} />;
                      },
                    }}
                  >
                    {tutorialData?.default_tutorial
                      ? tutorialData?.default_tutorial?.data?.attributes
                          ?.Content
                      : tutorialData?.Content}
                  </ReactMarkdown>
                </div>
                {/* was this page helpful section */}
                {/* related tutorials */}
                <div>
                  {tutorialData?.tutorials?.data?.length > 0 && (
                    <div className="pb-3">
                      <hr className="text-secondary"></hr>
                      <label className="fs-5 fw-bold pt-3 pb-2">
                        Related Tutorials{" "}
                      </label>
                      {tutorialData?.tutorials?.data?.map((tutorial, index) => {
                        return (
                          <div className="p-1">
                            <a
                              href={`/tutorial-screen?data=${tutorial?.attributes?.Title.replace(
                                /\s+/g,
                                ""
                              )}`}
                              className="text-primary text-decoration-underline"
                            >
                              {tutorial?.attributes?.Title}
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <hr className="text-secondary"></hr>
                {isPageHelpful == null ? (
                  <div className="d-flex gap-3 align-items-center w-100">
                    <label className="fw-bold fs-6">
                      Was this page helpful?
                    </label>
                    <div className="d-flex gap-2">
                      <button
                        className="btn border-primary rounded-0 text-primary px-4"
                        style={{ backgroundColor: "#F3FFFF" }}
                        onClick={() => setIsPageHelpful(true)}
                      >
                        {" "}
                        Yes{" "}
                      </button>
                      <button
                        className="btn border-danger text-danger rounded-0 px-4"
                        style={{ backgroundColor: "#FFEAE9" }}
                        onClick={() => setIsPageHelpful(false)}
                      >
                        {" "}
                        No{" "}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <form>
                      {isPageHelpful == false ? (
                        <div>
                          <div>
                            <label className="fw-bold fs-6 pt-2">
                              Let us know what went wrong.
                            </label>
                          </div>
                          <div className="p-2 ps-0">
                            {pageHelpfulData?.map((data, index) => {
                              return (
                                <div
                                  className="d-flex align-items-center gap-2 p-1"
                                  key={index}
                                  onClick={() => {}}
                                >
                                  <input type="checkbox" />
                                  <label>{data?.value}</label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="py-3 d-flex flex-column gap-2">
                        <label className="fw-bold fs-6">
                          {isPageHelpful
                            ? "What was most useful?"
                            : "What can be improved?"}
                        </label>
                        <textarea className="w-50 p-2 border-0 bg-lighgray border-bottom border-secondary"></textarea>
                      </div>
                      <button
                        className="btn btn-primary px-4 mt-2 mb-2"
                        onClick={() => {
                          setIsPageHelpful(null);
                        }}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                )}
                <hr className="text-secondary"></hr>
              </div>
            </div>
          </div>
          <div style={{ width: 350 }}>
            <div className="p-3 pt-4">
              <h6 className="fw-bold">ON THIS PAGE</h6>
              {sidebarData?.map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedUrl(index);
                    }}
                    className="border-2 ps-2 py-1 border-start-primary fw-semibold"
                  >
                    <a
                      href={`#${data.replace(/\s+/g, "-")}`}
                      className={`${
                        selectedUrl == index ? "text-primary" : "text-Black"
                      }`}
                    >
                      {data}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialScreen;
