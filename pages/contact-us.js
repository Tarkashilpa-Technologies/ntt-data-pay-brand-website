import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
//import styles from "../styles/Home.module.scss";

export default function Contact() {
  return (
    <div className="contactpage">
      <Head>
        <title>Contact Us | NTT DATA Payment Services India</title>
        <meta
          name="description"
          content="NTT DATA Payment Services India is a leading omnichannel payment service provider in India. With round the clock, uninterrupted support, our customer care executives are always here to assist you."
        />
      </Head>

      <div className="contact-main-bnr-wrp">
        <div className="container_1300 d-block">
          <h2 className="common-ttle ">Contact</h2>
          <p className="common-desc">
            Get your issues resolved quickly. Raise a request and we&#39;ll be
            at your service!
          </p>
        </div>
      </div>
      <nav className="bread-wrp" aria-label="breadcrumb">
        <div className="container_1300 d-block">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </div>
      </nav>

      <div className="contact-grid-cvr">
        <div className="container_1300 d-block">
          <div className="row">
            <div className="col-md-12">
              <h2 className="common-ttle">Corporate Office</h2>
            </div>
            <div className="col-md-6">
              <div className="contact-lhs">
                <h2 className="common-ttle2 contact-ttle-email">Email</h2>
                <hr />

                <div className="row">
                  <div className="col-md-6">
                    <p className="smll-ttle">Corporate Office</p>
                    <Link href="mailto:NDPS.info@nttdata.com">
                      <a>NDPS.info@nttdata.com</a>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <p className="smll-ttle">Support</p>
                    <Link href="mailto:NDPS.helpdesk@nttdata.com">
                      <a>NDPS.helpdesk@nttdata.com</a>
                    </Link>{" "}
                    <br />
                    <Link href="mailto:NDPS.poshelpdesk@nttdata.com">
                      <a>NDPS.poshelpdesk@nttdata.com</a>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <p className="smll-ttle">Media</p>
                    <Link href="mailto:NDPS.media@nttdata.com">
                      <a>NDPS.media@nttdata.com</a>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <p className="smll-ttle">Sales</p>
                    <Link href="mailto:NDPS.sales@nttdata.com">
                      <a>NDPS.sales@nttdata.com</a>
                    </Link>
                  </div>

                  <div className="col-md-6">
                    <p className="smll-ttle">Nodal Officer: Ajay Surana </p>
                    <Link href="mailto:NDPS.rcu@nttdata.com">
                      <a>NDPS.rcu@nttdata.com</a>
                    </Link>
                  </div>
                </div>

                <h2 className="common-ttle2 contact-ttle-phone">Phone</h2>
                <hr />

                <div className="row">
                  <div className="col-md-4">
                    <p className="smll-ttle">Corporate Office</p>
                    <Link href="">
                      <a>+91 22 68074100</a>
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <p className="smll-ttle">Helpdesk queries</p>
                    <Link href="">
                      <a>NDPS.helpdesk@nttdata.com</a>
                    </Link>{" "}
                    <br />
                  </div>

                  <div className="col-md-4">
                    <p className="smll-ttle">Helpdesk</p>
                    <Link href="">
                      <a>1860 266 4959</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-rhs">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8725405609594!2d72.86446121485884!3d19.11324675576758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8320052c6a1%3A0x9d0dd5983851795e!2sAtom%20Technologies%20Ltd.!5e0!3m2!1sen!2sin!4v1647864839487!5m2!1sen!2sin"
                  width="100%"
                  height="510"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="col-md-12">
              <div className="regional-off-cvr">
                <h2 className="common-ttle">Regional Offices</h2>

                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Delhi
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="contact-addr">
                          Daftar Coworks<br></br>
                          Suite 205 &amp; 206, 23/1-E, Third<br></br>
                          Floor, Near Videocon Tower, Jhandewalan Entension New
                          <br></br>
                          Delhi - 110055
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        Bengaluru
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="contact-addr">
                          Awfis, Residency Square-6 Richmond Road,<br></br>
                          Shanthala Nagar Richmond Town,<br></br>
                          Bengaluru, 560025
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        Kolkata
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {/* <p className="contact-addr">Awfis Space Solutions Private Limited,<br/> Shri Manjari Building,<br/> Flat NO 1 TO 10, 4th Floor 8/1A,<br/> Sir William Jones Sarani, <br/>Kolkata, West Bengal 700071</p> */}
                        <p className="contact-addr">
                          C/O AWFIS, 5th Floor,
                          <br />
                          50 Chowringhee Road,
                          <br />
                          Kolkata 700071,
                          <br />
                          West Bengal, India
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingfour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
      Ahmedabad
      </button>
    </h2>
    <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">


<p className="contact-phone">+91 86574 55349</p>

</div>
    </div>
  </div> */}

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingfive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsefive"
                        aria-expanded="false"
                        aria-controls="flush-collapsefive"
                      >
                        Hyderabad
                      </button>
                    </h2>
                    <div
                      id="flush-collapsefive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingfive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        <p className="contact-addr">
                          NTT DATA Business Solutions India,<br></br>
                          1st Floor, SoftSol Tower, 4, Inorbit Mall Rd,{" "}
                          <br></br>
                          Software Units Layout, Phase 2, HITEC City,
                          <br></br>
                          Hyderabad,Telangana 500081.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingsix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapsesix"
                        aria-expanded="false"
                        aria-controls="flush-collapsesix"
                      >
                        Chennai
                      </button>
                    </h2>
                    <div
                      id="flush-collapsesix"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingsix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        {/* <p className="contact-addr">itelligence India Software Solutions Private Ltd<br/>
Hallmark Foundations Limited 8th Floor,<br/> TS no.13 Block no. 5, Alandur Village Mambalam,<br/> Guindy, Plot no. 35, Thiru Vi Ka Industrial Estate,<br/> Guindy, Chennai - Tamil Nadu 600 032.</p> */}

                        <p className="contact-addr">
                          Hallmark Towers,
                          <br />
                          8th Floor, TS No : 13,
                          <br /> Block No : 5 , Plot No : 35,
                          <br /> Thiru vi ka Industrial Estate, Guindy
                          <br /> Chennai - 600032
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingseven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven" aria-expanded="false" aria-controls="flush-collapseseven">
      Lucknow
      </button>
    </h2>
    <div id="flush-collapseseven" className="accordion-collapse collapse" aria-labelledby="flush-headingseven" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">

<p className="contact-phone">+91 86577 05392</p>

</div>
    </div>
  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
