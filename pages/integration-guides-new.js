"use client";
import React, { useEffect, useState } from "react";
import { tutorialDataApi } from "./services/services";

import MarkdownPreview from "@uiw/react-markdown-preview";

const IntegrationGuides = () => {
  const [tutorialsData, setTutorialsData] = useState([
    {
      title: "Accept Payments",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Generate invoice",
      desc: "Learn how to integrate our payment gateway with app checkout flow",
    },
    {
      title: "Accept Payments",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc: "Learn how to integrate our payment gateway with your",
    },
    {
      title: "Accept Payments",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Generate invoice",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc: "Learn how to integrate our payment gateway with your website ",
    },
  ]);

  const tutorialDataApiCall = () => {
    // setShowLoader(true);

    console.log("api is getting call");
    tutorialDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        console.log(res?.data, "res?.data");
        setTutorialsData(res?.data?.data);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    tutorialDataApiCall();
  }, []);

  // const DataConversion = (data) => {
  //   console.log(data, "data");
  //   const processedContent = remark().use(html).process(data);
  //   // console.log(processedContent, "processed content");
  //   const contentHtml = processedContent.toString();
  //   // console.log(contentHtml, "content html", processedContent);
  //   return contentHtml;
  // };

  return (
    <div>
      <div className="powerful-gateway ">
        <div className="pb-4">
          <div className="container_1300 d-block " style={{ minHeight: 600 }}>
            <div className="p-5 pb-4 w-100">
              <h1 className="text-center">Integrate Our Payment Solution</h1>
              <h3 className="text-center pt-3 text-primary">
                Learn with our step by step tutorials how to integrate with our
                solutions
              </h3>
              <p className="pt-2">
                Our solutions could help you achieve your every business neeed.
                Choose your sed case below and we would help you get started
                with step by step tutorial for the same
              </p>
            </div>

            <div className="pb-4 ">
              <div className="d-flex gap-5 flex-wrap align-items-center justify-content-center h-100 ">
                {tutorialsData &&
                  tutorialsData?.map((tutorial, index) => {
                    return (
                      <div
                        className="card p-4 col-md-3 col-sm-6 col-12 border-0 shadow h-100"
                        key={index}
                      >
                        <div
                          className="d-flex flex-column justify-content-between"
                          style={{ minHeight: 220 }}
                        >
                          <div>
                            <h4 className="text-center">
                              {tutorial?.attributes?.Title}
                            </h4>
                            <p className="">
                              {/* <MarkdownPreview
                                source={tutorial?.attributes?.Content}
                              /> */}
                              {tutorial?.attributes?.Content}
                            </p>
                          </div>
                          <div className="d-flex gap-3 align-items-center justify-content-end">
                            <a
                              className="btn btn_style1 p-2 px-4"
                              href={"/tutorial-screen"}
                            >
                              Explore
                            </a>
                          </div>
                        </div>
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
};

export default IntegrationGuides;
