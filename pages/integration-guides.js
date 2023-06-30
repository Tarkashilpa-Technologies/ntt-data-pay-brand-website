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
    <li className="breadcrumb-item"><a href="/developer-guide">Developers</a></li>
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
    <button className="nav-link active" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false">Transaction API </button>
    <button className="nav-link" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="true">Invoice Payment Link API</button>
    <button className="nav-link" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false">Penny Drop (Bank Account Verification) API</button>
    <button className="nav-link" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false">Vendor Payment API</button>
    <button className="nav-link" id="v-pills-5-tab" data-bs-toggle="pill" data-bs-target="#v-pills-5" type="button" role="tab" aria-controls="v-pills-5" aria-selected="false">Settlement Account Add/Update APIs</button>
  </div>  
</div>    
</div>
<div className="col-md-6">
<div className="ig-f2-rhs">
<div className="tab-content" id="v-pills-tabContent">
<div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab">
    
    
<h3>Invoice Payment Link API's</h3>
      <h4>Overview: </h4>
      <p>Invoice payment link API module enables you to perform various actions pertaining to invoice generation to accept payments via payment link as an API-based alternative for the same actions performed using the Console.</p>
      <p><b>Get Template API –</b>
        When triggered, with the validation of the request the merchant receives template number and name in response as per the templates created by the merchant.
      </p>
      <p><b>Get Template Details API –</b>
        When triggered, with the validation of the request the merchant receives all details pertaining to the specific template for which the API is triggered.
      </p>
      <p><b>Create Payment Link API –</b>
        The Create Payment Link API is triggered in order to create invoice using a predefined template in the merchant console by the merchant which is sent along with the payment link.
      </p>
      <p><b>Resend Payment Link API –</b>
        The merchant hits this API in order to resend the payment link and invoice to customer.
      </p>
      <p><b>Cancel Payment Link API –</b>
        The merchant hits this API in order to cancel the sent invoice by restricting the ability to make payment using the payment link.
      </p>
      <h4>API Info:</h4>
        <p>API Type: REST<br></br>
          Method: HTTP POST (S2S)<br></br>
          Encryption Type: AES-512<br></br>
          Checksum Type: HMACSHA-512
        </p>
    <div className='d-flex justify-content-end'>
      <a href='/pdf/API/Integration Guides/Invoice Payment Link API/Link Based Payment API V1.2.pdf' className='btn_style1' download={"Link Based Payment API V1.2.pdf"}>Download</a>
    </div>
  </div>
    
  <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab">   
  <h3>Penny Drop (Bank Account Verification) API </h3>
      <h4>Overview: </h4>
      <p>Bank Account Verification API allows you to verify the bank account swiftly and efficiently, ensuring that the customer’s bank account is active, and the details are accurate.</p>
      <h4> Key Features:</h4>
        <p>1. Reduced risk of payment failures and fraudulent transactions</p>
        <p>2.	Comprehensive report accessible using the console entailing detailed information.</p>
        <p>3.	Callback gets triggered for three times if the API response code to NDPS is 200.</p>
      <h4>API Info:</h4>
        <p>API Type: REST<br></br>
          Method: HTTP POST (S2S)<br></br>
          Encryption Type: AES-512<br></br>
          Checksum Type: HMACSHA-512
        </p>
    <div className='d-flex justify-content-end'>
      <a href='/pdf/API/Integration Guides/Penny Drop (Bank Account Verification) API/Penny Drop API.zip' className='btn_style1' download={"Penny Drop API.zip"}>Download</a>
    </div>
  </div>
                
  <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab">
    <h3>Transaction API </h3>
    <h4>Overview: </h4>
    <p>Designed to integrate seamlessly with various platforms. Transaction API facilitates the payment process from the initiation of the transaction to the authorization of the payment by the customer on the payment page or seamlessly and provide the transaction API response.</p>
    <h4> Key Features:</h4>
        <p>1. Single transaction can be settled to multiple accounts using multi-Product approach</p>
        <p>2. The customer account can be verified for each payment made via Net Banking and UPI
        (Use Case : Broker Transactions)
        </p>
        <p>3. Precise mode of payment can be executed to be displayed on payment page</p>
        <p>4. Transactions can be processed directly without redirection to NTT’s payment page
        (Only for PCI-DSS compliant institutions)
        </p>
        <p>5.  Multiple attempts to retry the payment post payment failure while using any payment mode</p>
      <h4>API Info:</h4>
        <p>API Type: REST<br></br>
          Method: HTTP POST (S2S)<br></br>
          Encryption Type: AES-512<br></br>
          Checksum Type: HMACSHA-512
        </p>
    
    <div className='d-flex justify-content-end'>
      <a href='/pdf/API/Integration Guides/Single _ Multi Product API/Transaction_API (Non-Seamless).zip' className='btn_style1' download={"Transaction_API (Non-Seamless).zip"}>Download</a>
    </div>
  </div>
                

  <div className="tab-pane fade" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab">
  <h3>Vendor Payment API </h3>
      <h4>Overview: </h4>
        <p>Designed to integrate seamlessly with various platforms. Payout API enables the Merchant to make payments securely to any vendor or service provider’s bank account. </p>
      <h4>Payment Mode(s): IMPS</h4>           
      <h4> Key Features:</h4>
        <p>1.	Integrates seamlessly with your existing infrastructure</p>
        <p>2.	Designed to handle high transaction volume.</p>
        <p>3.	Real-time notification and comprehensive reports are available to view and download via dashboard.</p>
      <h4>API Info:</h4>
        <p>API Type: REST<br></br>
          Method: HTTP POST (S2S)<br></br>
          Encryption Type: AES-512<br></br>
          Checksum Type: HMACSHA-512
        </p>
    <div className='d-flex justify-content-end'>
      <a href='/pdf/API/Integration Guides/Vendor Payment API/Vendor Payouts.zip' className='btn_style1' download={"Vendor Payment API.zip"}>Download</a>
    </div>               
  </div>

  <div className="tab-pane fade" id="v-pills-5" role="tabpanel" aria-labelledby="v-pills-5-tab">
  <h3>Settlement Account Add/Update APIs </h3>
      <h4>Overview: </h4>
        <p>Settlement Account Add/Update API allows you to verify the bank account swiftly and efficiently, ensuring you that the customer’s bank account is active, and the details are accurate. </p>           
      <h4> Key Features:</h4>
        <p>1. Callback gets triggered for three times if the API response code to NDPS is 200.</p>
      <h4>API's: </h4>
        <p><b>Settlement Account Add/Update API</b><br></br>
        This API is used to Add new settlement Bank Account for an Account ID or to Update the existing Account Number assigned against said MID</p>
        <p><b>Account ID Status Request</b><br></br>This API will be used to retrieve Account Information from NDPS System post the Add/Update Request</p> 
        <p><b>Callback API</b><br></br>It will be triggered once Bank Account is onboarded and will provide information on change of status</p>
        <h4>API Info:</h4>
        <p>API Type: REST<br></br>
          Method: HTTP POST (S2S)<br></br>
          Encryption Type:  None
        </p>
    <div className='d-flex justify-content-end'>
      <a href='/pdf/API/Integration Guides/Settlement Account Add Update API/Settlement Account Add Update APIs_V1.0.pdf' className='btn_style1' download={"Settlement Account Add Update API.pdf"}>Download</a>
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
<a href="/contact-us" className="btn_style1">Contact Us</a>  
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
