import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../redux/actions/common';

class ssrTest extends Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.isServer) {
      await ctx.store.dispatch(commonActions.requestCommon(1));
    }
    return {};
  }

  render() {
    const { common } = this.props;

    return (
      <div>
        {common.pending ? (
          <h2>Loading...</h2>
        ) : common.error ? (
          <h1>Error!</h1>
        ) : (
          <div>server rendering test</div>
        )}
      </div>
    );
  }
}

export default mainTemplate(
  connect(
    state => ({
      common: state.toJS().common
    }),
    dispatch => ({
      CommonActions: bindActionCreators(commonActions, dispatch)
    })
  )(ssrTest)
);
