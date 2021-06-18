import type { AppProps as NextAppProps } from 'next/app'
// import Navbar from '@/components/layout/Navbar/Navbar'
// import App from 'next/app'
// import { getData } from '../utils/api'
import { GlobalProps } from '../model/global'
import Head from 'next/head'
import '@/styles/index.css'

type AppProps<P> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

const MyApp = ({ Component, pageProps }: AppProps<GlobalProps>): JSX.Element => {
  return (
    <>
      <Head>
        <title>Dongaláb... azaz azok a csodás lábikók! :)</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const global = await getData<GlobalProps>('/global')

//   return {
//     ...appProps,
//     pageProps: {
//       navbar: global.navbar,
//     },
//   }
// }

export default MyApp
