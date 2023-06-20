import Link from "next/link";
import Head from 'next/head'
import Script from 'next/script'
//import styles from "../styles/Home.module.scss";


export default function Contact() {
  return (
    <div className="contactpage">
      <Head>
        <title>NTT DATA Payments Grievance Redressal Policy | NTT DATA Payment Services</title>
        <meta name="description" content="Explore NTT DATA Payment Services Grievance Redressal Policy, put together to protect the information shared by our users with us. We follow the highest standard practices to protect your data." />
    <style>{`
    table{
      width: 100%; border: 1px solid #017CAB;
    }
      table tr th {
       background-color: #006C96;
       color:#fff;
       padding:5px;
       border:1px solid #000;
      }
      table tr td{ font-size: 16px; line-height: 20px; font-weight: regular; text-align: left; border:1px solid #000; padding:5px;}
      .blue_green{color:#0082b4;}
      `}
    </style>
     </Head>
 
    
 <div className="contact-main-bnr-wrp">
 <div className="container_1300 d-block">
<h2 className="common-ttle ">Grievance Redressal Policy</h2>
 </div>    
 </div>
 <nav className='bread-wrp' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item active" aria-current="page">Grievance Redressal Policy</li>
  </ol>
</div>
</nav>  


<div className="privacy-cvr-wrp">
<div className="container_1300 d-block">
<h3>Introduction </h3>
<p>The objective of our grievance redressal policy is to provide timely and comprehensive resolution to customer complaints, queries and grievances.</p>
<p>The policy encompasses the following key aspects:</p>
<ul>
  <li>Registration and Acknowledgement of complaints</li>
  <li>Handling of Grievances</li>
  <li>Complaint resolution  </li>
</ul>

<h3>Registration and Acknowledgement of complaints</h3>
<p>Complainants may raise a Complaint / Grievance request through the following modes:</p>

<div>
  <h6> <strong className="blue_green">a)	Chatbot</strong> </h6> 
  <p>Chatbot offers instant support in resolving the queries. </p>
  <h6> <strong className="blue_green">b)	Get-Help</strong> </h6> 
  <p>Get-help provides service for raising a ticket for any complaint. </p>
  <h6><strong className="blue_green">c) Website </strong> </h6>
  <p>Complainants may write to the following Email IDs mentioning all the required details for lodging the Complaint , at HelpDesk contact details :-</p>   
</div>

<table>
  <tr>
    <th>Team</th>
    <th>Contact details</th>
    <th>TAT </th>
  </tr>
  <tr>
    <td>Help Desk Team</td>
    <td>E-mail ID:<br/>
    <ul>
    <li>E-Commerce Related: <Link href="mailto:NDPS.helpdesk@nttdata.com"><a>NDPS.helpdesk@nttdata.com</a></Link></li>
    <li>POS Related:  <Link href="mailto:NDPS.poshelpdesk@nttdata.com"><a>NDPS.poshelpdesk@nttdata.com</a></Link></li>
  </ul>
    </td>
    <td>3 to 7 business days</td>
  </tr>
  <tr>
    <td>Customer Grievance Redressal 
Officer
</td>
    <td>
      <p>Sandeep Goyal<br/>E-mail ID: <Link href="mailto:NDPS.grievanceredressal@nttdata.com"><a>NDPS.grievanceredressal@nttdata.com</a></Link></p> 
      <p>Address :- Plot No, 4th Floor, Suraksha Ace Building, CST No. 34/3 Village Chakala, 2-A, Andheri - Kurla Rd, Andheri East, Mumbai, Maharashtra 400059</p>
    </td>
    <td>12 business days from the date of escalation</td>
  </tr>
</table>

<h6 className="mt-4"> <strong className="blue_green">d)	Helpline number</strong> </h6> 
<p>Complainants may reach out to the number: 18602664959 between business hours i.e. 8 AM to 8 PM every working day of the week. </p>

<h6> <strong className="blue_green">e)	Mobile application (App)</strong>  </h6> 
<p>Complainants may lodge a Complaint / Grievance on the App “mGalla” launched by the Company. </p>

<p>All the complaints received via the above-mentioned modes will be registered on the Complaint Resolution Management (“CRM”) system of the Company and will be addressed by the Customer Service team which will consist of trained employees experienced to handle such complaints. A Unique Ticket Number (“UTN”) will be generated in the Company’s CRM system for all types of complaints.  </p>


<h3>Handling of Grievances</h3>
<p>For Transaction based complaints, the Complainants are required to share the below details for registration of complaints: </p>
<ul>
  <li>Transaction reference number; </li>
  <li>Complainant’s registered name;</li>
  <li>Complainant’s email Id;</li>
  <li>Complainant’s contact number;</li>
  <li>Complainant’s ID (MID / TID / Agent ID as applicable); </li>
  <li>A brief description on the issue;</li>
  <li>Copy of supporting document, if any; and</li>
  <li>Any other relevant information as required by the Company for complaint resolution.</li>
</ul>

<p>Please find below type of grievance with regards to PA business and estimated Turn-Around-Time (TAT) for resolution :</p>
<div className="table-wrp">
<table>
  <tr>
    <th>Sr. No. </th>
    <th>Type of grievance</th>
    <th>Estimated TAT for resolution</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Transaction/ Onboarding</td>
    <td>3 - 5 business days from the date of complaint</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Service Enable/ Disable</td>
    <td>3 - 5 business days from the date of complaint</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Refund</td>
    <td>5 - 7 business days from the date of complaint</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Settlement</td>
    <td>5 - 7 business days from the date of complaint</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Any other business operations</td>
    <td>5 - 7 business days from the date of complaint</td>
  </tr>
</table>
</div>
<small>Note: -	TAT may be higher if grievance redressal has dependency on external teams like banks or other parties, serviceability due to far off locations and other external factors.</small>



<h3>Complaint resolution</h3>
<p>A complaint will be considered as closed in any of the following instances:</p>
<p>&nbsp;&nbsp;&nbsp;a.	When the Company has resolved  the query / complaint of the complainant;</p>
<p>&nbsp;&nbsp;&nbsp;b.	Where the Complainant has indicated in writing, its acceptance of the response of the Company; and</p>
<p>&nbsp;&nbsp;&nbsp;c.	Where the Complainant has not responded within 3 business days of the receipt of the written response of the Company.</p>

<p>The Customer Service team will reach out to the Complainant to confirm that the Complaint has been resolved once the concerned function marks the complaint as “resolved” in the system. Post confirmation, the Complainant will be intimated via email that their Complaint has been resolved. The intimation of resolution will contain the UTN, the solution / explicitly mention that the issue has been resolved, the escalation matrix and TAT in case the resolution is not per the expectations of the Complainant, etc. In case of rejection of the complaint, response will be sent to the Complainant with reasons thereof recorded in writing.</p>
<p>Please note, PA related complaints will be resolved within a period of 30 business days of its receipt as per the prescribed regulations.</p>
</div>    
</div>

 
    </div>
  )
}
