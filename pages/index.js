import React, { Component } from 'react';
import mainTemplate from '../components/templates/Main';

class Index extends Component {
  render() {
    return (
      <div className="test">
        <h1 className="ui header">index</h1>
      </div>
    );
  }
}

export default mainTemplate(Index);
