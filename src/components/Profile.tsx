import { useContext } from 'react'
import styles from '../../styles/components/Profile.module.css'
import { ChallengeContext } from '../contexts/ChallengeContext'

export function Profile() {
  const { level } = useContext(ChallengeContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/12084688?s=200&v=4" alt="Vadnir"/>
      <div>
        <strong> Vadnir Vieira </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}
