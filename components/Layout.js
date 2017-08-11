import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import wrapper from '../tools/wrapper'

const layout = (Page) => wrapper(class Layout extends React.Component {
  render() {
    return (<div >
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <Page {...this.props} />
      <Footer />
    </div>)
  }
  static translateNS = [...Header.translateNS, ...Page.translateNS || []]
  static getInitialProps = async (ctx) => {
    return await Promise.all([
      Header.getInitialProps(ctx),
      Page.getInitialProps ? Page.getInitialProps(ctx) : Promise.resolve(true),
    ])
  }
})

export default layout