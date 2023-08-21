import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
    <Head>
      <title>IOT</title>
    </Head>
    <div className={styles.title}>
        <h1>IOT - Internet das Coisas</h1>
        <img
        src= '/images/iot_image.jpeg'
        width="1850px"
        alt="IOT"
        />
    </div>
    </>
  )
}
