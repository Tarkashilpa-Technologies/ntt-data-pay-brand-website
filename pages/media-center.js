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
        <title>Press Release, Media and Events |  NTT DATA Payment Services</title>
        <meta name="description" content="Learn more about  NTT DATA Payment Services news release, media release, press statement & video release and advertorials, keep you posted with recent updates." />
      
      
      </Head>

 
    <div className="bnr-home-wrp media-bnr">
    <div className="container_1300">
     <div className="bnr-caption">
       <h2>There&#39;s always some happening at NTT DATA Payment Services. Here&#39;s a Peek-A-Boo into our press and media interaction.</h2>
     </div>
     </div>
    </div>

  


<nav className="bread-wrp minus-top-40" aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item"><a href="#">Resources</a></li>
    <li className="breadcrumb-item active" aria-current="page">Media Center</li>
  </ol>
</div>
</nav>


<div className="media-cntr-wrp">

<div className="container_1300 d-block">

<div className="row justify-content-center">
{/* <div className="col-md-2">
<div className="media-cntr-lhs">
<ul>
<li><a href="">Events</a></li>
<li><a href="">Press Relases</a></li>
<li><a href="">In the News</a></li>    
</ul>    
</div>    
</div>  */}

<div className="col-md-10">

<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/events1.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">AICP National Conference, Nagpur, Maharashtra</h2>  
<p className="date">February 6, 2020</p>

<div className="media-text-box">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) participated in the 21st edition AICP National Conference held under the aegis of Association of Indian College Principals on February 6th, 2020, in Nagpur, Maharashtra.</p>
<p>The conference focused on &#34;Rejuvenating Higher Education for Global India&#34; which emphasized on relevance of values in higher education, higher education for urban and rural connect and emerging trends of ICT in Higher Education.</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>  


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event14.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Atom-NTT Acquisition Gala</h2>  
<p className="date">November 15, 2019</p>

<div className="media-text-box">
 <p>The Indo-Japanese (Atom-NTT) deal is finally sealed! The recent acquisition of Atom Technologies, now, NTT DATA Payment Services by NTT DATA Group called in for a day filled with glamour and glee. On the 15th of November 2019, NTT DATA Payment Services celebrated the acquisition dinner with its key business partners along with the senior management at St. Regis, Lower Parel, Mumbai. The gathering was addressed by the management on topics like the future business plan, NTT DATA Payment Services (formerly, Atom Technologies) prospects, the growth strategy for the organization and many more. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>  


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Knowledge Series, Hyderabad</h2>  
<p className="date">October 18, 2019</p>

<div className="media-text-box">
 <p>Post success in Ahmedabad, Indore, and Pune, Knowledge Series decided to sail south, and the city of Nizam&#34;s caught our attention. On the 18th of October 2019, Knowledge Series conducted a 2-hour exclusive event for the start-up community, freelancer, developers, bloggers, etc. of Hyderabad at Innovation HQ. The workshop was centred around the topic “Optimize Online Payment Experience for Customers” and the team present at the venue had an opportunity to network, collaborate and share ideas on various topics, that would accelerate online payment and improve the customer experience for one and all. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>



<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event13.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">IITM - India International Travel Mart</h2>  
<p className="date">September 27 - 29, 2019</p>

<div className="media-text-box">
 <p>Post successful participation and response in the three-day extravaganza travel event held by IITM at New Delhi, we attended the same event in Mumbai, from 27th to 29th Sep at MMRDA Grounds, BKC, Mumbai. The event was a comprehensive panorama platform for international travel community to come together and showcase their existing products as well as introduce new ones to audiences from across the country. Attended by more than 20000 visitors and 1500 exhibitors the show was a great hit in Mumbai too! </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>  



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Knowledge Series, Pune</h2>  
<p className="date">September 27, 2019</p>

<div className="media-text-box">
 <p>witnessing a splendid success at the Indore, Knowledge Series we headed off straight to the &#34;city of virtue&#34;, Pune. This 2-hour event, tailor-made for start-ups, Pune&#34;s budding freelancer community, developers, bloggers, etc. wherein the panel discussed on various topics, with the main objective being, how one could &#34;Optimize Online Payment Experience for Customers&#34;. Held at, Cowerkz, Pune on the 27th of September 2019, the event gave the team an opportunity to network, collaborate and share ideas on various topics, that would accelerate online payment and improve customer experience. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event16.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">IITM - India International Travel Mart</h2>  
<p className="date">September 20 - 21 - 22, 2019</p>

<div className="media-text-box">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was enthralled to be a part of the three-day extravaganza travel event held by IITM at the Thyagaraj Sports Complex, New Delhi, from the 20th to 22nd September. The event was a comprehensive panorama platform for international travel community to come together and showcase their existing products as well as introduce new ones to audiences from across the country. Attended by more than 20000 visitors and 1500 exhibitors the show was a great hit! 
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>  


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Knowledge Series - Indore</h2>  
<p className="date">August 30, 2019</p>

<div className="media-text-box">
 <p>After a successful event in Ahmedabad, we headed off to Indore for the next Knowledge Series. This event was attended by the like of Indore&#34;s budding freelancer community, developers, bloggers etc. where we discussed on various topic, with the main objective being, how one could “Optimize Online Payment Experience for Customers”. Held at, the Ginger Hotel, Indore on the 30th of August 2019, the event gave the team an opportunity to network, collaborate and share ideas on various topics, that would accelerate online payment and improve customer experience.</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event18.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">AWS Cloud Day</h2>  
<p className="date">July 19, 2019</p>

<div className="media-text-box overflow-auto">
 <p>Conducted by ecommerce giant Amazon, the AWS Cloud Day was scheduled on the 19th of July 2019 at ITC Gardenia in Bangalore. This one-day event was hosted by Industry experts and AWS Leaders. It was an ideal amalgamation of business and technical leaders, as well as IT Executive who use Technology to innovate and build solutions.  
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 




<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event17.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Knowledge Series- Ahmedabad</h2>  
<p className="date">July 12, 2019</p>

<div className="media-text-box">
 <p>Began the year&#34;s first Knowledge series in none other than the &#34;Smart City&#34; of India, Ahmedabad on the 12th July 2019 at The Address. The event was a cheerful gathering of freelancers and developers, discussing on the topic &#34;Optimize Online Payment Experience for Customers&#34;. The Knowledge Series was an initiative for entrepreneurs, freelancers, developers etc by giving them an opportunity to network, collaborate, share ideas and discuss on various topics, that would accelerate online payment and improve customer experience. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event22.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Master Soft Event</h2>  
<p className="date">June 24, 2019</p>

<div className="media-text-box overflow-auto">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was proud to be a part of the one-day event held at RR Inn, Tirunelveli Junction on the 24th of June 2019 where payment service provider around India gathered to discuss on the topic Capacity Building Program for Academic leaders on ICT Enabled Effective Institutional Governance. The objective at the meet was &#34;To prepare the institutions to meet the modern requirements of statutory/ accrediting body viz. NAAC/NBA/AICTE/ NIRF etc., and also to prepare them for technology adoption for effective institutional governance.&#34;  
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event20.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">FIAKS Leadership Conclave (FLC) </h2>  
<p className="date">June 21, 2019</p>

<div className="media-text-box overflow-auto">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was honoured to be a part of the Forum of Industry and Academic Knowledge Sharing (FIAKS) Leadership Conclave as a Knowledge Partner, that was conducted on the 21 June 2019 at the World Trade Centre, Mumbai</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>



<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event27.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">3rd Annual Corporate Fraud and Forensics India Summit </h2>  
<p className="date">June 11 - 12, 2019</p>

<div className="media-text-box overflow-auto">
 <p>In association with RSA, NTT DATA Payment Services (formerly, Atom Technologies was a part of the two-day summit held at Holiday Inn Mumbai, on the 11th and 12th of June 2019. Delegates around India gathered to speak about the raging topic of recent string of corporate scandals and frauds that have rattled India, resulting in decline in investor confidence and loss of shareholder value, and in extreme cases, liquidation of business. Delegates debated around real-life experiences and cultivated innovative solutions together to reshape the quality of corporate fraud detection & control program. Representing NTT DATA Payment Services one of the key speakers were Mr. Asm Subramanian.  
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event23.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">44th NCIE Mumbai meet</h2>  
<p className="date">May 30, 2019</p>

<div className="media-text-box">
 <p>NCIE conducted an exclusive meetup for Nodd&#39;s members to connect with Achievers, Build Network and Strengthen Relationship with Thought-Leaders of the FinTech Industry. NTT DATA Payment Services (formerly, Atom Technologies) CEO Mr. Dewang Neralla and Ex. Director (Technology) at FTIL was invited for the event where the host and he spoke about the recent trends in FinTech and the future potential it holds. 
click here to see this event video - <a href="https://www.youtube.com/watch?v=avXxo1Ax7tU&feature=youtu.be" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=avXxo1Ax7tU&feature=youtu.be</a></p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Madurai educational event </h2>  
<p className="date">May 29, 2019</p>

<div className="media-text-box overflow-auto">
 <p>Amidst the hustle and bustle of the city, the &#34;Madurai workshop&#34; on &#34;Capacity Building Program for Academic leaders on ICT Enabled effective institutional governance&#34; was a huge hit. It was attended by the likes of nearly 70 institutions where Professors of institutions were briefed on how online fee collection can be made with the help of ERP & different payment modes. Amongst many, NTT DATA Payment Services (formerly, Atom Technologies) proudly presented their offerings and how we could help simplify the online fee collection process.  
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event25.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Reach Acceptance Summit 2019</h2>  
<p className="date">April 18, 2019</p>

<div className="media-text-box">
 <p>The Reach Acceptance Summit 2019, held at Trident, BKC Mumbai on the 18th of April was an amalgamation of selected few FinTech Mastermind that spoke on innovation at Point of Sale to changing consumer and merchant behaviour, to the future of commerce and explored almost every aspect of acceptance solution. NTT DATA Payment Services (formerly, Atom Technologies) was proud to be a part of the event that was full of learning, sharing ideas, networking, and business building.</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event28.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Money 2020</h2>  
<p className="date">Mrach 19, 2020</p>

<div className="media-text-box overflow-auto">
 <p>Amidst the hustle and bustle of the approaching financial year 2019, NTT DATA Payment Services (formerly, Atom Technologies) were one of the key participants of the 3-day event held in Singapore, from the 19th to the 21st March, namely Money 2020. Along with key members from the NTT team, the event was attended by Ms. Geeta Chauhan – Head of Marketing. The event included 150 exhibitors mainly from the Payment, FinTech and Financial Services industries, and was attended by over 3,500 attendees. More than 300 speakers shared their thoughts about disruptive technology, banking innovation, risk, security and fraud, regional initiatives, payment platform ecology and more making the event a huge success.   
</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Cloud Bazaar - A Reseller Club Initiative&#34;18</h2>  
<p className="date">November 18, 2018</p>

<div className="media-text-box">
 <p>Recently, NTT DATA Payment Services (formerly, Atom Technologies) attended Cloudbazaar (previously Reseller Club presents HostingCon India) which is India&#34;s premier Conference and Trade Show for the Cloud, Domains, and Hosting Industry. The platform is open for all the Web App Developers, Designers and Web Pros to interact, learn and build new relations. Pravesh Gupta, Head - Inside Sales and Strategy of NTT DATA Payment Services represented the company and its products at the stall on 1st Nov&#34;18 at Cloud Bazaar, Goregaon, Mumbai. The event was graced by eminent personalities like Shridhar Luthria- Vice President, Channel Partnerships – Endurance International Group, Shashi Tripathi - Channels and Alliances – Google Cloud India and many more. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event30.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Knowledge series&#34;18</h2>  
<p className="date">October 25, 2018</p>

<div className="media-text-box overflow-auto">
 <p>The event garnered top notch professionals like Mr. Harun Rashid Khan, Former Deputy Governor, Reserve Bank of India and Mr. Abhishant Pant, Founder Cashless Journey and The Fintech Yatra who were also the key note speaker at the event. The welcome address was given by Mr. Amarendra Sahoo, former Regional Director of RBI. Mr. Dewang Neralla, CEO, NTT DATA Payment Services led the discussion on Future of Digital Payments in India, in conversation with five other panellists. The insightful evening was followed by entertainment and dinner. The event took place on 25th Oct&#34;18 at Westin Mumbai Garden City, Goregaon. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event32.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">The 8th School Leadership Summit, Indore</h2>  
<p className="date">September 22, 2018</p>

<div className="media-text-box">
 <p>The 8th School Leadership Summit was held on 22nd September 18 at Indore. The School Leadership Summit (SLS) brings together top-notch schools and preschool decision makers, Industry Leaders, and Innovators from around the country to deliberate and discuss on various aspects of building quality school education ecosystem. It enables schools to be future ready with the state-of-the-art technology integration. </p>  
 <p>Shilpa Zota, Sales and Marketing Manager attended the summit wherein she explained about the NTT DATA Payment Services (formerly, Atom Technologies) services which are especially available for the Education Sector. She further gave an insight on all NTT DATA Payment Services products and services like IPG, POS, mGalla etc. She talked about ERP solutions and how it is helping our 300+ ERP partners & benefitting 10,000+ schools. NTT DATA Payment Services special features like Instalment payments, Standing Instructions and Education loans for students is providing an edge to our partners. 
All in all, the event proved to be a huge success as it brought together different minds along with different ideas from different parts of India and NTT DATA Payment Services was honoured to be a part of the event. Such Summit is bound to create a better education system and of course a better tomorrow. </p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event34.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Best Online Payments Solution of the Year- Merchant Payment & Card awards 2018</h2>  
<p className="date">August 22, 2018</p>

<div className="media-text-box overflow-auto">
 <p>Payment & Card awards 2018, NTT DATA Payment Services (formerly, Atom Technologies) has bagged the award in one of the most promising categories &#34;Best Online Payments Solution of the Year- Merchant&#34;. The award ceremony was held at Westin Garden City, Mumbai, On Wednesday, 22 Aug 2018 </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event36.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Retail Technology Conclave, 2018</h2>  
<p className="date">August 08, 2018</p>

<div className="media-text-box">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was a part of the Retail Technology Conclave- industry&#34;s biggest platform for technology trends and insights. The platform brought industry professionals, experts, and service providers together for discussing the latest technological advancements and deliberating on how to best use technology for the benefit of the business and industry. It was a two-day event held at Renaissance Hotel, Mumbai from June 12 - 13, 2018. Technology Conclave (ReTechCon) 2018 focused on helping retailers understand all that is smart and cutting edge in retail to become smart. Dewang Neralla, CEO, NTT DATA Payment Services spoke about how Digital Payments has been transforming the payment industry, revolutionizing the business and its various other prospects. The conclave offered the ultimate platform to discuss emerging technology trends that would impact retail and probe all possible disruptions in retailing. </p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event37.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Singapore FinTech Festival, 2017</h2>  
<p className="date">November 14, 2017</p>

<div className="media-text-box overflow-auto">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was a part of the Singapore FinTech Festival, from 14 to 16 November 2017 which was organized by the Monetary Authority of Singapore in partnership with The Association of Banks in Singapore and in collaboration with SingEx Holdings, providing a platform for collaborations, connections, and co-creations within the FinTech ecosystem in Singapore and beyond. Comprising a series of back-to-back events that took place from 13 to 17 November 2017, the festival featured an Innovation Lab Crawl, FinTech Conference, Global FinTech Hackcelerator, FinTech Awards, and Investor Summit. Our Honourable Finance Minister Arun Jaitley also delivered a keynote address at the event. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event38.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Cloudbazaar, Mumbai</h2>  
<p className="date">November 08, 2017</p>

<div className="media-text-box">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) shared its insights upon the latest development in the technology of various digital payment modes at the Cloud Bazaar Event, held on 8th November 2017 at NESCO Grounds, Mumbai. NDPS also got an opportunity to interact with the key decision makers and industry veterans who shared their knowledge and expertise at the Cloudbazaar sessions. Cloudbazaar is India&#34;s premier Conference and Trade Show for the Cloud, Domains, and Hosting Industry. It&#34;s the perfect platform for all the Web App Developers, Designers and Web Pros to interact, learn and build new relations. </p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">All India Urban Cooperative Banking Summit, Bangalore</h2>  
<p className="date">October 28, 2017</p>

<div className="media-text-box overflow-auto">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) attended the All India Urban Cooperative Banking Summit, organized on 28th October, 2017 at the Ritz Carlton Hotel, Bangalore. NDPS was also the proud Delegate Kit Partner of the event. All India Urban Cooperative Banking Summit and Exhibition was organised by the Karnataka State Co-operative Urban Banks Federation (KSCUBF) in association with B2B Infomedia. Nearly 800delegates gathered in total from 450 Urban Co-operative Banks at the event from across India. NTT DATA Payment Services attended the All-India Urban Cooperative Banking Summit, organized on 28th October 2017 at the Ritz Carlton Hotel, Bangalore. NTT DATA Payment Services was also the proud Delegate Kit Partner of the event. All India Urban Cooperative Banking Summit and Exhibition was organised by the Karnataka State Co-operative Urban Banks Federation (KSCUBF) in association with B2B Info media. Nearly 800delegates gathered in total from 450 Urban Co-operative Banks at the event from across India. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event1.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Edtech Review Event, Bangalore</h2>  
<p className="date">September 08, 2017</p>

<div className="media-text-box">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) was a part of the 11th edition of the K-12 Conference held at &#34;The Vivanta by Taj&#34;, MG Road, Bangalore in September 2017 which involved discussions and an array of sessions on how one can digitize education and help make an institute a cashless campus. The EdTech Review K-12 conference is an on-invite event, catering K-12 educational leaders -school owners, principals, chairmen, directors, owners, and decision makers, with this year&#34;s focus being School Leaders.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>



<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event2.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">TiE Smash Up Mumbai</h2>  
<p className="date">July 22, 2017</p>

<div className="media-text-box overflow-auto">
 <p>NTT DATA Payment Services (formerly, Atom Technologies) Sponsored the TiE Smash Up 7.0 event at ISDI ACE, One IndiaBulls Centre, Lower Parel on 22 July 2017. SmashUp is TiE Mumbai&#34;s start-up event that endures a total Start-up & Entrepreneurial democracy! This event is all about the start-ups and is conceived for and by the start-up entrepreneurs. This is the 7th edition of the format and usually brings out the new bloods to learn collaborate and seek help from the maturing and growing start-ups.</p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event3.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Retail Technology Conclave 2017, Mumbai</h2>  
<p className="date">July 14, 2017</p>

<div className="media-text-box">
 <p>Dewang Neralla, CEO, NTT DATA Payment Services (formerly, Atom Technologies) spoke about how Digital Payments has changed the game in the Retail Industry at Retail Technology Conclave on 14th and 15th June 2017 at Renaissance Convention Centre, Powai, Mumbai. NTT DATA Payment Services was also the Digital Payment Partner of the event. Retail Technology Conclave is organized by Retailers Association of India (RAI) which is the unified voice of retailers in India. A non-profit organization, RAI works with all stakeholders for creating the right environment for the growth of modern retail industry in India. We encourage, develop, facilitate, and support retailers to modernize and adopt best practices that will delight customers. </p>
</div>

</div>     
</div>   
</div>
</a>
</Link>



<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event4.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Best Mobile Payments Solution of the Year</h2>  
<p className="date">June 07, 2017</p>

<div className="media-text-box overflow-auto">
 <p>Best Mobile Payments Solution of the Year of the prestigious Payments & Cards Awards 2017 India </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event5.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Good Response to IRCTC-Atom Tie up to Book Train Ticket on International Card</h2>  
<p className="date">May 06, 2016</p>

<div className="media-text-box">
 <p>IRCTC has joined hands with Atom, now NTT DATA Payment Services an online payment gateway, to facilitate foreign travellers to use international credit and debit cards for purchasing train tickets.</p>
 <p>“The arrangement has enabled the international passengers to use their cards for payment transaction for booking e-tickets on IRCTC ticketing portal. The response is very encouraging since launch of the facility last week,” said Indian Railway Catering and Tourism Corporation (IRCTC) Chairman and Managing Director AK Manocha.
</p>
<p>He said Rs. 15 lakh worth transaction has been made so far on international cards.</p>
<p>IRCTC, a railways PSU, provides end-to-end travel solutions for domestic as well as international travellers.</p>
<p>Manocha also said, “Atom has deployed a robust technology and world class Fraud Protection Mechanism and our technology team has made necessary changes along with them to enable such transactions.”</p>
<p>Besides train tickets, IRCTC also provide bookings for airline, hotel as well as other ancillary services for the passengers.</p>
<p>It is expected that the service will propel India straight into the global tourism road map and allow easier access and flow of tourists into India.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Digital Money Conference 2016, Mumbai</h2>  
<p className="date">October 06, 2016</p>

<div className="media-text-box overflow-auto">
 <p>Being a panellist at the discussion on &#34;Redefining Acceptance of Electronic Transactions&#34;, Dewang Neralla, CEO, NTT DATA Payment Services provided his valuable insight at the Digital Money Conference, organized by Payments Council of India on 6th October 2016 at ITC Grand Central, Mumbai. The Payments Council of India was formed under the aegis of IAMAI in the year 2013 catering to the needs of the digital payment industry. The Council was formed inter-alia for the purposes of representing the various regulated non-banking payment industry players, to address and help resolve various industry level issues and barriers which require discussion and action. The council works with all its members to promote payments industry growth and to support our national goal of Cash to Less-Cash Society and Growth of Financial Inclusion which is also the Vision Shared by the RBI and Government of India. PCI works closely with the regulators i.e., Reserve Bank of India (RBI), Finance Ministry and any similar government, departments, bodies, or Institution to make India a less cash society. </p>  
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event6.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Asia Pacific Entrepreneurship Awards 2016 India</h2>  
<p className="date">May 24, 2016</p>

<div className="media-text-box overflow-auto">
 <p>Dewang Neralla, CEO, NTT DATA Payment Services (formerly, Atom Technologies) was awarded as the winner in the Most Promising Category of the prestigious Asia Pacific Entrepreneurship Awards 2016 India.</p>
 <p>The award ceremony was held at JW Marriott Aerocity, New Delhi, India on Thursday, 24 March 2016.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event7.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">iTV Network & atom technologies celebrates World Water Day by Launching Water Sustainability Project with Aquakraft</h2>  
<p className="date">May 22, 2016</p>

<div className="media-text-box overflow-auto">
 <p>World Water Day is marked on 22 March every year. It&#39;s a day to celebrate existence and significance of water in our daily life. It&#39;s a day to make a difference for the members of the global population who suffer from water related issues. It also reminds people about the significance of fresh water and to promote sustainability for freshwater resource management. The major issue in India on water consumption is clean drinking water, health, hygiene, and sanitation. To cope with these issues, government has undertaken several initiatives like Swachh Bharat Abhiyan, Clean Ganga Project to create an enabling environment for innovation and sustainability. Taking cue from the Government Initiatives, iTV network and Atom Technologies, now NTT DATA Payment Services in partnership with AquaKraft Projects Pvt Ltd., have initiated a special programme for the betterment of the society.</p>  
 <p>Under this special programme water ATMs & public utility services will get administered across the length & breadth of the country including D, E, and F category railway stations under the CSR programme facilitated by IRCTC and CMAI Association of India. Aquakraft, in partnership with iTV Network and atom, now NTT DATA Payment Services, have joined hands to take a revolutionary initiative to provide clean drinking water though aqua ATMs starting with Varanasi City. 41 Water ATMs and 10 state of the art public utility toilets will be initially inaugurated in the key areas of North-eastern Railway district. Atom now NTT DATA Payment Services is one of India&#39;s leading payment service providers and powers the payments solution of AquATM where prepaid cards would be used by consumers for purchasing water. Similar type of utility station has already been implemented in Maharashtra, Karnataka & Rajasthan and is currently being implemented in Baramati by Aquakraft. The entire initiative will lead into a seminar on water conservation with the participation of key stake holders, bureaucrats, corporates, subject experts from the water & sanitation industry. Aquakraft Chairman & CEO Mr. Subramanya Kusnur highlighted the importance of water & said &#34;Water management is an important requirement for ecologically sustainable development. Efficient consumption of water is a major issue in today&#39;s society, thus our project has been set up to create products that can help preserve one of our key natural resources and at the same time fulfil the requirements of clean and healthy water to the nation.&#34; iTV Network Chairman & MD Mr. Kartikeya Sharma said &#34;iTV Network has always been at the forefront of using media as a platform for change.</p>
 <p>Availability of Clean Drinking Water is one of the key challenges today and we at NewsX are happy to work closely with Aqua Kraft to create a revolution in the distribution of clean and safe drinking water.&#34; NTT DATA Payment Services (formerly Atom Technologies) CEO, Mr. Dewang Neralla said &#34;We are extremely elated to work with Aquakraft for powering their AquATMs with our prepaid cards. We strongly believe this will benefit the clusters of villages and communities around the stations and will not only provide safe drinking water but also help foster greater financial inclusion through enablement of payments for water as well as other services using the prepaid cards&#34;</p>
 <p>Source: exchange4media News Service; NewsX Bureau; The Hindu</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event8.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Roundtable to at India Fashion Forum</h2>  
<p className="date">March 15, 2016</p>

<div className="media-text-box overflow-auto">
 <p><b>OMNICHANNEL CONCLAVE:</b></p>
 <p>The Future is Omnichannel : Revolutionising The Retail Experience Through Smart Payment System</p>
 <p>The session covered the following topics was presented and moderated by Dewang Neralla, CEO, NTT DATA Payment Services (formerly Atom Technologies)</p>
 <ul>
   <li>What is important for retailers and Fashion Brands in 2016?</li>
   <li>Challenges and opportunities for Retailers & Brands in the Omni-channel Environment Compliance and fraud mitigation across multiple payment channels.</li>
   <li>Investing in a modern payments environment that supports innovation at the same time as offering high security and reliability. The importance of incorporating payments and security into Omni-channel Strategy reliability.</li>
 </ul>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Participated As The Payment Service Provider: The Rotary District Conference 2016, Kolkata</h2>  
<p className="date">February 28, 2016</p>

<div className="media-text-box overflow-auto">
 <p>The purpose of the District Conference was to provide opportunities for networking, inspirational addresses, and discussions on Rotary-related matters.
Atom Technologies, now NTT DATA Payment Services participated as the payment service provider and helped the club receive payment online.</p>
<p>The Rotary District Conference was held on 27 - 28 February, 2016 at Eco Park, Kolkata.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 



<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event9.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Won The Best Payment Gateway Facilitator at the eTales Awards</h2>  
<p className="date">February 18, 2016</p>

<div className="media-text-box overflow-auto">

</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event10.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">E-Tailing India Expo Mumbai 2016</h2>  
<p className="date">February 17, 2016</p>

<div className="media-text-box overflow-auto">
 <p>Dewang Neralla was the speaker in the panel discussion held in Sahara Star, E-Tailing India Expo Mumbai 2016</p>
 <p>The 3-day Expo is eTailing India&#39;s flagship event where Global and Indian industry leaders connect on a common platform for sharing their insights, mapping industry trends and identifying opportunities in the sector.</p>
 <p>Over the years, the Expo has witnessed participation from all top eCommerce ventures in India such as Amazon, Flipkart, Snapdeal, eBay, Google as well as top service providers such as IBM, Motorola, Shopify, Channel Advisor etc. Keynotes, Panel Discussions, Round Tables, and Workshops.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event11.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">The Entrepreneurial Summit, 2016 organised by IIT Bombay Mumbai</h2>  
<p className="date">January 30, 2016</p>

<div className="media-text-box overflow-auto">
<p>Mr. Dewang Neralla, CEO of NTT DATA Payment Services (formerly Atom Technologies) was the speaker in the event for discussing about &#39;How Payments & Wallet eco- system is emerging in India.&#39; It was an open-ended discussion skewed towards the new payment systems under development all over the World and how the payments and wallets have changed the way people make payments with more and more secure environment.
</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event19.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Assocham: Start Up India 2016 &#39; Annual meet of Entrepreneurs and Start Ups&#39;  New Delhi</h2>  
<p className="date">January 20, 2016</p>

<div className="media-text-box overflow-auto">
 <p>The event was organised by India&#39;s Knowledge Chamber &#39;ASSOCHAM&#39; with the objective of helping start- ups with their capital requirements, incubation, issues related to intellectual property, marketing support, financial and technical help to scale up their businesses.</p>
 <p>Mr. Dewang Neralla, CEO of NTT DATA Payment Services (formerly Atom Technologies) was the speaker in the Inaugural session of the event during which we discussed about &#39;How 63 Moons is executing the Start Up Policy of the Government of India&#39;. 63 Moons has recently launched its incubation centre &#39;J S Innovation Lab&#39; with the idea of assisting start- ups with their establishment.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event21.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">TieCON 2016, designated by Tie Mumbai: Transformation- Disrupt or be Disrupted ? Mumbai</h2>  
<p className="date">January 06, 2016</p>

<div className="media-text-box overflow-auto">
<p>The event intended to bring entrepreneurs from the established economy with the new age economy to deliberate and examine the evolving businesses and the new models that are radically transforming the landscape of entrepreneurial and organizations.</p>
<p>Mr. Dewang Neralla, CEO of NTT DATA Payment Services (formerly Atom Technologies) was the keynote speaker in the event. He discussed about the &#39;Disrupting Innovation: Transformation of FTIL to 63 Moons&#39;. The discussion focused more on how there are different ways of disruptions happening all over the World and how there is a need for more and more disruption to be a leader in the market. Its more about the adapting to the World&#39;s changing environment.
</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event24.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">e-Merge : Amphitheatre of International Mangement Institute, New Delhi</h2>  
<p className="date">December 12, 2015</p>

<div className="media-text-box overflow-auto">
 <p>e-Merge hosted founders and senior executives from leading e-retail and e-grocery retail companies to discuss in a panel, the problems and possible solutions to the problems gripping the online commerce industry. e-Merge constituted of Panel Discussions and Entrepreneurial Talks. Atom Technologies, now NTT DATA Payment Services partner with IMI as the title sponsor of the event.</p>
 <p>The topics that were discussed are the hyper local service market and how it is looking to expand in the Indian market. Our founder & CEO Mr Dewang Neralla, gave an entrepreneurial on his entrepreneurial journey and how key Mantras one should remember on his path of entrepreneurial journey.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 




<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event26.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">TechSparks : Sheraton Hotel, Bengaluru</h2>  
<p className="date">October 29, 2015</p>

<div className="media-text-box overflow-auto">
<p>NTT DATA Payment Services (formerly Atom Technologies) participated in YourStory&#39;s annual flagship event, TechSparks is India&#39;s most popular, vibrant and a mainstream entrepreneurship summit.</p>
<p>Our CEO Mr Dewang Neralla was one of the esteemed panellists in the session “Partners for Growth”. As rightly mentioned, envisaging growth without the right set of partners is difficult in today&#39;s world. Everything around is so complicated that we need a partner who can make our lives easier. And that&#39;s what NTT DATA Payment Services does, while you focus on the bigger issues, NTT DATA Payment Services takes care of the smaller issues for you.</p>
<p>YourStory&#39;s year-on-year high impact campaigns culminate in a mega conference where India&#39;s vast entrepreneurial ecosystem converges to witness innovation and emerging trends, attend high-octane events filled with insightful keynotes, witness exciting new product launches, and participate in promising discussions with investors, experts, and other key players in this network.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>



<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event29.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">DIGITAL MONEY 2015, Taj Lands End, Mumbai</h2>  
<p className="date">October 13, 2015</p>

<div className="media-text-box overflow-auto">
 <p>With the Govt.&#39;s flagship Digital India Programme, adoption of digital payments and enabling a seamless payment experience will play a crucial role in realizing the vision of the digitally empowered economy.</p>
 <p>The digital payments space is reinventing itself with each passing day as the payments industry is turning into an effective pile of innovation and trails. Catering to the massive proliferation of digital payments in recent times, Digital Money 2015 was a conference designed to assess and empower the digital payments landscape.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/event26.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">India Retail Forum & India Omni Channel Forum: Powai, Mumbai</h2>  
<p className="date">September 15, 2015</p>

<div className="media-text-box overflow-auto">
<p>CAPTURING THE NEW PHYGITAL SCENARIO – Atom Technologies, now, NTT DATA Payment Services participated in the IRF & IOCF forum.</p>
<p>Our CEO Mr Dewang Neralla spoke about Omni channel payment experience for next generation omni channel enterprise. Harnessing the future of retail in the Omnichannel era and building the roadmap for customer centric retail organizations through technological advances, new and innovative concepts, digital and social media by delving deep into the consumer minds and building a hassle-free shopping environment and wowing them with a grand experience throughout their purchase journey and thereafter.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event31.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">DIGITAL MONEY 2015, Taj Lands End, Mumbai</h2>  
<p className="date">October 13, 2015</p>

<div className="media-text-box overflow-auto">
 <p>With the Govt.&#39;s flagship Digital India Programme, adoption of digital payments and enabling a seamless payment experience will play a crucial role in realizing the vision of the digitally empowered economy.</p>
 <p>The digital payments space is reinventing itself with each passing day as the payments industry is turning into an effective pile of innovation and trails. Catering to the massive proliferation of digital payments in recent times, Digital Money 2015 was a conference designed to assess and empower the digital payments landscape.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 


<Link href="#">
<a className="media-cntr-box">
<div className="row g-0">
<div className="col-md-6">
<div className="media-pic">
<img src="/images/placeholder.png" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">TieSmashUP 5.0 2015: IIT Bombay, Mumbai</h2>  
<p className="date">September 13, 2015</p>

<div className="media-text-box overflow-auto">
<p>SmashUp is TiE Mumbai&#34;s start-up event that endures a total Start-up & Entrepreneurial democracy! This event is all about the start-ups and is conceived for and by the start-up entrepreneurs. Atom Technologies, now NTT DATA Payment Services) plays a very crucial role in providing innovative payments solutions to Start-ups.
</p>
</div>

</div>     
</div>   
</div>
</a>
</Link>


<Link href="#">
<a className="media-cntr-box alternate-box">
<div className="row g-0">
<div className="col-md-6 order-last">
<div className="media-pic">
<img src="/images/event35.jpg" alt="" className="img-fluid" />   
</div>
</div>
<div className="col-md-6 order-first">
<div className="media-desc-box">
<h6>Events</h6>
<h2 className="ttle">Tech Circle Start-up | Gurgaon, New Delhi</h2>  
<p className="date">August 12, 2015</p>

<div className="media-text-box overflow-auto">
 <p>The event was to bring together the most happening and disruptive early-stage start-ups in the city, potential investors, angels, seed funds, incubators, accelerators, & mentors and VC funds who are active in early-stage start-up scene.</p>
 <p>Atom Technologies, now, NTT DATA Payment Services partnered this event as Technology Partner, where our CEO Mr Dewang Neralla gave a small talk on how the payment industry has evolved over the years.</p>
</div>

</div>     
</div>   
</div>
</a>
</Link> 




</div>

</div> 

</div>

</div>








 
    </div>
  )
}
