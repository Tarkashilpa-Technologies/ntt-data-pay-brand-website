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
          Best payment Solutions for e-commerce and retail business| NTT Data
          Payments
        </title>
        <meta
          name="description"
          content="Get secured digital payment solutions for your retail chain store or e-commerce business with NTT DATA Payments. Our online and offline payment solutions can help you achieve your business goals and make secure payments to your customers."
        />
      </Head>

      <div className="bnr-home-wrp retail-bnr">
        <div className="container_1300">
          <div className="bnr-caption">
            <h2>A payment gateway trusted by all major retail brands!</h2>
            <p>
              An omni-channel payment solution that provides a delightful
              shopping experience to your customers!
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
              Retail
            </li>
          </ol>
        </div>
      </nav>

      <div className="powerful-gateway retail-fold1">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            Increase your profits with
            <br /> NTT DATA Payments!
          </h2>
          <p className="common-desc text-center">
            Retail or e-tail, every business needs a secure, stable, and safe
            digital payment system. With NTT DATA Payments, ensure robust
            payment solutions with 100+ payment modes, seamless checkout and
            zero downtime for a happy shopping experience.
          </p>
        </div>
      </div>

      <div className="data-payment-indus">
        <div className="container_1300 d-block">
          <h2 className="common-ttle text-center">
            Launch your retail business with NTT
            <br /> DATA Payments’ digital options
          </h2>

          <div className="data-payment-grid-main">
            <div className="row g-0">
              <div className="col-md-6">
                <div className="row g-0">
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-smll blue-light-bg mb15">
                      <p className="ttle icn-ipg">Internet Payment Gateway</p>
                      <p className="desc">
                        Instant checkouts, multiple payment options and
                        zero-downtime. NTT DATA Payments ensures your customers
                        a seamless checkout experience when they shop from your
                        website.
                      </p>
                    </div>

                    <div className="dp-bx dp-box-smll grey-light-bg">
                      <p className="ttle icn-emi">
                        EMI
                        <br /> Payments
                      </p>
                      <p className="desc">
                        Open doors to greater sales by allowing your customers
                        to indulge in purchase of higher-ticket items with NTT
                        DATA Payments’ multi-bank EMI.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-big blue-dark-bg post-bg">
                      <p className="ttle">Point of Sale Terminals</p>
                      <p className="desc">
                        With NTT DATA Payments’ multi-terminal approach- PSTN,
                        GPRS, Wi-Fi, Android and mPOS terminals, choose the POS
                        that best fits your business’ card acceptance needs and
                        integrates with your billing system.
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
                            With UPI, let your customers pay you through a
                            unique Virtual Payment Address, and instantly get
                            monies settled in your bank account.
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
                        Instant checkouts, multiple payment options and
                        zero-downtime. NTT DATA Payments ensures your customers
                        a seamless checkout experience when they shop from your
                        website.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="dp-bx dp-box-smll blue-dark-bg">
                      <p className="ttle icn-bnpl">BNPL</p>
                      <p className="desc">
                        Allow easy and instant loans to your customers for those
                        last-minute impulse shopping decisions with NTT DATA
                        Payments’ Buy Now Pay Later option.{" "}
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
            How NTT DATA Payments help retailers
            <br /> increase customer satisfaction
          </h2>

          <div className="hdn-cvr">
            <div className="row">
              <div className="col-md-6 order-last">
                <div className="insta-lhs">
                  <img
                    src="/images/hdn-retal-rhs.svg"
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
                          Instant checkouts
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Avoid cart abandonment due to multiple redirections
                          during the checkout process. NTT DATA Payments’ Insta
                          Pay enhances your customer’s user experience on your
                          website, thereby allowing repeat sales.
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
                          360 degrees payment support
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Nearly 265 payment options are there to aid businesses
                          to drive more sales like Payment Gateway, Card Swipe
                          Machine, IVR, UPI, BNPL, Payment Links, Bharat QR.
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
                          Retry
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          NTT DATA Payments’ retry option stores your customers
                          encrypted payment credentials allowing them to retry
                          the payment in event of a transaction failure or
                          time-out.
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
                          Real-time payment tracking
                        </button>
                      </h2>
                      <div
                        id="collapsefour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfour"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          To ensure that the merchants have a firm hold of the
                          payments and transactions that take place within their
                          business, merchants can track their payments on a
                          real-time basis with the help of the merchant console.
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
                          Settlement
                        </button>
                      </h2>
                      <div
                        id="collapsefive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingfive"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Get your earnings settled whenever you want. With NTT
                          DATA Payments, opt for instant, same day, or
                          customized settlement.
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
                          Analyse your income
                        </button>
                      </h2>
                      <div
                        id="collapsesix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingsix"
                        data-bs-parent="#accordionfaq"
                      >
                        <div className="accordion-body">
                          Track your settlements, monitor your payments, and
                          initiate refunds through a single robust dashboard.
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
            <br /> the retail industry
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
              <img src="/images/bnr-ccd-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-central-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-big-bazar-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-brand-factory-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-reliance-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-burger-king-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/bnr-pabtaloons-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/madura-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/ksbc-logo.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/himalayan-logo.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="wch-wrp">
        <div className="container_1300 d-block">
          <div className="row">
            <div className="col-md-7">
              <div className="wch-lhs">
                <h2 className="common-ttle blue-clr">
                  We can help you effectively manage the transactions between
                  you and your customers!
                </h2>
                <Link href="/sign-up">
                  <a className="btn_style1">Sign Up Now</a>
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="wch-rhs text-end">
                <img
                  src="/images/retail-money-transfer-pic.svg"
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
