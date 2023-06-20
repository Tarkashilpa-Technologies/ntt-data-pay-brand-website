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
        <title>Comprehensive Digital Payment Solutions for the Government Sector | NTT DATA Payments</title>
        <meta name="description" content="NTT DATA Payments is a leading provider of comprehensive digital payment solutions for the government sector. We provide end-to-end services that enable our merchants to accept, process and pay all forms of digital payments." />
      
        
      </Head>

 
    <div className="bnr-home-wrp gov-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>A reliable payment solution for government agencies</h2>
       <p>NTT DATA Payments offers a faster, efficient, and robust way for government organisations to accept digital payments.</p>
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
    <li className="breadcrumb-item active" aria-current="page">Government Sector</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway retail-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Ending payment acceptance hassles with NTT DATA Payments digital solutions </h2>
<p className="common-desc text-center">Ensure seamless and safe payment process with NTT DATA Payments digital solutions for government organisations</p>
</div>
</div>


<div className="data-payment-indus">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Taking strides towards the<br/> cashless society with NTT DATA Payments.</h2>

<div className="data-payment-grid-main">
<div className="row g-0">
<div className="col-md-6">
<div className="row g-0">
<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-light-bg mb15">
 <p className="ttle icn-ipg">Online Payment Gateway</p>
 <p className="desc">Accept payments through all major payment options including IMPS, Credit and Debit Card, Net Banking over 50+ banks over a secured online portal.</p>   
</div>

<div className="dp-bx dp-box-smll grey-light-bg">
 <p className="ttle icn-multi-bank">Multi-bank<br/> EMI</p>
 <p className="desc"> Over 10+ major bank EMI support with NTT DATA Payments to make sure that your customers can break the payment down into simpler, affordable instalments.</p>   
</div>

</div>
<div className="col-md-6">
<div className="dp-bx dp-box-big blue-dark-bg post-bg">
 <p className="ttle">Point of Sale Terminals</p>
 <p className="desc">Accept counter or walk-in payments from your customers through NTT DATA Payments robust POS machines which can easily integrate with your billing and management system.</p>   
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
 <p className="desc">Instantly accept payments or taxes in your bank account through VPA, without revealing any crucial banking details.</p>      
</div>
<div className="col-md-6">
<img src="/images/upi-1.png" alt="" className="img-fluid" />
</div> 
 </div>
</div>    
</div>

<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-light-bg">
 <p className="ttle icn-b-qr">Bharat<br/> QR</p>
 <p className="desc">Enable hassle-free payments and tax collection by allowing payment to be made through a simple scan. </p>   
</div>   
</div>
<div className="col-md-6">
<div className="dp-bx dp-box-smll blue-dark-bg">
 <p className="ttle icn-challan">Challan<br/>&nbsp;</p>
 <p className="desc">Set pre-defined session time-out if the transaction doesn&#39;t get an approval from the bank within a specified time with NTT DATA Payments challan option.</p>   
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
<h2 className="common-ttle white-clr text-center">How NTT DATA Payments can<br/> help digitise government payments</h2>

<div className="hdn-cvr">

<div className="row">
      <div className="col-md-6 order-last">
        <div className="insta-lhs">
          <img src="/images/gov-rhs.svg" alt="" className="img-fluid" />
        </div>
      </div>
      <div className="col-md-6 order-first">
        <div className="insta-rhs">

  <div className="accordion" id="accordionfaq">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Session Time Out for transactions
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Configure a pre-defined session time out for transactions on your portal if the payment doesn&#39;t get an approval from the bank.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Precise challan expiry
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      With NTT DATA Payments set a challan expiry post which the amount will be auto refunded to the customers. 
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Same Day Settlement
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Still waiting for your payments to be settled? With NTT DATA Payments, get your payments settled on T+0 cycle or same day basis.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Comprehensive Dashboard
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payments provides a robust merchant dashboard which can be customized as per you needs, and lets you monitor transactions in a real-time basis.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Secured with PCI DSS
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payments keep your transactions safe and impenetrable with PCI DSS 3.2V compliance and 256-bit SSL encryption.
      </div>
    </div>
  </div>

  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingsix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      Analyse your income
      </button>
    </h2>
    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Track your settlements, monitor your payments, and initiate refunds through a single robust dashboard. 
      </div>
    </div>
  </div> */}



</div>
        </div>
      </div>
    </div>

</div>

</div>
</div>



<div className="okc-wrp">
<div className="container_1300 d-block">

<h2 className="common-ttle text-center">Our key clients from<br/> the Government Sector</h2>

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
      <SwiperSlide><img src='/images/KarnatakaOneLogo-1.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/ksedc-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/railtel-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/asfpl-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/tstsl-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/stock-holding-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/msrtc-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/cgc-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/mpsedc-logo.jpg'/></SwiperSlide>
      <SwiperSlide><img src='/images/upsrtc-logo.jpg'/></SwiperSlide>
    </Swiper>
    </div>

</div>



<div className="wch-wrp">
 <div className="container_1300 d-block">
<div className="row">
<div className="col-md-7">
 <div className="wch-lhs">
<h2 className="common-ttle blue-clr">Fully integrated digital payment solutions for easy tax collection, tracking of e-tendering and e-auctions.</h2>   
<Link href="/sign-up">
<a  className="btn_style1">Sign Up Now</a>  
</Link>  
</div>   
</div>
<div className="col-md-5">
<div className="wch-rhs text-end">
<img src="/images/gov-btm-pic.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>







 
    </div>
  )
}
