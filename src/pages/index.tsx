import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'

import styles from '../../styles/pages/Home.module.css'
import { CompleteChalenges } from "../components/CompleteChalenges";
import { Countdown } from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Inicio | move.it </title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile />
          <CompleteChalenges />
          <Countdown />
        </div>
      </section>
    </div>
  )
}