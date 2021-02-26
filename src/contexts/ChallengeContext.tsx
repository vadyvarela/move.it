import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengeProviderProps {
  children: ReactNode
}

interface ChallengeContextData {
  level: number
  currentExpirence: number
  challengeCompleted: number
  experenceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  StartNewChallenge: () => void
  resetChallenge: () => void
}

export const ChallengeContext = createContext({} as ChallengeContextData)

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1)
  const [currentExpirence, setCurrentExpirence] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(0)

  const [activeChallenge, setActiveChallenge] = useState(null)

  const experenceToNextLevel = Math.pow((level+1) * 4, 2)

  function levelUp() {
    setLevel(level +1)
  }

  function StartNewChallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengesIndex]

    setActiveChallenge(challenge)
  }

  function resetChallenge() {
    setActiveChallenge(null)
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
        experenceToNextLevel
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}