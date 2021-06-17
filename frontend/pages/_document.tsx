import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="HU">
        <Head>
          <meta property="og:title" content="Dongaláb... azaz, azok a csodás lábikók! :)" key="title" />
          <meta
            property="og:description"
            content="Minden ami dongaláb. Tünetei, ajánlott eszközök, cipők, gyógytorna, kezelés, műtét, kedvezmények. Az összes információ egy helyen."
            key="description"
          />
          <meta
            name="description"
            content="Minden ami dongaláb. Tünetei, ajánlott eszközök, cipők, gyógytorna, kezelés, műtét, kedvezmények. Az összes információ egy helyen."
          />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://dongalab.hu" />
          <title>Dongaláb... azaz azok a csodás lábikók! :)</title>
          <meta
            name="keywords"
            content="dongaláb, achilles, ponseti, összekötött sín, gyógytorna, műtét, ortopédia, kezelés, cipő"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <script src="https://kit.fontawesome.com/5999fbffbd.js" crossOrigin="anonymous"></script>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
