import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { tutorialDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";

const TutorialScreen = () => {
  const router = useRouter();
  const queryData = router.query?.data;
  const [tutorialsListData, setTutorialsListData] = useState([]);
  const [tutorialData, setTutorialData] = useState([]);
  console.log(queryData, "queryData");
  const tutorialListDataApiCall = () => {
    // setShowLoader(true);

    console.log("api is getting call");
    tutorialDataApi()
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

  return (
    <div>
      <div className="api-reference-page overflow-hidden">
        <div
          className="d-flex w-100 h-100 overflow-hidden"
          style={{ minHeight: 600 }}
        >
          <div style={{ width: 300 }} className="bg-primary pt-3">
            <div className="border-bottom">
              {" "}
              <button
                className="w-100 btn bg-primary text-white text-start rounded-0"
                onClick={() => router.back()}
              >
                {"<"} Back to home
              </button>
            </div>
            <div>
              {" "}
              {tutorialsListData?.map((dropdown, index) => {
                console.log(dropdown, "dropdown data");
                return (
                  <div key={index}>
                    <div className="bg-primary border-bottom p-1">
                      <div
                        className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary border-0 py-2 text-white"
                        onClick={() => {
                          setTutorialData(dropdown?.attributes);
                        }}
                      >
                        {dropdown?.attributes?.Title}
                      </div>
                    </div>
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
                            <div className="image d-flex justify-content-center w-100 mt-5">
                              <Image
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
                    }}
                  >
                    {tutorialData?.Content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: 350 }}>
            <div className="p-3 pt-4">
              <h6 className="fw-bold">ON THIS PAGE</h6>
              <div className="border-start ps-2 border-primary fw-bold text-primary">
                Workflow
              </div>
              <div className="border-start ps-2 border-primary">Workflow</div>
              <div className="border-start ps-2 border-primary">Workflow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialScreen;
