// This is the Link API
import Link from 'next/link';
import Head from 'next/head';

const Index = () => (
  <div className="App">
    <Head>
      <title>Next App Starter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index;