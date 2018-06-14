import React from 'react';
import GlobalBanner from '../organisms/GlobalBanner';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import Loader from './Loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../redux/actions/common';

const Main = Page => {
  class MainWrapper extends React.Component {
    static async getInitialProps(ctx) {
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(ctx) : null)
      };
    }

    componentDidMount() {
      const { CommonActions } = this.props;
      return CommonActions.requestCommon('');
    }

    render() {
      // const { pending, error, data } = this.props.common;
      // if (pending || !Object.keys(data).length) {
      //   return <div>pending...</div>;
      // }

      // if (error) {
      //   return <div>error!</div>;
      // }

      return (
        <div id="_wrap" className="wrap">
          <div id="_header" className="mix_header">
            <Loader
              response={{ ...this.props.common }}
              render={data => {
                return <GlobalBanner data={data} />;
              }}
            />
            {/* <GlobalBanner {...this.props} /> */}
            <Header {...this.props} />
          </div>
          <div id="_container" className="container main">
            <Page {...this.props} />
          </div>
          <div id="_footer" className="footer_wrap">
            <Footer />
          </div>
        </div>
      );
    }
  }

  return connect(
    state => ({
      common: state.toJS().common
    }),
    dispatch => ({
      CommonActions: bindActionCreators(commonActions, dispatch)
    })
  )(MainWrapper);
};

export default Main;
