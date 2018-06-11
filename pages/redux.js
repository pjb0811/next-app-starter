import React, { Component } from 'react';
import mainTemplate from '../components/templates/Layout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/actions/counter';
import * as postActions from '../redux/actions/post';

class Redux extends Component {
  static async getInitialProps(ctx) {
    if (ctx && ctx.isServer) {
      await ctx.store.dispatch(postActions.requestPost(1));
      // setTimeout(() => {
      //   console.log(ctx.store.getState());
      // }, 2000);
    }
    return await {};
  }

  componentDidMount() {
    // const { counter } = this.props;
    // this.getPost(counter);
  }

  componentDidUpdate(prevProps) {
    // if (this.props.counter !== prevProps.counter) {
    //   this.getPost(this.props.counter);
    // }
  }

  getPost = async id => {
    const { PostActions } = this.props;
    return PostActions.requestPost(id);
  };

  render() {
    const { post, counter, CounterActions } = this.props;

    return (
      <div>
        redux sample
        <h1>{counter}</h1>
        <button onClick={CounterActions.incrementAsync}>+</button>
        <button onClick={CounterActions.decrementAsync}>-</button>
        {post.pending ? (
          <h2>Loading...</h2>
        ) : post.error ? (
          <h1>Error!</h1>
        ) : (
          <div>
            <h1>{post.data.title}</h1>
            <p>{post.data.body}</p>
          </div>
        )}
      </div>
    );
  }
}

export default mainTemplate(
  connect(
    state => ({
      counter: state.toJS().counter,
      post: state.toJS().post
    }),
    dispatch => ({
      CounterActions: bindActionCreators(counterActions, dispatch),
      PostActions: bindActionCreators(postActions, dispatch)
    })
  )(Redux)
);
