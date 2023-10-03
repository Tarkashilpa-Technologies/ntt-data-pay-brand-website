import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { tutorialDataApi, tutorialGroupDataApi } from "./services/services";
import ReactMarkdown from "react-markdown";
import Accordion from "react-bootstrap/Accordion";

export default function TutorialScreen() {
  const router = useRouter();
  const queryData = router.query?.data;
  const queryId = router.query?.id;
  const [tutorialsListData, setTutorialsListData] = useState([]);
  const [tutorialData, setTutorialData] = useState([]);
  const [showHelpfulData, setShowHelpfulData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedUrl, setSelectedUrl] = useState(0);
  const [isPageHelpful, setIsPageHelpful] = useState();
  const [pageHelpfulFalseData, setPageHelpfulFalseData] = useState([]);

  const tutorialListDataApiCall = () => {
    // setShowLoader(true);
    tutorialGroupDataApi()
      .then((res) => {
        setTutorialsListData(res?.data?.data);
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
        const title = data?.attributes?.tutorials?.data[0]?.attributes?.Title;
        if (title != undefined && title.replace(/\s+/g, "") == queryData) {
          return  data.attributes?.tutorials?.data[0]?.attributes != undefined ? setTutorialData(
            data.attributes?.tutorials?.data[0]?.attributes
          ) : router?.push('/404')
        } 
      
      });
    }
  }, [tutorialsListData]);

  // fetch on this page data
  const sidebarData = [];
  if (tutorialData) {
    const regex = /# ([^\n]+)/g;
    let match;
    while ((match = regex.exec(tutorialData?.Content)) !== null) {
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

  // submit page helpful form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const new_contact = {
      subject: isPageHelpful
        ? "What was the most helpful ?"
        : "What can be improved ?",
      article: tutorialData?.Title,
      message: event.target.message.value,
      data: pageHelpfulFalseData ? pageHelpfulFalseData : [],
    };

    await fetch("/api/formemail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_contact),
    }).then((res) => {
      console.log("Response received");
      console.log(res.json());
      if (res.status === 200) {
      }
    });
    alert("Thank you for submitting your feedback to us.");
    setShowHelpfulData(false);
  };

  const reasonSelectionFunction = (data) => {
    setPageHelpfulFalseData((prevArray) => [...prevArray, data]);
  };



  // const isBrowser = () => typeof window !== 'undefined'; 
  // useEffect(() => {
  //   if( isBrowser)
  //   {
  //     window.scroll({
  //       top: 200, 
  //       left: 0, 
  //       behavior: 'smooth'
  //     });
  //   }
  // },[])
 


  function scrollToTarget( text) {
    console.log(text,"text")
    text?.current?.scrollIntoView({ behavior: 'smooth', top:100 });
  }

  useEffect(() => {
    if(queryId){
    scrollToTarget(queryId);
    }
  }, []);

  return (
    <div className="mt-5">
      <div className="api-reference-page overflow-hidden">
        <div
          className="d-flex flex-column w-100 h-100 overflow-hidden"
          style={{ minHeight: 600 }}
        >
          <div className="d-flex ">
          <div style={{ width: 300 }} className="bg-primary pt-4">
            <div className="p-2">
              {" "}
              <button
                className="w-100 btn bg-primary text-white text-start rounded-0 link-primary"
                onClick={() => router.push("/integration-guides-new")}
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
              <Accordion
                defaultActiveKey="0"
                className="border-0 bg-primary shadow-none rounded-0 p-0 m-0 hide-accordion-btn"
                flush
              >
                {tutorialsListData?.map((dropdown, index) => {
                  return (
                    <div key={index}>
                      {/* <hr className="p-0 bg-white text-white m-0"></hr> */}

                      <Accordion.Item
                        eventKey={index}
                        className={`p-0 m-0 border-0 bg-primary rounded-0 ${
                          queryData ==
                          dropdown?.attributes?.Title.replace(/\s+/g, "")
                            ? "bg-white text-primary"
                            : "bg-primary text-white"
                        }`}
                        onClick={() => {
                          setSelectedIndex(index);
                        }}
                      >
                        <Accordion.Header
                          className={`w-100 mb-0 cursor-pointer rounded-0 text-start d-flex justify-content-between align-items-center border-0 py-2 ps-2 ${
                            queryData ==
                            dropdown?.attributes?.Title.replace(/\s+/g, "")
                              ? "bg-white text-primary"
                              : "bg-primary text-white"
                          }`}
                          onClick={() => {
                            setTutorialData(
                              dropdown?.attributes?.tutorials?.data[0]
                                ?.attributes
                            );
                            if (
                              dropdown?.attributes?.tutorials?.data ==0
                            ) {
                              router.push(
                                dropdown?.attributes?.tutorials?.data?.length >
                                  0
                                  ? `/tutorial-screen?data=${dropdown?.attributes?.Title.replace(
                                      /\s+/g,
                                      ""
                                    )}&id=`
                                  : "/404"
                              ); 
                            }
                          }}
                        >
                          <div className="d-flex justify-content-between w-100">
                            <div>{dropdown?.attributes?.Title}</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" fill="#fff"/></svg></div>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className="m-0 p-0 py-2 ps-4 pb-3">
                        {dropdown?.attributes?.tutorials?.data?.length > 0 &&
                          dropdown?.attributes?.tutorials?.data?.map(
                            (tutorial, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`text-white rounded-start p-2 ${
                                    queryData ==
                                    tutorial?.attributes?.Title.replace(
                                      /\s+/g,
                                      ""
                                    )
                                      ? "bg-white text-primary"
                                      : "bg-primary text-white"
                                  }`}
                                  onClick={() => {
                                    setTutorialData(tutorial?.attributes);
                                    router.push(
                                      `/tutorial-screen?data=${tutorial?.attributes?.Title.replace(
                                        /\s+/g,
                                        ""
                                      )}&id=`
                                    );
                                  }}
                                >
                                  {tutorial?.attributes?.Title}
                                </div>
                              );
                            }
                          )}
                          </Accordion.Body>
                        <hr className="p-0 m-0"></hr>
                      </Accordion.Item>
                    </div>
                  );
                })}
              </Accordion>
            </div>
          </div>

          {/* middle section  */}
          <div className="flex-1 w-100 p-4 mt-5 h-100">
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
                            <h1 className="pt-3 d-flex align-items-center pointer">
                              <a
                                {...props}
                                id={`${node?.children[0]?.value.replace(
                                  /\s+/g,
                                  "-"
                                )}`}
                                ref={React.useRef(`${node?.children[0]?.value.replace(/\s+/g, "-")}`)}
                                href={`/tutorial-screen?data=${queryData.replace(/\s+/g, "")}&id=#${node?.children[0]?.value.replace(/\s+/g, "-")}`}
                                target="_self"
                                className="pe-2"
                              />
                              <div className="show-link-icon">
                               <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="styled__StyledHeadingIcon-sc-c6l8fk-2 kVlJqt text-primary"><path d="M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z" fill="#132644"></path><path d="M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z" fill="#132644"></path></svg>
                              </div>
                            </h1>
                          );
                        }
                        return <h1 {...props} />;
                      },
                      h2: ({ node, ...props }) => {
                        if (tutorialData?.Title) {
                         
                          return (
                            <h2 className="pt-3 d-flex align-items-center pointer">
                              <a
                                {...props}
                                id={`${node?.children[0]?.value.replace(
                                  /\s+/g,
                                  "-"
                                )}`}
                                ref={React.useRef(`${node?.children[0]?.value.replace(/\s+/g, "-")}`)}
                                href={`/tutorial-screen?data=${queryData.replace(/\s+/g, "")}&id=#${node?.children[0]?.value.replace(/\s+/g, "-")}`}
                                target="_self"
                                className="pe-2"
                              />
                              <div className="show-link-icon">
                               <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="styled__StyledHeadingIcon-sc-c6l8fk-2 kVlJqt text-primary"><path d="M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z" fill="#132644"></path><path d="M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z" fill="#132644"></path></svg>
                              </div>
                            </h2>
                          );
                        }
                        return <h2 {...props} />;
                      },
                      h3: ({ node, ...props }) => {
                        if (tutorialData?.Title) {
                         
                          return (
                            <h3 className="pt-3 d-flex align-items-center pointer">
                              <a
                                {...props}
                                id={`${node?.children[0]?.value.replace(
                                  /\s+/g,
                                  "-"
                                )}`}
                                ref={React.useRef(`${node?.children[0]?.value.replace(/\s+/g, "-")}`)}
                                href={`/tutorial-screen?data=${queryData.replace(/\s+/g, "")}&id=#${node?.children[0]?.value.replace(/\s+/g, "-")}`}
                                target="_self"
                                className="pe-2"
                              />
                              <div className="show-link-icon">
                               <svg width="20" height="20" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" className="styled__StyledHeadingIcon-sc-c6l8fk-2 kVlJqt text-primary"><path d="M21.1863 2.82377C18.8719 0.509364 15.1296 0.476845 12.7753 2.75068L12.765 2.7608L11.045 4.4708C10.6534 4.86019 10.6515 5.49335 11.0409 5.88501C11.4303 6.27667 12.0634 6.27852 12.4551 5.88913L14.1697 4.18451C15.7395 2.67341 18.2307 2.69666 19.772 4.23798C21.313 5.77898 21.3366 8.26948 19.8265 9.83934L16.833 12.8329C16.0124 13.6537 14.8758 14.0778 13.7181 13.9949C12.5605 13.9119 11.496 13.3303 10.8008 12.401C10.47 11.9587 9.84333 11.8684 9.40108 12.1992C8.95883 12.53 8.86849 13.1567 9.1993 13.5989C10.242 14.993 11.8388 15.8654 13.5753 15.9897C15.3117 16.1141 17.0165 15.4782 18.2473 14.2469L21.2472 11.2471L21.2593 11.2347C23.5332 8.8804 23.5007 5.13817 21.1863 2.82377Z" fill="#132644"></path><path d="M10.4247 8.01016C8.68837 7.8858 6.9836 8.52171 5.75285 9.75283L2.75285 12.7528L2.74067 12.7652C0.466835 15.1195 0.499354 18.8617 2.81376 21.1761C5.12816 23.4905 8.8704 23.5231 11.2247 21.2492L11.2371 21.237L12.9471 19.527C13.3376 19.1365 13.3376 18.5034 12.9471 18.1128C12.5565 17.7223 11.9234 17.7223 11.5329 18.1128L9.82933 19.8164C8.25947 21.3265 5.76897 21.3029 4.22797 19.7619C2.68697 18.2209 2.66341 15.7304 4.17354 14.1606L7.16719 11.1669C7.9877 10.3461 9.12425 9.92214 10.2819 10.005C11.4395 10.088 12.504 10.6696 13.1992 11.5989C13.53 12.0412 14.1567 12.1315 14.5989 11.8007C15.0412 11.4699 15.1315 10.8432 14.8007 10.401C13.758 9.00693 12.1612 8.13452 10.4247 8.01016Z" fill="#132644"></path></svg>
                              </div>
                            </h3>
                          );
                        }
                        return <h3 {...props} />;
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
                              )}&id=`}
                              
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
                {showHelpfulData &&
                  (isPageHelpful == null ? (
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
                      <form
                        onSubmit={(e) => {
                          handleSubmit(e);
                        }}
                      >
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
                                    id={data.value.replace(/\s+/g, "-")}
                                  >
                                    <input
                                      type="checkbox"
                                      onClick={(e) => {
                                        // e.preventDefault();
                                        reasonSelectionFunction(data.value);
                                      }}
                                    />
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
                          <textarea
                            id="message"
                            required
                            className="w-50 p-2 border-0 bg-lighgray border-bottom border-secondary"
                          ></textarea>
                        </div>
                        <button className="btn btn-primary px-4 mt-2 mb-2">
                          Submit
                        </button>
                      </form>
                    </div>
                  ))}
                {showHelpfulData && <hr className="text-secondary"></hr>}
              </div>
            </div>
          </div>

          {/* last section */}
          <div style={{ width: 350 }} className="d-md-block d-none">
            <div className="p-3 pt-4">
              <h6 className="fw-bold">ON THIS PAGE</h6>
              {sidebarData?.map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      setSelectedUrl(index);
                    }}
                    className="border-2 ps-2 py-1 border-start-primary fw-semibold pointer"
                  >
                    <a
                      href={`#${data.replace(/\s+/g, "-")}`}
                      className={`${
                        selectedUrl == index ? "text-primary" : "text-Black"
                      }`}
                      onClick={() => scrollToTarget(`${data.replace(/\s+/g, "-")}`)}
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
    </div>
  );
}
