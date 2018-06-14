import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Promotion extends Component {
  render() {
    const { router } = this.props;
    return (
      <h1>
        route: {router.route} id: {router.query.id}
      </h1>
    );
  }
}

export default mainTemplate(Promotion);
