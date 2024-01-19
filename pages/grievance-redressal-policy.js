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

{/* <h6> <strong className="blue_green">e)	Mobile application (App)</strong>  </h6> 
<p>Complainants may lodge a Complaint / Grievance on the App “mGalla” launched by the Company. </p> */}

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
          
<div>
  <h3>Disputes / Chargeback Management</h3> 
    <p>Disputes/Chargebacks can be associated with unsatisfactory customer services or product or
    poor service delivery experience from the merchant. Chargebacks can also be filed if the
    customer suspects any fraudulent activity on their card. Once a cardholder files a complaint with
    the issuer Bank, the dispute is forwarded by the associations to the acquirer who in turn raises
    the dispute/Chargeback to the service provider to initiate an investigation. NDPS further shares
    the chargeback with the Merchant.</p>  
  <p>Disputes/Chargebacks cases are considered high priority due to the involvement of
    Disputes/Chargeback handling team of both the customer’s bank as well as our partner banks.
    There could be several reasons for a chargeback against a particular transaction. A list of the
    most common reasons for chargeback are as below :-</p>   

  <h4 style={{color: '#6785C1'}}>Dispute Reasons</h4>  
  <ul>
    <li>Transaction amount is different</li>
    <li>Request is made for the copy of the receipt</li>
    <li>Merchandise is defective or damaged</li>
    <li>Alleged fraudulent transaction investigated by the acquiring bank</li>
    <li>Multiple charges for the same order</li>
    <li>Merchant agreed to issue refund on merchandise returned or for any other reason</li>
    <li>Merchandise not as advertised</li>
    <li>Customer did not engage in or authorize this transaction</li>
    <li>Merchandise has not been delivered</li>
    <li>Cardholder is not in possession of the card used for the transaction</li>
    <li>Service not received from merchant</li>
    <li>Order was cancelled</li>
    <li>Customer paid for order by other payment method</li>
  </ul>  

  <h4 style={{color: '#6785C1'}}>Process to resolve Disputes/chargebacks</h4> 
  <ul>
    <li>NDPS will notify Merchant by email about the dispute, with the common transaction
      details along wjth the payment ID and the reason of chargeback, which is provided
      by the bank.</li>
    <li>In order to represent the chargeback, Merchant needs to review the
      Disputes/chargeback and provide documentary evidence to contest or defend the
      dispute with the stipulated time</li>
    <li>NDPS may request for additional documents for cases that need further
      investigation. These documents could include based on the merchant business or 
      Authorization Letter from the customer, Cancellation Policy, etc.</li>
    <li>Merchants needs to respond by sharing all the required documents as per the
      requirement of the bank along with a clarification/explanation in email. NDPS shall be
      check the documents and represent the dispute.</li>
    <li>Merchant needs to revert within the turn-around-time with the required document, in
      case non receipt and non-available of the documents merchant is liable for disputes.</li>
  </ul>  
      <p>Most of chargebacks arise due to miscommunication between Customer and Merchant, the
        following are the best practices for merchants when processing payments/ settlements to avoid
        chargebacks or disputes.</p>
      <ul>
        <li>Transparent Return Policy – Merchants should ensure that all refund/ return policies are
          clearly stated on their website.</li>
        <li>Clear and Constant Communication - Merchants must keep their customers informed
          about the status of orders/delivery.</li>
        <li>To avoid any uncertainty, merchants should share reference numbers, invoices details,
          and other order/services related documents with customers.</li>
      </ul>       
  </div>
  <div>
    <h3>Refund Management</h3>
    <h4 style={{color: '#6785C1'}}>Refund Processing Timelines</h4> 
    <p>NDPS has a very stringent mechanism to deal with refunds of failed transactions (transactions
      charged to customer but not returned to Payment Aggregator and, in turn, to merchant, hence
      no services are rendered). As per the merchant&#39;s line of business, they can opt to configure
      their account to reverse such transactions or get it updated as a successful transaction post
      reconciliation, and continue to provide services.</p>
      <p>We can reconcile dropped transactions in 2 ways:</p>
      <ul>
        <li>We initiate server-to-server API calls with banks on periodic basis throughout the day to
          fetch the status of transactions. Such cases are sent to bank for reversal on T+1.</li>
        <li>For banks who do not provide the API-based reconciliation mechanism, we reconcile
          with the offline files received from the banks on the next working day. Thus refunds for
          such transactions are sent the next day post reconciliation or T+1 post reconciliation.</li>
      </ul>
      <h4 style={{color: '#6785C1'}}>Refund Reasons</h4> 
      <ul>
        <li>Merchant has initiated the refund to the customer because he is unable to provide goods
        or services or due to a customer complaint about the service to merchant.</li>
        <li>There are duplicate transactions and one of the duplicate transactions has to be
        refunded.</li>
      </ul>
      <p>Once a refund has been initiated, NDPS refunds to the source account as follows –</p>
      <ul>
        <li>Merchant is provided with a refund API or batch mechanism to initiate complete or partial
          refund in portal.</li>
        <li>Batch file is processed by the payment team at NDPS to acquiring bank to initiate refund
          to the source account.</li>
        <li>Refund is processed from the acquiring bank to the source account. Daily reconciliation
          of the files is done to check on refund RRN and the same is reflected on merchant
          dashboard and payout file on the merchant’s portal.</li>
        <li>In case there are issues or queries related to any of the details related to refund, then
          the merchant can reach out to the Customer Service Team</li>
      </ul>
  </div>


</div>    
</div>

 
    </div>
  )
}
