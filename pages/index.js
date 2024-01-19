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
  return (
    <div className="homepage">
      <Head>
        <title>India&#39;s Leading Payment Solution Provider| NTT DATA Payment Services India </title>
        <meta name="description" content="Servicing over 6 million+ businesses in India, NTT DATA Payment Services offers a vast range of secure payment services through POS machines, Payment Gateways and IVR payment solution." />
        <link rel="canonical" href="https://www.nttdatapay.com" />	
      
      </Head>
 
    
 
    <div className="bnr-home-wrp">
    <div className="container_1300">
     <div className="bnr-caption">
       <h1>A Complete payment solution to advance your business!</h1>
       <p>Experience a seamless way of accepting and managing online payments with NTT DATA Payments</p>
       <Link href="/sign-up">
       <a href=""  className='btn_style1'><p>Sign up</p></a>
       </Link>
       <Link href="/contact-us">
       <a  className='btn_style4'>CONTACT SALES</a>
       </Link>

       <div className="cap-list">
        <ul>
        <li>Serving 6 Million+ Merchants</li>
        <li>INR 800+ billion worth transactions annually</li>
        <li>100+ payment options</li>
        </ul> 
       </div>

     </div>
     </div>

     <div className="banner-vid"  dangerouslySetInnerHTML={{
              __html: `
              <video  loop muted autoplay playsinline>
              <source src="videos/home-banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          `,
            }}>
       </div> 

    </div>

    {/* <div className="brand-logos-wrp">
     <div><img src='/images/bnr-ccd-logo.png'/></div>
     <div><img src='/images/bnr-central-logo.png'/></div>
     <div><img src='/images/bnr-big-bazar-logo.png'/></div>

     <div><img src='/images/bnr-brand-factory-logo.png'/></div>
     <div><img src='/images/bnr-reliance-logo.png'/></div>
     <div><img src='/images/bnr-burger-king-logo.png'/></div>
     <div><img src='/images/bnr-pabtaloons-logo.png'/></div>
    </div> */}

<div className="brand-logos-wrp">
<Swiper
modules={[Autoplay ]}
spaceBetween={20}
slidesPerView={'auto'}
freeMode={true}
centeredSlides={false}
allowTouchMove={false}
loop={true}
speed={3000}
autoplay={{
    delay: 0,
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
      <SwiperSlide><img src='/images/bnr-ccd-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-central-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-big-bazar-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-brand-factory-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-reliance-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-burger-king-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/bnr-pabtaloons-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/madura-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/ksbc-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/himalayan-logo.png'/></SwiperSlide>
      <SwiperSlide><img src='/images/holiday-in-logo.png'/></SwiperSlide>
    </Swiper>
</div>



<div className="hassel-free-wrp">
  <div className="container_1100">
   <div className="row">
     <div className="col-md-6">
       <div className="hassel-lhs">
        <h2 className="common-ttle">Multiple hassle-free payment channels</h2> 
        <p className="common-desc">NTT DATA Payments provides end-to-end payments acceptance services through both online and offline channels with its vast range of payment services.</p>

       <div className='spacer-30'></div>

        <div className="card-style card-style1 card-bg1">
          <h3 className="ttle">Online Payment Gateway</h3>
          <p className="common-desc">Step up your business by integrating our smooth and seamless payment gateway.</p>
         <Link href="/online-payment-gateway-india">
          <a  className="btn_style1">Know More</a>
          </Link>  
          <div className="card-link-cvr">
          <a href="" className="card-links">UPI</a> <span>|</span>
          <a href="" className="card-links">IMPS</a> <span>|</span>
          <a href="" className="card-links">Payment Links</a> <span>|</span>
          <a href="" className="card-links">BNPL</a>
          </div>

        </div>


        <div className='spacer-30'></div>

        <div className="card-style card-style3 card-bg4">
          <h3 className="ttle white-clr">Payouts</h3>
          <p className="common-desc">Concrete solutions for multiple businesses with a diverse range of services.</p>
          {/* <a href="" className="btn_style_white">Know More</a> */}
        </div>
       
       </div>
     </div>
     <div className="col-md-6">

     <div className="card-style card-style1 card-bg3">
          <h3 className="ttle">POS Machine</h3>
          <p className="common-desc">Receiving card payments in-store or on the go,<br/> made easy!</p>
          <Link href="/swipecard-pos-machine">
          <a  className="btn_style1">Know More</a>
          </Link>
          <div className="card-link-cvr">
          <a href="" className="card-links">PSTN POS</a> <span>|</span>
          <a href="" className="card-links">GPRS POS</a> <br/>
          <a href="" className="card-links">WIFI POS</a> <span>|</span>
          <a href="" className="card-links">Android POS</a> <span>|</span>
          <a href="" className="card-links">mPOS</a>
          </div>

        </div>

        <div className='spacer-30'></div>

      
        <div className="card-style card-style2 card-bg2">
          <h3 className="ttle white-clr">IVR Payments</h3>
          <p className="common-desc white-clr">Accept payments securely<br/> through this voice-based<br/> payment solution!</p>
          <Link href="/ivr-payment-system">
          <a  className="btn_style1">Know More</a>
           </Link>
          <div className="card-link-cvr">
          <a href="" className="card-links white-clr">Inbound IVR</a> <span>|</span>
          <a href="" className="card-links white-clr">Outbound IVR</a> 
          </div>

        </div>

        <div className='spacer-30'></div>


        {/* <div className="card-style card-style1 card-bg5">
          <h3 className="ttle">The mGalla app</h3>
          <p className="common-desc">Turn your smartphone into a smart payment accepting device.</p>
          <Link href="/mgalla-payment-app">
          <a  className="btn_style1">Know More</a>
          </Link>
          <div className="card-link-cvr">
          <a href="" className="card-links">Bharat QR</a> <span>|</span>
          <a href="" className="card-links">Link</a> <br/>
          <a href="" className="card-links">UPI</a><span>|</span>
          <a href="" className="card-links">mPOS</a>
          </div>

        </div> */}


     </div>
     </div> 
  </div>
</div>


<div className="why-choose-wrp">
<div className="container_1300 d-block">
<div className="row">
 <div className="col-md-6">
  <div className="why-choose-lhs">
  <h2 className="common-ttle white-clr">Why choose NTT DATA Payments?</h2> 
  <p className="common-desc white-clr">NTT DATA Payments is Asia&#39;s leading omnichannel payment service provider with a vast range of payment solutions.</p>
  {/* <a href="" className="btn_style_white">Know More</a> */}
  </div>
 </div>
 <div className="col-md-6">
  <div className="why-choose-rhs">

  <div className="circle-card circle-style1">
   <div className="crcle-numb-cvr"> 
   <p className='white-clr main_head'>130k+</p>
   <p className='white-clr'>Professionals</p> 
   </div>
   <span className='sept-bar'></span>
   <div className="crcle-numb-cvr"> 
   <p className='white-clr main_head'>50+</p>
   <p className='white-clr'>Countries</p> 
   </div>
  </div>  

  <div className="circle-card circle-style2">
  <div className="crcle-numb-cvr">
   <p className='main_head'>$22bn+</p>
   <p className=''>In Annual Revenue</p> 
   </div>
   <span className='sept-bar'></span>
   <div className="crcle-numb-cvr">
   <p className='main_head'>#8</p>
   <p className=''>Most valuable IT<br/> Services Brand</p> 
   </div>
  </div>  
  </div> 
  </div> 
</div>

<div className="why-sldr-cvr">
<Swiper className="why-choose-sldr"
 modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      breakpoints={{
        // when window width is >= 640px
        0: {
          
          slidesPerView: 1,
        },
        640: {
         
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          
          slidesPerView: 2,
        },
        1024: {
          
          slidesPerView: 3,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="wcbg1">
       <h3>High success rate</h3> 
       <p>NTT DATA Payments ensures best success rates for your transactions, providing multiple gateways to merchants and ensuring uninterrupted transaction flow.</p>
      </SwiperSlide>
      <SwiperSlide className="wcbg2">
      <h3>Instant Settlement</h3> 
       <p>Enhance flow of funds by getting your payments settled on the spot
(T+0), or as per your convenience, in your bank account!</p> 
      </SwiperSlide>
      <SwiperSlide className="wcbg3">
      <h3>Multiple payment options</h3> 
      <img className="img-fluid" src="/images/why-choose-multi.png"/>
       <p>Accept payment anytime and anywhere through UPI, IMPS, Payment Links, Bharat QR scan & pay, net banking, Buy Now Pay Later, debit & credit cards, and over 100 digital payment options!</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg4">
      <h3>Customized to fit your needs</h3> 
       <p>From Broking and Crypto to Healthcare, Education, Government and Hospitality, every segment has been powered by NTT DATA Payments’ solutions.</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg5">
      <h3>Easy EMI Solutions</h3> 
      <img className="img-fluid" src="/images/why-choose-emi.jpg"/>
       <p>With easy EMI options available for over 10 banks, let your customers buy anything of a higher ticket value seamlessly.</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg6">
      <h3>Fraud Prevention and Advanced Encryption System</h3> 
       <p>NTT DATA Payments is powered by PCI DSS 3.2.1V compliance and is 256-bit encrypted, giving you the safest and the most secure digital payment experience</p> 
      </SwiperSlide>
      <SwiperSlide className="wcbg7">
      <h3>Round the Clock Support</h3> 
       <p>Our support team is available 24*7 for all kinds of sales queries and requests, ensuring you have our support and help at every step.</p> 
      </SwiperSlide>
    </Swiper>
    </div>

</div>
</div>


<div className="real-time-report-wrp">

<h2 className="common-ttle text-center">Real-Time Reporting Tools<br/> for Smarter Insights</h2>
<p className="common-desc text-center">Track, monitor and manage all the payments you receive<br/> from your customers on a real-time basis and generate<br/> reports of the payments easily.</p>
<div className="text-center mt-4">
{/* <a href="" className="btn_style1 m-auto">Know More</a> */}


<div className="rtr-pic-wrp">

<div className="rtr-vid"  dangerouslySetInnerHTML={{
              __html: `
              <video width="100%" loop muted autoplay playsinline>
              <source src="videos/real-time-pic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          `,
            }}>
       </div> 

 {/* <img className="img-fluid" src="/images/real-time-pic.png"/>  */}
</div>

</div>
</div>


<div className="quick-easy-wrp">
<div className="container_1300 d-block">
<div className="row">
 <div className="col-md-6">
  <div className="quick-lhs"  dangerouslySetInnerHTML={{
              __html: `
              <video width="100%" height="auto" loop muted autoplay playsinline>
              <source src="videos/code.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
          `,
            }}>
  {/* <img src="/images/quick-pic.png" alt="" className="img-fluid" />   */}
    {/* <div>
        <ReactPlayer url="/videos/code.mp4" />
    </div> */}



  </div> 
 </div>
 <div className="col-md-6">
  <div className="quick-rhs">
  <h2 className="common-ttle">Quick and easy<br/> integration with multiple<br/> platforms</h2>  
  <p className="common-desc">Enjoy easy integrating plugins backed with comprehensive guides and expert support to accept payments for your ecommerce store, website, and mobile application.</p>
  {/* <a href="" className="btn_style1 mt-4">Know More</a> */}

<div className="grp-logo-cvr mt-30">
 <span><img src="/images/Group-logo1.png" alt="" className="img-fluid" /></span> 
 <span><img src="/images/Group-logo2.png" alt="" className="img-fluid" /></span> 
</div>
<div className="grp-logo-cvr">
 <span><img src="/images/Group-logo3.png" alt="" className="img-fluid" /></span> 
 <span><img src="/images/Group-logo4.png" alt="" className="img-fluid" /></span> 
</div>
<div className="mt-4">
<a href="/developer-guide" className="btn_style1 mt-3">Know More</a>
</div>

  </div> 
  </div> 
</div>
</div>
</div>


<div className="tailor-made-wrp">
<div className="container_1300 d-block">
<div className="row">
 <div className="col-md-6">
  <div className="tmw-lhs">
   <h2 className="common-ttle">Tailor-made payment solutions for every kind of business!</h2> 
   <p className="common-desc">With our 360-degree payment solutions, we cover all business types, be it online or offline, big or small.</p>
   {/* <a href="" className="btn_style1">Know More</a> */}
  </div>
  </div> 

<div className="col-md-6">
 <div className="tmw-rhs">


 <Swiper className="tmw-sldr"
 modules={[Navigation]}
 navigation
 breakpoints={{
  // when window width is >= 640px
  0: {
   
    slidesPerView: 1,
  },
  640: {
   
    slidesPerView: 1,
  },
  // when window width is >= 768px
  768: {
    
    slidesPerView: 2,
  },
}}
      spaceBetween={30}
      slidesPerView={2.8}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic1.png" alt="" />
       <div className="desc-card">
        <h3>Retail</h3> 
        <p>Retail business is all about quick payments and fewer cart abandonments. With NTT DATA Payments’ solutions, easily accept payments on your e-commerce website or mobile.</p>
        <Link href="/payment-solutions-for-retail-industry">
        <a  className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic2.png" alt="" />
        <div className="desc-card">
        <h3>Education</h3> 
        <p>Payment solutions that enable faster, simpler processing for educational institutes with
POS, PG, BNPL, EMIs, e-challan, and split-settlement capabilities.</p>
<Link href="/payment-solutions-for-education-industry">
        <a href="" className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic3.png" alt="" />
        <div className="desc-card">
        <h3>Broking</h3> 
        <p>With time sensitivity being utmost priority, NTT DATA Payments ensures Third-Party
Validation with quick &amp; successful payment solutions.</p>
<Link href="/payment-solutions-for-brokers">
        <a href="" className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic4.png" alt="" />
        <div className="desc-card">
        <h3>DTH and Cable TV</h3> 
        <p>Make subscription payments uncomplicated by eliminating manual invoicing,
recurring billing, and reminding and collecting payments over multiple payment options.</p>
<Link href="/payment-solutions-for-dth-industry">
        <a href="" className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic5.png" alt="" />
        <div className="desc-card">
        <h3>Tours & Travels</h3> 
        <p>Encourage reliable options for quick ticketing and faster payments with NTT DATA Payments’ multiple payment options for hassle-free ticket and hotel booking.</p>
        <Link href="/payment-solutions-for-travel-industry">
        <a  className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
      <SwiperSlide className="tmw-slide-cvr card_style4">
        <img className="img-fluid" src="/images/tailor-pic6.png" alt="" />
        <div className="desc-card">
        <h3>Government</h3> 
        <p>With a two-way comprehensive electronic payment solution for the government
sector, NTT DATA Payments is delivering a faster, safer and more efficient payment interface
through multiple digital payment options.</p>
<Link href="/payment-solutions-for-government-sector">
        <a  className="btn_style4">Know More</a>
        </Link>
       </div>
      </SwiperSlide>
    </Swiper> 
  </div> 
</div>

</div>
</div>
</div>


{/* <div className="dp-main-wrp">
<div className="container_1300 d-block">

<h2 className="common-ttle text-center white-clr">Update yourself with the latest<br/> Digital Payments happenings!</h2>

<div className="row mt-5">
 <div className="col-md-6">
<div className="dp-bx-lrg">
<img src="/images/dp-1.png" alt="" className="img-fluid" />  
<div className="desc-bx">
<h6>16TH JUNE 2017 </h6>
<h2>Interview: Dewang Neralla, CEO, Atom Technologies</h2> 
<a href="" className="btn_style4">Know More</a>
</div>
</div>   
</div> 

<div className="col-md-6">

 <div className="dp-bx-smll">
   <div className="row">
    <div className="col-md-4 col-4">
    <img src="/images/dp-2.png" alt="" className="img-fluid" />  
    </div>
    <div className="col-md-8 col-8">
    <div className="desc-bx">
    <h6>3RD FEBRUARY 2020</h6>
    <h2>Budget 2020: Highlights for the MSME and Startup</h2> 
     <a href="" className="btn_style4">Know More</a>
     </div>
    </div> 
   </div>
  </div> 

  <div className="dp-bx-smll">
   <div className="row">
    <div className="col-md-4 col-4">
    <img src="/images/dp-3.png" alt="" className="img-fluid" />  
    </div>
    <div className="col-md-8 col-8">
    <div className="desc-bx">
    <h6>22ND JANUARY 2020</h6>
    <h2>Union Budget 2020- Expectations of Indian FinTech Industry</h2> 
     <a href="" className="btn_style4">Know More</a>
     </div>
    </div> 
   </div>
  </div> 

  <div className="dp-bx-smll">
   <div className="row">
    <div className="col-md-4 col-4">
    <img src="/images/dp-4.png" alt="" className="img-fluid" />  
    </div>
    <div className="col-md-8 col-8">
    <div className="desc-bx">
    <h6>6TH JANUARY 2020</h6>
    <h2>Digital Payments: An insight into the happenings of 2019</h2> 
     <a href="" className="btn_style4">Know More</a>
     </div>
    </div> 
   </div>
  </div> 

<div className='mob-center'>
<a href="" className="btn_style_white">Know More</a>
</div>
</div>

</div>

</div>
</div> */}

<div className="elevate-main-wrp">
<div className="container_1300 d-block">
<div className="row">
  <div className="col-md-6">
   <div className="elevate-lhs">
     <h2 className="common-ttle">Elevate your<br/> payment acceptance<br/> experience!</h2>
     <div className='mob-center'>
     <Link href="/sign-up"><a href="" className="btn_style_white"><p>Sign Up</p></a></Link>
     </div>
    </div> 
  </div>
  <div className="col-md-6">

<div className="testi-sldr-cvr">
<Swiper
 modules={[Navigation, Pagination,Autoplay]}
 autoplay={{
  delay: 3000,
  disableOnInteraction: false
}}
 pagination={{ clickable: true }}
      spaceBetween={30}
      slidesPerView={1}
    >
            <SwiperSlide>
      <div className="elevate-rhs">
    {/* <img src="/images/profile-sample.png" alt="" className="img-fluid" />  */}
    <p className="desc">HDMC has implemented payment gateway service from 2013-14. We find the NTT DATA Payment Services (erstwhile Atom) gateway reliable, cost effective and convenient payment solution for our Hubli-Dharwad citizens. The functionalities and performance have been well received and satisfied gateway with the ease of operations and latest features</p>
    <p className="name">Shri S N Ganachari, Executive Engineer
<span>Hubli-Dharwad Municipal Corporation.</span></p>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="elevate-rhs">
    
    <p className="desc">We have been associated with NTT DATA Payment Services (formerly, Atom Technologies) Payment Gateway for a long time and are extremely satisfied with their platform. Their interface is quite user friendly and easy-to-use. </p>
    <p className="desc">We find the gateway highly reliable & secure and had a seamless transaction experience. NTT DATA Payment Services has been processing all our orders smoothly. It supports a whole range of payment modes, which has helped our users to opt for advanced and multiple mode of payment alternatives. </p>
    <p className="desc">We specifically appreciate their responsive support and are impressed with the level of service we get from them.</p>
    <p className="name">Hanumantharaju H K, Senior Programmer (IT Engineer)
<span>Tumakuru City Corporation</span></p>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="elevate-rhs">
    
    <p className="desc">Railtel has been associated with NTT DATA Payment Services (erstwhile Atom Technologies) payment gateway for its Railwire broadband Internet services from October 2020. The feature of multi product & splitting transactions helped us to manage access network partner’s pay out. We find the gateway highly reliable & secure and had a seamless transaction experience.  They offer whole range of payment modes like card gateway, net banking, UPI, UPI QR & Gpay etc., which helped to our users to use advanced payment options.  Their support & business team is always available and addresses our query on timely manner</p>
    <p className="name">K. Manohar Raja, ED/EB
<span>RailTel Corporation of India Ltd </span></p>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="elevate-rhs">
   
    <p className="desc">This is to certify that NTT DATA Payment Services (formerly, Atom Technologies Ltd.) has provided Internet payment Gateway for Karnataka One Integrated Citizen Services portal (https://www.karnatakaone.gov.in) since November 2016, for accepting payments towards services of various Government Departments through Karnataka One Portal and the services of the same has been satisfactory.</p>
    <p className="name">Vipin Singh, IFS, Director
<span>Directorate Of Electronic Delivery Of Citizen Services (EDCS)</span></p>
    </div> 
      </SwiperSlide>
      <SwiperSlide>
      <div className="elevate-rhs">
   
    <p className="desc">This is to certify that NTT DATA Payment Services (originally, Atom Payment Gateway) has been serving as an online platform for transactions of fees for semester, examination, hostel, convocation of the various Undergraduate and Postgraduate Programmes in the Gandhigram Rural
Institute-Deemed to be University, Gandhigram, Tamil Nadu, since 2016. With this
Gateway System, 100% online digital payment system has been made successful with
over 25,000 transactions per year for all students and scholars in the Institute. It has
been providing the Institute a vast range of payment services and solutions.</p>
{/* <p className="desc">This is also to certify that NTT DATA Payment Services Payment Gateway functions by transferring
key information between websites or mobile devices and banks or payment processors,
and vice versa, making online payments a smoother and user-friendly affair and
ensures the security of financial transaction and eliminate fraudulent activities on the
website of our Institute. Overall, this Gateway ensures safety transaction with its bulletproof online security backed with highly configured version and encryption.</p> */}
<p className="desc">We wish this Gateway to launch more and more ventures ahead.</p>
    <p className="name">I.Kaspar Raj, Director Computer Center
<span>The Gandhigram Rural Institute</span></p>
    </div>
      </SwiperSlide>

    </Swiper> 
</div>
  </div>
</div>
</div>
</div>




 
    </div>
  )
}
