// This is the Link API
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import semantic from 'semantic-ui-css/semantic.min.css';

const Index = () => (
  <div>
    <Head>
      <title>Next App Starter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      <style dangerouslySetInnerHTML={{ __html: semantic }} />
    </Head>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <div className="ui container">
      <h1 className="ui header">Hello Next.js</h1>
      <button className="ui button">Follow</button>
    </div>
  </div>
);

export default Index;