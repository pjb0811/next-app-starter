import React from 'react';
import Header from '../organisms/Header';
import GlobalBanner from '../organisms/GlobalBanner';

const Main = Page => {
  class MainWrapper extends React.Component {
    static async getInitialProps(ctx) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : null)
      };
    }

    render() {
      return (
        <div id="_wrap" className="wrap">
          <div id="_header" className="mix_header">
            <GlobalBanner />
            <Header />
          </div>
          <Page {...this.props} />
        </div>
      );
    }
  }
  return MainWrapper;
};

export default Main;
