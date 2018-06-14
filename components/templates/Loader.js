import React from 'react';

class Loader extends React.Component {
  render() {
    const { pending, error, data } = this.props.response;
    if (pending || !Object.keys(data).length) {
      return <div>pending...</div>;
    }

    if (error) {
      return <div>error!</div>;
    }
    return this.props.render(data);
  }
}

export default Loader;
