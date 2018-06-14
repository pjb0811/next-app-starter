import React from 'react';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import makeStore from '../redux/store';
import withReduxSaga from 'next-redux-saga';
import { fromJS } from 'immutable';

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} router={{ ...router }} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(withReduxSaga(CustomApp));
