import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";
//import styles from "../styles/Home.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
//import {Tabs, Tab, Nav} from "bootstrap";

export default function product1() {
  return (
    <div className="product-payment pd-lr-15">
      <Head>
        <title>
          Secure payment Solution for Internet, DTH and Cable TV providers in
          India | NTT Data Payments
        </title>
        <meta
          name="description"
          content="NTT DATA Payments offers a secure payment solution that is perfect for the Cable TV, DTH and Internet industry. Our platform is reliable, easy to use, and equipped with multiple payment options, making it the perfect choice for businesses looking to streamline their payment processing. Contact us to learn more!"
        />
      </Head>

      <div className="bnr-home-wrp dth-bnr">
        <div className="container_1300">
          <div className="bnr-caption">
            <h2>
              DTH, Cable TV and Internet payments and recharges, now with a
              click!
            </h2>
            <p>
              NTT DATA Payments allows you to accept digital payments at your
              customer’s convenience!
            </p>
            <Link href="/sign-up">
              <a href="" className="btn_style1">
                Sign up
              </a>
            </Link>
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
            <li className="breadcrumb-item">
              <a href="#">Industries</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              DTH and Cable TV
            </li>
          </ol>
        </div>
      </nav>

      <div className="powerful-gateway retail-fold1">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            A comprehensive montage of digital solutions, custom curated to make
            payment acceptance swift and convenient.
          </h2>
          <p className="common-desc text-center">
            Harness the growth in demand and consumption of content to empower
            your business with a more streamlined, digital payments platform for
            Cable TV, DTH and Internet Service Providers. With NTT DATA
            Payments, the simplicity of accepting digital payments from your
            customers is as convenient as a simple click!
          </p>
        </div>
      </div>

      <div className="data-payment-indus">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            Make subscription payments effortless with NTT DATA Payments
            tailored digital solutions.{" "}
          </h2>

          <div className="insta-tabs-cvr">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
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
                  Cable TV and DTH
                </button>
              </li>
              <li className="nav-item" role="presentation">
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
                  Internet Service Providers
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
                <h2 className="common-ttle text-center light-blue-clr">
                  Cable TV and DTH
                </h2>
                <p className="common-desc text-center">
                  Elevate your recurring payments acceptance experience with
                  email invoice,
                  <br /> Standing Instruction, and all major payment options
                  with NTT DATA Payments.
                </p>

                <div className="data-payment-grid-main">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-light-bg mb15">
                            <p className="ttle icn-ipg">
                              Internet Payment Gateway
                            </p>
                            <p className="desc">
                              Process transactions with more than 50 banks and
                              100+ digital payment options spanning across all
                              major Credit Cards, Debit Cards, IMPS, Net
                              Banking, letting your customers pay you at any
                              point of time.
                            </p>
                          </div>

                          <div className="dp-bx dp-box-smll grey-light-bg">
                            <p className="ttle icn-emi">
                              Email
                              <br /> Invoicing
                            </p>
                            <p className="desc">
                              Generate and send electronic invoices to your
                              customers over e-mail, requesting or reminding
                              them to renew their subscription with you.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-big blue-dark-bg post-bg">
                            <p className="ttle">mPOS</p>
                            <p className="desc">
                              Accept all credit and debit card payments from
                              your customers at their doorstep with NTT DATA
                              Payments’ versatile mPOS.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row g-0">
                        <div className="col-md-12">
                          <div className="dp-bx dp-box-smll grey-light-bg mb15">
                            <div className="row g-0">
                              <div className="col-md-12">
                                <p className="ttle">UPI</p>
                              </div>
                              <div className="col-md-6">
                                <p className="desc">
                                  Accept contactless payments from your
                                  customers over a secured VPA with NTT DATA
                                  Payments’ UPI option.
                                </p>
                              </div>
                              <div className="col-md-6">
                                <img
                                  src="/images/upi-1.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-light-bg">
                            <p className="ttle icn-b-qr">
                              Bharat QR
                              <br /> Scan & Pay
                            </p>
                            <p className="desc">
                              Generate and share a QR code with your customers
                              to initiate hassle-free payment acceptance.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-dark-bg">
                            <p className="ttle icn-bnpl">
                              Standing Instructions
                            </p>
                            <p className="desc">
                              NTT DATA Payments’ Standing Instructions allow
                              auto debiting your subscriber’s card with a
                              certain amount for recurring payments.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
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
                <h2 className="common-ttle text-center light-blue-clr">
                  Internet Service Providers
                </h2>
                <p className="common-desc text-center">
                  Digitize your subscription fee collection process with 100+
                  digital payment options,
                  <br /> instant settlement, and payment links as reminders!
                </p>

                <div className="data-payment-grid-main">
                  <div className="row g-0">
                    <div className="col-md-6">
                      <div className="row g-0">
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-light-bg mb15">
                            <p className="ttle icn-ipg">
                              Payment
                              <br /> Links
                            </p>
                            <p className="desc">
                              Send payment links over SMS, WhatsApp and e-mail
                              and accept instant payments from your customers
                            </p>
                          </div>

                          <div className="dp-bx dp-box-smll grey-light-bg">
                            <p className="ttle icn-emi">
                              Internet Payment Gateway
                            </p>
                            <p className="desc">
                              Accept payments through myriad payment options
                              including IMPS, Credit and Debit Cards, Net
                              Banking, over a safe platform, from your
                              customers.
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-big blue-dark-bg post-bg">
                            <p className="ttle">Point of Sale Payments</p>
                            <p className="desc">
                              Make card payment collection handy with NTT DATA
                              Payments mPOS device which allows you to accept
                              all major debit and credit cards at your
                              customer’s doorstep.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="row g-0">
                        <div className="col-md-12">
                          <div className="dp-bx dp-box-smll grey-light-bg mb15">
                            <div className="row g-0">
                              <div className="col-md-12">
                                <p className="ttle">UPI</p>
                              </div>
                              <div className="col-md-6">
                                <p className="desc">
                                  Accept one-click payments from your customers
                                  via a unique VPA, eliminating entirely the
                                  dreary task of providing bank details.
                                </p>
                              </div>
                              <div className="col-md-6">
                                <img
                                  src="/images/upi-1.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-light-bg">
                            <p className="ttle icn-b-qr">
                              Bharat QR
                              <br /> Scan & Pay
                            </p>
                            <p className="desc">
                              Accept payments with a simple scan from your
                              customers through NTT DATA Payments Bharat QR Scan
                              and Pay.{" "}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="dp-bx dp-box-smll blue-dark-bg">
                            <p className="ttle icn-bnpl">
                              Standing Instructions
                            </p>
                            <p className="desc">
                              Automatically debit a fixed amount from your
                              customers’ credit cards, periodically to renew
                              their subscription towards uninterrupted services.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hdn-wrp">
        <div className="container_1300 d-block">
          <h2 className="common-ttle white-clr text-center">
            Get customised solutions for your <br />
            DTH and Internet service’s digital payment needs!
          </h2>

          <p className="common-desc text-center white-clr">
            Begin your journey towards a world-class payment acceptance
            experience backed with <br />
            comprehensive analytical tools to monitor and manage your earnings
            with NTT DATA Payments.
          </p>

          <div className="hdn-cvr">
            <div className="row">
              <div className="col-md-6 order-last">
                <div className="insta-lhs">
                  <img src="/images/dth-rhs.svg" alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 order-first">
                <div className="insta-rhs">
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
                          Hassle free subscription fee collection via 100+
                          payment options
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Digitize your subscription fee collection process and
                          accept online payments with over 100 digital payment
                          options designed to escalate your business’ growth.
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
                          Real-time monitoring of payments
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Tracking incoming and pending payments with a powerful
                          integrated dashboard could help you easily raise
                          invoices and keep a record of all the payments you’ve
                          received.
                        </div>
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
                          Payment Reminders to your customers
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Remind your customers to renew their subscription with
                          you by sending them a payment link on their email, SMS
                          or over WhatsApp and allow them to pay you with a
                          simple click.
                        </div>
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
                          Automate Payment Acceptance
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Links and Standing Instructions digitize the process
                          so that you can collect every month’s payment, in a
                          jiffy.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingfive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsefive"
                          aria-expanded="false"
                          aria-controls="collapsefive"
                        >
                          Security and Safety
                        </button>
                      </h2>
                      <div
                        id="collapsefive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfive"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Our bulletproof online security is backed with PCI-DSS
                          3.2V compliance and is 256-bit SSL encryption ensuring
                          safer transactions.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingsix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapsesix"
                          aria-expanded="false"
                          aria-controls="collapsesix"
                        >
                          Intensive Support
                        </button>
                      </h2>
                      <div
                        id="collapsesix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingsix"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Around the clock customer service and our dedicated
                          relationship managers are always at your disposal.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="okc-wrp">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            Our key clients from
            <br /> the DTH and Cable TV industry
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={"auto"}
            freeMode={true}
            centeredSlides={false}
            allowTouchMove={false}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // when window width is >= 640px
              0: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              640: {
                spaceBetween: 0,
                slidesPerView: 3,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 6,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <img src="/images/sky-net-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/zee-comm-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/swift-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/signum-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/net-4-u-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/i-connect-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sun-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bbnl-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/dna-logo.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="wch-wrp">
        <div className="container_1300 d-block">
          <div className="row">
            <div className="col-md-7">
              <div className="wch-lhs pt-0">
                <h2 className="common-ttle blue-clr">
                  Provide your customers with a secure payment solution, curated
                  to fit payment acceptance needs of Cable TV, DTH and Internet
                  Service Providers.
                </h2>
                <Link href="/sign-up">
                  <a className="btn_style1">Sign Up Now</a>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="wch-rhs text-end">
                <img
                  src="/images/dth-btm-pic.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
