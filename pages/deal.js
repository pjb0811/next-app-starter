import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Deal extends Component {
  render() {
    const { router } = this.props;
    return (
      <div>
        <h1>route: {router.route}</h1>
        <p>id: {router.query.id}</p>
      </div>
    );
  }
}

export default mainTemplate(Deal);
