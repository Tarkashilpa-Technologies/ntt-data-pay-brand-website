import Link from "next/link";
import Script from 'next/script'
import Head from 'next/head'
//import styles from "../styles/Home.module.scss";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation,Pagination,A11y,Autoplay} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";



export default function Home() {

  
    var new_contact;
    var email;
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
      email=event.target.email.value;
      //mycontact(new_contact,email);
  
      
  
        
       await fetch('/api/campaignformemail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_contact)
      }).then((res) => {
        document.getElementById("first_name").value = "";
        document.getElementById("last_name").value = "";
        document.getElementById("mobile").value = "";
        document.getElementById("email").value = "";
        document.getElementById("tymessage").style.display = 'inline-block'; 
        console.log('Response received')
        console.log(res.json())
        if (res.status === 200) {
         
         
        }
      }) 
  
  
     return false;
    }  
    


  return (
    <div className="homepage">
      <Head>
        <title>India&#39;s Leading Payment Solution Provider| NTT DATA Payment Services India </title>
        <meta name="description" content="Servicing over 6 million+ businesses in India, NTT DATA Payment Services offers a vast range of secure payment services through POS machines, Payment Gateways and IVR payment solution." />
     
        <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '3064020077147323');
              fbq('track', 'PageView');`,
            }}
          />
    
      </Head>
 
      <noscript><img height="1" width="1" 
src="https://www.facebook.com/tr?id=3064020077147323&ev=PageView&noscript=1"
/></noscript>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GBLL3Q"
height="0" width="0" ></iframe></noscript>

 
    <div className="bnr-home-wrp camp-bnr" id="banner">
    <div className="container_1300">
     <div className="bnr-caption banner-thankyou">
       <h2>Thank You for Signing Up with us! Our sales executive will get in touch with you.</h2>
      {/*  <p>Experience a seamless way of accepting and managing online payments with NTT DATA Payments</p> */}
       {/* <Link href="/sign-up">
       <a href=""  className='btn_style1'>Sign up</a>
       </Link>
       <Link href="/contact-us">
       <a  className='btn_style4'>CONTACT SALES</a>
       </Link> */}

     
     </div>
     </div>


    </div>

  
 
    </div>
  )
}
