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
      //  document.getElementById("tymessage").style.display = 'inline-block'; 
        console.log('Response received')
        console.log(res.json())
        if (res.status === 200) {
         
          window.location.href='campaign-thankyou';
         
        }
      }) 
  
  
     return false;
    }  
    


  return (
    <div className="homepage">
      <Head>
        <title>India&#39;s Leading Payment Solution Provider| NTT DATA Payment Services India </title>
        <meta name="description" content="Servicing over 6 million+ businesses in India, NTT DATA Payment Services offers a vast range of secure payment services through POS machines, Payment Gateways and IVR payment solution." />
     
        <script strategy="lazyOnload"
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
 
    
 
    <div className="bnr-home-wrp camp-bnr" id="banner">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>A Complete payment solution to advance your business!</h2>
       <p>Experience a seamless way of accepting and managing online payments with NTT DATA Payments</p>
       {/* <Link href="/sign-up">
       <a href=""  className='btn_style1'>Sign up</a>
       </Link>
       <Link href="/contact-us">
       <a  className='btn_style4'>CONTACT SALES</a>
       </Link> */}

       <div className="cap-list">
        <ul>
        <li>Serving 6 Million+ Merchants</li>
        <li>INR 800+ billion worth transactions annually</li>
        <li>100+ payment options</li>
        </ul> 
       </div>

     </div>
     </div>

    <div className="campaign-bnr-wrp">
        <h2 className="common-ttle">Sign Up</h2>
    <form onSubmit={handleSubmit}>
  
  <div className="row">
  <div className="col-md-12 mb-10">
   <label htmlFor="exampleFormControlInput1" className="form-label">Products Required:</label>
   <select  className="form-control" id="products_required" >
  <option value="Payment Gateway">Payment Gateway</option> 
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

   <div className="col-md-6 mb-10">
   <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
   <input type="text" className="form-control" required id="mobile" min="10" max="10" />    
   </div>  


   <div className="col-md-6 mb-10">
   <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
   <input type="email" className="form-control" required id="email" />    
   </div> 

   <div className="col-md-12 mb-10">
   <button type="submit" className="btn btn-primary btn_style1 mb-3 mt-3">Sign Up</button>&nbsp;&nbsp;<span className="thankyou-message" id="tymessage">Thank you for submitting details.</span>
   </div>

  </div>
 </form>

 
<div className="gp-frm-patch">  
{/* <ul>
 <li>Get <b>Cashback</b><br/> worth INR 5000<sup>*</sup></li>
 <li>No <b>Set Up</b><br/> fee</li>
 <li>1<sup>st</sup> year <b>AMC</b><br/> Waived off</li> 
</ul> */}
<div className="clearfix"></div>
  <p className="tc"><small><sup>*</sup>T&C Apply</small></p>
</div>

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



<div className="hassel-free-wrp" id="product">
  <div className="container_1100">
   <div className="row">
     <div className="col-md-6">
       <div className="hassel-lhs">
        <h2 className="common-ttle">Multiple hassle-free payment channels</h2> 
        <p className="common-desc">NTT DATA Payments provides end-to-end payments acceptance services through both online and offline channels with its vast range of payment services.</p>
        <Link href="#banner">
          <a  className="btn_style1">Sign Up</a>
          </Link>  
       <div className='spacer-30'></div>

        <div className="card-style card-style1 card-bg1">
          <h2 className="ttle">Online Payment Gateway</h2>
          <p className="common-desc">Step up your business by integrating our smooth and seamless payment gateway.</p>
         
     

        </div>


        <div className='spacer-30'></div>


        <div className="card-style card-style2 card-bg2">
          <h2 className="ttle white-clr">IVR Payments</h2>
          <p className="common-desc white-clr">Accept payments securely<br/> through this voice-based<br/> payment solution!</p>
         

        </div>


       </div>
     </div>
     <div className="col-md-6">

     <div className="card-style card-style1 card-bg3">
          <h2 className="ttle">POS Machine</h2>
          <p className="common-desc">Receiving card payments in-store or on the go,<br/> made easy!</p>
          

        </div>

        <div className='spacer-30'></div>

        <div className="card-style card-style3 card-bg4">
          <h2 className="ttle">Payouts</h2>
          <p className="common-desc">Concrete solutions for multiple businesses with a diverse range of services.</p>
          {/* <a href="" className="btn_style_white"></a> */}
        </div>

        <div className='spacer-30'></div>


        {/* <div className="card-style card-style1 card-bg5">
          <h2 className="ttle">The mGalla app</h2>
          <p className="common-desc">Turn your smartphone into a smart payment accepting device.</p>
         

        </div> */}


     </div>
     </div> 
  </div>
</div>


<div className="why-choose-wrp" id="about">
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
   <h2 className='white-clr'>130k+</h2>
   <p className='white-clr'>Professionals</p> 
   </div>
   <span className='sept-bar'></span>
   <div className="crcle-numb-cvr"> 
   <h2 className='white-clr'>50+</h2>
   <p className='white-clr'>Countries</p> 
   </div>
  </div>  

  <div className="circle-card circle-style2">
  <div className="crcle-numb-cvr">
   <h2 className=''>$22bn+</h2>
   <p className=''>In Annual Revenue</p> 
   </div>
   <span className='sept-bar'></span>
   <div className="crcle-numb-cvr">
   <h2 className=''>#8</h2>
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
       <h2>High success rate</h2> 
       <p>NTT DATA Payments ensures best success rates for your transactions, providing multiple gateways to merchants and ensuring uninterrupted transaction flow.</p>
      </SwiperSlide>
      <SwiperSlide className="wcbg2">
      <h2>Instant Settlement</h2> 
       <p>Enhance flow of funds by getting your payments settled on the spot
(T+0), or as per your convenience, in your bank account!</p> 
      </SwiperSlide>
      <SwiperSlide className="wcbg3">
      <h2>Multiple payment options</h2> 
      <img className="img-fluid" src="/images/why-choose-multi.png"/>
       <p>Accept payment anytime and anywhere through UPI, IMPS, Payment Links, Bharat QR scan & pay, net banking, Buy Now Pay Later, debit & credit cards, and over 100 digital payment options!</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg4">
      <h2>Customized to fit your needs</h2> 
       <p>From Broking and Crypto to Healthcare, Education, Government and Hospitality, every segment has been powered by NTT DATA Payments’ solutions.</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg5">
      <h2>Easy EMI Solutions</h2> 
      <img className="img-fluid" src="/images/why-choose-emi.jpg"/>
       <p>With easy EMI options available for over 10 banks, let your customers buy anything of a higher ticket value seamlessly.</p>  
      </SwiperSlide>
      <SwiperSlide className="wcbg6">
      <h2>Fraud Prevention and Advanced Encryption System</h2> 
       <p>NTT DATA Payments is powered by PCI DSS 3.2.1V compliance and is 256-bit encrypted, giving you the safest and the most secure digital payment experience</p> 
      </SwiperSlide>
      <SwiperSlide className="wcbg7">
      <h2>Round the Clock Support</h2> 
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



<div className="elevate-main-wrp">
<div className="container_1300 d-block">
<div className="row">
  <div className="col-md-6">
   <div className="elevate-lhs">
     <h2 className="common-ttle">Start the journey to your growth with us today!</h2>
     <p className="common-desc white-clr">More than 6 million merchants trust <br/>NTT DATA Payment Services for payment solutions for their business. </p>
     <div className='mob-center'>
     <Link href="#banner"><a href="" className="btn_style_white">Sign Up</a></Link>
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



<a id="call-cta-mob" href="#banner">Sign Up</a>

<Link href="#banner">
<a className="back-top"><span>&#8679;</span></a>
</Link>
 
    </div>
  )
}
