import Layout from '../components/Layout'
import '../styles/globals.css'
import Router from "next/router";
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return loading ? (
  <>
    <Loading />
    <Head>
      <link rel="shortcut icon" href="spt.ico" />
    </Head>

  </>
  
  ) : (
  <>
    
    <Head>
      <link rel="shortcut icon" href="spt.ico" />
    </Head>
    <Layout />
    <Component {...pageProps} />
    </>
  );
};
export default MyApp
