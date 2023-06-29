// import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect } from "react";
import Script from "next/script";
import styles from "../styles/Header.module.scss";
import Image from "next/image";


export default function Header() {
  useEffect(() => {
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  const router = useRouter();
  let menubox = React.createRef()
  let ham = React.createRef()

  let checkboxmenu = React.createRef()
 
  function handleMenuToggle(e){
    e.preventDefault();
    console.log(ham.current.classList);
    if(ham.current.classList.contains('open')){ 
      menubox.current.classList.add('hide')
      menubox.current.classList.remove('show')
      ham.current.classList.remove('open')
      document.getElementById("checkbox4").checked = false;
    }else{
      menubox.current.classList.add('show')
      menubox.current.classList.remove('hide')
      ham.current.classList.add('open')
      document.getElementById("checkbox4").checked = true;
      
    }
    
  };

 /*  function agmVideoClick(e){
    console.log('showvideo')
  } */

  function handleMenuClick(e){
  //  e.preventDefault();
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    menubox.current.classList.add('hide')
    menubox.current.classList.remove('show')
    ham.current.classList.remove('open')
    document.getElementById("checkbox4").checked = false;
  }
  }


  return (
    <section className={styles.header}>
      {/* <Script
        src="./js/header_js.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log("script loaded correctly, window.FB has been populated")
        }
      /> */}

<style>{`
    #overlay{
      display:none;
      position:fixed;
      z-index:998;
      top:0px;
      left:0px;
      width:100%;
      height:100%;
      opacity: 0.7;
      background-color:#000;
    }
    #overlay2{
      display:none;
      position:fixed;
      z-index:998;
      top:0px;
      left:0px;
      width:100%;
      height:100%;
      opacity: 0.7;
      background-color:#000;
    }
    #agm-vid{
      z-index:999;
      display:none;
      position:fixed;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:70%;
      height:auto;

    }
    #agm_form{
      z-index:999;
      display:none;
      position:fixed;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:400px;
      height:auto;
    }

    #agm_form .form-inline{
      background: #fff;
      padding: 20px;
      border-radius: 20px;
    }

    #annual_form{
      z-index:999;
      display:none;
      position:fixed;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      width:400px;
      height:auto;
    }

    #annual_form .form-inline{
      background: #fff;
      padding: 20px;
      border-radius: 20px;
    }

    #agm-vid video{
      width:100%;
      height:100%;
    }
    #overlay #agm-close{
      background: #fff;
    color: #000;
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    display: inline-block;
    padding-top: 10px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    }


    #overlay2 #annual-close{
      background: #fff;
    color: #000;
    width: 40px;
    height: 40px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    display: inline-block;
    padding-top: 10px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    }
      `}
    </style>

<div id="overlay"> <div id="agm-close">X</div></div>
<div id="overlay2"> <div id="annual-close">X</div></div>
<div id="agm_form">
<form  className="form-inline">
<div className="form-row align-items-center">
<div className="col-auto">
  <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Password</label>
    <input type="password" className="form-control mb-2" id="inputPassword2" placeholder="Password" />
  </div>
  </div>
  <div className="col-auto">
  <button type="button" id="agm_submit" className="btn btn-primary mx-sm-3 mb-2">Confirm</button>
  </div>
</div>  
</form>
</div>



<div id="annual_form">
<form  className="form-inline">
<div className="form-row align-items-center">
<div className="col-auto">
  <div className="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" className="sr-only">Password</label>
    <input type="password" className="form-control mb-2" id="inputPassword3" placeholder="Password" />
  </div>
  </div>
  <div className="col-auto">
  <button type="button" id="annual_submit" className="btn btn-primary mx-sm-3 mb-2">Confirm</button>
  </div>
</div>  
</form>
</div>

<div id="agm-vid"  dangerouslySetInnerHTML={{
              __html: `
              <video id="agm_video" playsinline>
              <source src="videos/AGMVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          `,
            }}>
             
       </div> 



      <div className="container_1300">
      <div className="logo">
      <Link href="/">
   
        <Image
              priority
              src="/images/logo.png"
            //   className={utilStyles.borderCircle}
              width={183}
              height={52}
              alt="Logo"
            />
            {/* <img className="img-fluid" src="/images/logo.svg" alt="Logo" /> */}
            
  </Link>

<span className="ham-menu" ref={ham}  onClick={handleMenuToggle}>
  <input type="checkbox" id="checkbox4"  ref={checkboxmenu} className="checkbox4 visuallyHidden"/>
        <label htmlFor="checkbox4">
            <div className="hamburger hamburger4">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
                <span className="bar bar5"></span>
            </div>
        </label>
        </span>        
     

      </div>
      { router.pathname=="/campaign-page" ?<ul className="menubox" ref={menubox}>
      <li >
      <Link href="#about">
          <a  onClick={handleMenuClick} className={styles.dropbtn}>
            About
          </a>
        </Link>
        </li>

        <li >
      <Link href="#product">
          <a  onClick={handleMenuClick} className={styles.dropbtn}>
            Product
          </a>
        </Link>
        </li>
        <li >
      <Link href="tel:9152035710">
          <a  onClick={handleMenuClick} className="btn_style2">
          Call Now +91 9152035710
          </a>
        </Link>
        </li>
      </ul> 
      
      :

      
      <ul className="menubox" ref={menubox}>
      <li  className={`${styles.dropdown} ${router.pathname  == "/about-us" ? "active" : ""}`}>
      <Link href="/about-us">
          <a  onClick={handleMenuClick} className={styles.dropbtn}>
            About
          </a>
        </Link>
        </li>
        <li className={styles.dropdown}>
          <a  href="#" className={styles.dropbtn}>
            Products
          </a>
          <div className={`${styles.dropdown_content} ${router.pathname  == "/online-payment-gateway-india" ? "active" : ""}`}>
          <Link href="/online-payment-gateway-india">
            <a onClick={handleMenuClick}>Payment Gateway</a>
          </Link>
          <Link href="/swipecard-pos-machine">
            <a onClick={handleMenuClick} >POS Machine</a>
            </Link>
            <Link href="/ivr-payment-system">
            <a onClick={handleMenuClick}>IVR Payment</a>
            </Link>
            <Link href="/mgalla-payment-app">
            <a onClick={handleMenuClick} >mGalla</a>
            </Link>
          </div>
        </li>
        {/* <li  className={`${styles.dropdown} ${router.pathname  == "/about-us" ? "active" : ""}`}>
      <Link href="/developer-guide">
          <a  onClick={handleMenuClick} className={styles.dropbtn}>
            Developers
          </a>
        </Link>
        </li> */}
        <li className={styles.dropdown}>
          <a href="#" className={styles.dropbtn}>
            Industries
          </a>
          <div className={`${styles.dropdown_content} ${router.pathname  == "/payment-solutions-for-retail-industry" ? "active" : ""}`}>
          <Link href="/payment-solutions-for-retail-industry">
            <a onClick={handleMenuClick}>Retail</a>
          </Link>
          <Link href="/payment-solutions-for-government-sector">
            <a onClick={handleMenuClick} >Government</a>
            </Link>
            <Link href="/payment-solutions-for-brokers">
            <a onClick={handleMenuClick}>Broking</a>
            </Link>
            <Link href="/payment-solutions-for-travel-industry">
            <a onClick={handleMenuClick} >Travel and Tourism</a>
            </Link>
            <Link href="/payment-solutions-for-education-industry">
            <a onClick={handleMenuClick} >Education</a>
            </Link>
            <Link href="/payment-solutions-for-dth-industry">
            <a onClick={handleMenuClick} >DTH and Cable TV</a>
            </Link>
          </div>
        </li>

      
         <li  className={styles.dropdown}>
          <a href="#" className={styles.dropbtn}>
            Pricing
          </a>
          <div className={`${styles.dropdown_content} ${router.pathname  == "" ? "active" : ""}`}>
          <Link href="/pricing/payment-gateway-charges">
            <a onClick={handleMenuClick}>Payment Gateway</a>
          </Link>
          <Link href="/pricing/card-swipe-machine-price">
            <a onClick={handleMenuClick} >POS Machine</a>
            </Link>
          
          </div>
        </li> 
        <li className={styles.dropdown}>
          <a href="#" className={styles.dropbtn}>
            Resources
          </a>
          <div className={`${styles.dropdown_content} ${router.pathname  == "/blog" ? "active" : ""}`}>

          <Link href="/developer-guide">
          <a  onClick={handleMenuClick} >
            Developers
          </a>
        </Link>

        <Link href="/customer-care">
          <a  onClick={handleMenuClick} >
            Get Help
          </a>
        </Link>

        <Link href="/white-paper">
          <a  onClick={handleMenuClick}>
            White Paper
          </a>
        </Link>

         {/*  <Link href="/blog"> */}
            <a href="https://www.nttdatapay.com/blog" target="_blank" rel="noopener noreferrer">Blog</a>
          {/* </Link> */}
          <Link href="/faqs">
            <a onClick={handleMenuClick} >FAQs</a>
            </Link>
            <Link href="/media-center">
            <a onClick={handleMenuClick} >News & PR</a>
            </Link>
          </div>
        </li>
        <li className={styles.dropdown}>
        <Link href="/contact-us">
          <a onClick={handleMenuClick} className={styles.dropbtn}>
          Contact Us
          </a>
          </Link>
      
        </li>

        <li>
        <Link href="/sign-up">
          <a onClick={handleMenuClick} href="#news" className="btn_style2">Sign Up</a>
         </Link> 
        </li>
       
        <li>
        <Link href="/sign-up">
          <a onClick={handleMenuClick} href="https://pgreports.atomtech.in/titan_merchant_console/home#no-back-button" target="_blank" className="btn_style2">Log In</a>
         </Link> 
        </li>
      </ul>
}
      </div>
    </section>
  );
}
