import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useState } from "react";
//import styles from "../styles/Home.module.scss";
import { Navigation,Pagination,Autoplay} from "swiper";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { useSSRSafeId } from '@react-aria/ssr';
//import {Tabs, Tab, Nav} from "bootstrap";  


export default function product1() {
const [selectedHref,setSelectedHref]= useState(null)
  const WebsiteData = [
    {
      id: 'ASPNET',
      name: 'ASP.NET',
      url: "/images/asp.net.png",
      href: "/webkits/Website/ASP.NET FORWARD SLASH C SHARP.zip",
      width: 50,
    },
    {
      id: 'CAKEPHP',
      name: 'CAKE PHP',
      url: "/images/cake.png",
      href: "/webkits/Website/CAKE PHP.zip",
    },
    {
      id: 'CODEIGNITER',
      name: 'CODE IGNITER',
      url: "/images/codeigniter.png",
      href: "/webkits/Website/CODE IGNITER 3.zip",
    },
    {
      id: 'COREPHP',
      name: 'CORE PHP',
      url: "/images/php.png",
      href: "/webkits/Website/CORE PHP.zip",
      width: 50,
    },
    {
      id: 'DJANGO',
      name: 'DJANGO',
      url: "/images/django.png",
      href: "/webkits/Website/DJANGO.zip",
      width: 60,
    },
    {
      id: 'ANGULARLARAVEL',
      name: 'FRONTEND ANGULAR BACKEND LARAVEL',
      url: "/images/angular.png",
      href: "/webkits/Website/FRONTEND ANGULAR BACKEND LARAVEL.zip",
      width: 35,
    },
    {
      id: 'JAVA',
      name: 'JAVA',
      url: "/images/java.png",
      href: "/webkits/Website/JAVA.zip",
      width: 35,
    },
    {
      id: 'LARAVEL',
      name: 'LARAVEL',
      url: "/images/laravel.png",
      href: "/webkits/Website/LARAVEL.zip",
      width: 45,
      
    },
    {
      id: 'NODEJS',
      name: 'NODE JS',
      url: "/images/nodejs.png",
      href: "/webkits/Website/NODE JS.zip",
      width: 35,
    },
    {
      id: 'PYTHON',
      name: 'PYTHON 3',
      url: "/images/python.png",
      href: "/webkits/Website/PYTHON 3.zip",
      width: 40,
      
    },
    {
      id: 'RUBY',
      name: 'RUBY ON RAIL',
      url: "/images/whmcs.png",
      href: "/webkits/Website/RUBY ON RAIL.zip",
      width: 60,
    },
  ];

  const EcomData = [
    {
      id: 'OPENCART',
      name: 'OPENCART',
      url: "/images/opencart.png",
      href: "/webkits/E-Commerce/OPENCART 3.0.3.8.zip",
      width: true,
    },
    {
      id: 'PRESTASHOP',
      name: 'PRESTASHOP',
      url: "/images/presta.png",
      href: "/webkits/E-Commerce/PRESTASHOP 1.7.8.1.zip",
    },
    {
      id: 'WORDPRESS',
      name: 'WORDPRESS WOO COMMERCE',
      url: "/images/woo.png",
      href: "/webkits/E-Commerce/WORDPRESS WOO COMMERCE.zip",
      width: true,
    },
  ];

  const MobileData = [
    {
      id: 'ANDROID',
      name: 'ANDROID',
      url: "/images/android.png",
      href: "/webkits/Mobile App/ANDROID/NATIVE.zip",
    },
    {
      id: 'REACTNATIVE',
      name: 'REACT NATIVE',
      url: "/images/reactnative.png",
      href: "/webkits/Mobile App/ANDROID/REACT NATIVE.zip",
    },
    {
      id: 'FLUTTER',
      name: 'FLUTTER',
      url: "/images/flutter.png",
      href: "/webkits/Mobile App/FLUTTER/INAPP WEBVIEW.zip",
      href2: "/webkits/Mobile App/FLUTTER/WITH WEBVIEW.zip",
      text: 'IN-APP WEBVIEW',
      text2: 'WITH WEBVIEW',

    },
    {
      id: 'IOS',
      name: 'IOS',
      url: "/images/ios.png",
      href: "/webkits/Mobile App/IOS/NATIVE MULTI PRODUCT.zip",
      href2: "/webkits/Mobile App/IOS/NATIVE SINGLE PRODUCT.zip",
      text: 'NATIVE MULTI PRODUCT',
      text2: 'WITH WEBVIEW',
    },
  ];


  const handleDownload =  async (event,url) => {
    console.log(url);
      // Stop the form from submitting and refreshing the page.
    event.preventDefault();
      // Get data from the form.
       let new_contact = {
        first_name: event.target.first_name.value,
        last_name: event.target.last_name.value,
        mobile: event.target.mobile.value,
        email: event.target.email.value,
        products_required: 'Integration Assistance',
      
    }
    
     let email=event.target.email.value;
      mycontact(new_contact,email);
     
       await fetch('/api/formemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_contact)
      }).then((res) => {
        if (res.status === 200) {  
          console.log('download the file');
          download(url);
        }
      }) 
  }
  function download(url) {
    const URL = url;
    if (typeof window !== "undefined"){
      window.location.href = URL
    }
}
  return (
    <div className="product-payment pd-lr-15">
      <Head>
        <title>Best Online Payment Gateway in India | Online Payment Aggregators and Service provider in India</title>
        <meta name="description" content="Get Secure Online Payment Gateway for Your Business in India. Accept payments through Links, BNPL, UPI, BharatQR, EMI and 100+ Payment options, Simple payment gateway Integration API for 25+ platforms. Bank-Level Security, Merchant Dashboard, Best Success Rates, Servicing 6+ million merchants. Customized solutions to perfectly fit your business&#39; payment acceptance needs. " />
        <link rel="stylesheet" href="https://www.atomtech.in/uat/assets/css/fontawesome/css/all.css"/>
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
   <script strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `function createFcn(nm){
                (window.freshsales)[nm]=function(){
                (window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments,0)))}; 
                } (function(url,appToken,formCapture){
                window.freshsales=window.freshsales||[];
                if(window.freshsales.length==0){
                list='init identify trackPageView trackEvent set'.split(' ');
                for(var i=0;i<list.length;i++){var nm=list[i];
                createFcn(nm);}
                var t=document.createElement('script');
                t.async=1;
                t.src='//d952cmcgwqsjf.cloudfront.net/assets/analytics.js';
                var ft=document.getElementsByTagName('script')[0];
                ft.parentNode.insertBefore(t,ft);
                freshsales.init("https://nttdatapay.myfreshworks.com/crm/sales","2e01c8cd9f52aab8ebc4e821232d2e960007634e4e705a24e233bf3cd821cd82",true);}})();
                function mycontact(new_contact,email){
                  const identifier = email;
                  freshsales.identify(identifier, new_contact);
                  document.getElementById("first_name").value = "";
                  document.getElementById("last_name").value = "";
                  document.getElementById("mobile").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("tymessage").style.display = 'inline-block'; 
                  }
              `,
            }}
          />
      </Head>

 
    <div className="bnr-home-wrp integration-kit-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Payment Gateway Integration kits for Website, Mobile Apps and e-commerce for 25+ platforms!</h2>
     </div>
     </div>
    </div>

  



<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="/developer-guide">Developers</a></li>
    <li className="breadcrumb-item active" aria-current="page">Integration Kits</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway ik-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Seamless Payment Gateway Integration</h2>

<div className="ig-input-bx">
<input type="text" placeholder="Search docs for payments, API and more" />
</div>



<ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active btn1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Website</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link btn2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Mobile App</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link btn3" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">E-Commerce</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  {/* Website section starts */}
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <div className="spg-cvr">
      <div className='row'>
              {WebsiteData?.map((data,index) => {
                return (
                  <>
                    <div className="col-md-3 col-6" key={index}>
                    <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target={`#${data.id}`} >
                      <a className="spg-box">
                        <span><img src={data.url} alt="" width={data.width ? data.width: 30} className="img-fluid" /></span>
                          <p>{data?.name}</p>
                      </a>
                    </a>
                    </div>
                    <div className="modal fade" id={data.id} data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                      <div className="modal-content">
                        <div className="modal-header p-4">
                          <h5 className="modal-title fw-bold" id="bodLabel">{data.name} INTEGRATION KIT</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-4">
                        
                            <form onSubmit={(e) => {
                              handleDownload(e,data.href);
                              }}>
                              <div className='row'>
                                <div className="col-md-6 mb-10">
                                <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
                                <input type="text" className="form-control" required id="first_name" />  
                                </div>  
                                <div className="col-md-6 mb-10">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="text" className="form-control" required id="last_name" />    
                                </div>  
                              </div>

                            <div className="col-md-12 mb-10">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                            <input type="text" className="form-control" required id="mobile" min="10" max="10" />    
                            </div>  


                            <div className="col-md-12 mb-10">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" required id="email" />    
                            </div> 

                            {/* <div className="col-md-12 mb-10">
                            <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                            </div> */}
                              <div className='d-flex justify-content-end mt-3'>
                                {/* <a href={data.href} className='btn_style1'><button type="submit" className='btn p-0 text-white'> Download</button> </a>  */}
                              <button type="submit" className='btn text-white btn_style1 '> Download</button>
                              </div>
                          </form>
                          <div className="thankyou-message" id="tymessage">Thank you for submitting details.</div>   
                        </div>
                      </div>
                    </div>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
    </div>
  
  {/* Website section ends */}        


{/* Mobile App section starts */}
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
      <div className="spg-cvr">
          <div className="row">
              {MobileData?.map((data,index) => {
                return (
                  <>
                    <div className="col-md-3 col-6" key={index}>
                    <a className="spg-box">
                      <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target={`#${data.id}`} >
                          <span><img src={data.url} alt="" width={35} className="img-fluid" /></span>
                            <p>{data?.name}</p>
                        </a>
                      </a>
                    </div>
                    <div className="modal fade" id={data.id} data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header p-4">
                            <h5 className="modal-title fw-bold" id="bodLabel">{data.name} INTEGRATION KIT</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body p-4">
                            <form onSubmit={(e) => {
                                handleDownload(e,selectedHref ? data.href : data.href2);
                                }}>
                                <div className='row'>
                                  <div className="col-md-6 mb-10">
                                    <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
                                    <input type="text" className="form-control" required id="first_name" />  
                                  </div>  
                                  <div className="col-md-6 mb-10">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" required id="last_name" />    
                                  </div>  
                                </div>
                                <div className="col-md-12 mb-10">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                                  <input type="text" className="form-control" required id="mobile" min="10" max="10" />    
                                </div>  
                                <div className="col-md-12 mb-10">
                                  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                  <input type="email" className="form-control" required id="email" />    
                                </div> 
                              <div className='d-flex justify-content-end mt-3'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                  <button type="submit" className='btn text-white btn_style1' onClick={() => setSelectedHref(true)}> Download</button>
                                  {data.href2 && <p>({data.text})</p>}
                                </div>
                                {data.href2 && <div className='d-flex flex-column justify-content-center align-items-center ms-2'>
                                    <button type="submit" className='btn text-white btn_style1' onClick={() => setSelectedHref(false)}> Download</button>
                                    <p>({data.text2})</p>
                                </div>}                              
                              </div>
                            </form>
                          <div className="thankyou-message" id="tymessage">Thank you for submitting details.</div>   
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
        </div>
      </div>
  </div>
{/* Mobile App  section ends*/}              

  {/* Ecom section starts */}
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
    <div className="spg-cvr">
        <div className="row justify-content-center">
            {EcomData?.map((data,index) => {
              return (
                <>
                  <div className="col-md-3 col-6" key={index}>
                    <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target={`#${data.id}`} >
                      <a className="spg-box">
                        <span><img src={data.url} alt="" width={data.width ? 50: 30} className="img-fluid" /></span>
                          <p>{data?.name}</p>
                      </a>
                    </a>
                  </div>
                  <div className="modal fade" id={data.id} data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                      <div className="modal-header p-4">
                        <h5 className="modal-title fw-bold" id="bodLabel">{data.name} INTEGRATION KIT</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body p-4">
                      
                          <form onSubmit={(e) => {
                            handleDownload(e,data.href);
                            }}>
                            <div className='row'>
                              <div className="col-md-6 mb-10">
                              <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
                              <input type="text" className="form-control" required id="first_name" />  
                              </div>  
                              <div className="col-md-6 mb-10">
                              <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                              <input type="text" className="form-control" required id="last_name" />    
                              </div>  
                            </div>

                          <div className="col-md-12 mb-10">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
                          <input type="text" className="form-control" required id="mobile" min="10" max="10" />    
                          </div>  


                          <div className="col-md-12 mb-10">
                          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                          <input type="email" className="form-control" required id="email" />    
                          </div> 

                          {/* <div className="col-md-12 mb-10">
                          <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
                          </div> */}
                            <div className='d-flex justify-content-end mt-3'>
                              {/* <a href={data.href} className='btn_style1'><button type="submit" className='btn p-0 text-white'> Download</button> </a>  */}
                            <button type="submit" className='btn text-white btn_style1 '> Download</button>
                            </div>
                        </form>
                        <div className="thankyou-message" id="tymessage">Thank you for submitting details.</div>   
                      </div>
                    </div>
                  </div>
                  </div>
                </>
              );
            })}
      </div>
      </div>
    </div>
  </div>
{/* Ecom section ends*/}
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

