import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const HeaderTwo = () => {
  const router = useRouter();
  let menubox = React.createRef();
  let ham = React.createRef();
  let checkboxmenu = React.createRef();

  function handleMenuToggle(e) {
    e.preventDefault();
    console.log(ham.current.classList);
    if (ham.current.classList.contains("open")) {
      menubox.current.classList.add("hide");
      menubox.current.classList.remove("show");
      ham.current.classList.remove("open");
      document.getElementById("checkbox4").checked = false;
    } else {
      menubox.current.classList.add("show");
      menubox.current.classList.remove("hide");
      ham.current.classList.add("open");
      document.getElementById("checkbox4").checked = true;
    }
  }

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
      <div className="menubox-div display-center">
        <ul className="menubox d-flex gap-3" ref={menubox}>
          <li>
            <Link href="/about-us">
              <a >
                About
              </a>
            </Link>
          </li>

          <li>
            <a href="#" >
              Industries
            </a>
          </li>

          <li>
            <a href="#" >
              Pricing
            </a>
          </li>
          <li >
            <a href="#">
              Resources
            </a>
          </li>

          <li>
            <Link href="/sign-up">
              <a  className="btn_style2">
                Sign Up
              </a>
            </Link>
          </li>

          <li>
            <Link href="/sign-up">
              <a
               
                href={"https://pgreports.atomtech.in/titan_merchant_console/home#no-back-button"}
                target="_blank"
                className="btn_style2"
              >
                Log In
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTwo;
