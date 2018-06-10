// This is the Link API
import React from 'react';
import mainTemplate from '../components/templates/Layout';
import './index.css';

class Index extends React.Component {
  render() {
    return (
      <div className="test">
        <h1 className="ui header">Hello Next.js</h1>
      </div>
    );
  }
}

export default mainTemplate(Index);
