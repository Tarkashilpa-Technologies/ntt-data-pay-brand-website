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
        <title>Integrated Payment Solution for your business’ needs |NTT Data Payment Services</title>
        <meta name="description" content="NTT DATA Payment Services’ payment gateway charges are customized as per merchant's needs. Zero setup or hosting cost. NTT DATA payment gateway pricing to fit your needs." />
      

      </Head>

 
    <div className="bnr-home-wrp pricing-pgc-bnr2">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Payment Gateway Charges</h2>
       <p>Most affordable pricing and competitive payment gateway charges to upkeep our vision of providing online payment solutions to every business.</p>
       <Link href="/sign-up">
       <a className='btn_style1'>Sign up Now</a>
       </Link>
     </div>
     </div>
    </div>

  


<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="#">Pricing</a></li>
    <li className="breadcrumb-item active" aria-current="page">Payment Gateway Charges</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway pricing-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Enjoy a seamless transaction experience when using NTT DATA Payments’ online payment gateway.</h2>
<p className="common-desc text-center">You can accept payment via Debit card, Credit card (Domestic &amp; International), Net Banking,
UPI, BharatQR, BNPL, Payment Links, EMI, Challan, Bank’s IMPS &amp; RTGS, Wallets etc.
Whether you are just starting your enterprise, a medium or a big player in the market, we
have the provision to give you the best pricing for our payment gateway service. Apart from
pricing, security and customer service is major concern while choosing a payment gateway.
At NTT DATA Payments, we take utmost care in providing every merchant with a secured
payment gateway with constant customer support for their digital payment needs.</p>
</div>
</div>



<div className="no-hidden-charge-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Simple pricing <br/>
with No hidden charges!</h2>

<div className="no-hcw-inner">
 <div className="row justify-content-center">
  <div className="col-lg-6">
   <div className="m-3 m-xl-2">
     <div className="hcw-table-wrp">
      <table width="100%" cellSpacing={0} cellPadding={0}>
        <tr>
         <th>PRODUCT</th> 
         <th>RATES</th>
        </tr>
        <tr>
        <td>Net Banking </td>
        <td>1.99%</td>
        </tr>
        <tr>
          <td>Credit Card</td>
          <td>1.99%</td>
        </tr>
        <tr>
          <td>International/MCC</td>
          <td>3.95%</td>
        </tr>
        <tr>
          <td>Debit Card</td>
          <td>0.90%</td>
        </tr>
        <tr>
          <td>UPI / GPAY</td>
          <td>NIL&#42; </td>
        </tr>
        <tr>
          <td>AMEX</td>
          <td>3.00%</td>
        </tr>
        <tr>
          <td>Prepaid Wallets </td>
          <td>2.20%</td>
        </tr>
        <tr>
          <td>EMI</td>
          <td>2.20%</td>
        </tr>
      </table>
      <p className="pt-2 font-weight-bold">“&#42;Platform fee levied per transaction basis”</p> 
      </div>   
    </div> 
  </div>
  <div className="col-lg-6">
  <div className="m-3 m-xl-2">
  <div className="hcw-table-wrp">
      <table width="100%" cellSpacing={0} cellPadding={0}>
        <tr>
        <th>Payout</th>
        <th>RATES</th>
        </tr>
        <tr>
          <td>Penny Drop</td>
          <td>Rs.2.85</td>
        </tr>
        <tr>
          <td>Less than INR 1000</td>
          <td>Rs.5.00</td>
        </tr>
        <tr>
          <td>Between INR 1000 
to INR 25000 </td>
          <td>Rs.20.00</td>
        </tr>
        <tr>
          <td>Above INR 25000 </td>
          <td>Rs.40.00</td>
        </tr>
        
      </table> 
      <p className="pt-2 font-weight-bold">“&#42;Setup Cost levied as per merchant category.”</p> 
      </div>  
  </div>  
  </div> 

  {/* <div className="col-md-6">
  <div className="hcw-rhs">
  <div className="hcw-table-wrp">
      <table width="100%" cellSpacing={0} cellPadding={0}>
    
        <tr>
        <th>Setup</th>
        <th>AMC</th>
        </tr>
        <tr>
          <td>15000</td>
          <td>Rs.0</td>
        </tr>
      
      </table> 
      </div>  
  </div>  
  </div>  */}

  </div> 
</div>



</div>
</div>


<div className="hdn-wrp pricing-fold-2">
<div className="container_1300 d-block text-center">
<p>  For enterprise segment & business 
partner enquires please contact us on</p>
<Link href="mailto:Web-Leads@atomtech.in">
<a>Web-Leads@atomtech.in</a>
</Link>
</div>
</div>


<div className="pricing-faq-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Internet Payment Gateway FAQs</h2>
<p className="common-desc text-center">Still scratching your head over payment gateway integration and function? <br/>
These might answer your questions!</p>


<div className="pricing-faq-inner">
<div className="accordion" id="accordionfaq">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Which payments modes do you support?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payments’ Payment Gateway provide myriad payment options catering to the needs of every merchant including Credit-Debit Cards, Net Banking, NEFT, RTGS, IMPS, UPI, Scan and Pay, Google Pay, Challan, EMI, BNPL, Wallets etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Are the payment gateway charges fixed? Can I get customized plans for my business?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Our team of payment experts are well armed to understand your business requirement and suggest the best combination of features for your business and come up with tailored growth-friendly pricing.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What is TDR?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      TDR or Transaction Discount Rate is the cost levied per transaction that a payment gateway charges for the usage.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
      Are there any additional payment gateway charges?
      </button>
    </h2>
    <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Setup fee is a type of payment gateway charge that is levied one time at the time of gateway integration. Annual Maintenance charges are pre-defined and are to be paid once a year.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingfive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
      Are the payment gateway charges deducted on a per transaction basis?
      </button>
    </h2>
    <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      Yes, NTT DATA Payment Services levies Merchant or Transaction Discount Rate, per transaction basis, before settling the amount in your bank account.
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingsix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
      What documents are required for setting up payment gateway with NTT DATA Payment Services?
      </button>
    </h2>
    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      The NTT DATA Payment Services’ KYC entails key details about your business as well as address and identity proof.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingseven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
      When can I start accepting payments post on-boarding NTT DATA Payment Services?
      </button>
    </h2>
    <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      As soon as you’re done submitting your KYC, NTT DATA Payment Services enables you to start collecting hassle free payments instantly.
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header" id="headingeight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
      How long will it take for the amount to be settled in my bank account?
      </button>
    </h2>
    <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingeight" data-bs-parent="#accordionfaq">
      <div className="accordion-body">
      NTT DATA Payment Services follows T+0 cycle or same-day settlement. 
      </div>
    </div>
  </div>





</div> 
</div>


</div>
</div>



<div className="wch-wrp">
 <div className="container_1300 d-block">
<div className="row">
<div className="col-md-7">
 <div className="wch-lhs ">
<h2 className="common-ttle blue-clr">Do you handle a large <br/>
volume of transactions?</h2>  
<p className="common-desc">Then we have a customized plan for you. Get
in touch<br/> 
with us to avail customised payment gateway pricing.</p> 
<Link href="/sign-up">
<a href="" className="btn_style1">Sign Up Now</a>  
</Link>
</div>   
</div>
<div className="col-md-5">
<div className="wch-rhs text-end">
<img src="/images/pricing-payment-gateway-btm.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>







 
    </div>
  )
}
