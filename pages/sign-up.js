import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from 'next/head'
import Script from 'next/script'
//import styles from "../styles/Home.module.scss";
import { Navigation,Pagination,Autoplay} from "swiper";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  
  var new_contact;
  var email;
  const [tokenData,setTokenData] = useState()
  const recaptcha = useRef(null);

  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()
    // Get data from the form.
      new_contact = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      products_required: event.target.products_required.value,
    }
    

    if(tokenData){
      email=event.target.email.value;
      mycontact(new_contact,email);

     await fetch('/api/formemail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(new_contact)
      }).then((res) => {
        console.log('Response received')
        console.log(res.json())
        if (res.status === 200) {
          setTokenData(null);
          document.getElementById("errormessage")?.style.display = 'none'; 
          recaptcha?.current?.reset();
        
        }
      }) 
    }else {
      document.getElementById("errormessage").style.display = 'inline-block'; 
      // alert("invalid Captcha value")
    }
   return false;
  }

  const onCaptchaChange = (token) => {
    // Set the captcha token when the user completes the reCAPTCHA
    if (token) {
      setTokenData(token);
    }
    // console.log(token);
  };

  return (

    
    
    <div className="signuppage">
            
      <Head>
      <title>NTT DATA Payment Services India</title>
        <meta name="description" content="Sign up now with NTT DATA Payment Services India. India&#39;s only omnichannel payment service provider which simplifies the online and offline payments experience for your customers. Trusted by 6 million+ merchants across industry." />
       {/*  <script type="text/javascript" src="/js/signupjs.js"></script> */}
      </Head>
      <script strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `function createFcn(nm) {
                            (window.freshsales)[nm] = function() {
                                (window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments, 0)))
                            };
                        }(function(url, appToken, formCapture) {
                            window.freshsales = window.freshsales || [];
                            if (window.freshsales.length == 0) {
                                list = 'init identify trackPageView trackEvent set'.split(' ');
                                for (var i = 0; i < list.length; i++) {
                                    var nm = list[i];
                                    createFcn(nm);
                                }
                                var t = document.createElement('script');
                                t.async = 1;
                                t.src = '//d952cmcgwqsjf.cloudfront.net/assets/analytics.js';
                                var ft = document.getElementsByTagName('script')[0];
                                ft.parentNode.insertBefore(t, ft);
                                freshsales.init("https://nttdatapay.myfreshworks.com/crm/sales", "2e01c8cd9f52aab8ebc4e821232d2e960007634e4e705a24e233bf3cd821cd82", true);
                            }
                        })();
                        
                        function mycontact(new_contact, email) {
                            const identifier = email;
                            freshsales.identify(identifier, new_contact);
                            document.getElementById("first_name").value = "";
                            document.getElementById("last_name").value = "";
                            document.getElementById("mobile").value = "";
                            document.getElementById("email").value = "";
                            document.getElementById("tymessage").style.display = 'inline-block';
                            document.getElementById("errormessage").style.display = 'none';
                        }
              `,
            }}
          />
     
     

 {/* <div className="bnr-home-wrp signup-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>Upgrade your business with <span>India&#39;s most trusted digital payment partner</span></h2>
     </div>
     </div>
    </div> */}

 <nav className='bread-wrp' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item active" aria-current="page">Sign Up</li>
  </ol>
</div>
</nav>  


<div className="signup-grid-wrp">
{/* <div className="container_1300 d-block">
<div className="row">
 <div className="col-md-3">
  <p className="common-desc">
  Quick and Simple on-boarding process, equipping you to accept digital payments in no time.
  </p> 
  </div> 
  <div className="col-md-3">
  <p className="common-desc">
  Seamlessly collect digital payments from your customers with 100+ payment options.
  </p> 
  </div> 
  <div className="col-md-3">
  <p className="common-desc">
  Get your money settled instantly (T+0), on the same day (T+1), or as per your convenience. 
  </p> 
  </div> 
  <div className="col-md-3">
  <p className="common-desc">
  Robust merchant console to manage your payments, track your settlement, process refunds, and generate detailed reports. 
  </p> 
  </div> 
</div>
</div>  */}

<div className="container_1100 d-block">
<div className="row mt-50">
  <div className="col-md-12">
    <h2 className="common-ttle text-center">Be one of the <span>6 million+</span> businesses sharing NTT DATA Payment Services India&#39;s digital payment edge! </h2>
  </div>
</div>
</div>

</div>



<div className="brand-logos-wrp">
<Swiper
modules={[Autoplay ]}
      spaceBetween={20}
      slidesPerView={7}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
          delay: 1000,
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
      <SwiperSlide><img src='/images/adani-gas.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/allen-career.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/Angel-Broking-Private-Limited.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/Apollo_Hospitals_Logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/hospital-rainbow.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/Muthoot_Finance_Logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/Nykaa-Logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/reliance-retail.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/zerodha.png'/></SwiperSlide>
    </Swiper>
</div>


<div className="contact-grid-cvr">
<div className="container_1100 d-block">

<h2 className="common-ttle">Sign Up</h2>

<form onSubmit={handleSubmit}>
  
           <div className="row">
           <div className="col-md-12 mb-20">
            <label htmlFor="exampleFormControlInput1" className="form-label">Products Required:</label>
            <select  className="form-control" id="products_required" >
           <option value="Payment Gateway">Payment Gateway</option> 
           <option value="POS Terminal">POS Machine</option> 
           <option value="Reseller">Reseller</option> 
           {/* <option value="mGalla">mGalla</option>  */}
            </select>  
            </div> 
            <div className="col-md-6 mb-10">
            <label htmlFor="exampleFormControlInput1"  className="form-label">First Name</label>
            <input type="text" className="form-control" required id="first_name" />  
            </div>  
            <div className="col-md-6 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" required id="last_name" />    
            </div>  

            <div className="col-md-12 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
            <input type="tel" className="form-control" required id="mobile"  pattern="\d{10}" />    
            </div>  


            <div className="col-md-12 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" required id="email" />    
            </div> 

            <div className="pb-3 pt-2"> 
              <ReCAPTCHA
                size="normal"
                sitekey="6LdhLH8oAAAAALkszca8vWrQw7Ml78z6y-kvKbVP"
                onChange={onCaptchaChange}
                ref={recaptcha}
              />
            </div>
            <div className="col-md-12 mb-10">
            <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
            </div>

           </div>
          </form>

          <div className="thankyou-message" id="tymessage">Thank you for submitting details.</div>
          <div className="error-message" id="errormessage">Please select valid captcha value.</div>

          
          </div>
</div>


 
    </div>
  )


   

  



}
