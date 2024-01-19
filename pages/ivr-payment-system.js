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
      <link rel="canonical" href="https://www.nttdatapay.com/ivr-payment-system" />
        <title>India&#39;s Leading IVR Payment Solution Provider|NTT DATA Payment Services India </title>
        <meta name="description" content="Learn about the Best IVR payment system for your business and how it can help you accept payments over the phone 24x7. NTT DATA Payment Services offers secure and automated phone payments with IVR." />
        
        <script
   type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": {
        "@type": "Question",
        "name": "What is IVR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Interactive Voice Response (IVR) is a phone system application that prompts callers with recorded messages and options and processes voice input and/or touch-phone keypad selections from these menus. The IVR script responds to this input by providing appropriate information in the form of a voice answer or providing a connection to a \"live\" operator."
        }
      }
    }      
    ` }}
  />
      </Head>


    <div className="bnr-home-wrp product-ivr-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h1>Experience effortless payments with the best IVR Payment System in India</h1>
       <p>With NTT DATA Payments, reduce costs, enhance efficiency and let your customers process payments safely through credit and debit cards, and UPI over phone!</p>
       <Link href="/sign-up">
       <a href=""  className='btn_style1'><p>Sign up</p></a>
       </Link>
      

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
    <li className="breadcrumb-item active" aria-current="page">IVR Payment</li>
  </ol>
</div>
</nav>


<div className="powerful-gateway">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">NTT DATA Payments IVR- Your perfect partner for ticketing and Subscription payments!</h2>
<p className="common-desc text-center">NTT DATA Payments brings you the best IVR Payment in India that is secure, reliable, and convenient. Accept payments easily via a call through Debit & Credit Cards 24X7 while eliminating customer care executive&#39;s participation in the process of undergoing a transaction and making it possible to carry out payments seamlessly over the phone by disposing off the fear of revealing crucial credit or debit card details. 
So, let your customers book your airline tickets, movie tickets, tours, subscriptions and a lot more with the best IVR Payment Gateway in India.</p>

<div className="product-cnt-pic text-center">
 <img src="/images/ivr-first-fold-pic.svg" alt="ivr-solution-provider-in-india" className="img-fluid" /> 
</div>

</div>
</div>





<div className="boost-product-wrp">
<div className="container_1300 d-block">
<div className="row">
<div className="col-md-6">
 <div className="boost-lhs-wrp">
<h3 className="common-ttle">An IVR Payment System that&#39;s right for your business</h3>  

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
      <img src="/images/ivr-p-icn1.svg" alt="" className="img-fluid" />  
      <h4>Personalized Inbound & Outbound Call Flow</h4>
      <p>Now configure the call flow based on your requirements with a comprehensive IVR system</p>
      </div> 
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/ivr-p-icn2.svg" alt="" className="img-fluid" />  
      <h4>Round the clock availability</h4>
      <p>Experience customer service like never before with quality assistance available at every hour of the day and every day of the year!</p>
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/ivr-p-icn3.svg" alt="" className="img-fluid" />  
      <h4>Payment through any card</h4>
      <p>Give your customers an option to pay with any Debit or Credit Card!</p>
      </div>  
      </div>
      <div className="col-md-6">
      <div className="boost-card">
      <img src="/images/ivr-p-icn4.svg" alt="" className="img-fluid" />  
      <h4>Customized IVR Reports</h4>
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
<img src="/images/ivr-payment-option.svg" alt="best-ivr-service-provider-in-india" className="img-fluid" />  
</div>  
</div>  

<div className="col-md-12 text-center">
<Link href="/sign-up">
  <a href=""  className="btn_style1"><p>Sign up</p></a>
  </Link>
</div>

</div>
</div>
</div>




<div className="insta-main-wrp">

<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Be a call away from your customers through<br />Inbound calling services</h2>



<div className="insta-tabs-cvr">
  
<ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Inbound IVR Call</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Outbound IVR Call</button>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <div className="row">
      <div className="col-md-12"><div className="common-desc text-center mb-30">Inbound calling is the process where your customer initiates a call, intending to reach out to you. An inbound call flow system dehumanizes the process of calling-answering. It allows you to carry out complex transactions like accepting outstanding bill payments easily!</div></div>   
      <div className="col-md-6">
      
        <div className="insta-lhs">
          <img src="/images/ivr-inbound-outbound.svg" alt="ivr-service-provider-in-india" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="insta-rhs">

        <div className="accordion" id="accordionfaq">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne2">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
      Agent assisted integrated
      </button>
    </h3>
    <div id="collapseOne2" className="accordion-collapse collapse show" aria-labelledby="headingOne2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      <p>This mode connects the customer willing to pay via a credit card to a call center agent, who then dials out to NTT DATA Payments’ IVR. Upon entering the unique number/policy no/transaction id/booking id generated from the CRM, the customer is taken on a conference call with the IVR.</p>
      <p>To complete the transaction, the customer enters their credit card number and an OTP. The customer is then notified after authentication and authorization. </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
      Agent assisted non-integrated
      </button>
    </h3>
    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      <p>This mode connects the customer willing to pay via a credit card to a call center agent, who then dials out to NTT DATA Payments&#39; IVR. Then, the required details like Transaction id, amount, mobile no, etc., will be entered manually by the agent. Post that, the customer is taken on a conference call with the IVR. </p>
      <p>To complete the transaction, the customer enters all the required details for the transaction manually like Transaction id, amount, mobile no etc. The customer is then prompted to enter his credit card details, including the OTP. The customer is then notified after authentication and authorization. </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
      Automated integrated
      </button>
    </h3>
    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Under this mode, the customer can automatically connect on the number provided by you or the DID numbers shared by NTT DATA Payments.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingfour2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour2" aria-expanded="false" aria-controls="collapsefour2">
      Automated non-integrated
      </button>
    </h3>
    <div id="collapsefour2" className="accordion-collapse collapse" aria-labelledby="headingfour2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      Under this mode, too, customers can automatically connect on the number provided by you. Once the customer gets connected to the IVR, the IVR prompts the customer to enter details (customer id, order id, product code, policy no, transaction reference no etc.) followed by the amount.
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
  <div className="col-md-12">
  <div className="common-desc text-center">An outbound IVR Call flow will allow you to initiate a call process towards your customer to acknowledge payments or remind them of outstanding payments. These calls are placed over a brilliant automated system that can monitor if the calls were answered or not.</div>
    <div className="common-desc text-center mb-30">NTT DATA Payments&#39; outbound IVR Call flow allows you to make payment through two modes</div>
    </div>   
      <div className="col-md-6">
        <div className="insta-lhs">
          <img src="/images/ivr-outbound-pic.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="insta-rhs">


          <div className="accordion" id="accordionfaq2">
 
  

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
      Automated Integrated
      </button>
    </h2>
    <div id="collapseThree2" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour2" aria-expanded="false" aria-controls="collapsefour2">
      Automated Non-Integrated
      </button>
    </h2>
    <div id="collapsefour2" className="accordion-collapse collapse" aria-labelledby="headingfour2" data-bs-parent="#accordionfaq2">
      <div className="accordion-body">
      
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



<div className="smoother-main-wrp">
<div className="container_1300 d-block">
<div className="row justify-content-center">
  <div className="col-md-10">
   <div className="smooth-lhs text-center">
     <h2 className="common-ttle white-clr">NTT DATA Payments’ seamless IVR flow</h2>
     <p className="common-desc white-clr mb-5">
     The IVR or Interactive Voice Response offers an easy way to provide debit and credit card details with DTMF and accept payments on the phone, without a computer or an internet connection. 
If the payment gateway doesn’t store the credit card details, the details must be entered using DTMF while processing the transaction. Most IVR Payment getaways utilize an outbound dialler to process the transaction.

     </p>
     <p className="common-desc white-clr mb-5">
     Once your customer finishes a purchase, NTT DATA Payments’ IVR processes an outbound call to their registered mobile number and prompts them to confirm their purchase. To complete the transaction, the customer will require to enter their PIN.
     </p>

{/* <a href="" className="btn_style_

white">Sign up</a>
<a href="" className="btn_style5 mx-2">View all</a> */}

    </div> 
  </div>
  {/* <div className="col-md-6">
    <div className="smooth-rhs">
     <img src="/images/smoother-screen.svg" alt="" className="img-fluid" /> 
    </div>
  </div> */}
</div>
 </div> 
</div>









<div className="insta-main-wrp exp-wrp">
<div className="container_1300 d-block">


<div className="row">
 <div className="col-md-5">
   <div className="exp-lhs">
 <h3 className="common-ttle">Shift to our IVR Payment Solution to deliver delightful customer experiences</h3> 
 {/* <a href="" className="btn_style_white">Sign up</a> */}
 </div>
 </div>
 <div className="col-md-7">
 <div className="feat-main-wrp">
 <div className="row">
  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/ivr-p-icn5.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Cost-Effective</p>
      <p className="desc  text-black">Save time and money by implementing NTT DATA Payments IVR and accept payments from your customers over a secured platform.</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/ivr-p-icn6.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Real-Time Transaction & Reconciliation Tool</p>
      <p className="desc  text-black">Now manage all the transactions happening on the IVR Platform on a real-time basis.</p>
    </div>
  </div>

  <div className="col-md-6">
    <div className="feat-card">
      <img src="/images/ivr-p-icn7.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">Risk Management & Security</p>
      <p className="desc  text-black">Experience safe and secure transactions where all the card details given during transactions are encrypted to ensure complete data protection.</p>
    </div>
  </div>
  <div className="col-md-6">
  <div className="feat-card">
      <img src="/images/ivr-p-icn8.svg" alt="" className="img-fluid" />
      <p className="ttle  text-black">The Best Customer Service</p>
      <p className="desc  text-black">Enjoy direct, definite, time-efficient and thorough customer service with NTT DATA Payments IVR System.</p>
    </div>
  </div>

  </div> 
</div>
  </div> 
</div>


 </div> 
</div>

<div className="explore-other-wrp exp-wrp">
<div className="container_1300 d-block">
  <div className="row">
  <div className="col-md-12">
  <h3 className="common-ttle">Seamlessly Integrate IVR with your business</h3> 
  <p className="common-desc">Add the best IVR Payment Gateway in India with your business to ensure easy access with your customers. With IVR, customers can make secure payments anytime through their phones. It offers security and convenience like nothing else. This is possible with the PCI-Compliant IVR Payment Solutions that leverage the latest security features.</p>
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
    <p className="accordion-header" id="headingOne3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
      What is IVR?
      </button>
    </p>
    <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
     Interactive Voice Response (IVR) is a phone system application that prompts callers with recorded messages and options and processes voice input and/or touch-phone keypad selections from these menus. The IVR script responds to this input by providing appropriate information in the form of a voice answer or providing a connection to a &#34;live&#34; operator.
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

<div className="col-xl-3 col-md-4 col-sm-6">
<div className="explore-card explore1">
<h3>POS Machine</h3>  
<p>Receiving card payments in-store or on the go, made easy!</p>
<Link href="/swipecard-pos-machine"><a >Know More</a></Link>
</div>  
</div>  

{/* <div className="col-md-3">
<div className="explore-card explore2">
<h2>IVR Payment</h2>  
<p>Experience lower cost, better efficiency, and safe customer payments by phone </p>
<Link href="/product_ivr">
<a >Know More</a>
</Link>
</div>  
</div>   */}

{/* <div className="col-xl-3 col-md-4 col-sm-6">
<div className="explore-card explore3">
<h3>mGalla
<span>Payment App For Merchants</span></h3>  
<p>Accept payments anytime, anywhere through your mobile</p>
<Link href="/mgalla-payment-app">
<a href="">Know More</a>
</Link>
</div>  
</div>   */}

<div className="col-xl-3 col-md-4 col-sm-6">
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
