import App, { Container } from 'next/app';
import React from 'react';


import routes from '../routes';
import '../static/App.css';

export interface IProps {
  currentRoute: { name: string, path: string; };
  router: { asPath: string };
}

export default class Quasi extends App<IProps> {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const currentRoute = routes.routes.find(r => router.asPath.match(r.regex)) || { name: router.asPath };

    return { pageProps, currentRoute };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}