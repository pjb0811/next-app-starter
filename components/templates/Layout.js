import React from 'react';
import Header from '../menu/Header';

const Layout = Page => {
  class LayoutWrapper extends React.Component {
    static async getInitialProps(ctx) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : null)
      };
    }

    render() {
      return (
        <div className="ui container">
          <Header />
          <Page {...this.props} />
        </div>
      );
    }
  }
  return LayoutWrapper;
};

export default Layout;
