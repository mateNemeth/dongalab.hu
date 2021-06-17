import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Dongaláb... azaz, azok a csodás lábikók! :)" key="title" />
          <meta
            property="og:description"
            content="Minden ami dongaláb. Tünetei, ajánlott eszközök, cipők, gyógytorna, kezelés, műtét, kedvezmények. Az összes információ egy helyen."
            key="description"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/matenemeth/image/upload/v1623873541/large_index_min_9f93c08483.jpg"
          />
          <meta
            name="keywords"
            content="dongaláb, achilles, ponseti, összekötött sín, gyógytorna, műtét, ortopédia, kezelés, cipő"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossOrigin="anonymous"
          />
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
