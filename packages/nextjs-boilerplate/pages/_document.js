import Document, { Head, Main, NextScript } from "next/document";
import { TypographyStyle, GoogleFont } from "react-typography";
import { DefaultTypography } from "../utils/typography";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          {this.props.styleTags}
          <TypographyStyle typography={DefaultTypography} />
          <GoogleFont typography={DefaultTypography} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
