import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { tutorialDataApi, tutorialGroupDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";

const TutorialScreen = () => {
  const router = useRouter();
  const queryData = router.query?.data;
  const [tutorialsListData, setTutorialsListData] = useState([]);
  const [tutorialData, setTutorialData] = useState([]);
  const [headerData, setHeaderData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState(0);

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

    console.log(sidebarData);
  }

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
                return (
                  <div key={index}>
                    <div
                      className={`bg-primary pointer  ${
                        selectedIndex == index ? "bg-white" : "bg-primary"
                      }`}
                    >
                      <div
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
                      </div>
                    </div>
                    <hr className="p-0 bg-white text-white m-0"></hr>
                    {/* <Dropdown
                      size="full"
                      className="bg-primary border-bottom p-1"
                    >
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary border-0"
                        onClick={() => {
                          setTutorialData(dropdown?.attributes);
                        }}
                      >
                        {dropdown?.attributes?.Title}
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
          <div className="flex-1 w-100 p-3 pt-4 overflow-y-auto h-100">
            <div className="shadow p-4">
              <div className="text-start">
                {" "}
                <h2 className="text-start">{tutorialData?.Title}</h2>
                <div>
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
                        return <p>{children}</p>;
                      },
                      p: ({ node, ...props }) => (
                        <p className="text-secondary" {...props} />
                      ),
                      h1: "h2",
                      a: ({ node, ...props }) => (
                        <a
                          className="fst-italic text-primary text-decoration-underline"
                          {...props}
                        />
                      ),
                      h2: ({ node, ...props }) => (
                        <h2>
                          <a
                            target="_self"
                            href={`/tutorial-screen?data=${tutorialData?.Title.replace(
                              /\s+/g,
                              ""
                            )}#${props.title}`}
                            {...props}
                            id={`#${props.title}`}
                          />
                        </h2>
                      ),
                    }}
                  >
                    {tutorialData?.default_tutorial
                      ? tutorialData?.default_tutorial?.data?.attributes
                          ?.Content
                      : tutorialData?.Content}
                  </ReactMarkdown>
                </div>
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
