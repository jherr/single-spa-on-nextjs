import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
          <meta name="importmap-type" content="systemjs-importmap" />
          <script type="systemjs-importmap" src="import-map.json"></script>
          <link rel="preload" href="https://cdn.jsdelivr.net/npm/single-spa@5.1.1/lib/system/single-spa.min.js" as="script" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/single-spa-html"></script>
          <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@1.12.0/dist/import-map-overrides.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/system.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/amd.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/named-exports.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/systemjs@6.3.1/dist/extras/named-register.min.js"></script>
          <script src="single-spa-loader.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
