import React, { useEffect, useState } from "react";
import { apisDataApi } from "../../services/services";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Loader from "../../Components/Loader";
import HeaderTwo from "../../Components/HeaderTwo";
import Footer from "../../Components/Footer";

const ApiReferences = () => {
  const [apisData, setApisData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const apisDataApiCall = () => {
    setShowLoader(true);
    apisDataApi()
      .then((res) => {
        // setPageNumber(pageNo ? pageNo : pageNumber);
        if (res && res.data && res.data.data) {
          setApisData(res?.data?.data);
          setErrorMessage(null);
        } else {
          setErrorMessage("Failed to load! Something went wrong...");
        }
        setShowLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        setShowLoader(false);
        setErrorMessage("Failed to load! Something went wrong...");
      });
  };

  useEffect(() => {
    apisDataApiCall();
  }, []);

  const [fullHeight, setFullHeight] = useState(
    typeof window !== "undefined" && window.innerHeight,
  );

  return (
    <div
      style={{ maxHeight: fullHeight - 100 }}
      className="overflow-hidden w-100 api-page-background d-flex justify-content-center"
    >
      <div className="powerful-gateway overflow-y-scroll w-100 developer-pages-list-top-space">
        <div className="pb-4">
          <div className="container_1300 d-block ">
            <div className="p-5 pb-4">
              <h1 className="text-center mb-0 title-font">
                Learn about our API
              </h1>
              <h3 className="text-center pt-3 text-primary">
                Learn with our API endpoints, request, params and response
              </h3>
              <p className="pt-2 text-center">
                Our APIs are designed to integrate with your solutions and
                systems with easy and provide highest degree of flexibility
              </p>
            </div>

            <div className="pb-3">
              {apisData?.length > 0 ? (
                <div className="d-flex gap-2 flex-wrap align-items-center justify-content-center h-100 ">
                  {apisData?.length > 0 &&
                    apisData?.map((api, index) => {
                      return (
                        <div
                          className="card p-4 m-2 col-lg-3 col-md-4 col-sm-6 col-12 border-0 shadow h-100"
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
                            </div>
                            <p className="numberOfLinesThree text-center">
                              <ReactMarkdown>
                                {api?.attributes?.Description}
                              </ReactMarkdown>
                            </p>
                            <div className="d-flex gap-3 align-items-center justify-content-center">
                              <Link
                                href={
                                  api?.attributes?.Title != undefined
                                    ? {
                                        pathname: `/Api-References/${api?.attributes?.Title.replace(
                                          /\s+/g,
                                          "-"
                                        )}`,
                                      }
                                    : { pathname: "/404" }
                                }
                              >
                                <a className="btn btn_style1 p-2 px-4">
                                  Explore
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ) : (
                <>
                  {showLoader ? <Loader show={true} /> : null}
                  {errorMessage ? (
                    <div class="text-center text-danger">{errorMessage}</div>
                  ) : null}
                </>
              )}
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
        <Footer />
      </div>
    </div>
  );
};

export default ApiReferences;
