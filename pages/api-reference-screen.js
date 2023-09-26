import { useRouter } from "next/router";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const ApiReferenceScreen = () => {
  const router = useRouter();
  const [selectedTitle, setSelectedTitle] = useState(0);
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

  const data = router.query.data;
  console.log(data, "router data");
  return (
    <div>
      <div className="api-reference-page">
        <div className="d-flex w-100 h-100" style={{ minHeight: 600 }}>
          <div style={{ width: 300 }} className="bg-primary pt-3 ">
            <div className="border-bottom">
              {" "}
              <button
                className="w-100 btn bg-primary text-white text-start rounded-0"
                onClick={() => router.back()}
              >
                Search
              </button>
            </div>
            <div>
              {" "}
              {dropdownData?.map((dropdown, index) => {
                return (
                  <div key={index}>
                    <div>
                      <button
                        className="w-100 rounded-0 text-start d-flex justify-content-between align-items-center bg-primary border-0 p-1 text-white"
                        onClick={() => {
                          setSelectedTitle(index);
                        }}
                      >
                        {dropdown?.title}
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
                <h6 className="text-start">
                  Web Checkout / Payl Hosted Checkout
                </h6>
                <h3>PayU Hosted Checkout</h3>
                <p>
                  Use PayU's pre-built pages for customers to enter their
                  payment information. This simpilfies the integration process
                  and saves time on designing pages. Customers will be
                  redirected to the PayU pages after adding items 10 their
                  shopping cart on your website. The payment information will be
                  submitted through an API. To get started with integration,
                  refer to Integrate with PayU Hosted Checkout.
                </p>
                <p className="font-weight-bold">Before you Begin</p>
                <p>
                  PayU strongly recommends you test your integration using the
                  test merchant Key or Salt. To create a test merchant account,
                  refer to Register for a Test Merchant Account. After you
                  create a test merchant account, you can access the test Key or
                  Salt as described in Generate Test Merchant Key and Salt.
                </p>
                <p className="font-weight-bold">Workflow</p>
                <p>
                  The following process diagram illustrates the integration
                  workflow. To get started with integration, refer to Integrate
                  with PayU Hosted Checkout.
                </p>
                <img src="/images/dev1.png" alt="" />
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
