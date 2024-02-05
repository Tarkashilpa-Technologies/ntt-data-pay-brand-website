import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";
import { useState } from "react";
//import styles from "../styles/Home.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
//import {Tabs, Tab, Nav} from "bootstrap";

export default function Product1() {
  const [tid1, setTid1] = useState("");
  const [tid2, setTid2] = useState("");
  const [tid3, setTid3] = useState("");
  const [submitted1, setSubmitted1] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);
  const [submitted3, setSubmitted3] = useState(false);
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      tid1,
    };
    fetch("/api/tid1", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        setTid1("");
        document.getElementById("tid1").value = "";
        //  setSubmitted1(true)
        alert("TID details submitted successfully");
      }
    });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      tid2,
    };
    fetch("/api/tid2", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        setTid2("");
        document.getElementById("tid2").value = "";
        alert("TID details submitted successfully");
      }
    });
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      tid3,
    };
    fetch("/api/tid3", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        setTid3("");
        document.getElementById("tid3").value = "";
        alert("TID details submitted successfully");
      }
    });
  };

  return (
    <div className="product-payment pd-lr-15">
      <Head>
        <title>NTT DATA Support - NTT DATA Payment Services Help Centre</title>
        <meta
          name="description"
          content="NTT DATA Payment Services support team is here to assist your business growth. Get answers to all your queries related to NTT DATA Payment Services."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "1.What is Payment Gateway, and how does NTT DATA Payments’ Gateway integrate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Payment Gateway is your doorway to accept digital payments for online sales. It is quick, effortless and requires minimal coding skills. NTT DATA Payments offers the best online payment gateway in India, as integrating the gateway is a piece of cake with our user-friendly APIs for more than 25 platforms for your website and mobile application."
        }
      },{
        "@type": "Question",
        "name": "2.How secure is the Payment Gateway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTT DATA Payments has the best payment gateway in India, whose bullet-proof security is backed by PCI DSS 3.2.1V compliance and is 256-bit encrypted, ensuring a safe and reliable transactional atmosphere."
        }
      },{
        "@type": "Question",
        "name": "3.Which payment methods do NTT DATA Payments provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Payment Gateway is integrated with 50+ banks and offers state-of-the-art, myriad payment options while keeping up and equipping you with the latest payment technologies. NTT DATA Payments has a smooth and quick online payment gateway in India, ensuring that you never miss out on any form of online payment from your customers."
        }
      },{
        "@type": "Question",
        "name": "4.What are the documents required to apply for the Payment Gateway?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Keeping in mind the regulatory guidelines and security protocols, NTT DATA Payments requires every merchant to submit a set of documents depending upon the nature of their business. This entails Proprietorship, Partnership, Private, Trust, Society, etc."
        }
      },{
        "@type": "Question",
        "name": "5.Which banned products & services does NTT DATA Payments not cater to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adhering to the policy, NTT DATA Payment cannot make its services available to merchants who directly or indirectly deal in certain products or services under restricted categories."
        }
      },{
        "@type": "Question",
        "name": "6.Can I accept International Payments with NTT DATA Payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Payment Gateway allows you to accept domestic and international online payments, subject to bank approvals."
        }
      },{
        "@type": "Question",
        "name": "7.Does NTT DATA Payments offer customised solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTT DATA Payments offer tailor-made solutions depending on the nature and size of your business. It also provides customised rates for higher value and volume of transactions."
        }
      },{
        "@type": "Question",
        "name": "8.What is the settlement cycle of the transactions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTT DATA Payments are one of the best payment aggregators in India whose settlement works on a T+0 or instant basis."
        }
      }]		
    }
    `,
          }}
        />
      </Head>

      <div className="bnr-home-wrp customer-care-bnr">
        <div className="container_1300">
          <div className="bnr-caption">
            <h3>We care for you!</h3>
            <p>
              NTT DATA Payment Services assures a sincere and transparent
              approach to all its customers. The policy aims at offering optimum
              support in case of any customer grievances or complaints.
            </p>

            <a
              href="https://nttdatapay.freshdesk.com/support/tickets/new"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_style1"
            >
              Raise a ticket
            </a>
          </div>
        </div>
      </div>

      <nav className="bread-wrp minus-top-40" aria-label="breadcrumb">
        <div className="container_1300 d-block">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Customer Care
            </li>
          </ol>
        </div>
      </nav>

      <div className="expectation-wrp">
        <div className="container_1300 d-block">
          <div className="expectation-inner">
            <h2 className="common-ttle">
              If we fall short of your expectations, let us know!
            </h2>

            <a
              href="https://nttdatapay.freshdesk.com/support/tickets/new"
              target="_blank"
              rel="noopener noreferrer"
              className="btn_style1"
            >
              Raise a ticket
            </a>
          </div>
        </div>
      </div>

      <div className="psp-wrp">
        <div className="container_1300 d-block">
          <div className="psp-top-cvr">
            <h2 className="common-ttle text-center white-clr">
              NTT DATA Payment Services policy <br />
              on Grievance redressal
            </h2>
            <p className="common-desc white-clr text-center">
              We understand that customer grievances can happen due to multiple
              reasons. It can be because of the gap between the promised service
              levels and the service levels offered and due to the genuine
              technical or communicative errors in the system. Users are
              informed about the channels to escalate their complaints, concerns
              and grievances within NTT DATA Payment Services and their rights
              if they are not satisfied with the resolution of their complaints.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="psp-lhs">
                <ul>
                  <li>
                    Concerns raised by users are dealt with courtesy in a timely
                    manner.
                  </li>
                  <li>
                    We constantly endeavour to give and uphold the best of the
                    services we can offer
                  </li>
                  <li>
                    We take care of all complaints efficiently and fairly.
                  </li>
                  <li>
                    All employees at NTT DATA Payment Services works in good
                    faith and without prejudice to the interests of the users
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="psp-rhs">
                <img src="/images/psp.svg" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="csd-wrp">
        <h2 className="common-ttle text-center">Customer Support Details</h2>

        <div className="csd-cntr-box">
          <div className="row">
            <img
              src="/images/csd.svg"
              alt=""
              className="img-fluid mt-md-4 pt-md-4"
            />
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <Link href="mailto:NDPS.helpdesk@nttdata.com">
                <a className="csd-anchor csd-anchor1">
                  NDPS.helpdesk@nttdata.com
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-12">
              <Link href="mailto:NDPS.poshelpdesk@nttdata.com">
                <a className="csd-anchor csd-anchor2">
                  NDPS.poshelpdesk@nttdata.com
                </a>
              </Link>
            </div>
          </div>

          <Link href="">
            <a className="csd-anchor csd-anchor3">1860 - 266 - 4959</a>
          </Link>
        </div>

        <div className="container_1300 d-block">
          <div className="cds-tabs-wrp ">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Request for POS Paper Roll
                </button>
              </li>
              <li className="nav-item mt-3 mt-md-0" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  EDC Machine related issue
                </button>
              </li>
              <li className="nav-item mt-3 mt-xl-0" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Require training
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="cds-tab-desc">
                      <p className="ttle">Enter your TID number</p>
                      <form action="" className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            onChange={(e) => {
                              setTid1(e.target.value);
                            }}
                            name="tid1"
                            className="form-control textbox"
                            required
                            id="tid1"
                          />
                        </div>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn_style1"
                            onClick={(e) => {
                              handleSubmit1(e);
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cds-rhs-pic text-center">
                      <img
                        src="/images/cs-pos-paper-roll.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="cds-tab-desc">
                      <p className="ttle">Enter your TID number</p>
                      <form action="" className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            onChange={(e) => {
                              setTid2(e.target.value);
                            }}
                            name="tid2"
                            className="form-control textbox"
                            required
                            id="tid2"
                          />
                        </div>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn_style1"
                            onClick={(e) => {
                              handleSubmit2(e);
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cds-rhs-pic text-center">
                      <img
                        src="/images/cs-edc-machine-related.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <div className="cds-tab-desc">
                      <p className="ttle">Enter your TID number</p>
                      <form action="" className="row">
                        <div className="col-md-8">
                          <input
                            type="text"
                            onChange={(e) => {
                              setTid3(e.target.value);
                            }}
                            name="tid3"
                            className="form-control textbox"
                            required
                            id="tid3"
                          />
                        </div>
                        <div className="col-md-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn_style1"
                            onClick={(e) => {
                              handleSubmit3(e);
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="cds-rhs-pic text-center">
                      <img
                        src="/images/cs-required-training.svg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gr-main-wr">
        <h2 className="common-ttle text-center white-clr">
          Grievance Redressal
        </h2>
        <div className="gr-inner-cvr">
          <div className="row">
            <div className="col-md-5">
              <div className="gr-lhs">
                <img src="/images/gr.svg" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="gr-rhs">
                <p className="human">
                  Sandeep Goyal <span>Customer Grievance Officer</span>
                </p>
                <Link href="mailto:NDPS.grievanceredressal@nttdata.com">
                  <a className="union">NDPS.grievanceredressal@nttdata.com</a>
                </Link>
                <p className="location">
                  4th Floor, Suraksha Ace Building,
                  <br />
                  CST No. 34/3, Village Chakala, <br />
                  Plot No. 2-A, Andheri Kurla Road, <br />
                  Andheri East, Mumbai, Maharashtra 400059
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cc-faq-wrp">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            Frequently Asked Questions
          </h2>

          <div className="cc-faq-in">
            <div className="accordion" id="accordionfaq">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    When is the customer&#39;s amount refunded?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">
                    Depending on the bank refund cycle (7 -15 Working Days)
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is the response time for resolving the user’s query?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">1 working day</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is the response time for Recharge Transaction Status?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">T + 1 Working Day</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingfour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsefour"
                    aria-expanded="false"
                    aria-controls="collapsefour"
                  >
                    When does the user receive the Refund Initiation Status?
                  </button>
                </h2>
                <div
                  id="collapsefour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingfour"
                  data-bs-parent="#accordionfaq"
                >
                  <div className="accordion-body">T + 1 Working Day</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
