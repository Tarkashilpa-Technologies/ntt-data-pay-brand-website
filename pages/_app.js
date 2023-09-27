import "bootstrap/dist/css/bootstrap.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/globals.scss";
import React, { useEffect } from "react";
import "../styles/nextjs-jsoneditor.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        ></link>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-223921365-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NRTMWRN');
              window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-223921365-1');
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){var e,t;e=document,(t=e.createElement("script")).type="text/javascript",t.async=!0,t.setAttribute("data-botid","fGo9pl7_YuHE"),t.src="https://botbuilder.engagely.ai/engagelyscripts/engagely_bots.js?v="+Date.parse(new Date()),e.getElementsByTagName("body")[0].appendChild(t)},3e3);`,
          }}
        />
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NRTMWRN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
