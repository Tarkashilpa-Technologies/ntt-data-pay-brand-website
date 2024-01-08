import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.scss";

const HeaderTwo = () => {
  const router = useRouter();
  let menubox = React.createRef();
  let ham = React.createRef();
  let checkboxmenu = React.createRef();
  const[fullHeight,setFullHeight]= useState();
  const[fullWidth,setFullWidth] = useState(typeof window !== 'undefined' && window.innerWidth);
  const[hamClicked,setHamClicked]= useState();

  function handleMenuToggle(e) {
    e.preventDefault();
    console.log(ham?.current?.classList, "current ");
    if (ham?.current?.classList?.contains("open")) {
      menubox?.current?.classList?.add("hide");
      menubox?.current?.classList?.remove("show");
      ham?.current?.classList?.remove("open");
      document.getElementById("checkbox4").checked = false;
    } else {
      menubox?.current?.classList?.add("show");
      menubox?.current?.classList?.remove("hide");
      ham?.current?.classList?.add("open");
      document.getElementById("checkbox4").checked = true;
    }
  }
  const dataArray = [
    {
      label: 'Integration Guides',
      url: '/Integration-Guides',
      class: 'header-btn',
    },
    {
      label: 'API References',
      url: '/Api-References',
      class: 'header-btn',
    },
    {
      label: 'API Explorer',
      url: '/try-it-out-api-screen',
      class: 'header-btn',
    },
    {
      label: 'Contact Us',
      url: '/contact-us',
      class: 'header-btn',
    },
    {
      label: 'Sign Up',
      url: '/sign-up',
      class: 'btn_style2',
    },
    {
      label: 'Login',
      url: 'https://pgreports.atomtech.in/titan_merchant_console/home#no-back-button',
      class: 'btn_style2',
    },
  ]


  function handleMenuClick(e){
    //  e.preventDefault();
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      menubox.current.classList.add('hide')
      menubox.current.classList.remove('show')
      ham.current.classList.remove('open')
      document.getElementById("checkbox4").checked = false;
    }
    }
    useEffect(()=> {
      window.addEventListener('resize', ()=> {
        setFullHeight(window.innerHeight);
        setFullWidth(window.innerWidth);
      });  
   }, [])

    useEffect(() => {
      if(fullWidth > '1200px')
      {
       menubox?.current?.classList?.add("show");
      menubox?.current?.classList?.remove("hide");
      ham?.current?.classList?.add("open");
      document.getElementById("checkbox4").checked = true;
      }
    },[fullWidth])

  return (
    <div className="py-lg-3 py-2 px-3 d-flex align-items-center">
      <div className="logo">
        <Link href="/" className='pointer'>
          <Image
            priority
            src="/images/logo.png"
            className={'pointer'}
            width={183}
            height={52}
            alt="Logo"
          />
          {/* <img className="img-fluid" src="/images/logo.svg" alt="Logo" /> */}
        </Link>

        <span className="ham-menu d-lg-none" ref={ham} onClick={(e) => {handleMenuToggle(e);
        setHamClicked(!hamClicked);}}>
          <input
            type="checkbox"
            id="checkbox4"
            ref={checkboxmenu}
            className="checkbox4 visuallyHidden"
          />
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
        <div className="menubox-header-two d-lg-block d-none">
          {dataArray?.map((data,index) => {
            return(
              <ul className="menubox m-0 ps-0" key={index}>
              <li key={index} className={styles.dropbtn}>
                <Link href={data?.url}>
                  <a onClick={handleMenuClick} className={data.class}>{data?.label}</a>
                </Link>
              </li>
              </ul>
            )
          })}
          
        </div>
        <div className={`d-lg-none ${hamClicked ? 'd-block' : 'd-none'} hamburger-show d-flex flex-column align-items-center`}>
          {dataArray?.map((data,index) => {
            return(
              <ul className="menubox  w-100 m-0 p-2" key={index}>
                <li key={index} className={`${styles.dropbtn} w-100`}>
                  <Link href={data?.url}>
                    <a onClick={handleMenuClick} className={`${data.class} w-100`}>{data?.label}</a>
                  </Link>
                </li>
              </ul>
            )
          })}
          
        </div>
        
    </div>
  );
};

export default HeaderTwo;
