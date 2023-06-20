import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Script from "next/script";
import React, { useEffect } from "react";
//import styles from "../styles/Home.module.scss";
import { Navigation,Pagination,Autoplay} from "swiper";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
//import {Tabs, Tab, Nav} from "bootstrap";  


export default function mGalla() {

  return (
    <div className="product-payment pd-lr-15">
      <Head>
        <title>mGalla -Best payment app for Business and  Merchants|NTT DATA Payment Services India</title>
        <meta name="description" content="NTT DATA Payment Services India offers the best payment app for businesses. With mGalla, you can collect payments digitally through Bharat QR, mPOS, UPI and Link-based payments. Quick sign up with no setup cost. Accept payments anytime, anywhere through your mobile." />
        <link rel="canonical" href="https://www.nttdatapay.com/mgalla-payment-app" />
        <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "Is mGalla a paid or free application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mGalla is a completely free payment app For small businesses. Downloading and signing up with the application involves no charges whatsoever."
        }
      },{
        "@type": "Question",
        "name": "Why should I opt for mGalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mGalla is a free and one of the best online payment apps for small businesses. Downloading and signing up with the application involves no charges whatsoever."
        }
      },{
        "@type": "Question",
        "name": "How is mGalla different from other digital payment applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With this era of digitization, it is crucial for any business, which wants to prosper, to accept the digital form of payments. mGalla is a free application providing you with a range of digital payment options at your fingertips. It is extremely convenient, easily accessible and provides a seamless experience of accepting digital payments."
        }
      },{
        "@type": "Question",
        "name": "How can I sign up for mGalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Download mGalla App from Google Playstore or get in touch with our customer service centre where our executive will provide you with a download link through SMS. Once you have downloaded the app, put in all the relevant information required. This is going to be so simple that it wouldn't even take 5 minutes of your time."
        }
      },{
        "@type": "Question",
        "name": "Can I Sign Up using my company's registered name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you opt for Sign Up you are provided with two options. You can either Sign Up as an Individual or as a Corporate."
        }
      },{
        "@type": "Question",
        "name": "What all documents are required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You are simply required to put up a scanned copy of either a PAN card or an Aadhaar Card to move on."
        }
      },{
        "@type": "Question",
        "name": "Do I need to courier/send any documents to mGalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you are only required to scan the desired document through the Payment App For small business. You do not have to send or courier any documents to us."
        }
      },{
        "@type": "Question",
        "name": "I don't have a PAN Card. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you do not have a PAN card, you can scan your Aadhaar card for verification purposes. We do not require both of your documents."
        }
      },{
        "@type": "Question",
        "name": "Is it compulsory to submit the documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is compulsory for you to scan either your PAN or Aadhaar Card for verification purposes in the best online payment app for small business."
        }
      },{
        "@type": "Question",
        "name": "Is mGalla safe and secured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mGalla is a highly secured payment app for merchants. We understand that you trust us with your money and so, we are here to provide you with bank-level security features. NTT DATA Payment Services is PCI DSS v. 3.2 and SSL 256 bit encrypted, which is the highest level of security available."
        }
      },{
        "@type": "Question",
        "name": "Is mGalla compatible with my android version?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "mGalla, the best mobile payment apps for small businesses requires your phone to have an android version of 4.0.3 and above. This is the most basic android version and will definitely be compatible with your android smartphone."
        }
      },{
        "@type": "Question",
        "name": "How many merchants do you have onboard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Currently, we have more than 50,000 merchants who have collaborated with mGalla, payment apps for business."
        }
      },{
        "@type": "Question",
        "name": "Does my customer need to have mGalla application to pay me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, your customer can pay using their existing bank application without having to download mGalla, the best online payment app for small business."
        }
      },{
        "@type": "Question",
        "name": "How long will it take for you to onboard me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You are instantly onboarded with mGalla as soon as you download the application, complete the registration and provide us with all the necessary information."
        }
      },{
        "@type": "Question",
        "name": "When can I start accepting payments through mGalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As soon as you complete the Sign Up process with the payment apps for business, you can start collecting digital payments through mGalla. You can submit your KYC whenever you decide to get the amount settled in your bank account."
        }
      },{
        "@type": "Question",
        "name": "Can I change my mobile number on mGalla?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In case you switch your mobile number and need to update it on mGalla, the payment app for merchants, you have to get in touch with our customer care executive and they will assist you further."
        }
      }]
    }
    
    
    ` }}
  />

      
      </Head>


    <div className="bnr-home-wrp product-mgalla-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h1>One app, multiple payment options.</h1>
       <p>Empower your business with mGalla-the best payment app for small business and receive payments anytime, anywhere through your mobile! </p>
       <Link href="/sign-up">
       <a href=""  className='btn_style1'><p>Sign up</p></a>
       </Link>
       
       

       {/* <div className="cap-list">
           <img src="/images/product-logo-grp-2.png" alt="" className="img-fluid" />
       </div> */}

     </div>
     </div>
    </div>

    <div className="brand-logos-wrp">
<Swiper
modules={[Autoplay ]}
spaceBetween={20}
slidesPerView={'auto'}
freeMode={true}
centeredSlides={false}
allowTouchMove={false}
loop={true}
speed={3000}
autoplay={{
    delay: 0,
    disableOnInteraction: false
}}
      breakpoints={{
        // when window width is >= 640px
        0: {
          spaceBetween:0,
          slidesPerView: 3,
        },
        640: {
          spaceBetween:0,
          slidesPerView: 3,
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 6,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='/images/bnr-ccd-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-central-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-big-bazar-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-brand-factory-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-reliance-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-burger-king-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-pabtaloons-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/madura-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/ksbc-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/himalayan-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/holiday-in-logo.png'/></SwiperSlide>
    </Swiper>
</div>




<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="#">Products</a></li>
    <li className="breadcrumb-item active" aria-current="page">mGalla</li>
  </ol>
</div>
</nav>



<div className="boost-product-wrp">
<div className="container_1300 d-block">
<div className="row">
<div className="col-md-6">
 <div className="boost-lhs-wrp">
<h2 className="common-ttle">Get started with mGalla in just 4 easy steps!</h2>  
<p className="common-desc">The mGalla app is a payment app for merchants that will end all your payment issues. Suited for all business types, you can start collecting payments after one-time signup and at no additional costs. </p>
<div className="boost-sldr-wrp">
<Swiper
     // modules={[Pagination]}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="row">
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/mgalla-icn-6.svg" alt="" className="img-fluid" />  
      <h3>Enter your personal details</h3>
      
      </div> 
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/mgalla-icn-7.svg" alt="" className="img-fluid" />  
      <h3>Enter your bank details</h3>
      
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/mgalla-icn-8.svg" alt="" className="img-fluid" />  
      <h3>Scan a copy of your Pan Card or Aadhaar Card</h3>
      
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/mgalla-icn-9.svg" alt="" className="img-fluid" />  
      <h3>Wait for an OTP for verification</h3>
      <p>Make online transactions and pay offline at any bank branch across India, saving time & money.</p>
      </div> 
      </div>
      </div>  
      </SwiperSlide>
     
    </Swiper>
</div>

</div> 
</div>
<div className="col-md-6">
<div className="boost-rhs-wrp">
<img src="/images/mgalla-send-fld-illust.svg" alt="payment–app-for-small-business" className="img-fluid" />  
</div>  
</div>  

<div className="col-md-12 text-center">
  <p className="common-desc">And your Sign-up process is done!</p>
  <Link href="/sign-up">
  <a href="" className="btn_style1"><p>Sign up</p></a>
  </Link>
</div>

</div>
</div>
</div>


<div className="product-feature-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle white-clr text-center">A feature rich app for all your payment acceptance woes</h2>

<div className="feat-main-wrp">
 <div className="row">
  <div className="col-md-4">
    <div className="feat-card">
      <img src="/images/mgalla-icn-1.svg" alt="" className="img-fluid" />
      <p className="ttle">Instant Activation with minimal documentation</p>
      <p className="desc">As the best payment app for small business, your KYC activation involves only two steps. You can initiate the mGalla payment app for merchants by providing basic details like your name, number, address, and PAN and start accepting payments instantly.</p>
    </div>
  </div>
  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/mgalla-icn-2.svg" alt="" className="img-fluid" />
      <p className="ttle">Innovative Payment Options</p>
      <p className="desc">mGalla is one of the best mobile payment apps for merchants that offers all the major payment options, including UPI, Payment Links, Bharat QR, and mPOS. </p>
    </div>
  </div>
  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/mgalla-icn-3.svg" alt="" className="img-fluid" />
      <p className="ttle">Convenient for Customers</p>
      <p className="desc">Provide your customers with the convenience of making payment to you through any mobile banking application that they have. </p>
    </div>
  </div> 

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/mgalla-icn-4.svg" alt="" className="img-fluid" />
      <p className="ttle">Track and manage your payments</p>
      <p className="desc">Keep a close track of your payments and manage your refunds with mGalla- Payment application for Merchants.</p>
    </div>
  </div> 

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/mgalla-icn-5.svg" alt="" className="img-fluid" />
      <p className="ttle">World-Class Security</p>
      <p className="desc">3.2 V PCI-DSS compliance to secure all data & transactions along with 128 bit SSL encryption.</p>
    </div>
  </div> 


  </div> 
</div>

 </div> 
</div>




<div className="insta-main-wrp exp-wrp">
<div className="container_1300 d-block">


<div className="row">
 <div className="col-md-5">
   <div className="exp-lhs">
 <h2 className="common-ttle">Make your smartphone the powerhouse of digital payment acceptance modes</h2> 
 {/* <a href="" className="btn_style_white">Sign up</a> */}
 </div>
 </div>
 <div className="col-md-7">
 <div className="feat-main-wrp">
 <div className="row">
  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/pg-linked-based.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Payment links</p>
      <p className="desc  text-black">Send a payment link to your customers over WhatsApp, SMS or e-mail and get paid instantly.</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/pg-bharat-qr.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Bharat QR</p>
      <p className="desc  text-black">Allow your customers to pay you with a simple scan through any bank application with Bharat QR.</p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/mgalla-icn-10.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">UPI</p>
      <p className="desc  text-black">Accept payments in one click from your customers over a VPA with UPI, eliminating sharing any bank details</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/mgalla-icn-11.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">mPOS</p>
      <p className="desc  text-black">Accept card payments in-store or on the go with NTT DATA Payments’ compact yet agile mPOS device.</p>
    </div>
  </div>

  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/mgalla-icn-12.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Cash</p>
      <p className="desc  text-black">Keep a tab of your incoming cash payments with mGalla’s cash option and manage your inventory effortlessly.</p>
    </div>
  </div>

  </div> 
</div>
  </div> 
</div>


 </div> 
</div>













<div className="explore-other-wrp exp-wrp">
<div className="container_1100 d-block">
  <div className="row">
  <div className="col-md-12 text-center">
  <h2 className="common-ttle">Kickstart your digital payment acceptance journey with the best online payment app for businesses.</h2> 
  <Link href="/sign-up">
  <a href=""  className='btn_style1'><p>Sign up</p></a>
  </Link>
  </div>  
  </div>
</div>
</div>


<div className="product-faq-wrp">
<div className="container_1100 d-block">
<div className="row">
 <div className="col-md-5">
  <div className="faq-lhs">
  <h2 className="common-ttle">Frequently Asked<br/> Questions</h2>
  </div> 
  </div> 

<div className="col-md-7">
 <div className="faq-rhs">

 <div className="accordion" id="accordionExample3">
  <div className="accordion-item">
    <p className="accordion-header" id="headingOne1">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne3">
      Is mGalla a paid or free application?
      </button>
    </p>
    <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="headingOne1" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      mGalla is a completely free payment app For small businesses. Downloading and signing up with the application involves no charges whatsoever.
      </div>
    </div>
  </div>




  <div className="accordion-item">
    <p className="accordion-header" id="headingOne2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne3">
      Why should I opt for mGalla?

      </button>
    </p>
    <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      mGalla is a free and one of the best online payment apps for small businesses. Downloading and signing up with the application involves no charges whatsoever.
      </div>
    </div>
  </div>

  

  <div className="accordion-item">
    <p className="accordion-header" id="headingOne3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
      How is mGalla different from other digital payment applications?

      </button>
    </p>
    <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      With this era of digitization, it is crucial for any business, which wants to prosper, to accept the digital form of payments. mGalla is a free application providing you with a range of digital payment options at your fingertips. It is extremely convenient, easily accessible and provides a seamless experience of accepting digital payments.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne3">
      How can I sign up for mGalla?

      </button>
    </p>
    <div id="collapseOne4" className="accordion-collapse collapse" aria-labelledby="headingOne4" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Download mGalla App from Google Playstore or get in touch with our customer service centre where our executive will provide you with a download link through SMS. Once you have downloaded the app, put in all the relevant information required. This is going to be so simple that it wouldn&#39;t even take 5 minutes of your time.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne3">
      Can I Sign Up using my company&#39;s registered name?
      </button>
    </p>
    <div id="collapseOne5" className="accordion-collapse collapse" aria-labelledby="headingOne5" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Yes. When you opt for Sign Up you are provided with two options. You can either Sign Up as an Individual or as a Corporate.
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <p className="accordion-header" id="headingOne6">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="true" aria-controls="collapseOne3">
      What all documents are required?
      </button>
    </p>
    <div id="collapseOne6" className="accordion-collapse collapse" aria-labelledby="headingOne6" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      You are simply required to put up a scanned copy of either a PAN card or an Aadhaar Card to move on.
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <p className="accordion-header" id="headingOne7">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7" aria-expanded="true" aria-controls="collapseOne3">
      Do I need to courier/send any documents to mGalla?
      </button>
    </p>
    <div id="collapseOne7" className="accordion-collapse collapse" aria-labelledby="headingOne7" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      No, you are only required to scan the desired document through the Payment App For small business. You do not have to send or courier any documents to us.
      </div>
    </div>
  </div>



  <div className="accordion-item">
    <p className="accordion-header" id="headingOne8">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne8" aria-expanded="true" aria-controls="collapseOne3">
      I don&#39;t have a PAN Card. What should I do?
      </button>
    </p>
    <div id="collapseOne8" className="accordion-collapse collapse" aria-labelledby="headingOne8" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      If you do not have a PAN card, you can scan your Aadhaar card for verification purposes. We do not require both of your documents.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne9">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne9" aria-expanded="true" aria-controls="collapseOne3">
      Is it compulsory to submit the documents?
      </button>
    </p>
    <div id="collapseOne9" className="accordion-collapse collapse" aria-labelledby="headingOne9" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Yes, it is compulsory for you to scan either your PAN or Aadhaar Card for verification purposes in the best online payment app for small business.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne10">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne10" aria-expanded="true" aria-controls="collapseOne3">
      Is mGalla safe and secured?
      </button>
    </p>
    <div id="collapseOne10" className="accordion-collapse collapse" aria-labelledby="headingOne10" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      mGalla is a highly secured payment app for merchants. We understand that you trust us with your money and so, we are here to provide you with bank-level security features. NTT DATA Payment Services is PCI DSS v. 3.2 and SSL 256 bit encrypted, which is the highest level of security available.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne11">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne11" aria-expanded="true" aria-controls="collapseOne3">
      Is mGalla compatible with my android version?
      </button>
    </p>
    <div id="collapseOne11" className="accordion-collapse collapse" aria-labelledby="headingOne11" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      mGalla, the best mobile payment apps for small businesses requires your phone to have an android version of 4.0.3 and above. This is the most basic android version and will definitely be compatible with your android smartphone.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne12">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne12" aria-expanded="true" aria-controls="collapseOne3">
      How many merchants do you have onboard?
      </button>
    </p>
    <div id="collapseOne12" className="accordion-collapse collapse" aria-labelledby="headingOne12" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Currently, we have more than 50,000 merchants who have collaborated with mGalla, payment apps for business.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne13">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne13" aria-expanded="true" aria-controls="collapseOne3">
      Does my customer need to have mGalla application to pay me?
      </button>
    </p>
    <div id="collapseOne13" className="accordion-collapse collapse" aria-labelledby="headingOne13" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      No, your customer can pay using their existing bank application without having to download mGalla, the best online payment app for small business. 
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne14">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne14" aria-expanded="true" aria-controls="collapseOne3">
      How long will it take for you to onboard me?
      </button>
    </p>
    <div id="collapseOne14" className="accordion-collapse collapse" aria-labelledby="headingOne14" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      You are instantly onboarded with mGalla as soon as you download the application, complete the registration and provide us with all the necessary information.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne15">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne15" aria-expanded="true" aria-controls="collapseOne3">
      When can I start accepting payments through mGalla?
      </button>
    </p>
    <div id="collapseOne15" className="accordion-collapse collapse" aria-labelledby="headingOne15" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      As soon as you complete the Sign Up process with the payment apps for business, you can start collecting digital payments through mGalla. You can submit your KYC whenever you decide to get the amount settled in your bank account.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne16">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne16" aria-expanded="true" aria-controls="collapseOne3">
      Can I change my mobile number on mGalla?
      </button>
    </p>
    <div id="collapseOne16" className="accordion-collapse collapse" aria-labelledby="headingOne16" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      In case you switch your mobile number and need to update it on mGalla, the payment app for merchants, you have to get in touch with our customer care executive and they will assist you further.
      </div>
    </div>
  </div>

  



</div>

 </div> 
</div>

</div>
 </div> 
</div>


<div className="explore-other-wrp">
<div className="container_1100 d-block">
<h2 className="common-ttle text-center">Explore other NTT DATA<br/> Payments products</h2>

<div className="explore-grid-wrp">
 <div className="row justify-content-center">

<div className="col-md-3">
<div className="explore-card explore1">
<h3>POS Machine</h3>  
<p>Receiving card payments in-store or on the go, made easy!</p>
<Link href="/swipecard-pos-machine"><a >Know More</a></Link>
</div>  
</div>  

<div className="col-md-3">
<div className="explore-card explore2">
<h3>IVR Payment</h3>  
<p>Experience lower cost, better efficiency, and safe customer payments by phone </p>
<Link href="/ivr-payment-system">
<a >Know More</a>
</Link>
</div>  
</div>  

{/* <div className="col-md-3">
<div className="explore-card explore3">
<h2>mGalla
<span>Payment App For Merchants</span></h2>  
<p>Accept payments anytime, anywhere through your mobile</p>
<Link href="/product_mgalla">
<a href="">Know More</a>
</Link>
</div>  
</div>   */}

<div className="col-md-3">
<div className="explore-card explore4">
<h3>Payment Gateway</h3>  
<p>Open doors to great sales with the best payment experience for your customers.</p>
<Link href="/online-payment-gateway-india">
<a >Know More</a>
</Link>
</div>  
</div>  

</div> 
</div>

</div>
</div>
 
    </div>
  )
}
