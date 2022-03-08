import App from 'next/app';
import React, { Fragment } from 'react';
import Head from 'next/head';
import '../styles.scss';

export default class StyledApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Head>
          <title>Matomo PII bug + NextJS minimal repo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </Fragment>
    );
  }
}
