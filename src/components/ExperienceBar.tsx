import { useContext } from 'react';
import styles from '../../styles/components/ExperienceBar.module.css';
import { ChallengeContext } from '../contexts/ChallengeContext'

export default function ExperienceBar() {
  const { currentExpirence, experenceToNextLevel } = useContext(ChallengeContext)
  const percentToNextLevel = Math.round(currentExpirence * 100) / experenceToNextLevel

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%`}}>
          { currentExpirence } xp
        </span>
      </div>
      <span>{experenceToNextLevel} xp</span>
    </header>
  );
}