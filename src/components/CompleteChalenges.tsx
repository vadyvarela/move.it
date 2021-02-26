import { useContext } from 'react'
import styles from '../../styles/components/CompletedChalenges.module.css'
import { ChallengeContext } from '../contexts/ChallengeContext'

export function CompleteChalenges() {
  const { challengeCompleted } = useContext(ChallengeContext)
  
  return (
    <div className={styles.completedChalengesContainer}>
      <span> Desafios completos</span>
      <span> {challengeCompleted} </span>
    </div>
  )
}
