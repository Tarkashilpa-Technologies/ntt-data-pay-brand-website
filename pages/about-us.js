import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Link from "next/link";
import Header from '../Components/Header'
//import styles from "../styles/Home.module.scss";
import { Navigation,Pagination} from "swiper";
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';


export default function About() {
  return (
    <div className="aboutpage">
      <Head>
        <title>NTT DATA Payment Services India Ltd.- formerly Atom Technologies | Leading Payment Gateway Company in India</title>
        <meta name="description" content="NTT DATA is a leading payment service provider in India. We offer secure and efficient online payment gateway across India. NTT DATA is the best payment gateway India which offers POS machine,  Mobile App-mGalla and IVR payment solutions." />
      </Head>
 
     
 
    <div className="bnr-home-wrp bnr-about-wrp">
    <div className="container_1100">

     <div className="bnr-caption">
       <h2>Hello,<br/> we are NTT DATA Payment Services</h2>
       <p>We help people around the world accept payments to boost their businesses.</p>
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
    <li className="breadcrumb-item active" aria-current="page">About</li>
  </ol>
</div>
</nav>  

<div className="about-ntt-service-section padding-bottom-120">
  <div className="container_1100">
    <div className="row">
      <div className="col-md-6">
        <p className="about-service-heading common-ttle">NTT DATA Payment Services- Asia&#39;s leading digital payment service provider</p>
      </div>
      <div className="col-md-6">
        <p className="common-desc">
        NTT DATA Payment Services India is constantly marvelling in providing secure and seamless digital payment solutions across various industrial and banking segments across the globe. NTT DATA Payment Services India caters to more than 6 million+ merchants, with an annual transaction value and volume of INR 800+ billion and 100 million, respectively.</p> 
        <p className="common-desc">
        NTT DATA Payment Services complies with PCI DSS 3.2V and is 256-bit encrypted, keeping our security system bulletproof.</p> 
<p className="common-desc">
In 2019, NTT DATA, a Japanese system integration company acquired Atom Technologies, now known as NTT DATA Payment Services India. As one of the global innovators, NTT DATA has been striving to establish a framework through which it can provide its diverse services worldwide and support its customers&#39; needs and further broaden the horizon for customers in both Indian and Global Market</p> 

        
      </div>
    </div>


    <div className="row padding-top-118 ">
      <div className="col-md-6">
        <p className="about-service-heading common-ttle padding-top-90 padding-bottom-60">NTT DATA Payment Services&#39;<br /> 360 degrees payment<br /> solution</p>
        <p className="common-desc">Providing secured and seamless payment solutions, NTT DATA Payments&#39; services encompasses Online Payment Gateway, Card Swipe Machine, IVR, Merchant Mobile Application and various, white-labelled solutions for the banks. With over 100 payment options, our merchants are armed to collect online, offline, and contactless payments anytime, anywhere. NTT DATA Payments also equips you to track payments on a real-time basis with our robust Merchant console.</p>
      </div>
      <div className="col-md-6">
        <img className='img-fluid' src="images/ntt_pos.jpg" />

        
      </div>
    </div>



  </div>

</div>
    

<div className="about-global-connectivity min-height-800">
<div className="container_1100">
  <div className="row">
    <div className="col-md-6">
      <p className="common-ttle padding-bottom-50 text-white padding-top-100">NTT DATA and its Global Connectivity</p>
      <p className="common-desc text-white">NTT DATA is a conglomerate with more than 1,30,000 professionals working across 50+ countries, including Japan, China, the USA, Canada, South Korea, Thailand, Singapore, and many more.</p>
      <p className="common-desc text-white">NTT DATA operates Japan’s largest card payment processing network, CAFIS. NTT DATA has been leading the payment industry for over 30 years through CAFIS. Their aim is to make purchasing a lot more convenient and enjoyable for everyone.</p>
    </div>
    <div className="col-md-6 position-relative  min-height-800">
      <div className="global-connectivity-box  about-bg-purple">
        <p className="common-desc text-white m-0">Speaking in numbers, NTT DATA has been highly stable and reliable for over 35 years, with over 22 billion dollars in revenue. It provides multiple payment solutions for banks and merchants through innovative services like mobile payments, contactless payments, loyalty, & ticketing. </p>
      </div>
    </div>
  </div>
</div>  
  
</div>




<div className="about-ntt-payment-service-section padding-bottom-120  padding-top-120">
  <div className="container_1100 container-shadow-radius bg-white">
  <div className="row">
    <div className="col-md-6">
      <img className="img-fluid" src="images/payment_services.jpg" />
    </div>

    <div className="col-md-6">
    <div className="about-payment-services-text">  
    <p className="common-ttle">NTT DATA Global Payment Services</p>
    <p className="common-desc">NTT DATA Global Payment Services is a global payment innovator that helps local and global merchants manage local and cross-border transactions in multiple currencies for their online and offline business through a single platform.</p>
    <p className="common-desc">Our wide range of payment services and solutions we offer to e-commerce, retailers, travel agencies, hotels, financial institutions, airlines and many more, are customisable according to their business needs.</p>
    </div>
    </div>
</div>
  </div>
</div>  


<div className="about-ntt-mission-vision padding-bottom-120">
<div className="container_1100">
  <div className="row">
  <div className="col-md-6">
    <div className="about-mission-vision about-mission bg-white">
      <p className="common-ttle">Our Mission</p>
      <p className="common-desc grey-text">Produce customer centric and state-of-the-art payment services to enhance our clients’ business capabilities.</p>
      <p className="common-desc grey-text">Create a safer and more efficient digital payment platform in the society through our expertise
</p>

    </div>

  </div>
  <div className="col-md-6">
  <div className="about-mission-vision about-vision  bg-white">
  <p className="common-ttle">Our Vision</p>
  <p className="mission-vision-bold-text">Trusted Payment Innovator</p>


  </div>

  </div>
  </div>
</div>


</div>



<div className="our-journey">
<div className="container_1100">
  <h2 className="common-ttle text-center white-clr">Our Journey</h2>

<div className="journey-main-wrp">
<Swiper
 modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      breakpoints={{
        // when window width is >= 640px
        0: {
          spaceBetween:0,
          slidesPerView: 1,
        },
        640: {
          spaceBetween:0,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 3,
        },
      }}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       <div className="journo-card">
        <h2>2022</h2>
        <p>NTT DATA acquires major stake, leading to a complete rebrand of Atom Technologies into NTT DATA Payment Services India Limited.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2019</h2>
        <p>Atom Technologies, officially an NTT DATA Company, post-acquisition by the corporate giant.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2018</h2>
        <p>NTT DATA, a leading IT services provider headquartered in Tokyo, announced that it has entered into an agreement to acquire a majority stake in Atom Technologies.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2017</h2>
        <p>Launched mGalla- Payment app for merchants enabling digital payment acceptance over smartphones. </p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2016</h2>
        <p>Tied up with IRCTC. Also, incorporated Bharat QR Code as a payment option.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2015</h2>
        <p>Launched a semi-closed Prepaid card in India and mobile wallet for corporates and individuals.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2014</h2>
        <p>Reached a milestone of 10,000 POS installations across India.</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2013</h2>
        <p>Partnered with leading international PSP for payment services.</p> 
        <p>Launched multi-bank EMI.</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2012</h2>
        <p>Launched Internet Payment Gateway/ NetBanking solutions for merchants and Mobile Banking white-labelled application for banks</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2011</h2>
        <p>Launched Financial Inclusion Solutions for Banks</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2009</h2>
        <p>Launched its Mobile App- the organization’s mobile payment solution.</p> 
        <p>Launched POS network for Union Bank.</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2008</h2>
        <p>Launched Interactive Voice Response (IVR) payments system</p> 
        </div> 
      </SwiperSlide>
      <SwiperSlide>
       <div className="journo-card">
        <h2>2006</h2>
        <p>Incorporated Atom technologies Limited</p> 
        </div> 
      </SwiperSlide>
      
    </Swiper> 
</div>

</div>
</div>


<div className="our-team padding-top-120">
<div className="container_1100">
  <h2 className="common-ttle text-center padding-bottom-50">Meet our Management</h2>
  <div className="padding-left-right-50">
  <div className="row">
    
    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Dewang Neralla, CEO</p>
            <p className="team-bio">Dewang founded Atom Technologies Limited, now NTT DATA Payment Services India Limited in 2005.</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod1" >Read More</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Take Ueno, CTO & CSO</p>
            <p className="team-bio">Takeo Ueno takes a vision and makes it reality through sound strategy development. </p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod2" >Read More</a>
        </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Rahul Jain, CFO</p>
            <p className="team-bio">Rahul Jain became an indispensable asset to our organization in October 2019 as its Chief Financial Officer (CFO). </p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod3" >Read More</a>
        </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Navpreet Kaur, VP - Corporate Sales</p>
            <p className="team-bio">Navpreet has over 18 years of hands-on experience across the financial</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod7" >Read More</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Manjunath Udyavar, VP - Banking & Retail POS</p>
            <p className="team-bio">With 15 years of experience working in the FinTech world, Manjunath aims </p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod6" >Read More</a>
        </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">ASM Subramanian, VP - Operations, GRC, Customer Care </p>
            <p className="team-bio">ASM has more than 18 years of experience in cards, payment operations</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod5" >Read More</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Vivek Taneja, VP - Products & Solutions</p>
            <p className="team-bio">Vivek has more than 20 years of hands-on experience in sales, pre-sales</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod8" >Read More</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Ajay Surana, VP – Development & CISO</p>
            <p className="team-bio">With more than 16 years of hands-on experience in creating solutions across</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod4" >Read More</a>
        </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Alok Yadav, VP - PMO & Communication</p>
            <p className="team-bio">He possesses over 26 years of expertise in Offshore Development, Program Management</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod9" >Read More</a>
        </div>
      </div>
    </div>


    {/* <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Hiroki Kobayashi, PMO</p>
            <p className="team-bio">Accomplished, goal-driven and result-oriented, Hiroki Kobayashi has more than 15 years</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod10" >Read More</a>
        </div>
      </div>
    </div>


    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Rajasekhar K, Vice President, Sales</p>
            <p className="team-bio">With over 18 years of experience in the sales industry, Rajasekhar holds extensive experience</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod11" >Read More</a>
        </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="team-container">
        <div className="team-image"><img  src="images/team.jpg" /></div>
        <div className="team-description bg-white">
            <p className="team-title">Vishal Sharma, Vice President, Sales</p>
            <p className="team-bio">Vishal has an expertise in strategic client development, nurturing business</p>
            <a className="our-team-more" href="#" data-bs-toggle="modal" data-bs-target="#bod12" >Read More</a>
        </div>
      </div>
    </div> */}


  </div>
  </div>
</div>  

</div>



<div className="modal fade" id="bod1" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Dewang Neralla <span>CEO</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Dewang founded Atom Technologies Limited, now NTT DATA Payment Services India Limited in 2005 and is the CEO of the same. With a record of establishing sound business across the country, and breaking new grounds, Dewang is actively involved in the payments industry and is the co-chair of the Merchant Aggregators Committee in Payment Council of India (PCI) as well as a member of Executive Council of PCI. He is an ergophile but never misses a chance when it comes to displaying his talent on the dance floor.</p>
      </div>
    
    </div>
  </div>
</div>


<div className="modal fade" id="bod2" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Take Ueno, <span>CTO & CSO</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Takeo Ueno takes a vision and makes it reality through sound strategy development. He intuitively sees the threads of opportunity that wind through an organization, brings them together into a coherent whole, helps others extend their thinking, and drives material business advantage. He is an inspirational individual who tells stories that inspire action while at the same time is grounded in information that levers the business.</p>
      </div>
    
    </div>
  </div>
</div>


<div className="modal fade" id="bod3" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Rahul Jain, <span>CFO</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Rahul Jain became an indispensable asset to our organization in October 2019 as its Chief Financial Officer (CFO). Originally, he was associated with the Merger and Acquisition team of NTT DATA, which involved evaluating Fintech companies in India and was one of the key members of the team which was actively involved in the acquisition of Atom by NTT DATA. He assumed various leadership positions during his tenure of 11 years with NTT DATA. As an established finance leader, Rahul has extensive and rich global experience in Value Creation, Corporate Governance, Business Partnering, Mergers and Acquisitions, Cost Management, IT Implementations, Outsourcing, and Post-merger activities.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod4" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Ajay Surana, <span>VP – Development & CISO</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">With more than 16 years of hands-on experience in creating solutions across different domains, Ajay is the Technical Delivery Head and has an expertise in Multi-Channel Payment Systems like Interactive Voice Response (IVR), Internet and Mobile Applications, Mobile Banking and Smart Card Payments and managing different infrastructure compliance like PCI-DSS. He has been an essential part of our family since 2011. Ajay is a Cinephile and is an occasional traveller.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod5" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">ASM Subramanian, <span>VP - Operations, GRC, Customer Care</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">ASM has more than 18 years of experience in cards, payment operations, authorization, issuance, risk & compliance with major banks in India. In his current role, he is responsible for the Risk & Compliance function for Pre-Post enrolment, Compliance function, Dispute management for POS & e-com. He has been with us since 2013. ASM loves listening to music and enjoys the company of a good book.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod6" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Manjunath Udyavar, <span> VP - Banking & Retail POS</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">With 15 years of experience working in the FinTech world, Manjunath aims to make the payments world better, one innovation at a time. Before bringing his A-game to NTT DATA Payment Services, he has leveraged decades of experience in sales management and technology through his prior associations with mega-corporations like ITC, ICICI, First Data, and Pine Labs. During his tenure with Pine Labs, he was also responsible for managing Malaysia business for 2 years, which was Pine Labs’ first international foray in SEA. Manjunath holds an MBA in Marketing and is a passionate marathoner and an ardent cricket lover. Sometimes we wonder about how many aces he has up his sleeves.</p>
      </div>
    
    </div>
  </div>
</div>


<div className="modal fade" id="bod7" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Navpreet Kaur, <span> VP - Corporate Sales</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Navpreet has over 18 years of hands-on experience across the financial Banking sector, serving customers across all demography, psychographic & economic sections with customer retention and relationship management as core competency, analysing & understanding customer’s 360-degrees needs & fulfilling it with appropriate products. Being a Globetrotter, she loves to travel and enjoys a nice bike ride.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod8" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Vivek Taneja, <span> VP - Products & Solutions</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Vivek has more than 20 years of hands-on experience in sales, pre-sales, and solution ideation in the Payments domain with competencies and expertise in Merchant Acquiring and Operations including specific focus on business development and cross selling in Domestic Markets. Vivek loves socializing and is a travel junkie.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod9" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Alok Yadav, <span>VP - PMO & Communication</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">He possesses over 26 years of expertise in Offshore Development, Program Management and Delivery of Interactive Software solutions. He has worked with several start-ups in the Telecom and Media-Entertainment space scaling up Operations and delivering Enterprise-wide applications. He delves into Movies and Music in his spare time.</p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod10" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Hiroki Kobayashi, <span>PMO</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Accomplished, goal-driven and result-oriented, Hiroki Kobayashi has more than 15 years’ extensive experience with management and tactical business leadership. Hiro’s expertise includes achieving optimal results with competent planning, and solutions-oriented approach while driving business growth and strategic alliances. He holds MBA in Corporate Finance, Marketing and Global Leadership and certification in Machine Learning from Stanford University, amongst several other accomplishments. Skating through life, Hiro finds himself in the lost historical ruins and is on a mission to explore every alley now that he’s in India. He loves to grab an intellectually alluring book and can be your best personal financial investment strategist while chronicling the most comic anecdotes. </p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod11" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Rajasekhar K, <span>Vice President, Sales</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">With over 18 years of experience in the sales industry, Rajasekhar holds extensive experience in lead generation, building and nurturing relationship and servicing clients in the Education and Government Sector, across South-West India. Prior his association with NTT DATA Payment Services, Rajasekhar has a diverse and encompassing work history of pursuing leads and driving sales for corporate giants like ICICI Bank, American Express and Worldline. As a payment industry expert in POS and Digital Payments domain, Rajasekhar’s contributions have been instrumental for NTT DATA Payment Services. Apart from finding solace in shaking hands when closing a deal, he loves exploring and voyaging to newer locations. </p>
      </div>
    
    </div>
  </div>
</div>

<div className="modal fade" id="bod12" data-bs-backdrop="bod" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="bodLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="bodLabel">Vishal Sharma, <span>Vice President, Sales</span></h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p className="common-desc">Vishal has an expertise in strategic client development, nurturing business and constructing and facilitating cohesive relationship with consumers across North and East India. He is passionate about achieving results and making a difference within the company by accomplishing targets. His key strength lies in his ability to procure new and repeat business, effective liaising, and enterprise sales strategy for Education and Government verticals. His versatile personality and knack of making friends has always been an ace up his sleeve when it comes to cracking a deal.</p>
      </div>
    
    </div>
  </div>
</div>


 
    </div>
  )
}
