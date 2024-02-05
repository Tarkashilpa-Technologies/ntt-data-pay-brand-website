import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
//import styles from "../styles/Home.module.scss";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
//import {Tabs, Tab, Nav} from "bootstrap";
import { Modal, Button } from "react-bootstrap";

import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "../utils/storage";
import {
  disableShouldErrorShow,
  enableShouldErrorShow,
  formatPhoneNumber,
  isPasswordValidate,
  onFormFeildsChange,
  validateField,
} from "../utils/formValidator";
import { EMAIL, PHONE, REQUIRED } from "../utils/messages";

export default function product1() {
  const [formData, setFormData] = useState();
  const [isShow, setIsShow] = React.useState(false);
  const [isShowMobileModal, setIsShowMobileModal] = React.useState(false);
  const [isShowEcomModal, setIsShowEcomModal] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(null);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    // Perform localStorage action
    setFormData({
      Firstname: {
        value: getLocalStorage("first_name"),
        error: "",
        check: [REQUIRED],
        shouldShowError: false,
      },
      Lastname: {
        value: getLocalStorage("last_name"),
        error: "",
        check: [REQUIRED],
        shouldShowError: false,
      },
      Email: {
        value: getLocalStorage("email"),
        error: "",
        check: [EMAIL, REQUIRED],
        shouldShowError: false,
      },
      MobilePhone: {
        value: getLocalStorage("Phone_no"),
        error: "",
        check: [PHONE, REQUIRED],
        shouldShowError: false,
      },
    });
  }, []);

  const WebsiteData = [
    {
      id: "ASPNET",
      name: "ASP.NET",
      url: "/images/asp.net.png",
      href: "/webkits/Website/ASP.NET FORWARD SLASH C SHARP.zip",
      width: 50,
    },
    {
      id: "CAKEPHP",
      name: "CAKE PHP",
      url: "/images/cake.png",
      href: "/webkits/Website/CAKE PHP.zip",
    },
    {
      id: "CODEIGNITER",
      name: "CODE IGNITER",
      url: "/images/codeigniter.png",
      href: "/webkits/Website/CODE IGNITER 3.zip",
    },
    {
      id: "COREPHP",
      name: "CORE PHP",
      url: "/images/php.png",
      href: "/webkits/Website/CORE PHP.zip",
      width: 50,
    },
    {
      id: "DJANGO",
      name: "DJANGO",
      url: "/images/django.png",
      href: "/webkits/Website/DJANGO.zip",
      width: 60,
    },
    {
      id: "ANGULARLARAVEL",
      name: "FRONTEND ANGULAR BACKEND LARAVEL",
      url: "/images/angular.png",
      href: "/webkits/Website/FRONTEND ANGULAR BACKEND LARAVEL.zip",
      width: 35,
    },
    {
      id: "JAVA",
      name: "JAVA",
      url: "/images/java.png",
      href: "/webkits/Website/JAVA.zip",
      width: 35,
    },
    {
      id: "LARAVEL",
      name: "LARAVEL",
      url: "/images/laravel.png",
      href: "/webkits/Website/LARAVEL.zip",
      width: 45,
    },
    {
      id: "NODEJS",
      name: "NODE JS",
      url: "/images/nodejs.png",
      href: "/webkits/Website/NODE JS.zip",
      width: 35,
    },
    {
      id: "PYTHON",
      name: "PYTHON 3",
      url: "/images/python.png",
      href: "/webkits/Website/PYTHON 3.zip",
      width: 40,
    },
    {
      id: "RUBY",
      name: "RUBY ON RAIL",
      url: "/images/whmcs.png",
      href: "/webkits/Website/RUBY ON RAIL.zip",
      width: 60,
    },
  ];

  const EcomData = [
    {
      id: "OPENCART",
      name: "OPENCART",
      url: "/images/opencart.png",
      href: "/webkits/E-Commerce/OPENCART 3.0.3.8.zip",
      width: true,
    },
    {
      id: "PRESTASHOP",
      name: "PRESTASHOP",
      url: "/images/presta.png",
      href: "/webkits/E-Commerce/PRESTASHOP 1.7.8.1.zip",
    },
    {
      id: "WORDPRESS",
      name: "WORDPRESS WOO COMMERCE",
      url: "/images/woo.png",
      href: "/webkits/E-Commerce/WORDPRESS WOO COMMERCE.zip",
      width: true,
    },
  ];

  const MobileData = [
    {
      id: "ANDROID",
      name: "ANDROID",
      url: "/images/android.png",
      href: "/webkits/Mobile App/ANDROID/NATIVE.zip",
    },
    {
      id: "REACTNATIVE",
      name: "REACT NATIVE",
      url: "/images/reactnative.png",
      href: "/webkits/Mobile App/ANDROID/REACT NATIVE.zip",
    },
    {
      id: "FLUTTER",
      name: "FLUTTER",
      url: "/images/flutter.png",
      href: "/webkits/Mobile App/FLUTTER/INAPP WEBVIEW.zip",
      href2: "/webkits/Mobile App/FLUTTER/WITH WEBVIEW.zip",
      text: "IN-APP WEBVIEW",
      text2: "WITH WEBVIEW",
    },
    {
      id: "IOS",
      name: "IOS",
      url: "/images/ios.png",
      href: "/webkits/Mobile App/IOS/NATIVE MULTI PRODUCT.zip",
      href2: "/webkits/Mobile App/IOS/NATIVE SINGLE PRODUCT.zip",
      text: "NATIVE MULTI PRODUCT",
      text2: "NATIVE SINGLE PRODUCT",
    },
  ];

  const handleDownloadKit = async (event, data) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();
    // Get data from the form.
    let new_contact = {
      first_name: formData.Firstname.value,
      last_name: formData.Lastname.value,
      mobile: formData.MobilePhone.value,
      email: formData.Email.value,
      products_required: "Integration Assistance",
      subject: data?.name + " Integration Kit Downloded",
      mail: "ndps.integrationgrp@nttdata.com",
    };

    let isValid = true;
    Object.keys(formData)?.forEach((key) => {
      enableShouldErrorShow({ target: { name: key } }, formData, setFormData);
      if (!validateField(key, formData, setFormData)) {
        isValid = false;
      }
    });

    if (isValid) {
      setLocalStorage("first_name", formData.Firstname.value);
      setLocalStorage("last_name", formData.Lastname.value);
      setLocalStorage("Phone_no", formData.MobilePhone.value);
      setLocalStorage("email", formData.Email.value);

      await fetch("/api/formemail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_contact),
      }).then((res) => {
        if (res.status === 200) {
          console.log("download the file");
          download(
            data?.href2
              ? selectedValue == data.text2
                ? data.href2
                : data?.href
              : data?.href,
          );
          setIsShow(false);
          setIsShowMobileModal(false);
          setIsShowEcomModal(false);
        }
      });
    }
    return false;
  };
  function download(url) {
    const URL = url;
    if (typeof window !== "undefined") {
      window.location.href = URL;
    }
  }

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  const handleSelectedOption = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    isBrowser && (
      <div className="product-payment pd-lr-15">
        <Head>
          <title>
            Best Online Payment Gateway in India | Online Payment Aggregators
            and Service provider in India
          </title>
          <meta
            name="description"
            content="Get Secure Online Payment Gateway for Your Business in India. Accept payments through Links, BNPL, UPI, BharatQR, EMI and 100+ Payment options, Simple payment gateway Integration API for 25+ platforms. Bank-Level Security, Merchant Dashboard, Best Success Rates, Servicing 6+ million merchants. Customized solutions to perfectly fit your business&#39; payment acceptance needs. "
          />
          <link
            rel="stylesheet"
            href="https://www.atomtech.in/uat/assets/css/fontawesome/css/all.css"
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

        <div className="bnr-home-wrp integration-kit-bnr">
          <div className="container_1300">
            <div className="bnr-caption">
              <h2>
                Payment Gateway Integration kits for Website, Mobile Apps and
                e-commerce for 25+ platforms!
              </h2>
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
                <a href="/developer-guide">Developers</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Integration Kits
              </li>
            </ol>
          </div>
        </nav>

        <div className="powerful-gateway ik-fold1">
          <div className="container_1300 d-block">
            <h2 className="common-ttle text-center">
              Seamless Payment Gateway Integration
            </h2>

            <div className="ig-input-bx">
              <input
                type="text"
                placeholder="Search docs for payments, API and more"
              />
            </div>
            <ul
              className="nav nav-pills mb-3 justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active btn1"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Website
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link btn2"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Mobile App
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link btn3"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  E-Commerce
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {/* Website section starts */}
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="spg-cvr">
                  <div className="row">
                    {WebsiteData?.map((data, index) => {
                      return (
                        <>
                          <div className="col-md-3 col-6 pointer" key={index}>
                            <p
                              onClick={() => {
                                setIsShow(true);
                                setModalOpen(data.id);
                              }}
                            >
                              <a className="spg-box">
                                <span>
                                  <img
                                    src={data.url}
                                    alt=""
                                    width={data.width ? data.width : 30}
                                    className="img-fluid"
                                  />
                                </span>
                                <p>{data?.name}</p>
                              </a>
                            </p>
                          </div>
                          {modalOpen == data.id && isShow && (
                            <Modal
                              show={isShow}
                              className={"modal-lg"}
                              backdrop="static"
                              centered
                              onHide={() => setIsShow(false)}
                            >
                              <Modal.Header closeButton className="p-4">
                                <Modal.Title>
                                  <h5
                                    className="modal-title fw-bold"
                                    id={data.id}
                                  >
                                    {data.name} INTEGRATION KIT
                                  </h5>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className="p-4">
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        autoFocus={true}
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Firstname?.error &&
                                          formData?.Firstname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Firstname"
                                        value={formData.Firstname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Firstname.error &&
                                        formData.Firstname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Firstname.error}
                                          </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Lastname?.error &&
                                          formData?.Lastname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Lastname"
                                        value={formData.Lastname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Lastname.error &&
                                        formData.Lastname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Lastname.error}
                                          </div>
                                        )}
                                    </div>
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Mobile
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.MobilePhone?.error &&
                                        formData?.MobilePhone?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="MobilePhone"
                                      value={formData.MobilePhone.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.MobilePhone.error &&
                                      formData.MobilePhone.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.MobilePhone.error}
                                        </div>
                                      )}
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.Email?.error &&
                                        formData?.Email?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="Email"
                                      value={formData.Email.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.Email.error &&
                                      formData.Email.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.Email.error}
                                        </div>
                                      )}
                                  </div>

                                  {/* <div className="col-md-12 mb-10">
                            <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                            </div> */}
                                  <div className="d-flex justify-content-end mt-3">
                                    {/* <a href={data.href} className='btn_style1'><button type="submit" className='btn p-0 text-white'> Download</button> </a>  */}
                                    <button
                                      type="submit"
                                      className="btn text-white btn_style1"
                                      onClick={(e) => {
                                        handleDownloadKit(e, data);
                                      }}
                                    >
                                      {" "}
                                      Download
                                    </button>
                                  </div>
                                </form>
                                <div
                                  className="thankyou-message"
                                  id="tymessage"
                                >
                                  Thank you for submitting details.
                                </div>
                              </Modal.Body>
                            </Modal>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Website section ends */}

              {/* Mobile App section starts */}
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="spg-cvr">
                  <div className="row">
                    {MobileData?.map((data, index) => {
                      return (
                        <>
                          <div className="col-md-3 col-6 pointer" key={index}>
                            <p
                              onClick={() => {
                                setIsShowMobileModal(true);
                                setModalOpen(data.id);
                              }}
                            >
                              <a className="spg-box">
                                <span>
                                  <img
                                    src={data.url}
                                    alt=""
                                    width={35}
                                    className="img-fluid"
                                  />
                                </span>
                                <p>{data?.name}</p>
                              </a>
                            </p>
                          </div>
                          {modalOpen == data.id && isShowMobileModal && (
                            <Modal
                              show={isShowMobileModal}
                              className={"modal-lg"}
                              backdrop="static"
                              centered
                              onHide={() => setIsShowMobileModal(false)}
                            >
                              <Modal.Header closeButton className="p-4">
                                <Modal.Title>
                                  <h5
                                    className="modal-title fw-bold"
                                    id={data.id}
                                  >
                                    {data.name} INTEGRATION KIT
                                  </h5>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className="p-4">
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        autoFocus={true}
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Firstname?.error &&
                                          formData?.Firstname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Firstname"
                                        value={formData.Firstname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Firstname.error &&
                                        formData.Firstname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Firstname.error}
                                          </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Lastname?.error &&
                                          formData?.Lastname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Lastname"
                                        value={formData.Lastname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Lastname.error &&
                                        formData.Lastname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Lastname.error}
                                          </div>
                                        )}
                                    </div>
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Mobile
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.MobilePhone?.error &&
                                        formData?.MobilePhone?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="MobilePhone"
                                      value={formData.MobilePhone.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.MobilePhone.error &&
                                      formData.MobilePhone.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.MobilePhone.error}
                                        </div>
                                      )}
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.Email?.error &&
                                        formData?.Email?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="Email"
                                      value={formData.Email.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.Email.error &&
                                      formData.Email.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.Email.error}
                                        </div>
                                      )}
                                  </div>
                                  {data?.href2 && (
                                    <div className="col-md-12 mb-10 mt-1">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        Which Kit to download ?{" "}
                                      </label>
                                      <select
                                        className="form-control"
                                        id="kits"
                                        onChange={handleSelectedOption}
                                      >
                                        <option value={data?.text}>
                                          {data?.text}
                                        </option>
                                        <option value={data?.text2}>
                                          {data?.text2}
                                        </option>
                                      </select>
                                    </div>
                                  )}
                                  <div className="d-flex justify-content-end mt-3">
                                    <button
                                      type="submit"
                                      className="btn text-white btn_style1"
                                      onClick={(e) => {
                                        handleDownloadKit(e, data);
                                      }}
                                    >
                                      {" "}
                                      Download
                                    </button>
                                  </div>
                                </form>
                                <div
                                  className="thankyou-message"
                                  id="tymessage"
                                >
                                  Thank you for submitting details.
                                </div>
                              </Modal.Body>
                            </Modal>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* Mobile App  section ends*/}

              {/* Ecom section starts */}
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="spg-cvr">
                  <div className="row justify-content-center">
                    {EcomData?.map((data, index) => {
                      return (
                        <>
                          <div className="col-md-3 col-6 pointer" key={index}>
                            <p
                              onClick={() => {
                                setIsShowEcomModal(true);
                                setModalOpen(data.id);
                              }}
                            >
                              <a className="spg-box">
                                <span>
                                  <img
                                    src={data.url}
                                    alt=""
                                    width={data.width ? 50 : 30}
                                    className="img-fluid"
                                  />
                                </span>
                                <p>{data?.name}</p>
                              </a>
                            </p>
                          </div>
                          {modalOpen == data.id && isShowEcomModal && (
                            <Modal
                              show={isShowEcomModal}
                              className={"modal-lg"}
                              backdrop="static"
                              centered
                              onHide={() => setIsShowEcomModal(false)}
                            >
                              <Modal.Header closeButton className="p-4">
                                <Modal.Title>
                                  <h5
                                    className="modal-title fw-bold"
                                    id={data.id}
                                  >
                                    {data.name} INTEGRATION KIT
                                  </h5>
                                </Modal.Title>
                              </Modal.Header>
                              <Modal.Body className="p-4">
                                <form>
                                  <div className="row">
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        First Name
                                      </label>
                                      <input
                                        autoFocus={true}
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Firstname?.error &&
                                          formData?.Firstname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Firstname"
                                        value={formData.Firstname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Firstname.error &&
                                        formData.Firstname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Firstname.error}
                                          </div>
                                        )}
                                    </div>
                                    <div className="col-md-6 mb-10">
                                      <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                      >
                                        Last Name
                                      </label>
                                      <input
                                        onPaste={(e) => {
                                          e.preventDefault();
                                        }}
                                        type="text"
                                        onBlur={($event) => {
                                          enableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        onFocus={($event) => {
                                          disableShouldErrorShow(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                        className={
                                          (formData?.Lastname?.error &&
                                          formData?.Lastname?.shouldShowError
                                            ? "border border-danger"
                                            : "") + " form-control"
                                        }
                                        name="Lastname"
                                        value={formData.Lastname.value}
                                        onChange={($event) => {
                                          onFormFeildsChange(
                                            $event,
                                            formData,
                                            setFormData,
                                          );
                                        }}
                                      />
                                      {formData.Lastname.error &&
                                        formData.Lastname.shouldShowError && (
                                          <div className="text-danger mt-1">
                                            {formData.Lastname.error}
                                          </div>
                                        )}
                                    </div>
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Mobile
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.MobilePhone?.error &&
                                        formData?.MobilePhone?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="MobilePhone"
                                      value={formData.MobilePhone.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.MobilePhone.error &&
                                      formData.MobilePhone.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.MobilePhone.error}
                                        </div>
                                      )}
                                  </div>

                                  <div className="col-md-12 mb-10">
                                    <label
                                      htmlFor="exampleFormControlInput1"
                                      className="form-label"
                                    >
                                      Email
                                    </label>
                                    <input
                                      onPaste={(e) => {
                                        e.preventDefault();
                                      }}
                                      type="text"
                                      onBlur={($event) => {
                                        enableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      onFocus={($event) => {
                                        disableShouldErrorShow(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                      className={
                                        (formData?.Email?.error &&
                                        formData?.Email?.shouldShowError
                                          ? "border border-danger"
                                          : "") + " form-control"
                                      }
                                      name="Email"
                                      value={formData.Email.value}
                                      onChange={($event) => {
                                        onFormFeildsChange(
                                          $event,
                                          formData,
                                          setFormData,
                                        );
                                      }}
                                    />
                                    {formData.Email.error &&
                                      formData.Email.shouldShowError && (
                                        <div className="text-danger mt-1">
                                          {formData.Email.error}
                                        </div>
                                      )}
                                  </div>

                                  {/* <div className="col-md-12 mb-10">
                          <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                          </div> */}
                                  <div className="d-flex justify-content-end mt-3">
                                    {/* <a href={data.href} className='btn_style1'><button type="submit" className='btn p-0 text-white'> Download</button> </a>  */}
                                    <button
                                      type="submit"
                                      className="btn text-white btn_style1"
                                      onClick={(e) => {
                                        handleDownloadKit(e, data);
                                      }}
                                    >
                                      {" "}
                                      Download
                                    </button>
                                  </div>
                                </form>
                                <div
                                  className="thankyou-message"
                                  id="tymessage"
                                >
                                  Thank you for submitting details.
                                </div>
                              </Modal.Body>
                            </Modal>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* Ecom section ends*/}
          </div>
        </div>

        <div className="wch-wrp">
          <div className="container_1300 d-block">
            <div className="row">
              <div className="col-md-7">
                <div className="wch-lhs">
                  <h2 className="common-ttle blue-clr">
                    Need assistance with integration or unable to find the API
                    for your platform?
                  </h2>
                  <a href="/contact-us" className="btn_style1">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="wch-rhs text-end">
                  <img
                    src="/images/Integration-Guides-btm-pic.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
