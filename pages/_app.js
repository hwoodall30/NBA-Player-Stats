import React from "react";
import Head from "next/head";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>NBA Players Stats</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
