

import Head from 'next/head'
import { GetServerSideProps } from 'next'
import ExperienceBar from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import styles from '../../styles/pages/Home.module.css'
import { CompleteChalenges } from "../components/CompleteChalenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import React from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number
  currentExperence: number
  challengeCompleted: number
}
export default function Home(props: HomeProps) {
  return (
    <ChallengeProvider 
      level={props.level}
      currentExperence={props.currentExperence}
      challengeCompleted={props.challengeCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title> Inicio | move.it </title>
      </Head>
      <ExperienceBar/>

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompleteChalenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
    </ChallengeProvider>
  )
}
 

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperence, challengeCompleted } = ctx.req.cookies
  return {
    props: {
      level: Number(level),
      currentExperence: Number(currentExperence),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}