import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import { NextPage } from 'next';
import Links from '../components/Links';
import Journey from '../components/Journey';
import Projects from '../components/Projects';
import Contacts from '../components/Contacts';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className='bg-[#092027]'>
<Header />
<Links />
<Journey />
<Projects />
<Contacts />
</div>


    </div>
  )
}
