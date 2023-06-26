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
        <title>NTT DATA PAYMENTS Developers Guide | Payment Gateway Integration</title>
        <meta name="description" content="Integrate payment gateway in your website easily, within minutes, using our developer friendly payment gateway integration guides and kits and start accepting online payments, today." />
      
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

 
    <div className="bnr-home-wrp dev-landing-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Seamless Payment Gateway Integration</h2>
       <h3>No Coding Experience?</h3>
       <p>No worries. With NTT DATA Payments, enjoy quick and painless Payment Gateway Integration with your mobile application, website, and e-commerce platform.</p>
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
    <li className="breadcrumb-item active" aria-current="page">Developers Guide</li>
  </ol>
</div>
</nav>



<div className="dev-fold2">
<div className="container_1300 d-block">
<div className="fold2-inner">
 <h2 className="common-ttle text-center">With our powerful yet user-friendly SDKs, get ready to accept online payments through your website or mobile app.</h2> 
 <p className="common-desc text-center">Experience hassle-free payment gateway integration for your website, mobile application, and e-commerce platform, without prior coding expertise. NTT DATA Payments’ user-friendly APIs offers detailed documentation and dedicated technical support that enables your business to accept secured online payments.</p>
</div>

<div className="fold2-grid-cvr">
 <div className="row">
 <div className="col-md-4">
  <div className="f2grid-bx">
  <div className="grd-pic">  
  <img src="/images/dev1.png" alt="" className="img-fluid" /> 
  </div> 
  <div className='desc-hldr'>
    <p>Integration<br/> 
Guides</p>
<Link href="/integration-guides">
       <a href=""  className='btn_style1'>Know More</a>
       </Link>
  </div>
  </div> 
 </div>
 <div className="col-md-4">
 <div className="f2grid-bx">
 <div className="grd-pic">  
  <img src="/images/dev2.png" alt="" className="img-fluid" />  
  </div>
  <div className='desc-hldr'>
    <p>API <br/>
      Reference</p>
<Link href="/api-reference">
       <a href=""  className='btn_style1'>Know More</a>
       </Link>
  </div>
  </div> 
 </div>
 <div className="col-md-4">
 <div className="f2grid-bx">
 <div className="grd-pic">  
  <img src="/images/dev3.png" alt="" className="img-fluid" />  
  </div>
  <div className='desc-hldr'>
    <p>Integration <br/>
Kits</p>
<Link href="/integration-kits">
       <a href=""  className='btn_style1'>Know More</a>
       </Link>
  </div>
  </div>  
  </div>  
 </div> 
</div>

</div>
</div>

<div className="product-feature-wrp dev-fold3">
<div className="container_1300 d-block">
<h2 className="common-ttle white-clr text-center">How To Integrate NTT DATA’s Payment Gateway?</h2>
<p className='common-desc white-clr text-center'>Once registered, NTT DATA Payments will render you with payment gateway integration kits, inculcating merchant 
keys and other necessary details required for a seamless experience. NTT DATA Payments aims at delivering the most convenient way to integrate a payment gateway for your online business, making it a simple 4-step process.</p>

<div className="feat-main-wrp">
 <div className="row justify-content-center">

  <div className="col-md-3">
    <div className="feat-card">
      <img src="/images/dev4.png" alt="" className="img-fluid" />
      <p className="ttle">API reference through Integration Guides</p>
      <p className="desc">Integration Guides tab gives you the freedom to explore multiple API documents available on our platform which will assist you towards a smoother integration.</p>
    </div>
  </div>

  <div className="col-md-3">
    <div className="feat-card">
      <img src="/images/dev5.png" alt="" className="img-fluid" />
      <p className="ttle">Discover SDKs in Integration kits</p>
      <p className="desc">Get the latest version of SDKs with step-by-step integration assistance for your development platform, provided by NTT DATA Payments.</p>
    </div>
  </div>

  <div className="col-md-3">
    <div className="feat-card">
      <img src="/images/dev6.png" alt="" className="img-fluid" />
      <p className="ttle">Final Integration<br/>&nbsp;</p>
      <p className="desc">With the right SDK and Key implementation, you shall be able to seamlessly accept payments on your website through NTT DATA’s payment gateway.</p>
    </div>
  </div>

  <div className="col-md-3">
    <div className="feat-card">
      <img src="/images/dev7.png" alt="" className="img-fluid" />
      <p className="ttle">API reference for a smoother gateway interface</p>
      <p className="desc">Progress towards an effortless payment gateway integration experience with our straight 
forward and easy API.</p>
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
<img src="/images/dev-btm-pic.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>

 
    </div>
  )
}
