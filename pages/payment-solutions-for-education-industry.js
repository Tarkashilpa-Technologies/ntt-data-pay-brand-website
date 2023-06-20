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
        <title>Hassle-free online payment solution for education industry | NTT Data Payments</title>
        <meta name="description" content="NTT DATA Payments is a hassle-free online payment solution for the Education Industry which offers secure, reliable, and convenient payments to schools, colleges, universities and edtech." />
      
      
      </Head>

 
    <div className="bnr-home-wrp edu-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Easy payments for schools, colleges and EdTech!</h2>
       <p>A fast, easy and seamless payments infrastructure for education institutions with multiple solutions for acceptance, reconciliation and settlement of fees!</p>
       <Link href="/sign-up">
       <a href=""  className='btn_style1'>Sign up</a>
       </Link>
     </div>
     </div>
    </div>

  


<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="#">Industries</a></li>
    <li className="breadcrumb-item active" aria-current="page">Education</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway retail-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">A complete education payment solution!</h2>
<p className="common-desc text-center">To eliminate the hassles involved in accepting and reconciling fees, NTT DATA Payments offer customized solutions based on an institution’s needs through multiple integrated solutions.</p>
</div>
<div className="spacer-50"></div>
<div className="container">
<div className="row">
<div className="col-md-6 ">
<div className="pg-block">
<img src="/images/edu-icn1.svg" alt="" className="img-fluid" />    
<h2>Schools, colleges, and universities</h2>
<p>Eliminate manual fee collection and bookkeeping with NTT DATA Payments’ secure e-payment which enables you to process online and offline fee payments efficiently!</p>
</div>    
</div>
<div className="col-md-6">
<div className="pg-block">
<img src="/images/edu-icn2.svg" alt="" className="img-fluid" />    
<h2>Coaching institutes and Examination Fee Collectors</h2>
<p>With NTT DATA Payments’ digital solutions, accept seamless examination and coaching fees over all major payment options, including, POS, Net banking, IMPS, Bharat QR, UPI, BNPL.</p>
</div>     
</div>
<div className="col-md-6">
<div className="pg-block">
<img src="/images/edu-icn3.svg" alt="" className="img-fluid" />    
<h2>Edtech and e-learning</h2>
<p>Fee collection with more than a 100 payment options for your online education services with NTT DATA Payments. </p>
</div>    
</div>
<div className="col-md-6">
<div className="pg-block">
<img src="/images/edu-icn4.svg" alt="" className="img-fluid" />    
<h2>Freelancers</h2>
<p>Accept fee payments from your students with or without a website. Make your smartphone your digital payment partner and accept payments with UPI, Payment Links, Bharat QR and mPOS.</p>
</div>     
</div>    
</div>
</div>

</div>


<div className="data-payment-indus">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Streamline payments for Educational Institutions<br/> with NTT DATA Payments</h2>
<p className="common-desc text-center">NTT DATA Payments’ myriad digital payment solutions are tailored to meet the needs of your<br/> educational institution thereby aiding you in effortless acceptance and management of hefty fee amounts.</p>

<div className="data-payment-grid-main">
<div className="row g-0">
<div className="col-md-6">
<div className="row g-0">
<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-light-bg mb15">
 <p className="ttle icn-ipg">Internet Payment<br/> Gateway</p>
 <p className="desc">NTT DATA Payments Online Payment Gateway offers various solutions for processing transactions, is integrated with more than 50 banks and offers 265 + payment options through all major Credit Cards, Debit Cards, IMPS, Net Banking etc., allowing students to pay fees online 24x7 through the institution’s website.
</p>   
</div>

<div className="dp-bx dp-box-smll grey-light-bg">
 <p className="ttle icn-emi">e-Challan<br/>&nbsp;</p>
 <p className="desc">e-Challan allows the parents or students to make payments by generating a challan online, followed by paying at any bank branch PAN India, saving time and money.</p>   
</div>

</div>
<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-dark-bg mb15">
 <p className="ttle">Point of Sale Payments</p>
 <p className="desc">NTT DATA Payments POS terminals come at minimal initial investment and low operational cost, allowing you to accept credit and debit card payments from all major banks.</p>   
</div> 

<div className="dp-bx dp-box-smll blue-light-bg">
 <p className="ttle">Campus Cards</p>
 <p className="desc">NTT DATA Payments’ multi-utility pre-paid Campus Cards are designed to help both Students and Faculty for payment of hostel fees, canteen bills, recharges and acts as a College ID and Attendance card. </p>   
</div> 

</div>    
</div>    
</div>
<div className="col-md-6">
<div className="row g-0">
<div className="col-md-6">
<div className="dp-bx dp-box-smll grey-light-bg mb15">
<p className="ttle">EMI Payments</p>
<p className="desc">Atom provides multi-bank credit card EMI which empowers the parents and students to make payments in quick instalments, making hefty fee payment affordable. </p>   

</div>    
</div>

<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-light-bg">
 <p className="ttle icn-b-qr">BNPL<br/>&nbsp;</p>
 <p className="desc">With BNPL, NTT DATA Payments allow parents to seek instant, comprehensive education loans, facilitating learning and growth of students.</p>   
</div>   
</div>
<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-dark-bg">
 <p className="ttle icn-bnpl">Standing Instructions</p>
 <p className="desc">Standing Instructions allow the institution to automatically debit a certain recurring amount approved by the parents, over a fixed time interval, ensuring timely fee collection.</p>   
</div>  
</div>

<div className="col-md-6">
<div className="dp-bx dp-box-smll grey-light-bg">
 <p className="ttle icn-emi">ERP<br/> Solutions</p>
 <p className="desc">NTT DATA Payments provides integration with ERP solutions facilitating smooth fee collection, reconciliation, and cross-channel settlement. Our customized ERP solutions aid your institution unequivocally by curtailing almost 90% of the manual toil and manage the internal processes smoothly and efficiently.</p>   
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
<h2 className="common-ttle white-clr text-center">Go cashless and enhance your <br/>educational institution’s fee management system</h2>

<p className="common-desc text-center white-clr">Still accustomed to the error-prone manual process due to either lack of viable options<br/> or hesitancy towards adopting digital ones? With NTT DATA Payments,<br/> elevate your fee acceptance experience along with multi-account settlement and reconciliation.</p>

<div className="hdn-cvr">

<div className="row">
      <div className="col-md-6 order-last">
        <div className="insta-lhs">
          <img src="/images/edu-rhs.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6 order-first">
        <div className="insta-rhs">

  <div className="accordion" id="accordionfaq">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Reduce cash handling
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Put an end to faulty and tedious manual processes of fee collection and book-keeping. Elevate fee payment and acceptance experience with NTT DATA Payments solutions for Educational Institutes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Increased efficiency
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Faster, safer, and instant. With NTT DATA Payments, accept fees digitally with zero down-time, over a secured platform. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Digital trail
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payments enables ERP integration, streamlining and digitizing your educational institute’s entire process of fee collection, reconciliation, and settlement.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Data insights
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payments’ powerful dashboard allows real-time monitoring of transactions, generating and downloading reports of fee payment collection. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Settlement
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Get your fee amount settled in your bank account instantly (T+0), on the same day (T+1) or as per your convenience (T+n).
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

<h2 className="common-ttle text-center">Our key clients from<br/> the education industry</h2>

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
      <SwiperSlide><img src='/images/vip-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/greenwood-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/madras-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/loyola-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/don-bosco-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/khaitan-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/bms-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/ryan-logo.jpg'/></SwiperSlide>
    </Swiper>
    </div>

</div>



<div className="wch-wrp">
 <div className="container_1300 d-block">
<div className="row">
<div className="col-md-7">
 <div className="wch-lhs pt-0">
<h2 className="common-ttle blue-clr">Transform digital payments and enable instant payment acceptance for schools, colleges, and coaching centres.</h2>   
<Link href="/sign-up">
<a  className="btn_style1">Sign Up Now</a>  
</Link>
</div>   
</div>
<div className="col-md-5">
<div className="wch-rhs text-end">
<img src="/images/education-btm-pic.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>







 
    </div>
  )
}
