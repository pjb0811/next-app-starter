import React, { Component } from 'react';
import withLayout from '../components/hoc/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions/counter';
import * as postActions from '../redux/actions/post';
import store from '../redux/store';

class Redux extends Component {
  static async getInitialProps({ store, req, isServer }) {
    if (isServer) {
      await store.dispatch(postActions.requestPost(1));
    }
    return;
  }
  componentWillMount() {
    const { counter } = this.props;
    this.getPost(counter);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.counter !== nextProps.counter) {
      this.getPost(nextProps.counter);
    }
  }
  getPost = async id => {
    const { PostActions } = this.props;
    return PostActions.requestPost(id);
  };

  render() {
    const { post, counter, CounterActions } = this.props;
    const result = post.toJS();

    return (
      <div>
        redux sample
        <h1>{counter}</h1>
        <button onClick={CounterActions.incrementAsync}>+</button>
        <button onClick={CounterActions.decrementAsync}>-</button>
        {result.pending ? (
          <h2>Loading...</h2>
        ) : result.error ? (
          <h1>Error!</h1>
        ) : (
          <div>
            <h1>{result.data.title}</h1>
            <p>{result.data.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withLayout(
  connect(
    state => ({
      counter: state.counter,
      post: state.post
    }),
    dispatch => ({
      CounterActions: bindActionCreators(counterActions, dispatch),
      PostActions: bindActionCreators(postActions, dispatch)
    })
  )(Redux)
);
