import React, { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengeProviderProps {
  children: ReactNode
  level: number
  currentExperence: number
  challengeCompleted: number
}

interface ChallengeContextData {
  level: number
  currentExpirence: number
  challengeCompleted: number
  experenceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  StartNewChallenge: () => void
  completedChallenge: () => void
  resetChallenge: () => void
  closeLevelUpModal: () => void
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ 
  children,
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExpirence, setCurrentExpirence] = useState(rest.currentExperence ?? 0)
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0)

  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const experenceToNextLevel = Math.pow((level+1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperence', String(currentExpirence))
    Cookies.set('challengeCompleted', String(challengeCompleted))
  }, [level, currentExpirence, challengeCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsModalOpen(true)
  }

  function closeLevelUpModal() {
    setIsModalOpen(false)
  }

  function StartNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesIndex]

    setActiveChallenge(challenge)
    new Audio('/notification.mp3').play()

    if(Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉🎉', {
        body: `Valendo ${challenge.amount}xp`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completedChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge
    let finalExperence = currentExpirence + amount

    if(finalExperence >= experenceToNextLevel) {
      finalExperence = finalExperence - experenceToNextLevel
      levelUp()
    }

    setCurrentExpirence(finalExperence)
    setActiveChallenge(null)
    setChallengeCompleted(challengeCompleted + 1)
  }

  return (
    <ChallengeContext.Provider 
      value={{ 
        level, 
        currentExpirence, 
        challengeCompleted, 
        levelUp,
        StartNewChallenge,
        activeChallenge,
        resetChallenge,
        experenceToNextLevel,
        completedChallenge,
        closeLevelUpModal
      }}
    >
      {children}

      { isModalOpen && <LevelUpModal/> }
    </ChallengeContext.Provider>
  )
}