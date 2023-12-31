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
    <div className="signuppage pd-lr-15">
      <Head>
        <title>Terms and Conditions | NTT DATA Payment Services India</title>
        <meta name="description" content="NTT DATA Payment Services is a leading omnichannel payment service provider in India. We offer secure and efficient online payment gateway across the globe. NTT DATA Payment Services is the best payment gateway India which offers multiple payment options including UPI, BNPL, Bharat QR, Net Banking, Credit and Debit Cards, Payment Links, Wallets via payment solutions like Online Payment Gateway, POS Machine, Mobile App and IVR payment system." />
      
      
      </Head>


<nav className='bread-wrp minus-top-40' aria-label="breadcrumb">
<div className="container_1300 d-block">
  <ol className="breadcrumb">
  <li className="breadcrumb-item"><Link href="/"><a >Home</a></Link></li>
    <li className="breadcrumb-item active" aria-current="page">Terms and Conditions</li>
  </ol>
</div>
</nav>


<div className="tc-main-wrp">
<div className="container_1300 d-block">

<h2 className="common-ttle text-center">MERCHANT SERVICES TERMS AND CONDITIONS</h2>
<p>These Merchant Services Terms and Conditions (“Terms and Conditions”) are entered into By and Between; NTT DATA Payment Services India Limited (formerly known as Atom Technologies Limited), a company incorporated under the Companies Act, 1956, having its registered office at 4th Floor, Marchon, 401, Suraksha Ace, Plot No.2A, CTS. No.34/3, Andheri - Kurla Road, Village Chakala, J.B. Nagar, Chakala, Andheri East, Mumbai Suburban, Maharashtra, 400059, (hereinafter referred to as “NDPS”, which expression shall unless repugnant to the subject or context shall mean and include its successors and assigns) of the One Part; And you, the signatory to the Merchant Application Form (hereinafter referred to as “Merchant/Seller” which expression shall unless repugnant to the subject or context shall mean and include its successors and assigns) of the Other Part. NDPS and the Merchant/Seller shall hereinafter be individually referred to as a “Party” and collectively as the “Parties”.</p>

<h4>WHEREAS:</h4>
<ul className="alpha">
<li>NDPS is, inter alia, engaged in the business of providing multiple payment facilities over multiple channels such as Internet, IVR and Mobile using credit/debit card, net banking, loyalty, prepaid cards, wallets, IMPS, QR, UPI, NEFT/RTGS, Pay later options, POS and other payment related services/solutions. NDPS acts as an authorised payment aggregator that facilitate e-commerce websites and merchants to accept various payment instruments from the customers for completion of their payment obligations in accordance with RBI Guideline bearing No. - RBI/DPSS/2019-20/174DPSS.CO.PD.No.1810/02.14.008/2019-20 dated March 17, 2020 titled "Guidelines on Regulation of Payment Aggregators and Payment Gateways" (hereinafter referred to as the said "RBI Guideline").</li>
<li>Merchant/Seller having entered into and accepted the terms of the Merchant Application Form with NDPS has requested NDPS, and NDPS has agreed to provide it's payment related services more specifically mentioned hereinbelow, in order to enable Customer/Buyers to purchase the products and/or services of the Merchant/Seller in accordance with the terms and conditions hereinafter appearing.
</li>
</ul>

<h4>NOW THEREFORE <span>it is acknowledged by and agreed between the Parties hereto as follows:</span></h4>

<ol>
<li><b>DEFINITIONS:</b><br/>In addition to the terms defined in the introduction to these Terms and Conditions and other parts of these Terms and Conditions, wherever used in these Terms and Conditions, unless repugnant to the meaning or context thereof, the following expressions shall have the meanings set forth below:

<ol>
 <li><b>Affiliate:</b> in case of a Party being a body corporate, any entity that directly or indirectly controls, is controlled by, or is under the common control of that Party;</li>
 <li><b>Authentication:</b> shall mean the process by which Customer/Buyer identification is authenticated in the Processing Mechanism; </li>
 <li><b>Card Association(s):</b> Card Association(s) shall mean any of VISA, MasterCard, NPCI, Amex, or any other card association as may be specified from time to time. </li>
 <li><b>Chargeback:</b> shall mean the reversal of any Transaction on account of (i) any alleged forgery of the card or other details (ii) any charge/debit made on a card that has been listed as a hot listed card or otherwise listed on the Card Association warning bulletins (iii) duplicate processing of the Transaction; (iv) any amount required to be refunded due to, denial of Transaction by the Customer/Buyer as wrongly charged payment/ extra payments and/or due to the fraudulent use/service related/quality related/misuse of the personal and financial information of the Customer/Buyer by any unauthorized person; and (v) subject to applicable law, any other dispute received from Bank/ Card Association or circumstance that may result in the existence of a claim for reversal of any Transaction as may be determined reasonably by NDPS.
 </li>
 <li><b>Chargeback Fees:</b> shall mean the fees charged by NDPS to the Merchant towards chargeback / disputed transactions. </li>
 <li><b>Confidential Information:</b> shall mean any and all information or data of a confidential nature, application, network configuration, documents, software, code, accounts, business plans and processes and/or any other information in whole or in part of either Party; </li> 
 <li><b>Customer/Buyer:</b> shall mean any person who is availing services or products of the Merchant/Seller using NDPS Services; </li>
 <li><b>Fees:</b> shall mean such fee and/or charges payable by the Merchant/Seller to NDPS for NDPS Services and as specified in the Merchant Application Form and/or the purchase order (“PO”).</li>
 <li><b>Guidelines:</b> shall mean the Card Association, Bank, or any Specific Guidelines Issued by Reserve Bank of India; </li>
 <li><b>Payment Channels:</b> shall mean Internet, IVR, Mobile., Point of sale or any other channel where electronic payments are accepted using credit/debit card, net banking, loyalty, prepaid cards, wallets, IMPS, or any other payment instrument.</li>
 <li><b>Payment Modes:</b> shall mean payment via credit cards, debit cards, pre-paid wallets/cards, net banking, Mobile payments, IMPS, EMI, or any other payment mode as applicable.</li>  
 <li><b>Payment Gateway:</b> shall mean the protocol that may be stipulated by or through NDPS to enable the Authentication of Customer/Buyers and the Authorization of payments in accordance with the Processing Mechanism;</li>
 <li><b>Payment Gateway Network:</b> shall mean the hardware, software, and telecommunications tools necessary to perform protocol conversion between different networks or applications and all associated software required for the Merchant/Seller to submit Authorization and data capture Transactions to NDPS and to transmit Authorization and settlement Transactions between the Merchant/Seller and the Payment Service Provider(s); </li>
 <li><b>Processing Mechanism:</b> shall mean the mechanism utilizing the payment channels of the Payment Service Providers through NDPS Services and/or through such other modes and mechanisms of payment, as may be notified by NDPS from time to time;</li>
 <li><b>Payment Gateway Providers:</b> shall mean Banks, financial institutions and any other person authorized to issue or process payments or any persons acting on their behalf.</li>
 <li><b>Payment Service Provider(s):</b> shall mean Payment Gateway Providers and NDPS;</li>
 <li><b>Platform Fees:</b> shall mean the usage fees charged by NDPS towards the NDPS payment platform .</li>
 <li><b>Refund Fees:</b> shall mean the fees charged by NDPS to the Merchant towards processing of Refund requests. </li>
 <li><b>MSP Model:</b> shall mean the services to be provided by NDPS to the Merchant/Seller wherein the Merchant/Seller's 'code / identification number' is obtained by NDPS and the charges and settlement process is the responsibility of NDPS subject to clause 5 herein below. </li>
 <li><b>Non-MSP Model:</b> shall mean the services to be provided by NDPS to the Merchant/Seller wherein the Merchant/Seller's 'code /identification number' is obtained by the Merchant/Seller directly from the bank and the charges and settlement process is solely the responsibility of the Bank. </li>
 <li><b>Transaction:</b> shall mean a financial Transaction conducted by the Customer/Buyer using NDPS Services. </li>
</ol>

</li>   


<li>
<h4>SCOPE OF NDPS SERVICES: </h4>   
<ol>
 <li>NDPS has developed technologies, processes and software which enables the end-user/Merchant/Seller to make/accept payments vide the respective Payment Channels through any of the Payment Modes under the MSP/Non-MSP Models (hereinafter referred to as the “NDPS Services”)
</li>
 <li>The NDPS Services facilitate payments made by Customers/Buyers through any of the Payment Modes under the respective Payment Channels made available by NDPS and provide technological and payments support in relation to Transactions involving the Payment Mechanism compliant with requirements of Payment Service Provider(s) so as to enable receipt of such payments by the Merchant/Seller or any person acting on the Merchant/Seller's behalf.</li>
 <li>The Merchant/Seller hereby agrees to the installation of certain software and hardware solutions to integrate the Merchant/Seller's billing system with NDPS Services as part of these Terms and Conditions. </li>
 <li>On the date of installation of NDPS Services, the Merchant/Seller shall be deemed to have accepted the NDPS Services.</li>
 <li>The Merchant/Seller agrees and acknowledges that in processing the Transactions, NDPS shall be entitled to rely upon all electronic communications, orders or messages sent to NDPS through the Processing Mechanism and NDPS shall not be obligated to verify or make further inquiry into the identity of the sender, or the message integrity, of any communications, orders or messages. The Merchant/Seller shall under no circumstances dispute such reliance by NDPS. NDPS shall not be bound by or obligated to act on any electronic communications, orders or messages received on-line, from the Merchant/Seller or the Customer/Buyer, which do not properly utilize the security measures as intimated by NDPS and as may be applicable from time to time. </li>
 <li>As and when NDPS requests for a particular document, bills/invoices, proof of delivery or any other supporting documents, the same shall be handed over to NDPS within four (04) days of the request. If on account of non-compliance of the foregoing, NDPS incurs any loss, the same shall be made good by the Merchant/Seller, inclusive of all charges, interest, and costs. NDPS with or without intimation shall be entitled at any times to disclose any and all information concerning the Terms and Conditions and Transactions of the Merchant/Seller, within the knowledge and possession of NDPS to any Regulator RBI, Card Associations, or law enforcement.</li>
 <li>Nothing in these Terms and Conditions shall prohibit NDPS from providing services similar to those provided under these Terms and Conditions to others, including competitors of the Merchant/Seller. </li>   
</ol>
</li>

<li>
<h4>FEES FOR NDPS SERVICES: </h4>
<ol>
<li>The Merchant/Seller agrees to pay to NDPS, the fees and/or charges (“Fees”) as mentioned in the Merchant Application Form and/or PO. for the services along with any other sums including but not limited to, reimbursable expenses for the implementation of the NDPS Services, if any, and any and all applicable statutory taxes, including without limitation, goods service tax.</li>
<li>GST as governed by the Tax Authorities and applicability will be levied on the Merchant/Seller. Notwithstanding anything to the contrary in the Agreement: (i) if NDPS charges the GST as per Govt. regulations at the time of rendering the NDPS Services, then the same will be uploaded on the GST Portal by tagging the GSTN of the Merchant/Seller; (ii) Merchant/Seller shall have the right to deduct TDS as applicable as per Income tax Act, 1961; and Merchant/Seller will provide TDS certificate to NDPS against the PAN, which will be reimbursed later on post verification on IT Portal. NDPS will file on a timely basis all the compliances as required by the Govt. regulations under this Agreement.</li>
<li>All fees / charges paid to NDPS will be non-refundable.</li>
</ol>
</li>

<li><h4>CHARGES AND SETTLEMENT OF ACCOUNTS: </h4>

<ol>
 <li>Subject to applicable law, payments shall be made available by NDPS to the Merchant/Seller after making the following adjustments, deductions and any other deductions, if any, in terms of these Terms and Conditions from the amount of the Transaction (subject to the limits volumes/limits allowed to the Merchant/Seller):
<ol>
 <li>the consideration/fees, the TDR along with other dues, fees, charges, out of pocket expenses, etc., due to NDPS or any other rates and percentage as amended from time to time for all Transactions processed;</li>
 <li>the sum of all Customer/Buyer charges denied, refused, or Charged back by the Customer/Buyer/partner Banks;</li>
 <li>all costs, charges, expenses, etc., of whatsoever nature on account of, inquiries, disputes, cancellations and/or refunds processed on account of Merchant/Seller's Customer/Buyer charges and/or chargeback; (refunds, chargeback recovery shall be done at gross amount. If any convenience fees are applicable or exchange rate fluctuations the same shall be borne by the Merchant/Seller)</li>
 <li>any taxes, including but not limited to, service tax, education cess, as may be applicable, penalties, charges or other items, reimbursable under any of the provisions of these Terms and Conditions, or otherwise, occurring in any manner whatsoever.</li>   
</ol>
</li>  

<li>In the event of the Merchant/Seller failing to deliver its products or services to the Customer within the delivery due date or failing to give credit to the Customers for the payment amount and the Customer makes a complaint to NDPS/the bank, then as intimated by NDPS/the bank, NDPS shall report the same to the Merchant/Seller to fulfill its obligations promptly and deliver its products or services or give credit to the Customer within a period of seven (7) Business Days from the date NDPS notifies the Merchant/Seller and in the event a refund needs to be made to the Customer, the Merchant/Seller shall comply and initiate such refund to the Customer. Failure to refund/reverse such amounts by Merchant/Seller shall be recovered from Merchant/Seller. For any failed transactions where service is not provided, Merchant/Seller to refund the amount within five (05) days, any delay more than the stipulated times the Merchant/Seller shall compensate the Customer 100/- per day as per the Harmonization of TAT guidelines. Any such refunds shall be made only on the basis of refund report shared by Merchant/Seller with NDPS. For the purposes of this clause the Merchant/Seller shall have established a Customer service department to specifically address Customer complaints, refunds, (including turnaround time for resolving queries), dispute resolution mechanism, reconciliation, etc. and to co-ordinate the same with NDPS.</li>

<li>NDPS shall reconcile the accounts and make payments to the Merchant/Seller subject to the right of NDPS to withhold payments of the amount arrived at, for any charges of chargeback recovery/debits that may be fraudulently incurred/suspicious Transactions or for any reason whatsoever either in terms of these Terms and Conditions or otherwise to the extent and as permissible under applicable law. NDPS shall release such payments withheld for any charges/debits fraudulently incurred once determined at NDPS's sole discretion that such charge/debit is infact a valid charge and NDPS shall not be liable for any penalty/interest on account of the same. Merchant/Seller shall indemnify NDPS for any losses suffered by NDPS in the event that NDPS is unable to withhold payment in respect of suspected fraudulent charge/debit, provided however that, NDPS shall be entitled to set-off any such claims against the security deposit or to otherwise require the Merchant/Seller to make corresponding payments to NDPS not later than two (02) days from the date of the Merchant/Seller being notified.</li>

<li>The Parties hereby agree and acknowledge that, irrespective of any payment made by NDPS to the Merchant/Seller, the same shall be made, without prejudice to any other claims, or rights, that NDPS may have, against the Merchant/Seller and such payments, shall not constitute any admission by NDPS, as to the performance, by the Merchant/Seller of its obligations, under these Terms and Conditions and the amount payable to the Merchant/Seller.</li>

<li>If deemed necessary by NDPS, the Merchant/Seller shall provide such further assurances, guarantees or security, as may be agreed to by the Parties and NDPS shall have the right, to set off claim amounts, against the said security deposit, in the event of (i) any material breach of these Terms and Conditions (ii) NDPS is unable to withhold payment in respect of suspected fraudulent charge/debit or (iii) due to the existence of any other claims against the Merchant/Seller, or by NDPS including without limitation as described in clause hereto</li>

<li><strong>Time of making payments/due date of payment:</strong> Upon completion of the Transaction and the receipt of funds by NDPS, and where applicable, on receipt of proof of delivery of the dispatch of the relevant product and/or services of the Merchant/Seller, or post expiry of the refund period NDPS shall deliver payments to the Merchant/Seller, to the later of: (i) one (01) business days (i.e. T+1 days) from the date of receipt of funds from the Banks or financial institutions (ii) the maximum period of time for the making of payments by NDPS as specified under extant regulations from time to time.
</li>

<li>The making of payments under these Terms and Conditions by NDPS to the Merchant/Seller, due to NDPS being unable to exercise setoffs against amounts due to NDPS, shall not constitute a waiver of NDPS's rights to recover amounts payable by the Merchant/Seller to NDPS and seek indemnities from the Merchant/Seller for losses suffered by NDPS for claims permissible under applicable law or for any reason, including but not limited to: <ol>
 <li>Any Transaction for any reason is unlawful or unenforceable.</li>   
 <li>Any information presented electronically to NDPS in respect of the Transaction is not received in accordance with NDPS's requirements as specified from time to time.</li>
 <li>Any Transaction made outside the territory authorized for the use of such instrument.</li>
 <li>Transactions which are posted more than once to cardholder's account.</li>
 <li>Transaction, which is doubtful or erroneously paid for, to the Merchant/Seller. NDPS reserves the right to discontinue, with the provision of the NDPS Services and recover these amounts from the Merchant/Seller and be indemnified at all the times in relation to any losses in connection thereto.</li>
</ol>

</li>

<li>Any discrepancy in settlement / reports provided to the Merchant/Seller by NDPS in relation to the NDPS Services, if any, must be raised by the Merchant / Seller and communicated to NDPS within ten (10) calendar days, failing which it will be assumed to be correct and shall be conclusive and binding on the Merchant/Seller.</li>

</ol>
</li>



<li><h4>CHARGEBACK AND OTHER DUES: </h4>

<ol>
<li>
NDPS shall be entitled, and Merchant/Seller hereby authorizes NDPS to debit to the account of the Merchant/Seller, from time to time, to recover any amounts due from it or incurred by NDPS on account of the following:
<ol>
<li>Chargeback of Transactions; or</li>
<li>Any penalties, charges/fees, loss, or claims including but not limited to legal claims that may be made against NDPS by Payment Service Providers, Customer/Buyers, or regulatory authorities for any reason other than a breach of these Terms and Conditions by NDPS. These amounts shall include without limitation any costs arising as a result of excessive Chargeback of Transactions or failure of Transactions or Customer/Buyer disputes.</li>
</ol>   
</li>
<li>The Merchant/Seller agrees that any charges accepted by Merchant/Seller, which prove to be uncollectable, shall be the exclusive financial responsibility of the Merchant/Seller alone. The Merchant/Seller agrees to such charges or the Chargeback of such uncollectable charges (as the case may be) by NDPS, without any demur or protest.</li>
<li>The Merchant/Seller acknowledges that NDPS is entitled to exercise its right to set off a lien on the credit value in the account of the Merchant/Seller or the unsettled Transactions in the pipeline in the event of failure by the Merchant/Seller in providing as per Clause 2.6 the necessary valid proof of Transaction to the retrieval request / Chargeback / suspicious Transaction received from the issuer/acquirer through the card schemes (VISA / MasterCard / NPCI / Amex or Others).</li>    
</ol>
</li>


<li><h4>REPRESENTATIONS AND WARRANTIES:</h4>

<ol>
<li>NDPS represents and warrants that:
<ol>
<li>it is duly organized and validly existing and is duly qualified, including for undertaking the Transaction contemplated by these Terms and Conditions, as per the laws of India and the jurisdiction where it maintains its principal or registered office; and</li>
<li>it has all the requisite power, including corporate power and authority to enter into these Terms and Conditions, to perform its obligations thereunder and to consummate the Transaction contemplated hereby.</li>
</ol>    
</li>   

<li>Merchant/Seller represents, warrants, and covenants that:
<ol>
 <li>it has full capacity, power and authority to enter into these Terms and Conditions and has already taken and will continue to take all necessary and further actions, (including where applicable without limitation obtaining of all governmental and other necessary approvals / consents / licenses in all applicable jurisdictions) and to authorize the execution, delivery and performance of these Terms and Conditions;
</li>
 <li>it shall not use the NDPS Services in any manner, or in furtherance of any activity, which constitutes a violation of any law or regulation, or which may result in fraud on any person, or which may cause NDPS to be subject to investigation, prosecution or legal action;</li>
 <li>it shall disclose its cancellation, refund and privacy policy on the website and ensure that Merchant/Seller conducts its business in accordance with the same;</li>
 
 <li>it shall process transactions only for the agreed service category for which the NDPS Services have been availed and shall not use the NDPS to process any other transactions for which the NDPS Services are not availed.</li>
 
 {/* <li>it shall disclose its refund and privacy policy on the website and ensure that Merchant/Seller conducts its business in accordance with the same;</li> */}
 
 <li>it shall take all such precautions as may be feasible or as may be directed by NDPS to ensure that there is no breach of security and that the integrity of the link between Merchant/Seller's website, Payment Gateway, POS and the Payment Mechanism is maintained at all times. Merchant/Seller shall ensure that all Customer/Buyers upon accessing the link are truly and properly directed to the Payment Gateway. In the event of any loss being caused as a result of the link being breached or as a consequence of the link being improper or being in violation of the provisions of this clause, the loss shall be to the account of the Merchant and the Merchant shall indemnify and keep indemnified NDPS from any loss as may be caused in this regard;</li>

 <li>it shall not describe itself as an agent or representative of NDPS;</li>

 <li>The Merchant/Seller hereby expressly agrees not to directly or indirectly deal in such Products in restricted categories as provided in NDPS's website www.nttdatapay.com at any time during the subsistence of these Terms and Conditions and shall be solely liable for violation of the same.</li>

 <li>NDPS shall not be a party to any Terms and Conditions(s), disputes, assurance(s) or undertaking(s) between the Customer/Buyers and Merchant/Seller in any manner whatsoever. In case of any dispute between the Customer/Buyer and Merchant/Seller, whether in relation to any deficient, improper or incomplete product or service provided by the Merchant/Seller or otherwise, NDPS shall not be made a party to any litigation, arbitration or other proceeding instituted in respect of such disputes.</li>

 <li>it shall use the NDPS Services only for Merchant/Seller's website(s), POS and product/service categories approved by NDPS under these Terms and Conditions and for no other sites, products, or services. If Merchant/Seller wishes to use the NDPS Services for any other website/product or service, Merchant/Seller shall obtain prior written approval from NDPS for the same; and</li>
 
 <li>it shall at all times during the subsistence of these Terms and Conditions observe and comply with all applicable laws, rules, regulations, notifications and guidelines, including, but not limited to all applicable FEMA, AML, CFT, anti-money laundering laws and anti-bribery laws prescribed by any regulatory body including the RBI, and/or statutory authorities from time to time. Any product or service which is not in compliance with all applicable laws and regulations whether federal, state, local or international including the laws of India shall not be offered by the Merchant/Seller to its Customers/Buyers through the services of NDPS. Merchant / Seller shall be responsible for all liabilities arising out of its breach of the aforesaid and shall indemnify NDPS towards the same in each applicable jurisdiction</li>   
</ol>
</li>
</ol>
</li>

<li><h4>TERM AND TERMINATION: </h4>
<ol>
<li>These Terms and Conditions shall be valid from the Effective Date of the Merchant Application Form for a period of one (01) year (“Term”). Thereafter the Term shall automatically be renewed annually and shall extend for successive twelve (12) month terms, until unless terminated by the Parties.</li>
<li>These Terms & Conditions may be terminated by either Party by giving sixty days (60) days prior notice in writing to the other without being required to assign or give any reasons.</li>

<li>Either Party shall be entitled to terminate these Terms and Conditions in case of the defaulting Party's failure to remedy the breach of any terms and conditions of the Terms and Conditions within thirty (30) days of receipt of written notice stating such breach.</li>

<li>NDPS reserves the right to terminate the Terms and Conditions immediately without any notice period in case of fraud, or if, the Merchant/Seller has violated any of the terms of the Terms and Conditions in which case the fees paid by Merchant/Seller shall be forfeited.</li>

<li>Merchant/Seller acknowledges that it shall honour all Transactions until the Terms and Conditions is in force. The Merchant/Seller shall provide necessary documentation related to Transactions done by Merchant/Seller post termination upto a period of fifteen (15) months in case of Customer/Buyer disputes, failing which the Merchant/Seller will indemnify NDPS towards such Transaction loss.</li>    
</ol>
</li>

<li><h4>CONFIDENTIALITY:</h4><br/>
Each Party acknowledges and agrees that in connection with these Terms and Conditions, the receiving Party shall not disclose to any Third Party any Confidential Information of the disclosing Party that it may have access to during and in connection with its performance of services hereunder. Merchant/Seller shall ensure that that neither the Merchant/Seller nor any of its employees are privy to any information relating to Customer/Buyer details and information relating to passwords/pins and other private matters in respect of the NDPS Services. Merchant/Seller shall not reverse engineer, decompile or disassemble any software shared/disclosed by NDPS. Each Party acknowledges that monetary damages may not be a sufficient remedy for unauthorized disclosure of any Confidential Information / materials and that the disclosing Party shall be entitled, without waiving any other rights or remedies, to such injunctive or equitable relief as may be deemed proper.

</li>

<li><h4>INTELLECTUAL PROPERTY: </h4>

<ol>
   <li>The intellectual property associated with NDPS Services is the Intellectual Property of NDPS and its associates. Nothing in these Terms and Conditions shall be deemed to be a transfer of any Intellectual Property rights to the Merchant/Seller and / or any of its associates, employees, and partners. The Merchant/Seller acquires only the non-exclusive right to use such NDPS Services as permitted herein and does not acquire any rights of ownership in the same. NDPS and/or its suppliers hereunder retain the title or ownership of any rights with respect to NDPS Services and all the Intellectual Property of NDPS/suppliers.</li>

   <li>Merchant/Seller agrees and undertakes not to claim any ownership, right, title or interest in, or dispute the ownership of any of NDPS Services.</li>

   <li>Notwithstanding anything contained in these Terms and Conditions, Merchant/Seller shall be responsible at all times to adequately compensate NDPS in respect of attributable or contributory infringement of any of the Intellectual Property Rights of NDPS by the Merchant/Seller or its associates, employees and partners.</li> 
</ol>

</li>

<li><h4>INDEMNIFICATION: </h4>

<ol>
 <li>Merchant/Seller hereby undertakes and agrees to indemnify and hold harmless NDPS and its directors, affiliates, representative, employees and agents against all actions, proceedings, claims, liabilities (including statutory liabilities), penalties, demands and costs (including without limitation, legal costs of NDPS on a solicitor / attorney and own client basis), awards, damages, losses and/or expenses however arising directly or indirectly as a result of:</li>

 <li>any claim or proceeding brought by the Customer/Buyer or any other person against NDPS, in respect of any services offered by the Merchant/Seller;</li>

 <li>any gross negligent act, omission, misrepresentation, default, misconduct, non-performance or fraud by Merchant/Seller and their agents, employees, licensees, or Customer/Buyers;</li>

 <li>any breach of law, rules regulations, legal requirements (including RBI regulations) in force in India and / or in any place from where the Customers is making the transaction;</li>

 <li>any fines, penalties or interest imposed directly or indirectly on NDPS on account of Merchant/Seller's services or Transactions conducted through Merchant/Seller under these Terms and Conditions; and</li>

 <li>breach of any of these Terms and Conditions by the Merchant/Seller, its agents, employees or representatives.</li>   

 <li>The indemnities provided herein shall survive the termination of these Terms and Conditions.</li>
</ol>
</li>


<li><h4>DATA PROTECTION: </h4>

<ol>
 <li>All the data processed under these Terms and Conditions is subject to the data privacy regulations under applicable laws. Merchant and NDPS shall be subject to and will comply with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 as amended from time to time, and any other applicable Laws restricting collection, use, disclosure, storage, processing, and free movement of personal information (collectively, the "Privacy Regulations").</li>

 <li>NDPS, its employees, contractors or agents may, in connection with these Terms and Conditions, collect personal information in relation to Merchant (including Merchant’s Customers, employees and directors). NDPS may process, use and disclose, transfer and store the Merchant's Customer's personal information for purposes connected with this Terms and Conditions and otherwise for the purposes of its legitimate business and business operations or as required by law. The Merchant shall co-operate with NDPS in respect of any issues arising out of a breach or potential breach of security in relation to the holding of confidential data.</li>

 <li>Insofar as information provided, or to be provided, by Merchant to NDPS includes the personal information of Customers, Merchant represents and warrants that it has obtained sufficient informed prior consent in writing from each Customer to whom any personal information relates to, in order for NDPS to comply with applicable data privacy regulations and which allows NDPS to collect, use, disclose, process, transfer and store such information for the purposes specified in this Terms and Conditions and the schedules, including in the circumstances described above, and will provide NDPS with such consent as and when requested by NDPS.</li>

</ol>
</li>


<li><h4>DISCLAIMERS:</h4>

<ol>
<li>Notwithstanding anything contained in these Terms and Conditions, NDPS disclaims all warranties, express or implied, written or oral, including, but not limited to, warranties of fitness for a particular purpose with respect to the NDPS Services or otherwise made as regards these Terms and Conditions. Merchant/Seller acknowledges and accepts that the NDPS Services are provided on an “as is” basis. NDPS shall have the right to forthwith terminate the link with a specific Payment Gateway Provider, by giving immediate notice to the Merchant/Seller, in the event the Payment Gateway Provider terminates its business arrangement with NDPS.</li>  

<li>NDPS's sole obligation and the Merchant/Sellers' sole and exclusive remedy in the event of interruption to the NDPS Services or loss of use and/or access to NDPS's website and the Payment Gateway Provider's Processing Mechanism and services, shall be, to use all reasonable endeavors to restore the NDPS Services and/or access to the Processing Mechanism as soon as reasonably possible.</li> 

<li>Without prejudice to any other provision of these Terms and Conditions, NDPS does not warrant that:

<ol>
   <li>the NDPS Services, and the Payment Gateway Provider's Processing Mechanism will be provided 'uninterrupted' or 'free from any errors'; or</li>
   <li>the NDPS Services are free from any virus, Trojan or other malicious, destructive or corrupting code, program or macro.</li> 
</ol>

</li>

<li>NDPS reserves the right to make changes, enhancements, and/or modifications, due to mandatory, or regulatory or periodic requirements, applicable to the NDPS Services from time to time in such manner as it may deem necessary or appropriate for the provision of the NDPS Services by providing notice to the Merchant/Seller of the same. Merchant/Seller agrees to comply with the directions and/or instructions issued by NDPS to suitably modify/upgrade the Merchant/Seller's systems to comply with the standards of the Processing Mechanisms (then in force) and the standards applicable to the NDPS Services. NDPS shall not be liable for whatsoever reasons in case of any failure of the Merchant / Seller to timely upgrade its systems as mentioned here in above and Merchant/Seller alone shall be solely responsible for any loss or damage arising therefrom. If so, requested by the Merchant / Seller, NDPS shall provide such additional services to the Merchant / Seller to suitably modify / upgrade the Merchant / Seller's systems and the Merchant/Seller agrees to pay NDPS such additional charges as may be mutually agreed to by the Parties.</li>

</ol>

</li>


<li><h4>LIMITATION OF LIABILITY: </h4>

<ol>
<li>Notwithstanding anything to the contrary in these Terms and Conditions, in no event shall either Party be liable, whether in contract or in tort or otherwise for special, punitive, indirect, or consequential damages, including without limitation, loss of profits or revenue arising under or in connection with these Terms and Conditions.</li>  

<li>In any event the overall aggregate liability of NDPS in respect of all claims and liabilities arising under these Terms and Conditions shall be limited to an amount not exceeding the Fees received from the Merchant/Seller for the NDPS Services for the month immediately preceding the date of such proven claim/demands.</li>  

<li>In no event shall NDPS be liable to the Customers or any third party.</li>
</ol>

</li>
{/* here begin  */}
<li><h4>BANNED PRODUCTS &amp; SERVICES:</h4><br/>
The Merchant/Seller hereby expressly agrees not to directly or indirectly deal in such product(s) or service(s) in restricted categories as provided on NDPS's website www.nttdatapay.com at any time during the subsistence of these Terms and Conditions. Without prejudice whatsoever to NDPS's other rights and privileges, the Merchant/Seller binds himself unequivocally to be solely liable for, including but not limited to any legal actions and suits, and to make good to NDPS immediately upon demand actual damages suffered by NDPS directly or owing to claims by any third party, levy of assessment fees or fines, penal actions taken by VISA/ MasterCard/ NPCI/ Amex/ RuPay, the Reserve Bank of India and/ or any other statutory or competent authorities for any breach of this clause.
</li>

<li><h4>NON-SOLICITATION:</h4><br/>Merchant/Seller agrees that during the Term of these Terms and Conditions and for a period of two (2) years thereafter, it shall not, without the prior written approval of NDPS hire or enter into a contract with any employee, agent or representative of NDPS to provide services to the Merchant/Seller or, directly or indirectly, induce or attempt to induce or otherwise counsel, bribe, discuss, advise or encourage any employee, consultant, agent or representative of NDPS to leave or otherwise terminate such person's relationship with NDPS.</li>

<li><h4>RELATIONSHIP OF THE PARTIES:</h4><br/>The relationship between the Parties hereunder these Terms and Conditions shall be on a principal-to-principal basis. Nothing in these Terms and Conditions shall constitute an agency, partnership or any other relationship whether in the nature of a joint venture or otherwise between the Parties.</li>

<li><h4>FORCE MAJEURE:</h4><br/>Notwithstanding anything to the contrary in these Terms and Conditions neither Party will be liable for failure to perform or delay in performing any obligation under these Terms and Conditions to the extent that such failure or delay is due to fire, flood, earthquake, strike, war (declared or undeclared), epidemic and/or pandemic, complete or partial restriction on movement, embargo, blockade, legal prohibition, governmental action, riot, insurrection, damage, destruction or any other similar cause beyond the reasonable control of such Party (“Force Majeure Event”); provided, however, that the affected Party will promptly notify the other Party of the occurrence of the Force Majeure Event and will take all steps reasonably necessary to resume performance of its obligations. In the event of a Force Majeure, the Parties shall immediately consult each other in order to find a mutually acceptable solution and shall use all reasonable efforts to minimize the consequences of such Force Majeure event. In the event a Party does not cure, or is unable to cure, such failure or delay within thirty (30) days after the commencement of such failure or delay, the other Party may terminate the unperformed portions of this Agreement, or, as the case may be, the entire Terms and Conditions immediately upon written notice to the nonperforming Party.</li>

{/* <li><h4>AMENDMENTS:</h4><br/>Any modification of or amendment to these Terms and Conditions, shall be made in writing, vide addendums, exchange of letters, email, or any other mode of communication as mutually agreed between the Parties and which shall be considered as an addendum to this Agreement.</li> */}

<li><h4>ENTIRE AGREEMENT:</h4><br/>These Terms and Conditions, together with the Merchant Application Form and/or PO and all Attachments, constitutes the entire agreement between the Parties regarding the subject matter of these Terms and Conditions and will supersede all prior oral or written representations and Terms and Conditions. These Terms and Conditions are co-terminus with the Merchant Application Form and in case of online services, the commercials mentioned in the PO, between the Parties. Save and except as specifically stated herein above all other terms, conditions and covenants contained in the Merchant Application Form and/or PO shall remain unchanged and shall be fully applicable, enforceable and binding on the Parties. As of the date of the Merchant Application Form, all the provisions of these Terms and Conditions and in case of online services, the commercials mentioned in the PO, shall be deemed to be incorporated in, and made the part and parcel of the Merchant Application Form and shall be read taken and construed as one and the same instrument except as modified hereinbefore.</li>

<li><h4>SEVERABILITY:</h4><br/>If any provision of these Terms and Conditions are determined to be unenforceable in whole or in part thereof for any reason, then such provision or part thereof, shall to that extent be deemed deleted from these Terms and Conditions and the legality, validity and enforceability of the remaining provisions of these Terms and Conditions shall not be in any way be affected thereby and any act of omission/commission of the Parties hereto done prior to the provisions being held unenforceable shall be deemed to be valid and/or binding on the other.</li>

<li><h4>INVALID PROVISIONS:</h4><br/>The Parties agree to attempt to substitute for any invalid or unenforceable provision, a valid or enforceable provision which achieves to the greatest extent possible the same effect as would have been achieved by the invalid or unenforceable provision</li>

<li><h4>ASSIGNMENT:</h4><br/>The rights under these Terms and Conditions granted to the Merchant/Seller are not assignable or transferable without the prior approval of NDPS. NDPS shall be entitled to assign or transfer its rights and obligations under these Terms and Conditions to any other entity.</li>

<li><h4>RIGHTS, REMEDIES AND WAIVER:</h4><br/>All rights and remedies hereunder shall be cumulative and may be exercised singularly or concurrently. If either Party fails to perform its obligations under any provision of these Terms and Conditions and if the other Party does not enforce such provision then, failure to enforce on that occasion shall not prevent enforcement on later occasions.</li>

<li><h4>GOVERNING LAW, JURISDICTION AND DISPUTE RESOLUTION:</h4>
<ol>
<li>These Terms and Conditions shall be governed by and construed in accordance with the laws in India. The Parties agree to submit to the exclusive jurisdiction of the courts located in Mumbai, India as regards any claims or matters arising under or in relation to the terms and conditions of these Terms and Conditions. The Parties hereto will endeavor to settle amicably by mutual discussion any disputes, differences or claims whatsoever, related to these Terms and Conditions or arising on account of these Terms and Conditions, failing which, such dispute shall be settled by arbitration held at Mumbai by a single arbitrator appointed mutually by the Parties, or in case of disagreement as to the appointment of a sole arbitrator, by three (3) arbitrators of which each Party shall appoint one (1) arbitrator and the third arbitrator shall be appointed by the two such appointed arbitrators. The Arbitration and Conciliation Act, 1996; as amended from time to time shall govern the arbitration proceedings. The Arbitration and Conciliation Act, 1996; as amended from time to time shall govern the arbitration proceedings. The arbitral procedure shall be conducted in the English language and any award or awards shall be rendered in English.</li> 

<li>Jurisdiction and governing law: The laws of India only and no other nation shall govern these Terms and Agreement. The Parties agree to submit to the exclusive jurisdiction of the Courts located in Mumbai, India as regards any claims or matters arising under or in relation to these terms and conditions.</li>

</ol>
</li>

<li><h4>NOTICES:</h4><br/>All notices required or permitted by these Terms and Conditions shall be in writing and shall be delivered by hand delivery, reputed courier, registered AD, to the Party to their address as mentioned above in these Terms and Conditions, or to the last known address of the parties. All notices shall be deemed served once delivered.</li>

<li><h4>COUNTERPARTS:</h4><br/>The Parties may execute these Terms and Conditions in counterparts, and each fully executed counterpart shall be deemed an original.</li>

<li><h4>SCHEDULE I - </h4>

<ol>
 <li>If the Merchant/Seller requests for user training to be carried out by NDPS in conjunction with the employees of the Merchant/Seller vide telephone as agreed by NDPS in writing, then the Fees paid by the Merchant/Seller shall include a onetime charge as agreed between the Parties. Further, installation and training charges outside Mumbai; Delhi-NCR; Ahmedabad; or Bangalore; if any, will be chargeable at INR 7,500/- (Indian Rupees Seven Thousand and Five Hundred only) per man day with reimbursement of additional costs such as traveling/ boarding & other expenses, which will be payable at actuals.</li>
 
 <li>For any customization or modification required in NDPS Services, the Merchant/Seller shall pay charges, per man day basis as specified by NDPS or as may be mutually agreed between the parties in writing.</li>
 
 <li>Charges for Settlement of Accounts (Under MSP Model Only):
<ol>
<li>Settlement Period of the Funds: NDPS will settle funds to the Merchant/Seller's bank account as per above clause 4.6; in T+1 days post receipt of funds from bank. The TDR shall be the amount of the bill excluding taxes, tips, shipping, charges, etc. which shall be additionally chargeable as applicable. For avoidance of any doubts, it is hereby clarified that all taxes of whatsoever nature, including but not limited to, service tax, education cess, consumption tax, value added tax, withholding taxes whether currently in force or introduced after the date of these Terms and Conditions and any other taxes, duties, fees and charges arising out of the performance of these Terms and Conditions, shall be borne by the Merchant/Seller.</li>

<li>Security (If Applicable): The Merchant/Seller agrees to pay an amount, if requested of NDPS as a refundable deposit that will act as security for obligations and liabilities of the Merchant/Seller under these Terms and Conditions, and NDPS shall be entitled to set off amounts against such obligations and liabilities anytime.</li>
</ol>     
</li>  

<li>In case of POS /MPOS; the Merchant/Seller agrees that:

<ol>
 <li>POS/ MPOS is provided by NDPS to Merchant/Seller which shall be used exclusively by the customers for the purchase of goods or services for which the Merchant/Seller has been signed up and for no other purpose whatsoever.</li>	
 
 <li>Merchant/Seller shall verify the signature of the card member on a valid card with the signature of the card member on the charge slip. The Merchant/Seller shall retain the Charge Slip(s) and the bills / invoices pertaining to the Charge Slip for a period of 18 months from submission date or such further period as the Bank may stipulate from time to time and make those promptly available to NDPS/Bank on request. As and when the NDPS/Bank representative requests for a particular charge slip, the same shall be handed over to the Bank within four (04) days of the request. If on account of non-compliance, the Bank incurs any loss, the same shall be made good solely by the Merchant/Seller, inclusive of all charges, interest and costs.</li>
 
 <li>Merchant/Seller shall verify id proof & collect front copy of id proof for all transactions above INR 7500/-.</li>
 
 <li>Merchant/Seller shall not use card/family member for working capital usage and shall not dispense cash against card usage</li>
 
 <li>Merchant/Seller agrees to settle the transaction within three (03) days, if any transaction settled post three (03) days results in a 'Late Settlement Chargeback' the amount of the chargeback shall be recovered from the Merchant/Seller as there are no representation rights for Late Settlement. NDPS/Bank has the right to hold back payments for delayed settlement cases and also levy additional charges in case of a Late Settlement.</li>
 
 <li>Merchant/Seller shall permit NDPS or its representative for installation of the POS terminal/device in the premises of the Merchant/Seller at the time of the 'Merchant/Seller boarding' and during un-installation of the POS terminal in case of un-boarding. NDPS shall have the right to install or un-install the terminal and Merchant/Seller shall not have any objection towards installation or un-installation. Any theft or loss or damage to terminal shall be responsibility of the Merchant/Seller and NDPS shall have the right to recover such damages/charges from Merchant/Seller.</li>   
</ol>

</li>

</ol>

</li>


<li><h4>SCHEDULE II - MERCHANT/SELLER DUTIES, OBLIGATIONS AND RESPONSIBILITIES</h4>

<ol>
<li>The Duties, Obligations and Responsibilities of the Merchant/Seller for availing the applicable NDPS Services under these Terms and Conditions are us under:

<ol>
 <li>Merchant/Seller shall ensure that its Merchant/Seller shall duly fulfill all Customer Orders in accordance with the order of the Customer.</li>
 
 <li>Merchant/Seller is aware that NDPS/Partner Bank is not guaranteeing any transactions with the Customers/Buyers in any manner what-so-ever. The debit to the Customer's Account will be subject to there being adequate balance in the Customer's Account.</li>
 
 <li>Notwithstanding the aforesaid, the Merchant/Seller assures and guarantees to the Partner Bank the due performance of all Customer Orders for which the payment has been transferred through the Payment Mechanism.</li>
 
 <li>In the event of any Customer complaining of any deficiency in the Merchant/Seller's Services, Merchant/Seller shall take such measures as may be required to rectify the same. In the event the Merchant/Seller is unable to rectify the same, Merchant/Seller shall forthwith compensate the Customer for any loss caused to the Customer.</li>
 
 <li>Merchant/Seller shall ensure that the best service standards in the industry are adopted and shall ensure delivery of all goods and services purchased for Customers/Buyers in accordance with the highest standards.</li>
 
 <li>Merchant/Seller shall ensure confidentiality of all information submitted by the Customers/Buyers at the Site. Merchant/Seller undertakes to ensure that the amount of transaction shall be hidden and not visible in the URL sent to and received by NDPS/Partner Bank from the Merchant/Seller site and the change in the system and /or software, if required, shall be done by Merchant/Seller at its own costs.</li>
 
 <li>Merchant/Seller is acting in compliance with and shall at all-time act in compliance with all law including but not limited to applicable PCI DSS & PA DSS standards.</li>
 
 <li>NDPS/Partner Bank shall be entitled to require Merchant/Seller to add to its Site such disclaimers, warranties and indemnities as NDPS/Partner Bank may require from time to time.</li>
 
 <li>Merchant/Seller shall ensure that all its licenses and registrations are in full force and effect to enable it to carry on the business of sale of goods and services.</li>
 
 <li>Merchant/Seller shall not carry out any activity, which is banned or illegal or immoral. The Merchant/Seller hereby expressly agrees not to directly or indirectly deal in such product(s) or service(s) in restricted categories as provided in NDPS's website www.nttdatapay.com at any time during the subsistence of these Terms and Conditions. Without prejudice whatsoever to NDPS's other rights and privileges, the Merchant/Seller binds himself unequivocally to be solely liable for including but not limited to any legal actions and suits, and to make good to NDPS immediately upon demand damages suffered by NDPS directly or owing to claims by any third party, levy of assessment fees or fines, penal actions taken by VISA/MasterCard/NPCI/Amex/RuPay, the Reserve Bank of India and any other statutory or competent authorities for any breach of any terms of these Terms and Conditions.</li>
 
 <li>The price quoted for the products and services displayed by Merchant/Seller on the Website shall be inclusive of all taxes, levies and duties including in particular excise/ customs duty, sales tax, service tax, octroi etc. The price would also be inclusive of delivery and transportation charges.</li>
 
 <li>Merchant/Seller shall ensure that Merchant/Seller accesses the Site at least four times a day in order to access the orders, respond to queries and to address all other matters, which Merchant/Seller is required to address.</li>
 
 <li>Merchant/Seller shall ensure accuracy and correctness in downloading and performing all orders placed by Customers/Buyers.</li>
 
 <li>Merchant/Seller shall furnish to the Bank forthwith upon request from time to time, the original copy/copies of proof of transactions, invoices or other records of the Merchant/Seller pertaining to the any order placed by the Customers/Buyers on the Site. Merchant/Seller shall retain all such records for a period of ten (10) years from the relevant date of the order placed on the Site. Partner Bank shall be entitled to inspect the records and other data relating to the orders placed on the Site at any time whatsoever and without any prior notice.</li>
 
 <li>Merchant/Sellers shall not use the trade name or trademark of NDPS/Partner Bank with-out written permission from NDPS/Partner Bank.</li>
 
 <li>Merchant/Seller shall disclose its cancellation policy, return policy and privacy policy on the Site and ensure that Merchant/Seller conducts its business in accordance with the same.</li>
 
 <li>The Merchant/Seller shall be solely responsible for the accuracy of all information and /or validity of the prices and any other charges and /or other information relating to the goods and services, which are offered through or included in Site.</li>
 
 <li>NDPS/Partner Bank shall be entitled to prohibit the display of any material on the Site if the act or manner of such display is contrary to any applicable law, regulation, government policy, order or guideline including all applicable foreign laws and regulations, or which is detrimental or harmful to the interest of NDPS/Partner Bank, in the sole and exclusive opinion of NDPS/Partner Bank.</li>
 
 <li>Merchant/Seller shall ensure that for the processing of any instruction from a Customer relating to the transfer of funds from the Customer's Bank Account to Merchant/Seller's Current Account, all such information as may be required by the Bank from time to time is provided from the Site to Partner Bank at the time of processing any instructions towards this end.</li>
 
 <li>Without prejudice to the generality of clause(b) above, Merchant/Seller shall ensure that Merchant/Seller has captured the account number details of the Customer's Bank Account (currently being a 14 digit number) that the Customer is desirous of using for processing payments to Merchant/Seller and at the time the Customer chooses to use the Customer's Bank Account for the purpose of making fund transfers to Merchant/Seller, the details for the Customer's Bank Account are also automatically reflected in the details forwarded by the Merchant/Seller to NDPS/Partner Bank. To enable the same, it will be the responsibility of Merchant/Seller to modify its systems to capture the details of the Customer Bank Account. Merchant/Seller will also be responsible to ensure the correctness of the information obtained from the Customer in this regard.</li>

 <li>The Merchant/Seller hereby agrees that the Customer's information shall not be captured and/ or stored on its website and that the Merchant/Seller shall not be entitled to view, store, access or utilise any such Customer's information. Merchant/Seller will also ensure secrecy and confidentiality of all Customers/Buyers information, including the Customer's Bank Account details and will establish sufficient safety measures to prevent any loss or misuse of such information. Merchant/Seller shall adopt adequate encryption and security measures to prevent any hacking of/ unauthorised access/ alteration to the Customer's information or the systems of the Merchant/Seller. Merchant/Seller shall ensure that only authorised personnel bound by adequate confidentiality obligations shall have access to the Customer's information and strictly on a 'need to know' basis. Merchant/Seller shall also comply to PCI-DSS, & PA-DSS wherever applicable. Merchant/Seller agrees and acknowledges that NDPS/Partner Bank reserve the right to call upon periodic security assessment reports from the Merchant/Seller pertaining to Merchant/Seller's compliance of the aforesaid provisions.</li>
 
 <li>Merchant/Seller is aware that in the event the Customer's Bank Account details provided by the Merchant/Seller to NDPS/Partner Bank are not in accordance with the records of NDPS/Partner Bank in relation to such Customer's user identification and password and other checks that may be provided by NDPS/Partner Bank from time to time, NDPS/Partner Bank may reject transfer instructions, without any responsibility accruing to NDPS/Partner Bank in this regard. Any claim arising out of such rejection or non - execution of transfer will be the sole responsibility of Merchant/Seller and no liability will devolve on NDPS/Partner Bank in this regard including for breach by the Merchant/Seller of the covenants contained above.</li>
 
 <li>Merchant/Seller shall ensure that all Customers/Buyers upon accessing the link and mapping are truly and properly directed to the Payment Mechanism.</li>
 
 <li>Merchant/Seller shall not seek and/or retain any of the confidential details of the Customer in relation to the Payment Mechanism, including without prejudice the user id details or the password details of the Customer in relation to the Payment mechanism.</li>

 <li>Without prejudice to the generality of the aforesaid, Merchant/Seller shall routinely and at such time intervals as may be specified by NDPS/Partner Bank check the integrity of the link and mapping and provide such reports as may be required to NDPS/Partner Bank from to time.</li>
 
 <li>Merchant/Seller shall also maintain records of such periodical checks in such manner as may be specified by NDPS/Partner Bank. NDPS/Partner Bank shall be entitled to check and audit Merchant/Seller's records and statements (including but not limited to Merchant's cancellation, refund and return policy, infrastructure, customer grievance policy, terms and conditions, etc.), in order to ensure Merchant's compliance with the obligations with respect to services rendered under this Terms and Conditions and applicable laws and to obtain copies of any audit or review reports and findings made on the Merchant in connections with the services undertaken hereunder, at such intervals or time as NDPS/Partner Bank may deem fit but with prior notice to Merchant/Seller. NDPS's audit rights shall survive the expiration or termination of these Terms and Conditions for the period required under applicable laws and regulations.</li>

 <li>Notwithstanding the aforesaid in the event of any loss being caused as a result of the link and mapping being breached or as a consequence of the link and mapping being improper or bring in violation of the provisions of these Terms and Conditions or as a consequence of any non - compliance of the provisions of these Terms and Conditions by Merchant/Seller or as a consequence of the actions mentioned earlier, the loss shall be to the account of the Merchant/Seller and Merchant/Seller shall indemnify and keep indemnified NDPS/Partner Bank from any loss as may be caused in this regard.</li>

 <li>Merchant/Seller has the full right and/or authority to offer the Merchant/Seller Services on the Site and that it has and shall observe and comply with the applicable laws and regulations in each applicable jurisdiction including without limitation, all applicable licensing, securities, stamp duty, income-taxes and other taxes and other censorship regulations and laws whether in India or otherwise.</li>
 
 <li>Merchant/Seller shall provide NDPS/Partner Bank with such information and /or assistance as is required by NDPS/Partner Bank Partner Bank for the performance for the Services and/or any other obligations of NDPS/Partner Bank under these Terms and Conditions.</li>   
</ol>
</li>    
</ol>
</li>
</ol>
</div>
</div>

 
</div>
  )
}
