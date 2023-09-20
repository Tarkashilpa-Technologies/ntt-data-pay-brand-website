import React from "react";

const ApiReferences = () => {
  const tutorialsData = [
    {
      title: "Accept Payments",
      desc: "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Generate invoice",
      desc: "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc: "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
    {
      title: "Accept Payments",
      desc: "Learn how to integrate our payment gateway with your website or mobile app checkout flow",
    },
  ];
  return (
    <div>
      <div className="powerful-gateway " style={{ minHeight: 600 }}>
        <div className="pb-4">
          <div className="container_1300 d-block ">
            <div className="p-5">
              <h1 className="text-center">Learn about our API</h1>
              <h3 className="text-center pt-3">
                Learn with our API endpoints, request, params and response
              </h3>
              <p className="pt-2">
                Our APIs are designed to integrate with your solutions and
                systems with easy and provide highest degree of flexibility
              </p>
            </div>

            <div className="pb-3 ">
              <div className="d-flex gap-3 align-items-center justify-content-center">
                {tutorialsData?.map((tutorial, index) => {
                  return (
                    <div
                      className="card p-3 col-lg-3 col-md-6 col-12 border-0 shadow"
                      key={index}
                    >
                      <div>
                        <h4 className="text-center">{tutorial?.title}</h4>
                        <p>{tutorial?.desc}</p>
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
                  );
                })}
              </div>
              <div className="mt-4">
                <h3 className="text-center pt-3">
                  If you prefer exploring API while trying it out, visit our API
                  Explorer
                </h3>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <a
                  className="btn btn_style1 p-2 px-4"
                  href={"/tutorial-screen"}
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
