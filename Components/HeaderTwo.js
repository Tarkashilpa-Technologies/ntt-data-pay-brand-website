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
  const[fullWidth,setFullWidth] = useState();

  function handleMenuToggle(e) {
    e.preventDefault();
    console.log(ham?.current?.classList);
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
      url: '/integration-guides-new',
      class:'header-btn',
    },
    {
      label: 'Api References',
      url: '/api-references-new',
      class:'header-btn',
    },
    {
      label: 'Api Explorer',
      url: '/try-it-out-api-screen',
      class:'header-btn',
    },
    {
      label: 'Contact Us',
      url: '/contact-us',
      class:'header-btn',
    },
    {
      label: 'Sign Up',
      url: '/sign-up',
      class: 'btn_style2'
    },
    {
      label: 'Login',
      url: 'https://pgreports.atomtech.in/titan_merchant_console/home#no-back-button',
      class: 'btn_style2'
    },
  ];


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
    <div className="py-3 px-2 d-flex">
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

        <span className="ham-menu" ref={ham} onClick={handleMenuToggle}>
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
        <div className="menubox-div menubox-header-two">
          {dataArray?.map((data,index) => {
            return(
              <ul className="menubox">
              <li key={index} className={styles.dropdown}>
                <Link href={data?.url}>
                  <a onClick={handleMenuClick} className={data.class}>{data?.label}</a>
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
