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
        <title>Best POS card swipe machine providers in India | POS machine Companies in India</title>
        <meta name="description" content="Are you Looking for the best POS machine in India? Look no further. With NTT DATA Payment Services India, accept credit and debit card payments with card swipe POS machines for your business, in-store or on the go." />
        <link rel="canonical" href="https://www.nttdatapay.com/swipecard-pos-machine" />
        <script
      type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is a Card Swipe/ POS machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A POS machine is a terminal that enables you to collect payments from your customers through credit and debit cards in store or on the go."
        }
      },{
        "@type": "Question",
        "name": "How to get a swipe machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Get NTT DATA Payments’ tailor-made top swipe machine in India for your business within 48 hours by signing up on our website."
        }
      },{
        "@type": "Question",
        "name": "Is accepting card payments through the POS terminal safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our bulletproof online security is backed with PCI DSS v 3.2.1 compliance and 256-bit encryption, ensuring a safe transaction. With NTT DATA Payments- one of the best POS machine providers in India, be a part of our comprehensive retailer family."
        }
      },{
        "@type": "Question",
        "name": "Do you provide training to operate POS machines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTT DATA Payments provides basic operational and technical training to the merchants to use the best POS machine in India."
        }
      },{
        "@type": "Question",
        "name": "Do you offer all types of POS terminals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NTT DATA Payments provides myriad Card Swipe payment solutions made to suit your business’s needs. This includes PSTN POS, GPRS POS, WiFi, Android and mPOS."
        }
      },{
        "@type": "Question",
        "name": "What are the documents required to get a POS machine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Below are the documents required:
    Letter of Engagement
    Bank Details
    Identity Proof
    Business Proof"
        }
      },{
        "@type": "Question",
        "name": "Do you charge any enrolment or setup fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, we levy a minimum amount of Rs.1500 as an enrolment fee for the top swipe machine in India, but currently, it is FREE! So, order yours now!"
        }
      },{
        "@type": "Question",
        "name": "Is there an annual maintenance charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As one of the best POS machine companies in India, we have no service charge and AMC for the initial 2 years. After two years, we levy a certain percentage for maintenance and repair."
        }
      },{
        "@type": "Question",
        "name": "In how many days will I receive the payment in my account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work on a T+1 cycle on crediting the amount back to your account, where T refers to the date of the transaction followed by 1 working day."
        }
      },{
        "@type": "Question",
        "name": "Can I link it with my existing bank account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can link our top swipe machine in India with your existing bank account."
        }
      }]
    }
    
    ` }}
  />
        
        
      </Head>


    <div className="bnr-home-wrp product-pos-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h1>Your one-stop solution for all card payment hassles!</h1>
       <p>Boost your sales and collect card payments with NTT DATA Payments-one of the top POS machine providers in India. </p>
       <Link href="/sign-up"><a href=""  className='btn_style1'><p>Sign up now</p></a></Link>
       
       

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
    <li className="breadcrumb-item active" aria-current="page">POS Machine</li>
  </ol>
</div>
</nav>



<div className="powerful-gateway">
<div className="container_1300 d-block">
 <h2 className="common-ttle text-center">Our diverse range of Point of Service card swipe machines offers tailored solutions to small, medium, and large business enterprises</h2> 
<p className="common-desc text-center">As providers of the best card swipe machine in India, we’re at your service to deliver POS solutions that seamlessly integrate with your billing system, delivering a unified experience of unmatched efficacy and helping you serve your customers quicker and better.</p>

<div className="product-cnt-pic text-center">
 <img src="/images/m-pos-first-fold.svg" alt="best-card-swipe-machine-in-india" className="img-fluid" /> 
</div>

</div>
</div>




<div className="tailor-made-wrp">
<div className="container_1300 d-block">
<div className="row">
 <div className="col-md-6">
  <div className="tmw-lhs">
   <h3 className="common-ttle">A multi-terminal support approach to escalate your business</h3> 
   {/* <p className="common-desc">With our 360-degree payment solutions, we cover all business types, be it online or offline, big or small.</p> */}
   {/* <a href="" className="btn_style1">Know More</a> */}
   <Link href="/sign-up"><a href=""  className='btn_style1'><p>Sign up now</p></a></Link>
  </div>
  </div> 

<div className="col-md-6">
 <div className="tmw-rhs">


 <Swiper className="tmw-sldr"
 modules={[Navigation]}
 navigation
//  loop={true}
 breakpoints={{
  // when window width is >= 640px
  0: {
   
    slidesPerView: 1,
  },
  640: {
   
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    
    slidesPerView: 2,
  },
}}
      spaceBetween={20}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/pos-grid-1.jpg" alt="best-pos-machine-in-india" />
       <div className="desc-card">
        <h4>PSTN POS</h4> 
        <p>Perfect for a traditional retail business with a cashier at the checkout point, the PSTN POS terminals provide real-time communication of payments.</p>
        {/* <a href="" className="btn_style4">Know More</a> */}
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/pos-grid-2.jpg" alt="best-swipe-machine-in-india" />
        <div className="desc-card">
        <h4>GPRS POS</h4> 
        <p>A simple, secured, and accessible option, NTT DATA Payments’ GPRS POS Machine functions through a SIM card to enable wireless payments.</p>
        {/* <a href="" className="btn_style4">Know More</a> */}
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/pos-grid-3.jpg" alt="" />
        <div className="desc-card">
        <h4>Wi-Fi POS</h4> 
        <p>A robust yet convenient device, NTT DATA Payments Wi-Fi POS equips any business to accept card payments over a smooth Wi-Fi network with just one tap!</p>
        {/* <a href="" className="btn_style4">Know More</a> */}
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/pos-grid-4.jpg" alt="" />
        <div className="desc-card">
        <h4>Android POS</h4> 
        <p>Optimize performance, productivity and security with best-in-class digital experience for your in-store payment acceptance over Debit and Credit Cards, Contactless cards and QR code. </p>
        {/* <a href="" className="btn_style4">Know More</a> */}
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/pos-grid-5.jpg" alt="" />
        <div className="desc-card">
        <h4>mPOS</h4> 
        <p>As one of the best POS machine companies in India, NTT DATA Payments’ mPOS device offers an affordable and seamless option to receive card payments on the go.</p>
        {/* <a href="" className="btn_style4">Know More</a> */}
       </div>
      </SwiperSlide>
      
    </Swiper> 
  </div> 
</div>

</div>
</div>
</div>








{/* */}


<div className="product-feature-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle white-clr text-center">Elevate your card payment acceptance experience with NTT DATA Payments</h2>

<div className="feat-main-wrp">
 <div className="row">
  <div className="col-md-4">
    <div className="feat-card">
      <img src="/images/pos-icn1.svg" alt="" className="img-fluid" />
      <p className="ttle">One of the best in the industry</p>
      <p className="desc">Providing the best card swipe machine in India for decades, NTT DATA Payments service millions of merchants including Big Bazar, Lifestyle, Shoppers Stop, etc.</p>
    </div>
  </div>
  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/pos-icn2.svg" alt="" className="img-fluid" />
      <p className="ttle">Tailor-made for every business</p>
      <p className="desc">Your business is unique, and so should your payment solutions be. We understand your business needs and help you choose the best card payment acceptance experience.</p>
    </div>
  </div>
  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/pos-icn3.svg" alt="" className="img-fluid" />
      <p className="ttle">Easy Onboarding</p>
      <p className="desc">48 hours - that’s all the time we need to process your request and deliver the best POS machine in India to you!</p>
    </div>
  </div> 

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/pos-icn4.svg" alt="" className="img-fluid" />
      <p className="ttle">Power of EMI</p>
      <p className="desc">NTT DATA Payments’ multi-bank credit card EMI solution helps you sell high valued commodities through easy monthly installments. </p>
    </div>
  </div> 

  <div className="col-md-4">
  <div className="feat-card">
      <img src="/images/pos-icn5.svg" alt="" className="img-fluid" />
      <p className="ttle">Affordable Pricing</p>
      <p className="desc">Our payments solution requires a minimal initial investment with low operation and maintenance costs.</p>
    </div>
  </div> 


  </div> 
</div>
<div className="row"><div className="col-md-12 mt-5 text-center"><Link href="/sign-up"><a href="" className="btn_style3">Sign up now</a></Link></div></div>
 </div> 
</div>





<div className="explore-other-wrp exp-wrp mob-text-center">
<div className="container_1300 d-block">
  <div className="row">
  <div className="col-md-6">
  <h3 className="common-ttle">Ready to deploy POS Solutions for Banks, Acquirers and Payment Facilitators</h3> 
  <p className="common-desc">With NTT DATA Payments, open the doors to growth and development with an end-to-end solution, leading to swift customer acquisition and open new streams of revenue.
Our ready to deploy POS helps meet the digital demands and offers several value-added services to suit your comprehensive merchant base. </p>
  
  </div>  

<div className="col-md-1"></div>

  <div className="col-md-5">
 
 <h3 className="common-ttle ">Open new avenues to a recurring income </h3> 
 <p className="common-desc">Become an NTT DATA Payments POS Reseller. Help us in making our business more profitable and earn generous income by becoming an NTT DATA Payments POS device reseller in return.</p>
 {/* <a href="" className="btn_style_white">Sign up</a> */}

 <p className="common-desc  mt-30"><strong>What will the reseller earn?</strong></p>
 {/* <a href="" className="btn_style_white">Sign up</a> */}
 <ol>
  <li>10-15% of the POS installation commission.</li>
  <li>A regular income of the difference in markup rate over base rate on Credit and Debit Cards.</li> 
 </ol>
 <Link href="/sign-up"><a href="" className="btn_style1" ><p>Sign up</p></a></Link>
 </div>

  </div>
</div>
</div>








{/* <div className="product-feature-wrp pt-100 pb-100 mob-text-center">
<div className="container_1300 d-block">

<div className="row">
  <div className="col-md-8">
  <h2 className="common-ttle white-clr">Got an NTT DATA Payments POS? Request for services here!</h2>
  </div>
  <div className="col-md-4">
  <div className="row">
  <div className="col-md-12"><a href="" className="btn_style3">POS Paper Roll</a></div>
  <div className="col-md-12 mt-20"><a href="" className="btn_style3">EDC Machine related issue</a></div>
  <div className="col-md-12 mt-20"><a href="" className="btn_style3">Require Training</a></div>
</div> 
  </div>
</div>





 </div> 
</div> */}



<div className="boost-product-wrp">
<div className="container_1300 d-block">
<div className="row">
<div className="col-md-12">
 <div className="boost-lhs-wrp">
<h2 className="common-ttle">Why NTT DATA Payments POS Machine is your ultimate tool for growth</h2>  

<div className="boost-sldr-wrp">
<Swiper
     // modules={[Pagination]}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="row">
      <div className="col-md-4">
      <div className="boost-card">
      <img src="/images/pos-icn6.svg" alt="" className="img-fluid" />  
      <h3>Quick Settlement</h3>
      <p>As one of the best POS machine companies in India, we offer a swift and automatic settlement process to ensure your earnings reflect in your bank account the very next day. </p>
      </div> 
      </div>
      <div className="col-md-4">
      <div className="boost-card">
      <img src="/images/pos-icn7.svg" alt="" className="img-fluid" />  
      <h3>Secured Transactions</h3>
      <p>Your security is our top most priority. NTT DATA Payments promotes bank-level security with PCI DSS 3.2.1v compliance and 256-bit encryption.</p>
      </div>  
      </div>
      <div className="col-md-4">
      <div className="boost-card">
      <img src="/images/pos-icn8.svg" alt="" className="img-fluid" />  
      <h3>Comprehensive Dashboard to Monitor Transactions</h3>
      <p>Monitor real-time payments, along with refunds, chargebacks and settlement with our robust merchant console. </p>
      </div>  
      </div>
      <div className="col-md-4">
      <div className="boost-card">
      <img src="/images/pos-icn9.svg" alt="" className="img-fluid" />  
      <h3>Accept all Major Debit and Credit Cards</h3>
      <p>As the providers of the best POS machine in India, we accept all major Debit and Credit cards.</p>
      </div> 
      </div>
      <div className="col-md-4">
      <div className="boost-card">
      <img src="/images/pos-icn10.svg" alt="" className="img-fluid" />  
      <h3>Centralized Help Desk</h3>
      <p>Round the clock service to make sure your concerns and queries never go unaddressed. </p>
      </div> 
      </div>


      </div>  
      </SwiperSlide>
     
    </Swiper>
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
  <h2 className="common-ttle text-center">Customizable card payment acceptance solutions across businesses</h2> 
<p className="common-desc  pb-20 text-center">Big, small, or medium- our POS solutions are made to fit all your card payment acceptance needs. </p>
  <div className="boost-sldr-wrp">
<Swiper
     // modules={[Pagination]}
      pagination={{ clickable: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
      <div className="row">
      <div className="col-md-3 col-6">
      <div className="boost-card pb-20">
      <img src="/images/custom-icn1.svg" alt="" className="img-fluid" />    
      <h3>Retail</h3>
      
      </div> 
      </div>
      <div className="col-md-3 col-6">
      <div className="boost-card pb-20">
      <img src="/images/custom-icn2.svg" alt="" className="img-fluid" />  
      <h3>Restaurant</h3>
      
      </div>  
      </div>
      <div className="col-md-3 col-6">
      <div className="boost-card pb-20">
      <img src="/images/custom-icn3.svg" alt="" className="img-fluid" />  
      <h3>Education</h3>
      
      </div>  
      </div>
      <div className="col-md-3 col-6">
      <div className="boost-card pb-20">
      <img src="/images/custom-icn4.svg" alt="" className="img-fluid" />  
      <h3>Entertainment</h3>
      
      </div> 
      </div>
      <div className="col-md-3 col-6">
      <div className="boost-card  pb-20">
      <img src="/images/custom-icn5.svg" alt="" className="img-fluid" />  
      <h3>Home Delivery</h3>
      
      </div> 
      </div>

      <div className="col-md-3 col-6">
      <div className="boost-card  pb-20">
      <img src="/images/custom-icn6.svg" alt="" className="img-fluid" />    
      <h3>Bill Collection</h3>
      
      </div> 
      </div>

      <div className="col-md-3 col-6">
      <div className="boost-card  pb-20">
      <img src="/images/custom-icn7.svg" alt="" className="img-fluid" />  
      <h3>Hospital and Healthcare</h3>
      
      </div> 
      </div>


      <div className="col-md-3 col-6">
      <div className="boost-card  pb-20">
      <img src="/images/custom-icn8.svg" alt="" className="img-fluid" />   
      <h3>Travel and Hospitality</h3>
      
      </div> 
      </div>


      </div>  
      </SwiperSlide>
     
    </Swiper>
</div>

<p className="common-desc text-center"><strong>Don’t wait to accept card payments. Get your NTT DATA Payments POS within 48 hours!</strong></p>
  
 <div className='text-center'><Link href="/sign-up"><a href=""  className='btn_style1'><p>Sign up now!</p></a></Link></div>
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
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
      What is a Card Swipe/ POS machine?
      </button>
    </p>
    <div id="collapseOne1" className="accordion-collapse collapse" aria-labelledby="headingOne1" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      A POS machine is a terminal that enables you to collect payments from your customers through credit and debit cards in store or on the go. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingOne2">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">
      How to get a swipe machine?
      </button>
    </p>
    <div id="collapseOne2" className="accordion-collapse collapse" aria-labelledby="headingOne2" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Get NTT DATA Payments’ tailor-made top swipe machine in India for your business within 48 hours by signing up on our website.
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <p className="accordion-header" id="headingOne3">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="true" aria-controls="collapseOne3">
      Is accepting card payments through the POS terminal safe?
      </button>
    </p>
    <div id="collapseOne3" className="accordion-collapse collapse" aria-labelledby="headingOne3" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Yes, our bulletproof online security is backed with PCI DSS v 3.2.1 compliance and 256-bit encryption, ensuring a safe transaction. With NTT DATA Payments- one of the best POS machine providers in India, be a part of our comprehensive retailer family.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <p className="accordion-header" id="headingOne4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="true" aria-controls="collapseOne4">
      Do you provide training to operate POS machines?
      </button>
    </p>
    <div id="collapseOne4" className="accordion-collapse collapse" aria-labelledby="headingOne4" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      NTT DATA Payments provides basic operational and technical training to the merchants to use the best POS machine in India.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne5">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5">
      Do you offer all types of POS terminals?
      </button>
    </p>
    <div id="collapseOne5" className="accordion-collapse collapse" aria-labelledby="headingOne5" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      NTT DATA Payments provides myriad Card Swipe payment solutions made to suit your business’s needs. This includes PSTN POS, GPRS POS, WiFi, Android and mPOS.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne6">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="true" aria-controls="collapseOne6">
      What are the documents required to get a POS machine?

      </button>
    </p>
    <div id="collapseOne6" className="accordion-collapse collapse" aria-labelledby="headingOne6" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Below are the documents required:
     <ol>
       <li>Letter of Engagement</li>
       <li>Bank Details</li>
       <li>Identity Proof</li>
       <li>Business Proof</li>
     </ol>
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne7">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7" aria-expanded="true" aria-controls="collapseOne7">
      Do you charge any enrolment or setup fees?
      </button>
    </p>
    <div id="collapseOne7" className="accordion-collapse collapse" aria-labelledby="headingOne7" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Usually, we levy a minimum amount of Rs.1500 as an enrolment fee for the top swipe machine in India, but currently, it is FREE! So, order yours now!
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne8">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne8" aria-expanded="true" aria-controls="collapseOne8">
      Is there an annual maintenance charge?
      </button>
    </p>
    <div id="collapseOne8" className="accordion-collapse collapse" aria-labelledby="headingOne8" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      As one of the best POS machine companies in India, we have no service charge and AMC for the initial 2 years. After two years, we levy a certain percentage for maintenance and repair.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne9">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne9" aria-expanded="true" aria-controls="collapseOne9">
      In how many days will I receive the payment in my account?
      </button>
    </p>
    <div id="collapseOne9" className="accordion-collapse collapse" aria-labelledby="headingOne9" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      We work on a T+1 cycle on crediting the amount back to your account, where T refers to the date of the transaction followed by 1 working day.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <p className="accordion-header" id="headingOne10">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne10" aria-expanded="true" aria-controls="collapseOne10">
      Can I link it with my existing bank account?
      </button>
    </p>
    <div id="collapseOne10" className="accordion-collapse collapse" aria-labelledby="headingOne10" data-bs-parent="#accordionExample3">
      <div className="accordion-body">
      Yes, you can link our top swipe machine in India with your existing bank account.
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

{/* <div className="col-md-3">
<div className="explore-card explore1">
<h2>POS Machine</h2>  
<p>Receiving card payments in-store or on the go, made easy!</p>
<Link href="/product_pos"><a >Know More</a></Link>
</div>  
</div>   */}

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
