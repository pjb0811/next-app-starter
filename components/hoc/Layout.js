import React from 'react';
import Header from '../menu/Header';
import Head from 'next/head';
import semantic from 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

const Layout = Page => {
  class LayoutWrapper extends React.Component {
    static async getInitialProps(args) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(args) : null)
      };
    }

    render() {
      return (
        <div className="ui container">
          <Head>
            <title>Next App Starter</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
              key="viewport"
            />
            <style dangerouslySetInnerHTML={{ __html: semantic }} />
          </Head>
          <Header />
          <Provider store={store()}>
            <Page {...this.props} />
          </Provider>
        </div>
      );
    }
  }
  return withRedux(store, state => state)(withReduxSaga(LayoutWrapper));
};

export default Layout;
