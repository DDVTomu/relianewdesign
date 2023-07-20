import App from "next/app";
import Head from "next/head";
import "@assets/css/style.css";
import "@assets/css/globals.scss";
import { createContext } from "react";
// import StrapiClient from "lib/strapi-client";
import { fetchAPI } from "lib/api";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/favicon-96x96.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="theme-color" content="#e84118" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext ) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.res?.statusCode === 500) {
    appContext.ctx.res.writeHead(302, { Location: '/' });
    appContext.ctx.res.end();
  }
  // Fetch global site settings from Strapi
  const global = await fetchAPI("global?populate[0]=defaultSeo.shareImage");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
