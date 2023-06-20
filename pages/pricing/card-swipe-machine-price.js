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
        <title>Get the Lowest Price on Card Swipe Machines|POS Machines|NTT DATA Payment Services</title>
        <meta name="description" content="Looking for a card swipe machine? Look no further than NTT DATA. We offer the best prices and services in the industry. Call us today to know more!" />
      
      
      </Head>

 
    <div className="bnr-home-wrp pricing-pgc-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>POS machine price Nominal card swipe machine charges</h2>
       <p>Get a reliable POS Machine at the best price from NTT DATA Payments and introduce cashless transactions for your business at the lowest cost.</p>
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
    <li className="breadcrumb-item active" aria-current="page">Card Swipe Machine Price</li>
  </ol>
</div>
</nav>

<div className="powerful-gateway pricing-fold1">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">POS machine cost that’s affordable<br/> for both small and big merchants</h2>
<p className="common-desc text-center">POS machines are necessary in today’s cashless business world. With POS machines, you can get payments easily via debit and credit cards in-store or from your customers at their doorstep. NTT DATA Payments’ POS machine charges are one of the best in the industry. </p>
</div>
</div>



<div className="no-hidden-charge-wrp">
<div className="container_1300 d-block">
<h2 className="common-ttle text-center">Simple pricing <br/>
with No hidden charges!</h2>

<div className="no-hcw-inner">
 <div className="row">
  <div className="col-md-6">
   <div className="hcw-lhs">
     <div className="hcw-table-wrp">
      <table width="100%" cellSpacing={0} cellPadding={0}>
        <tr>
         <th>PRODUCT</th> 
         <th>RATES</th>
        </tr>
        <tr>
        <td>Credit Card</td>
        <td>2.00%</td>
        </tr>
        <tr>
          <td>Debit Card</td>
          <td>0.90%</td>
        </tr>
        <tr>
          <td>International Card</td>
          <td>3.00%</td>
        </tr>
       
      </table> 
      </div>   
    </div> 
  </div>
  <div className="col-md-6">
  <div className="hcw-rhs">
  <div className="hcw-table-wrp">
      <table width="100%" cellSpacing={0} cellPadding={0}>
    
        <tr>
        <th>Set up</th>
        <th>AMC</th>
        </tr>
        <tr>
          <td className="text-center">10500</td>
          <td>20% of Setup</td>
        </tr>
      </table> 
      </div>  
  </div>  
  </div> 
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





<div className="wch-wrp">
 <div className="container_1300 d-block">
<div className="row">
<div className="col-md-7">
 <div className="wch-lhs ">
<h2 className="common-ttle blue-clr">Switch to cashless transactions<br/> with NTT DATA Payments’ POS machines.</h2>  
<p className="common-desc">Get NTT DATA Payments’ POS card swipe machine within<br/> 48 hours and accept payments anytime and anywhere.</p> 
<Link href="/sign-up">
<a href="" className="btn_style1">Sign Up Now</a>  
</Link>
</div>   
</div>
<div className="col-md-5">
<div className="wch-rhs text-end">
<img src="/images/pricing-pos-btm-desg.svg" alt="" className="img-fluid" />  
</div>   
 </div>    
</div>     
</div>   
</div>







 
    </div>
  )
}
