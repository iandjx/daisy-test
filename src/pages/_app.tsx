import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import "twin.macro";

import Layout from "@/components/Layout/Layout";
import globalStyles from "@/styles/GlobalStyles";

NProgress.configure({ showSpinner: false });

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      NProgress.start();
    });

    Router.events.on("routeChangeComplete", (url) => {
      NProgress.done(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Mao De Matos</title>
        <meta name="description" content="Mao De Matos. Web developer." />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
