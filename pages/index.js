import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Banner from '../components/banner/banner'
import NavBar from '../components/nav/navbar'
import Card from '../components/card/card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="daniel@mail.com" />
      <Banner 
        title="Clifford the red dog" 
        subTitle="A very cute dog" 
        imgUrl="/static/clifford.webp" 
      />

      <Card imgUrl='/static/clifford.webp' size="large" />
      <Card imgUrl='/static/clifford.webp' size="medium" />
      <Card imgUrl='/static/clifford.webp' size="small" />
    </div>
  )
}
