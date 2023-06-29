// import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useEffect, useRef  } from "react";
import Script from "next/script";
import styles from "../styles/Footer.module.scss";


export default function Footer() {

  useEffect(() => {
    if (typeof document !== undefined) {
      // load JS bootstrap dependency
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  const router = useRouter();
 
  

  return (

    
  
<div className={styles.footer}>
<div className="container_1300 d-block">


{ router.pathname=="/campaign-page" ? <div className="row justify-content-center">



  <div className="col col-md-3 text-center">
   <div className={styles.ftrcard1}>
    <a href="" className={styles.ftrlogo}>
    <img src="/images/ntt-footer-logo.svg" alt="" className="img-fluid" />  
    </a> 
    <a className={styles.ftrtele} tel="9152035710"><span>Call Us : </span>+91 9152 0357 10</a>
    
    </div> 
  </div>

 




</div>
:
<div className="row">
  <div className="col col-md-3">
   <div className={styles.ftrcard1}>
    <a href="" className={styles.ftrlogo}>
    <img src="/images/ntt-footer-logo.svg" alt="" className="img-fluid" />  
    </a> 
    <a className={styles.ftrtele} tel="18602664959"><span>Helpdesk : </span> 1860 266 4959</a>
    <a className={styles.ftrtele} tel="+91 9152035710"><span>New Sales : </span> +91 9152035710</a>
    
    </div> 
  </div>

 

<div className="col col-md-2 col-6">
  <div className={styles.ftlnkscvr}>
   <p className={styles.ttle}>Products</p>  
   <Link href="/online-payment-gateway-india">
    <a className={styles.ftrlnks}>Payment Gateway</a>
    </Link>
   <Link href="/swipecard-pos-machine">
    <a className={styles.ftrlnks}>POS Machine</a>
    </Link>
    <Link href="/ivr-payment-system">
    <a className={styles.ftrlnks}>IVR Payment</a>
    </Link>
    <Link href="/mgalla-payment-app">
    <a className={styles.ftrlnks}>mGalla</a>
    </Link>

   {/* <a href="" className={styles.ftrlnks}>Careers</a>
   <a href="" className={styles.ftrlnks}>Investors</a> */}
  </div>
</div>

<div className="col col-md-2 col-6">
  <div className={styles.ftlnkscvr}>
   <p className={styles.ttle}>Industries</p>  
   <Link href="/payment-solutions-for-retail-industry">
    <a className={styles.ftrlnks}>Retail</a>
    </Link>
   <Link href="/payment-solutions-for-government-sector">
    <a className={styles.ftrlnks}>Government</a>
    </Link>
    <Link href="/payment-solutions-for-brokers">
    <a className={styles.ftrlnks}>Broking</a>
    </Link>
    <Link href="/payment-solutions-for-travel-industry">
    <a className={styles.ftrlnks}>Travel and Tourism</a>
    </Link>
    <Link href="/payment-solutions-for-education-industry">
    <a className={styles.ftrlnks}>Education</a>
    </Link>
    <Link href="/payment-solutions-for-dth-industry">
    <a className={styles.ftrlnks}>DTH and Cable TV</a>
    </Link>

  </div>
</div>

<div className="col col-md-2 col-6">
  <div className={styles.ftlnkscvr}>
  <p className={styles.ttle}>Company</p> 
  <Link href="/about-us">
   <a  className={styles.ftrlnks}>About</a>
   </Link>
   <Link href="/sign-up">
   <a  className={styles.ftrlnks}>Sign Up</a>
   </Link>
   <Link href="/contact-us">
   <a className={styles.ftrlnks}>Contact Us</a>
  </Link>
  <Link href="/privacy-policy">
   <a className={styles.ftrlnks}>Privacy Policy</a>
  </Link>
  <Link href="/grievance-redressal-policy">
   <a className={styles.ftrlnks}>Grievance Redressal Policy</a>
  </Link>
  <Link href="/banned-products">
   <a className={styles.ftrlnks}>Banned Products</a>
  </Link>
  <Link href="/terms">
   <a className={styles.ftrlnks}>Terms and Conditions</a>
  </Link>


  </div>
</div>

<div className="col col-md-2 col-6">
  <div className={styles.ftlnkscvr}>
  <p className={styles.ttle}>Resources</p> 
  <Link href="/blog">
   <a className={styles.ftrlnks}>Blog</a>
  </Link>
  <Link href="/faqs">
   <a className={styles.ftrlnks}>FAQs</a>
  </Link>
  <Link href="/media-center">
   <a className={styles.ftrlnks}>News & PR</a>
  </Link>
  <Link href="/customer-care">
   <a className={styles.ftrlnks}>Get Help</a>
  </Link>
  <Link href="/white-paper">
   <a className={styles.ftrlnks}>White Paper</a>
  </Link>

  <Link href="javascript:void(0)"  >
   <a className={styles.ftrlnks} id="foo" >AGM Video</a>
  </Link>

  <Link href="javascript:void(0)"  >
   <a className={styles.ftrlnks} id="annual" >Annual Report</a>
  </Link>

  </div>
</div>


<div className="col col-md-2">
<div className={styles.ftlnkscvr}>

  </div>
</div>



</div>

}

</div>


<div className={styles.copyrightwrp}>
<div className="container_1300 d-block">
<div className="row">
<div className="col-md-2">
<div className={styles.copyrightdesc}>
<p>© 2022 NTT DATA</p>  
</div>  
</div>  
<div className="col-md-5">
<div className={styles.securedlogowrp}>
 <p  >Secured By</p> 
 <span><img src="/images/secured-1.png" alt="" className="img-fluid" /></span>
 <span><img src="/images/secured-2.png" alt="" className="img-fluid" /></span>
 <span><img src="/images/secured-3.png" alt="" className="img-fluid" /></span>
 <span><img src="/images/secured-4.png" alt="" className="img-fluid" /></span>
</div>
</div>

<div className="col-md-5">
 <div className={styles.socialftrcvr}>
<a href="https://www.facebook.com/nttdatapayments"  rel="noopener noreferrer" target="_blank"><img src="/images/facebook.svg" alt="" className="img-fluid" /></a>  
<a href="https://twitter.com/nttdatapayments"  rel="noopener noreferrer" target="_blank"><img src="/images/twitter.svg" alt="" className="img-fluid" /></a>  
<a href="https://www.linkedin.com/company/ntt-data-payments"  rel="noopener noreferrer" target="_blank"><img src="/images/linkedin.svg" alt="" className="img-fluid" /></a>  
<a href="https://www.instagram.com/nttdatapayments/"  rel="noopener noreferrer" target="_blank"><img src="/images/instagram.svg" alt="" className="img-fluid" /></a>  
<a href="https://www.youtube.com/c/NTTDATAPaymentServicesIndia"  rel="noopener noreferrer" target="_blank"><img src="/images/youtube.svg" alt="" className="img-fluid" /></a>   

<div className={styles.securedlogowrp}>
<p className="mt-5">Site Credits:<a href="http://digitalvibe.in/"  rel="noopener noreferrer" target="_blank">DV</a></p>
</div>

</div> 

 

</div>

</div>
</div>
</div>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
          <form>
           <div className="row">
           <div className="col-md-12 mb-20">
            <label htmlFor="exampleFormControlInput1" className="form-label">Products Required:</label>
            <select  className="form-control" name="products_required" >
           <option value="Payment Gateway">atom Payment Gateway</option> 
           <option value="POS Terminal">atom POS Machine</option> 
           <option value="Reseller">Reseller</option> 
            </select>  
            </div> 
            <div className="col-md-6 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" className="form-control" name="first_name" />  
            </div>  
            <div className="col-md-6 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
            <input type="text" className="form-control" name="last_name" />    
            </div>  

            <div className="col-md-12 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
            <input type="text" className="form-control" name="mobile" min="10" max="10" />    
            </div>  


            <div className="col-md-12 mb-10">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" />    
            </div> 

            <div className="col-md-12 mb-10">
            <button type="submit" className="btn btn-primary mb-3">Sign Up</button>
            </div>

           </div>
          </form>
      </div>
    
    </div>
  </div>
</div>









<script
  dangerouslySetInnerHTML={{
    __html: `
    document.getElementById("foo").addEventListener('click',function ()
{
console.log('Hello world');
document.getElementById('overlay').style.display = "block";
document.getElementById('agm_form').style.display = "block";

document.body.style.overflow = 'hidden';
}  ); 

document.getElementById("agm-close").addEventListener('click',function ()
{
  document.getElementById('agm_video').pause();
  document.getElementById('overlay').style.display = "none";
  document.getElementById('agm-vid').style.display = "none";
  document.getElementById('agm_form').style.display = "none";
  document.getElementById("inputPassword2").value="";
  document.body.style.overflow = 'scroll';
}  ); 
document.getElementById("agm_submit").addEventListener('click',function ()
{
  var agm_pass=document.getElementById("inputPassword2").value;
if(agm_pass!='nttdata'){
    alert('Incorrect Password');
  }else{
    document.getElementById('agm_form').style.display = "none";

    document.getElementById('agm-vid').style.display = "block";
    document.getElementById('agm_video').play();
    document.body.style.overflow = 'hidden';
  } 
  
});

/////////annual/////////
document.getElementById("annual").addEventListener('click',function ()
{
console.log('Hello world');
document.getElementById('overlay2').style.display = "block";
document.getElementById('annual_form').style.display = "block";

document.body.style.overflow = 'hidden';
}  ); 




document.getElementById("annual-close").addEventListener('click',function ()
{
  
  document.getElementById('overlay2').style.display = "none";
  
  document.getElementById('annual_form').style.display = "none";
  document.getElementById("inputPassword3").value="";
  document.body.style.overflow = 'scroll';
}  ); 
document.getElementById("annual_submit").addEventListener('click',function ()
{
  var agm_pass=document.getElementById("inputPassword3").value;
if(agm_pass!='nttdata'){
    alert('Incorrect Password');
  }else{
    document.getElementById('annual_form').style.display = "none";
    document.getElementById('overlay2').style.display = "none";
    document.body.style.overflow = 'hidden';
    window.open('/pdf/Annual-Report-2021-22-NDPS.pdf', '_blank');
  } 
  
});
////////////annual end//////////////////    
`,
  }}
/>

</div>






  );
}
