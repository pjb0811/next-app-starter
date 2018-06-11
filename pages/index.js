import React from 'react';
import mainTemplate from '../components/templates/Main';

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
