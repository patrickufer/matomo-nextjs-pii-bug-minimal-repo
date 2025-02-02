import { AppProps } from 'next/app';
import { init as initMatomo } from "@socialgouv/matomo-next";
import Head from 'next/head'
import { useEffect, Fragment } from 'react';
import '../styles.scss';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL + '';
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID + '';


export default function Application({ Component, pageProps }: AppProps) {

  useEffect(() => {
    initMatomo({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, [])

  return (
      <Fragment>
        <Head>
          <title>Matomo PII bug + NextJS minimal repo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

          {/* PWA Manifest */}
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/icons/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  
}
