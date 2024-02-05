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
          Instant Payment Acceptance along with Third Party Validation for
          Broking Industry | NTT DATA Payment Services
        </title>
        <meta
          name="description"
          content="With NTT DATA Payments experience a safe and secured payment acceptance solution that lets you accept online and offline payments via 100+ options, enables Third party validation and allows real time integration with trading platforms."
        />
      </Head>

      <div className="bnr-home-wrp broker-bnr">
        <div className="container_1300">
          <div className="bnr-caption">
            <h2>
              Only online payment gateway that enables Third-Party Validation
              for your payments.
            </h2>
            <p>
              NTT DATA Payments enables faster, safer payment acceptance for
              brokers through 100+ digital payment modes, with high success
              rates and third-party validation.
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
              Brokers
            </li>
          </ol>
        </div>
      </nav>

      <div className="powerful-gateway retail-fold1">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            An efficient payment gateway for brokers
          </h2>
          <p className="common-desc text-center">
            Financial markets and broking industry are time sensitive. Accuracy
            and speed play a decisive role in every successful transaction;
            therefore, real-time transaction monitoring and updates are very
            critical. NTT DATA Payment Services offers tailor-made platforms for
            financial markets to ensure money is accepted instantly and limits
            are updated in real time, over the Internet, IVR, POS, UPI or
            through mobile application
          </p>
        </div>
      </div>

      <div className="data-payment-indus">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            NTT DATA Payments tailor-made solutions
            <br /> for financial markets
          </h2>

          <div className="data-payment-grid-main">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-smll blue-light-bg mb15">
                      <p className="ttle icn-ipg">
                        Net
                        <br /> Banking
                      </p>
                      <p className="desc">
                        Zero downtime, express checkout, and secured. NTT DATA
                        Payments Net Banking option allows you to accept
                        payments from your clients via 50+ banks.
                      </p>
                    </div>

                    <div className="dp-bx dp-box-smll grey-light-bg">
                      <p className="ttle icn-cc">
                        Credit and
                        <br /> Debit Cards
                      </p>
                      <p className="desc">
                        Allow payments via all major credit and debit cards,
                        backed with retry feature with NTT DATA Payment Services
                        online payment gateway.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-big blue-dark-bg post-bg">
                      <p className="ttle">Point of Sale Terminals</p>
                      <p className="desc">
                        Get a multi-terminal approach with NTT DATA Payment
                        Services POS solutions and choose the POS terminal that
                        best fit your card payment acceptance needs and
                        integrates effortlessly with your billing system.
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
                            NTT DATA Payment Services UPI option facilitates
                            seamless, instant payment acceptance over a secured
                            platform via VPA.
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
                        Bharat
                        <br /> QR
                      </p>
                      <p className="desc">
                        Accept quick and hassle-free payments from your clients
                        via a simple scan with NTT DATA Payment Services Bharat
                        QR.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-smll blue-dark-bg">
                      <p className="ttle icn-pay-links">
                        Payment
                        <br /> Links
                      </p>
                      <p className="desc">
                        Send payment invoices to your customers along with
                        payment link for a seamless payment acceptance
                        experience.
                      </p>
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
            How NTT DATA Payments can elevate brokers payment acceptance
            experience.
          </h2>

          <div className="hdn-cvr">
            <div className="row">
              <div className="col-md-6 order-last">
                <div className="insta-lhs">
                  <img
                    src="/images/broker-rhs.svg"
                    alt=""
                    className="img-fluid"
                  />
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
                          Omni-channel support
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Only payment player to cater to both online and
                          offline payment modes with 100+ options like Debit and
                          Credit Card, Net banking, UPI, Bharat QR etc.
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
                          Email Invoicing
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Send payment link to your customers on their email
                          address and seek payments from them.
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
                          Best Success rates
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Dynamically route your payments to an active server to
                          ensure uninterrupted transaction flow and avoid any
                          payment stuck ups.
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
                          Third-party Validation
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          NTT DATA Payments does a third-party validation for
                          brokers, asset management companies and mutual funds
                          provider. It provides TPV over net banking, cards, and
                          UPI.
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
                          Mobile optimized payment page
                        </button>
                      </h2>
                      <div
                        id="collapsefive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfive"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Allow your customers to access the site through mobile
                          devices and make payments, in a user-friendly manner.
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
                          Integration with trading systems
                        </button>
                      </h2>
                      <div
                        id="collapsesix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingsix"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          NTT DATA Payment Services provides real-time
                          integration with the trading systems on online as well
                          as offline platforms.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingseven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseseven"
                          aria-expanded="false"
                          aria-controls="collapseseven"
                        >
                          Real-time reports
                        </button>
                      </h2>
                      <div
                        id="collapseseven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingseven"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          NTT DATA Payment Services merchant admin console
                          assists in monitoring transactions online, on
                          real-time basis
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
            <br /> the Broking Sector
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
              <img src="/images/zewrodah-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/angel-broking-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/samco-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/iifl-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/5paisa-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/icici-sec-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sbi-sec-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/rksv-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/nirmal-bang-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/religare-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/aditya-birla-logo.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/edelwise.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/jm-finance-logo.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="wch-wrp">
        <div className="container_1300 d-block">
          <div className="row">
            <div className="col-md-6">
              <div className="wch-lhs">
                <h2 className="common-ttle blue-clr">
                  The most versatile and secured payment player in the BFSI!
                </h2>
                <Link href="/sign-up">
                  <a className="btn_style1">Sign Up Now</a>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wch-rhs text-end">
                <img
                  src="/images/broker-btm-pic.svg"
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
