import Document, { Html, Main, NextScript, Head, DocumentContext } from 'next/document';

import { Provider as StyletronProvider } from "styletron-react";
import { Server, Sheet } from "styletron-engine-atomic";
import { styletron } from "utils/styletron";
type MyDocumentProps = { stylesheets: Sheet[] };

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    });

    const initialProps = await Document.getInitialProps(ctx);
    const stylesheets = (styletron as Server).getStylesheets() || [];

    return {
      ...initialProps,
      stylesheets
    };
  }

  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.stylesheets.map((sheet, i) => <style
            className="_styletron_hydrate_"
            dangerouslySetInnerHTML={{
              __html: sheet.css
            }}
            media={sheet.attrs.media}
            data-hydrate={sheet.attrs["data-hydrate"]}
            key={i} />)}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
