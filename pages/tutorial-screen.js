import { useRouter } from "next/router";
import React from "react";
import { Dropdown } from "react-bootstrap";

const TutorialScreen = () => {
  const router = useRouter();
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
  return (
    <div>
      <div className="powerful-gateway ">
        <div className="d-flex w-100 h-100" style={{ minHeight: 600 }}>
          <div style={{ width: 250 }} className="bg-primary pt-3 ">
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
              {dropdownData?.map((dropdown, index) => {
                return (
                  <div key={index}>
                    <Dropdown size="full" className="bg-primary">
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
                    </Dropdown>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 w-100 p-3 pt-4">
            <div className="shadow p-4">
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
          <div style={{ width: 350, backgroundColor: "lightgray" }}>
            <div className="p-3 pt-4">
              <h6>ON THIS PAGE</h6>
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
