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
          "text": "NTT DATA Payments has the best payment gateway in India, whose bullet-proof security is backed by PCI DSS 3.2V compliance and is 256-bit encrypted, ensuring a safe and reliable transactional atmosphere."
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

 
    <div className="bnr-home-wrp integration-guides-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Hassle free guides for a quick and seamless Payment Gateway Integration</h2>
     </div>
     </div>
    </div>

  



<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="#">Developers</a></li>
    <li className="breadcrumb-item active" aria-current="page">Integration Guides</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway ig-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Integration Guides</h2>

<div className="ig-input-bx">
<input type="text" placeholder="Search docs for payments, API and more" />
</div>


</div>
</div>



<div className="ig-fold2">
<div className="row g-0">
<div className="col-md-6">
  <div className="ig-f2-lhs">
    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className="nav-link active" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="true">Merchant Integration API</button>
        <button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Merchant Multi Product Integration API</button>
        <button className="nav-link" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Broker Netbanking Integration API</button>
        <button className="nav-link" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false">Broker UPI Integration API</button>
        <button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Merchant Payment Module Link API</button>

        <button className="nav-link" id="v-pills-6-tab" data-bs-toggle="pill" data-bs-target="#v-pills-6" type="button" role="tab" aria-controls="v-pills-6" aria-selected="false">Merchant Invoice Base Module Link API</button>
        <button className="nav-link" id="v-pills-7-tab" data-bs-toggle="pill" data-bs-target="#v-pills-7" type="button" role="tab" aria-controls="v-pills-7" aria-selected="false">Merchant Seamless Integration API</button>
        <button className="nav-link" id="v-pills-8-tab" data-bs-toggle="pill" data-bs-target="#v-pills-8" type="button" role="tab" aria-controls="v-pills-8" aria-selected="false">Other APIs if any</button>

      </div>  
  </div>    
</div>
<div className="col-md-6">
<div className="ig-f2-rhs">
<div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
    
      <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/dummy.pdf' className='btn_style1' download={"dummy.pdf"}>Download</a>
      </div>
    </div>
                
    <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>
                
    <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>
                

    <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>

    <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>

    <div className="tab-pane fade" id="v-pills-6" role="tabpanel" aria-labelledby="v-pills-6-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>

    <div className="tab-pane fade" id="v-pills-7" role="tabpanel" aria-labelledby="v-pills-7-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
      </div>
    </div>

    <div className="tab-pane fade" id="v-pills-8" role="tabpanel" aria-labelledby="v-pills-8-tab">
    <h3>Background:</h3>
      <p>This note briefly describes the mode/manner of technical integration between Atom and Merchant in respect of powering online transactions.</p>
      <h3>1. Electronic Payment Interface</h3>
      <p>Atom offers electronic payment interface services to merchant organizations through its partnership with various banks and card companies.</p>
      <p>The Electronic Payment Interface (EPI) is an API provided by atom Technologies on its Paynetz.</p>
      <p>Platform to facilitate electronic commerce transactions.</p>
      <p>This facility allows for the end users to make electronic payment through credit card and online net banking accounts.</p>
      <p>Atom also provides a Merchant Console that support various features including transaction settlement reports, query module, refund module.</p>
      <h3>Process Flow</h3>
      <p>This section briefly details the overall customer transaction flow.</p>
      <h3>Transaction Process</h3>
      <p>Customer logs-in at the merchant website and selects the product / service to purchase. Based on the purchase amount, appropriate transaction amount would be computed at the merchant website.</p>
      <p>Customer then decides to make payment at merchant website.</p>
      <p>Merchant website will log the order by generating a unique Order Number; and establish a connection with the Atom Electronic Payment Interface [refer the section on Payment Request.</p>
      <div className='d-flex justify-content-end'>
        <a href='/' className='btn_style1'>Download</a>
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
 <div className="wch-lhs">
<h2 className="common-ttle blue-clr">Need assistance with integration or unable to find the API for your platform?</h2>   
<a href="" className="btn_style1">Contact Us</a>  
</div>   
</div>
<div className="col-md-5">
<div className="wch-rhs text-end">
<img src="/images/integration-guides-btm-pic.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>

 
    </div>
  )
}
