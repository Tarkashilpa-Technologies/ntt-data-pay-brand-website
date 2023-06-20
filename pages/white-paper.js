import Link from "next/link";
import Head from 'next/head'
import Script from 'next/script'
//import styles from "../styles/Home.module.scss";


export default function Contact() {
  return (
    <div className="contactpage">
      <Head>
        <title>NTT DATA Payment Services| Frequently Asked Questions</title>
        <meta name="description" content="Frequently Asked Questions about online payment gateway services from NTT DATA Payment Services. Get answers to your questions today!" />
     </Head>
 
    
 <div className="contact-main-bnr-wrp">
 <div className="container_1300 d-block">
<h2 className="common-ttle ">White Paper</h2>
 </div>    
 </div>
 <nav className='bread-wrp' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item active" aria-current="page">White Paper</li>
  </ol>
</div>
</nav>  


<div className="white-paper-main">
<div className="container_1300 d-block">

<div className="row">
<div className="col-md-5">
<div className="wp-lhs">
<img src="/images/white-paper1.jpeg" alt="" className="img-fluid" />    
</div>    
</div>  

<div className="col-md-7">
<div className="wp-rhs">
<h2 className="common-ttle">QR Code Merchant Payments - A growth opportunity for mobile money providers</h2>    
<p className="common-desc">With a continued global increase in mobile phone adoption, it comes as no surprise that mobile payments and mobile wallets are also experiencing increased use; especially amongst the younger generations. Globally, digital payments are expected to reach an annual transaction value of USD 4.4 trillion in 2020, with 17 per cent CAGR through 2024. With growth rates like this, it is not surprising that merchant payments have captured the interest of many stakeholders, including Mobile Money Providers (MMPs).</p>
</div>    
</div>

<div className="col-md-12">
<div className="wp-rhs">
<p className="common-desc">In emerging markets mobile money providers are at the forefront of using QR codes. QR code merchant payments is seen as an attractive opportunity, many of the existing challenges remain and some new challenges present.</p>

<p className="common-desc">The report is intended as a resource for mobile money providers to unlock a significant business opportunity to adopt QR code-based payments with a particular focus on their interoperability to achieve scale. Find in this report to adopt and/or grow QR code merchant payments ecosystems:</p>    

<ul role="list">
                        <li><strong>Evolution of QR code payments</strong> - insights on the QR code merchant payments ecosystem and various initiatives around the world;</li>
                        <li> <strong>QR code development</strong> - highlighting key learnings from multiple initiatives around the globe and market size;</li>
                        <li> <strong> QR code merchant payments flow </strong> - assisting readers in identifying where they are in their respective journeys; </li>
                        <li> <strong> QR code merchant payments interoperability </strong> - describing QR code merchant payments in the context of an evolutionary journey;</li>
                        <li> <strong>QR code specifications in the world </strong> - insights and perspectives on some of the fundamental technical considerations of QR code-based merchant payments; </li>
                        <li> <strong>Call to action for Mobile Money Providers</strong> - insights and perspectives on the impacts and implications of some of the major QR code merchant payments trends. </li>
                    </ul>


        <Link  href="/pdf/QR-Code-Merchant-Payments-A-growth-opportunity-for-mobile-money-providers-incl-full-appendices.pdf">
       <a target="_blank" className='btn_style1'>Download</a>
       </Link>                 

</div>    
</div>

</div>

{/* <div className="spacer-50"></div> */}

{/* <div className="row mt-5">
<div className="col-md-4 order-md-2">
<div className="wp-lhs">
<img src="/images/white-paper2.png" alt="" className="img-fluid" />    
</div>    
</div>  

<div className="col-md-8 order-md-1">
<div className="wp-rhs pt-50">
<h2 className="common-ttle">Asia in a New Era of Digital Payments</h2>    
<p className="common-desc">Customers's expectations of more convenience, customisation and control are being set by thriving companies or digital leaders that recognise the critical role of digital payments in enabling them to disrupt markets. The rise in the shared services economy is proof that previous levels of customer service are no longer good enough. New business, operational, and organisational models are required to meet continually growing consumer expectations.</p>
</div>    
</div>

<div className="col-md-12 order-md-3">
<div className="wp-rhs">
<p className="common-desc">Here's what you'll uncover with:</p>    

<ul role="list">
                    <li>Understand the state of the payments landscape across ten markets: China, India, Indonesia, Japan, Korea, Malaysia, Philippines, Taiwan, Thailand, and Vietnam.</li>
                    <li>Five macro trends driving the digital payments imperative across the Asia Pacific region.</li>
                    <li>Looking ahead into 2030 and discover the opportunities that help merchants to navigate the complexities to meet the expectations of customers.</li>
                    </ul>


        <Link href="/sign-up">
       <a className='btn_style1'>Download</a>
       </Link>                 

</div>    
</div>

</div> */}

</div>
</div>

 
    </div>
  )
}
