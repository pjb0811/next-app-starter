// This is the Link API
import React from 'react';
import Head from 'next/head';
import mainTemplate from '../components/templates/Layout';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Index</title>
        </Head>
        <div>
          <h1 className="ui header">Hello Next.js</h1>
        </div>
      </div>
    );
  }
}

export default mainTemplate(Index);
