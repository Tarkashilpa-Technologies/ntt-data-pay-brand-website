import { Router } from "next/router";
import React from "react";

const IntegrationGuides = () => {
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
      <div className="powerful-gateway ">
        <div className="pb-4">
          <div className="container_1300 d-block " style={{ minHeight: 600 }}>
            <div className="p-5">
              <h1 className="text-center">Integrate Our Payment Solution</h1>
              <h3 className="text-center pt-3">
                Learn with our step by step tutorials how to integrate with our
                solutions
              </h3>
              <p className="pt-2">
                Our solutions could help you achieve your every business neeed.
                Choose your sed case below and we would help you get started
                with step by step tutorial for the same
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationGuides;
