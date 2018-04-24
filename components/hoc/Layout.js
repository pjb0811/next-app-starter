import React from 'react';
import Header from '../menu/Header';
import Head from 'next/head';
import semantic from 'semantic-ui-css/semantic.min.css';

const Layout = (WrapperComponent) => {
  return class Layout extends React.Component {
    render() {
      return (
        <div className="ui container">
          <Head>
            <title>Next App Starter</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <style dangerouslySetInnerHTML={{ __html: semantic }} />
          </Head>
          <Header />
          <WrapperComponent />
        </div>
      );
    }
  };
};

export default Layout;