import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Deal extends Component {
  render() {
    const { router } = this.props;
    return (
      <h1>
        route: {router.route} id: {router.query.id}
      </h1>
    );
  }
}

export default mainTemplate(Deal);
