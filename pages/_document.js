import Document, { Head, Main, NextScript } from 'next/document';
// import semantic from 'semantic-ui-css/semantic.min.css';

export default class CustomDocument extends Document {
  static async getInitialProps(context) {
    return await Document.getInitialProps(context);
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <title>Next App Starter</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
