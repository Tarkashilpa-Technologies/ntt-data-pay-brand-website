import React, { useEffect, useState } from "react";
import { apisDataApi } from "./services/services";
import Link from "next/link";

const ApiReferences = () => {
  const [apisData, setApisData] = useState([]);
  const tutorialsData = [
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
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc:
        "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
  ];

  const apisDataApiCall = () => {
    // setShowLoader(true);

    console.log("api is getting call");
    apisDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        console.log(res?.data, "res?.data");
        setApisData(res?.data?.data);
        // setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        // setShowLoader(false);
      });
  };

  useEffect(() => {
    apisDataApiCall();
  }, []);

  console.log(apisData?.length, "apisData");
  return (
    <div>
      <div className="powerful-gateway " style={{ minHeight: 600 }}>
        <div className="pb-4">
          <div className="container_1300 d-block ">
            <div className="p-5 pb-4">
              <h1 className="text-center mb-0">Learn about our API</h1>
              <h3 className="text-center pt-3 text-primary">
                Learn with our API endpoints, request, params and response
              </h3>
              <p className="pt-2 text-center">
                Our APIs are designed to integrate with your solutions and
                systems with easy and provide highest degree of flexibility
              </p>
            </div>

            <div className="pb-3">
              <div className="row row-gap-2 col-gap-1 align-items-center justify-content-center">
                {apisData?.length > 0 &&
                  apisData?.map((api, index) => {
                    return (
                      <div
                        className="card p-4 col-lg-3  m-2 col-md-4 col-sm-6 col-12 border-0 shadow"
                        key={index}
                      >
                        <div
                          className="d-flex justify-content-between flex-column h-100"
                          style={{ minHeight: 220 }}
                        >
                          <div>
                            <h4 className="text-center">
                              {api?.attributes?.Title}
                            </h4>
                            <p className="numberOfLinesThree">
                              {api?.attributes?.Description
                                ? api?.attributes?.Description
                                : "No Description Available"}
                            </p>
                          </div>
                          <div className="d-flex gap-3 align-items-center justify-content-end">
                            <a className="btn btn_style1 p-2 px-4">
                              <Link
                                href={{
                                  pathname: "/api-reference-screen",
                                  query: {
                                    data: api?.attributes?.Defination,
                                  },
                                }}
                              >
                                Explore
                              </Link>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="pt-4 mt-3">
                <h3 className="text-center">
                  If you prefer exploring API while trying it out, visit our API
                  Explorer
                </h3>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4 mb-3">
                <a
                  className="btn btn_style1 p-3 px-5"
                  href="/try-it-out-api-screen"
                >
                  API Explorer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiReferences;
