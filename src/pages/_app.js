import React from 'react';
import Layout from '../components/Layout';

const CustomApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default CustomApp;
