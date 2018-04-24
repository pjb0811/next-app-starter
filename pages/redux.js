import React, { Component } from 'react';
import withLayout from '../components/hoc/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions/counter';
// import * as postActions from '../../redux-saga/actions/post';

class Redux extends Component {
  render() {
    return (
      <div>
        redux sample
      </div>
    );
  }
}

// export default withLayout(Redux);
export default withLayout(connect(
  (state) => ({
    counter: state.counter
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(Redux));