import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from "@/components/Navbar";

export default function Score() {
  return (
     <>
       <Head>
         <title>Jeux du pendu</title>
         <meta name="description" content="Generated by create next app" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <Navbar/>
       <main className={styles.main}>
         <p>score</p>
       </main>
     </>
  )
}
