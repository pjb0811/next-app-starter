import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Promotion extends Component {
  render() {
    return (
      <div className="test">
        <h1 className="ui header">promotion</h1>
      </div>
    );
  }
}

export default mainTemplate(Promotion);
