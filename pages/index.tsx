import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Medium blog</title> 
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
    </div>
  )
}

export default Home
