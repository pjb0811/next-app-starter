import Document, { Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <html>
        <Head>
          <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="imagetoolbar" content="no" />
          <meta property="og:title" content="특가대표! 위메프" />
          <meta property="og:url" content="http://www.wemakeprice.com" />
          <meta
            property="og:image"
            content="https://image.wemakeprice.com/images/operation/default_thumb_new.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="WeMakePrice" />
          <meta
            property="og:description"
            content="고객의 돈과 시간을 아껴주는 위메프"
          />
          <meta
            name="description"
            content="소셜커머스, 원더배송, 패션/뷰티, 식품/생활/유아동, 가전/디지털, 여행/레저, 지역/컬처 할인"
          />

          <title>특가대표! 위메프</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="https://view01.wemep.co.kr/wmp-favicon/56/201802/25/fvc_tyz3wil8h3aj.ico"
          />
          <link
            rel="stylesheet"
            href="//s.wemep.co.kr/ui/v1.0.28/dist/pc/css/common/common_new.css"
          />
          <link
            rel="stylesheet"
            href="//s.wemep.co.kr/ui/v1.0.28/dist/pc/css/common/layout_new.css"
          />
          <link
            rel="stylesheet"
            href="//s.wemep.co.kr/ui/v1.0.28/dist/pc/css/pages/mix_common.css"
          />
          <link
            rel="stylesheet"
            href="//s.wemep.co.kr/ui/v1.0.28/dist/pc/css/pages/category.css"
          />
          {/* <link rel="stylesheet" href="/_next/static/style.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
