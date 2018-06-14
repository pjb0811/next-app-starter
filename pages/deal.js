import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Deal extends Component {
  render() {
    return (
      <div className="test">
        <h1 className="ui header">Deal</h1>
      </div>
    );
  }
}

export default mainTemplate(Deal);
