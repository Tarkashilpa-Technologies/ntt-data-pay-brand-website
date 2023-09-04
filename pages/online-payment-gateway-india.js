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


export default function product1() {

  return (
    <div className="product-payment pd-lr-15">
      <Head>
        <title>Best Online Payment Gateway in India | Online Payment Aggregators and Service provider in India</title>
        <meta name="description" content="Get Secure Online Payment Gateway for Your Business in India. Accept payments through Links, BNPL, UPI, BharatQR, EMI and 100+ Payment options, Simple payment gateway Integration API for 25+ platforms. Bank-Level Security, Merchant Dashboard, Best Success Rates, Servicing 6+ million merchants. Customized solutions to perfectly fit your business&#39; payment acceptance needs. " />
        <link rel="canonical" href="https://www.nttdatapay.com/online-payment-gateway-india"/>
        <script
   type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: `
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
    ` }}
  /> 
      </Head>

 
    <div className="bnr-home-wrp product-payment-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h1>A Payment Gateway built for growth</h1>
       <p>Accept online payments over 100+ payment options, with best success rates, over a secured platform with the best online payment gateway in India.</p>
       <Link href="/sign-up">
       <a href=""  className='btn_style1'><p>Sign up</p></a>
       </Link>
       
       

       <div className="cap-list">
           <img src="/images/product-logo-grp-2.png" alt="" className="img-fluid" />
       </div>

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
    <li className="breadcrumb-item active" aria-current="page">Payment Gateway</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">A powerful yet seamless gateway<br/> designed to accept safe online payments!</h2>
<p className="common-desc text-center">Escalate your business&#39; growth with the best online payment service provider in India, integrated with 50+<br/> banks and 100+ payment options offering transactions through UPI, Links, Bharat QR, BNPL, IMPS Credit and<br/> Debit Cards etc. Its robust set of capabilities is devised to aid both start-ups and the longest running<br/> businesses to grow revenue, alleviate risk and safeguard customer&#39;s data.</p>

<div className="product-cnt-pic text-center">
 <img src="/images/product-payment-pic.png" alt="" className="img-fluid" /> 
</div>

</div>
</div>

<div className="product-feature-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle white-clr text-center">Delivering world class features<br/> with NTT DATA Payments</h2>

<div className="feat-main-wrp">
 <div className="row justify-content-center">
  <div className="col-md-4">
    <div className="feat-card">
      <img src="/images/payment-feat1.svg" alt="" className="img-fluid" />
      <p className="ttle">Multiple Payment Options</p>
      <p className="desc">100+ payment options that include 10+ Credit Cards, 50+ Net Banking, 100+ Debit Cards, 10+ wallets, IMPS, UPI, Bharat QR Scan and Pay, BNPL, NEFT/RTGS, and a lot more!</p>
    </div>
  </div>

  {/* <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/payment-feat2.svg" alt="" className="img-fluid" />
      <p className="ttle">Tokenization</p>
      <p className="desc">Elevate your customer’s shopping experience by allowing them to store their card information in encrypted form, eliminating the hassle of adding card details for every transaction.</p>
    </div>
  </div> */}

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/payment-feat3.svg" alt="" className="img-fluid" />
      <p className="ttle">Easy Retry Option</p>
      <p className="desc">Don&#39;t let failed transactions make your customers abandon the cart. Allow them to retry, instead of filling in all the details from scratch.</p>
    </div>
  </div> 

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/payment-feat4.svg" alt="" className="img-fluid" />
      <p className="ttle">Invoice Payment</p>
      <p className="desc">Gently remind your customers of pending payments by generating bulk invoices and sharing payment requests and with them over email and SMS.</p>
    </div>
  </div> 

  {/* <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/payment-feat5.svg" alt="" className="img-fluid" />
      <p className="ttle">Auto-debit</p>
      <p className="desc">Set up an auto-debit facility for your customer’s convenience, on their credit card, for recurring payments.</p>
    </div>
  </div>  */}

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/payment-feat6.svg" alt="" className="img-fluid" />
      <p className="ttle">Multibank EMI</p>
      <p className="desc">Sell high-value products through the multi-bank EMI option available across 10+ credit cards.</p>
    </div>
  </div> 

  </div> 
</div>

 </div> 
</div>


<div className="boost-product-wrp">
<div className="container_1300 d-block">
<div className="row">

<div className="col-md-6 order-md-2">
<div className="boost-rhs-wrp">
<img src="/images/product-business-pic.svg" alt="" className="img-fluid" />  
</div>  
</div> 

<div className="col-md-6 order-md-1">
 <div className="boost-lhs-wrp">
<h3 className="common-ttle">Boost your business<br/> with all major payment options<br/> and much more</h3>  

<div className="boost-sldr-wrp">
<Swiper
      modules={[Pagination,Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="row">
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/boosticn1.svg" alt="" className="img-fluid" />  
      <h4>Debit/Credit Cards</h4>
      <p>Accept payments through all major cards, including Visa, MasterCard, American Express, and RuPay.</p>
      </div> 
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/boosticn2.svg" alt="" className="img-fluid" />  
      <h4>Net Banking</h4>
      <p>Enable online transactions through 50+ major banks like SBI, ICICI, HDFC, Axis, Kotak, Yes Bank·</p>
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/boosticn3.svg" alt="" className="img-fluid" />  
      <h4>UPI</h4>
      <p>Enjoy seamless payment acceptance with one click over a secured VPA with our UPI platform</p>
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/boosticn4.svg" alt="" className="img-fluid" />  
      <h4>Challan</h4>
      <p>Generate an online challan followed by making an offline payment at any bank branch throughout India.</p>
      </div> 
      </div>
      </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="row">
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-neft-pic.svg" alt="" className="img-fluid" />  
      <h4>NEFT/RTGS</h4>
      <p>Use NEFT payments and pay your beneficiaries as and when you initiate the payments.</p>
      </div> 
      </div>

      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-bnpl-pic.svg" alt="" className="img-fluid" />  
      <h4>BNPL</h4>
      <p>Allow your customers a short-term, instant credit to purchase and  pay later as per their convenience.</p>
      </div>  
      </div>

      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-emi.svg" alt="" className="img-fluid" />  
      <h4>EMI</h4>
      <p>With the multi-bank Credit Card EMI option, sell higher-value products and give your customers the ease of purchasing high-ticket items.</p>
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-bharat-qr.svg" alt="" className="img-fluid" />  
      <h4>Bharat QR</h4>
      <p>Bust the queue by integrating a simple QR that your customers can scan and send money directly to your account.</p>
      </div> 
      </div>
      </div>  
      </SwiperSlide>
      <SwiperSlide>
      <div className="row">
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-wallet.svg" alt="" className="img-fluid" />  
      <h4>Wallet</h4>
      <p>Give your customers the freedom to pay with their favorite digital wallet with 10+ options.</p>
      </div> 
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-gpay.svg" alt="" className="img-fluid" />  
      <h4>Google Pay</h4>
      <p>Use Google Pay and allow your customers to send you money without sharing any banking details.</p>
      </div>  
      </div>

      {/* <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-paypal.svg" alt="" className="img-fluid" />  
      <h2>PayPal</h2>
      <p>Transfer money online anywhere through PayPal with just your email address.</p>
      </div>  
      </div> */}

      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/pg-linked-based.svg" alt="" className="img-fluid" />  
      <h4>Link-Based</h4>
      <p>Send links to your customers through WhatsApp, SMS or over e-mail and request payments through payment links.</p>
      </div> 
      </div>
      </div> 
      </SwiperSlide>
    </Swiper>
</div>

</div> 
</div>

 

<div className="col-md-12 text-center order-md-3">
<Link href="/sign-up">
  <a href=""  className="btn_style1"><p>Sign up</p></a>
  </Link>
</div>

</div>
</div>
</div>

<div className="smoother-main-wrp">
<div className="container_1300 d-block">
<div className="row">
  <div className="col-md-6">
   <div className="smooth-lhs">
     <h3 className="common-ttle white-clr">Smoother, Quicker integrations over web and mobile</h3>
     <p className="common-desc white-clr mb-5">
     NTT DATA Payments provides a hassle-free online payment gateway integration with user-friendly APIs that can easily integrate with any mobile app, website, or e-commerce platform. Accept secure and successful online payments through all possible payment methods like Credit & Debit cards, Net Banking, Wallets, UPI, Links, BharatQR and BNPL.
     </p>
     <br/>
     <Link href="/developer-guide">
  <a href=""  className="btn_style_white"><p className='mb-0'>Developer Guide</p></a>
  </Link>

    </div> 
  </div>
  <div className="col-md-6">
    <div className="smooth-rhs">
     <img src="/images/smoother-screen.svg" alt="" className="img-fluid" /> 
    </div>
  </div>
</div>
 </div> 
</div>


<div className="intell-wrp">
<div className="container_1300 d-block">
<div className="row">
 <div className="col-md-8">
  <div className="intell-lhs">
    <h3 className="common-ttle">Use intelligent data to scale<br/> faster, boost conversions, and<br/> capture revenue.</h3>
    <p className="common-desc">Monitor all your transactions online, on a real time basis through the merchant admin<br/> console with customizable design and layout and access it anytime, anywhere!</p>
   <img src="/images/intell-pic.svg" alt="" className="img-fluid" />
  </div> 
  </div> 
  <div className="col-md-4">
  <div className="intell-rhs">
    <p className="ttle">Features & Benefits</p>
  <Swiper
      // install Swiper modules
      modules={[Pagination]}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <p className="desc">Single web reporting interface for all payment modes including credit card, debit card & Net Banking.</p> 
       <p className="desc">Create multiple sub users to access merchant admin console and assign selected rights to the sub users.</p>
       <p className="desc">Raise invoice for the customer to collect online payments along with Bulk upload invoice payment facility.</p>
      </SwiperSlide>
      <SwiperSlide>
      <p className="desc">View and download settlement report, transaction history </p> 
       <p className="desc">Manage your transactions, refunds, disputes and settlements from a single interface.</p>
      
      </SwiperSlide>
     
    </Swiper>


{/* <a href="" className="btn_style1 mt-4">Know More</a> */}

  </div> 
  </div> 
</div>
 </div> 
</div>


<div className="ppo-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Why do you need NTT DATA<br/> Payments&#39; Payout option?</h2>
<p className="common-desc text-center">Make bulk payments to your employees and vendors and initiate easy refunds with the NTT DATA Payments Payout option!</p>

<div className="ppo-grid-cvr">
 <div className="row g-0">
  <div className="col-md-3">
  <div className="ppo-card ppo-card1">
  <span className="ppo-icn"><img src="/images/ppo-icn1.svg" alt="" className="img-fluid" /></span>
  <h3 className="ttle">24*7 uninterrupted account validation</h3>
  <p>Experience real-time account validation all day, throughout the year.</p>
  </div>  
  </div> 

  <div className="col-md-6">
  <div className="ppo-card ppo-card2">
  <h3 className="ttle white-clr">Tailored to fit your needs</h3>
  <p className="white-clr">No matter what the business is, find customized and effective
payment solutions that enhance your entire payout experience.</p>
  </div>  
  </div> 

  <div className="col-md-3">
  <div className="ppo-card ppo-card3">
  <span className="ppo-icn"><img src="/images/ppo-icn2.svg" alt="" className="img-fluid" /></span>
  <h3 className="ttle">Quick and hassle-free </h3>
  <p>Disburse payments effortlessly with our Diverse range of services at
your disposal for every kind of online & offline payment.</p>
  </div>  
  </div> 


  <div className="col-md-6">
  <div className="ppo-card ppo-card4">
  <h3 className="ttle white-clr">Low reversals and failed transfers</h3>
  <p className="white-clr">Experience high success rates with minimum reversals on your transfers</p>
  </div>  
  </div> 

  <div className="col-md-3">
  <div className="ppo-card ppo-card5">
  <span className="ppo-icn"><img src="/images/ppo-icn3.svg" alt="" className="img-fluid" /></span>
  <h3 className="ttle">Minimizing risk & fraudulent transactions</h3>
  <p>Ensure safe and secure transactions with our
PCI DSS 3.2.1v complied payment system.</p>
  </div>  
  </div> 



  <div className="col-md-3">
  <div className="ppo-card ppo-card6">
  <span className="ppo-icn"><img src="/images/ppo-icn4.svg" alt="" className="img-fluid" /></span>
  <h3 className="ttle">Updating refund balance through the online console</h3>
  <p>Safely transfer refund balance to your customers at the same time</p>
  </div>  
  </div> 

  </div> 
</div>

</div> 
</div>


<div className="insta-main-wrp">

<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Insta checkout. Insta<br/> transactions. Insta pay!</h2>
<div className="common-desc text-center">An instant checkout system that ensures better conversion rates and higher sales.</div>


<div className="insta-tabs-cvr">
  
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">For your business</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">For your customers</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-6">
        <div className="insta-lhs">
          <img src="/images/insta-pro-desg.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="insta-rhs">

  <div className="accordion" id="accordionfaq">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Higher conversions
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Safe and secure payments without any redirections automatically lead to better conversion rates.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Avoid constant app-switching
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      With a single page payment system, avoid the clumsy process of jumping from one page to the other.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Customized User Interface
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Create a brand recall value and credibility with Insta Pay&#39;s customized User Interface.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Auto Updates
      </button>
    </h3>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Make sure your payment page is always up to date with the latest payment options for your customers.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Works everywhere
      </button>
    </h3>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Insta Pay easily works everywhere, be it mobile or website. Easy to integrate and doesn’t require coding knowledge.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingsix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      Lightest Payment SDKs
      </button>
    </h3>
    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Insta Pay’s lightweight SDKs are designed to provide a suave payment affair for your customers.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingseven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
      Secure Payments
      </button>
    </h3>
    <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Insta Pay complies with PCI DSS 3.2.1V, providing customers with world-class safety and security.
      </div>
    </div>
  </div>

</div>
        </div>
      </div>
    </div>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="row">
      <div className="col-md-6">
        <div className="insta-lhs">
          <img src="/images/payment-gateway-tabs2.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="insta-rhs">
          <div className="accordion" id="accordionfaq2">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne2">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
      Seamless User Experience
      </button>
    </h3>
    <div id="collapseOne2" className="accordion-collapse collapse show" aria-labelledby="headingOne2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Make your customer’s online payment process smooth and painless 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      No Redirection
      </button>
    </h3>
    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      With a single payment pop-up window on the website eliminate redirections between multiple pages. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
      Instant Retry Option
      </button>
    </h3>
    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Insta Pay stores your customer’s data in encrypted format, ensuring that they don’t have to enter their credentials upon retrying. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingfour2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour2" aria-expanded="false" aria-controls="collapsefour2">
      Auto OTP
      </button>
    </h3>
    <div id="collapsefour2" className="accordion-collapse collapse" aria-labelledby="headingfour2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Let your customers automatically fetch OTP from their phones and eliminate the confusion of the cluttered online payment process. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingfive2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive2" aria-expanded="false" aria-controls="collapsefive2">
      Slow Internet? No Problem
      </button>
    </h3>
    <div id="collapsefive2" className="accordion-collapse collapse" aria-labelledby="headingfive2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Insta Pay is designed to work even on a 2G network, making sure your customers do not face any connectivity issues.
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

</div>


<div className="why-ntt-wrp">
<div className="container_1300 d-block">

<h2 className="common-ttle">Why is NTT DATA Payments the best Online payment<br/> gateway in India?</h2>

<div className="row mt-4">
  <div className="col-md-4">
    <div className="why-lhs">

<div className="mob-drop-box">
<ul className="nav nav-pills">

  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Select</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1">Safe and Secure Payments</a></li>
      <li><a className="dropdown-item" href="#" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2">Best Success Rates</a></li>
      <li><a className="dropdown-item" href="#" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3">Instant and Split Settlement</a></li>
      <li><a className="dropdown-item" href="#" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4">UPI Intent over web and mobile app</a></li>
      <li><a className="dropdown-item" href="#" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5">Customized Payment Solutions</a></li>
    </ul>
  </li>

</ul>
</div>

    <div className="d-flex align-items-start mob-drop-hide">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="true">Safe and Secure<br/> Payments</button>
    <button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Best Success<br/> Rates</button>
    <button className="nav-link" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Instant and Split<br/> Settlement</button>
    <button className="nav-link" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false">UPI Intent over web<br/> and mobile app</button>
    <button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Customized Payment<br/> Solutions</button>
  </div>

</div>
    </div>
  </div>
  <div className="col-md-8">
    <div className="why-rhs">
    <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
     <p className="common-desc">NTT DATA Payments’ security is backed with PCI DSS version 3.2.1 and 256-bit encryption.</p>
     <img src="/images/Safe-Secure-Payments.png" alt="" className="img-fluid" />
    </div>
    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
    <p className="common-desc">Ensure highest success rates by allowing your customer’s transaction to be routed to an active gateway. </p>
     <img src="/images/Best-Success-Rates.png" alt="" className="img-fluid" />
    </div>
    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
    <p className="common-desc">Increase fund flow for your business with T+0 settlements and multi-account settlement.</p>
     <img src="/images/Instant-Settlement.png" alt="" className="img-fluid" />
    </div>
    <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
    <p className="common-desc">Allow your customers to pay you via any UPI app on their mobile with our UPI Intent.</p>
     <img src="/images/UPI-Inten-Over-Web-and-Mobile-app.png" alt="" className="img-fluid" />
    </div>
    <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab">
    <p className="common-desc">Be it Crypto, Gaming, Broking, Education or Government we&#39;ve got solutions that best fit your business’ payment acceptance needs. </p>
     <img src="/images/Customized-Payment-Options.png" alt="" className="img-fluid" />
    </div>
  </div>
    </div>
  </div>
</div>



<div className="dhl-card">
<Swiper
      modules={[Pagination,Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="case-study-bg1">
       <p>DHL resorted to NTT DATA Payment Services solutions to deal with the everyday grievances of its operations and switching to a more unified payments technology. The digitization of invoicing, collection and payment processing, reconciliation will lead to a more user-friendly and uniform experience for both the staff and customers. To implement this, NTT DATA Payment Services integrated its smooth and effortless Internet Payment Gateway services on DHL&#39;s portal allowing the interface to be a painless ordeal. </p> 
      </SwiperSlide>
      <SwiperSlide className="case-study-bg2">
      <p>NTT DATA Payment Services troubleshooted TNHRC&#39;s pain-points with tailor-made solutions aiding their reconciliation and settlement across various associated temples of the same. Integrating TNHRC with its Internet Payment Gateway not only augmented their payment acceptance and processing but also ensured electronic record-keeping streamlining revenue across individual temples. NTT DATA Payment Services&#39; easy-going and advanced APIs helped them to seamlessly incorporate digital payments instruments with their portal leading to quick settlement of payments with better transaction rates.</p> 
      </SwiperSlide>
      <SwiperSlide className="case-study-bg3">
      <p>To build a cashless landscape, KarnatakaOne integrated with NTT DATA Payment Services&#39; solutions which enabled them to enrich their operations. Digital transactions not only ensured record keeping but also considerably brought down transactional costs and time. Their hassle with API integration was also eliminated with NTT DATA Payment Services&#39; advanced and user-friendly APIs. To aid KarnatakaOne with payment collection, reconciliation and electronic receipts, NTT DATA Payment Services Payment Gateway was incorporated, addressing the problems, and providing quick settlement with better transaction success rates. 
</p> 
      </SwiperSlide>
      <SwiperSlide className="case-study-bg4">
      <p>Manipal Group resorted to NTT DATA Payment Services solutions to deal with the grievances they were facing and switching from their manual approaches of fee collection and organisational processes to a digital end-to-end solution. To implement this, NTT DATA Payment Services was required to integrate the institution with an ERP service and provide an online payment solution wherein fees could be paid seamlessly. Digital transactions not only ensured record keeping but also considerably brought down transactional costs and time. </p>
      </SwiperSlide>
      ...
    </Swiper>
</div>

<div className="dhl-logo-wrp">
 <div><img src="/images/DHL-Symbol-1.png" alt="" className="img-fluid" /></div> 
 <div><img src="/images/KarnatakaOneLogo-1.png" alt="" className="img-fluid" /></div> 
 <div><img src="/images/manigopalglobal.png" alt="" className="img-fluid" /></div> 
 <div><img src="/images/TamilNadu_Logo-1.png" alt="" className="img-fluid" /></div> 
</div>


</div>
</div>


<div className="product-feature-wrp exp-wrp">
<div className="container_1300 d-block">


<div className="row">
 <div className="col-md-5">
   <div className="exp-lhs">
 <h2 className="common-ttle white-clr">Experience the<br/> future of payments!</h2> 
 <Link href="/sign-up">
 <a href="" className="btn_style_white"><p className='mb-0'>Sign up</p></a>
 </Link>
 </div>
 </div>
 <div className="col-md-7">
 <div className="feat-main-wrp">
 <div className="row">
  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/exp1.svg" alt="" className="img-fluid" />
      <p className="ttle">Simple Sign Up</p>
      <p className="desc">Fill up the form with your details post clicking the sign up button and one of our sales executives will get in touch with you.</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/exp2.svg" alt="" className="img-fluid" />
      <p className="ttle">Validation</p>
      <p className="desc">Get ready with the paperwork for business validation and start accepting payments within hours.</p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/exp3.svg" alt="" className="img-fluid" />
      <p className="ttle">Integration</p>
      <p className="desc">Integrate our payment gateway on your website, e-commerce store or mobile app over 25+ platforms.</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/exp4.svg" alt="" className="img-fluid" />
      <p className="ttle">Monitor and Analyze</p>
      <p className="desc">Evaluate your business’ performance with real-time transaction monitoring with our dashboard.</p>
    </div>
  </div>

  </div> 
</div>
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
    <p className="accordion-header" id="headingOne3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
      What is Payment Gateway, and how does NTT DATA Payments’ Gateway integrate?
      </button>
    </p>
    <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
       Payment Gateway is your doorway to accept digital payments for online sales. It is quick, effortless and requires minimal coding skills. NTT DATA Payments offers the best online payment gateway in India, as integrating the gateway is a piece of cake with our user-friendly APIs for more than 25 platforms for your website and mobile application.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <p className="accordion-header" id="headingTwo3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
      How secure is the Payment Gateway?
      </button>
    </p>
    <div id="collapseTwo3" className="accordion-collapse collapse" aria-labelledby="headingTwo3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      NTT DATA Payments has the best payment gateway in India, whose bullet-proof security is backed by PCI DSS 3.2.1V compliance and is 256-bit encrypted, ensuring a safe and reliable transactional atmosphere.

      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingThree3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
      Which payment methods do NTT DATA Payments provide?
      </button>
    </p>
    <div id="collapseThree3" className="accordion-collapse collapse" aria-labelledby="headingThree3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      The Payment Gateway is integrated with 50+ banks and offers state-of-the-art, myriad payment options while keeping up and equipping you with the latest payment technologies. NTT DATA Payments has a smooth and quick online payment gateway in India, ensuring that you never miss out on any form of online payment from your customers.

      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingfour3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour3" aria-expanded="false" aria-controls="collapsefour3">
      What are the documents required to apply for the Payment Gateway?
      </button>
    </p>
    <div id="collapsefour3" className="accordion-collapse collapse" aria-labelledby="headingfour3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Keeping in mind the regulatory guidelines and security protocols, NTT DATA Payments requires every merchant to submit a set of documents depending upon the nature of their business. This entails Proprietorship, Partnership, Private, Trust, Society, etc.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingfive3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive3" aria-expanded="false" aria-controls="collapsefive3">
      Which banned products & services does NTT DATA Payments not cater to?
      </button>
    </p>
    <div id="collapsefive3" className="accordion-collapse collapse" aria-labelledby="headingfive3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Adhering to the policy, NTT DATA Payment cannot make its services available to merchants who directly or indirectly deal in certain products or services under restricted categories.

      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingsix3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix3" aria-expanded="false" aria-controls="collapsesix3">
      Can I accept International Payments with NTT DATA Payments?
      </button>
    </p>
    <div id="collapsesix3" className="accordion-collapse collapse" aria-labelledby="headingsix3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Yes. Our Payment Gateway allows you to accept domestic and international online payments, subject to bank approvals.

      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingseven3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven3" aria-expanded="false" aria-controls="collapseseven3">
      Does NTT DATA Payments offer customized solutions?
      </button>
    </p>
    <div id="collapseseven3" className="accordion-collapse collapse" aria-labelledby="headingseven3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      NTT DATA Payments offer tailor-made solutions depending on the nature and size of your business. It also provides customized rates for higher value and volume of transactions.

      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingeight3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight3" aria-expanded="false" aria-controls="collapseeight3">
      What is the settlement cycle of the transactions?
      </button>
    </p>
    <div id="collapseeight3" className="accordion-collapse collapse" aria-labelledby="headingeight3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      NTT DATA Payments is one of the best payment aggregators in India whose settlement works on a T+0 or instant basis.

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

<div className="col-md-3">
<div className="explore-card explore3">
<h3>mGalla
<span>Payment App For Merchants</span></h3>  
<p>Accept payments anytime, anywhere through your mobile</p>
<Link href="/mgalla-payment-app">
<a href="">Know More</a>
</Link>
</div>  
</div>  

{/* <div className="col-md-3">
<div className="explore-card explore4">
<h2>Payment Gateway</h2>  
<p>Open doors to great sales with the best payment experience for your customers.</p>
<Link href="/product_payment_gateway">
<a >Know More</a>
</Link>
</div>  
</div>   */}

</div> 
</div>

</div>
</div>
 
    </div>
  )
}
