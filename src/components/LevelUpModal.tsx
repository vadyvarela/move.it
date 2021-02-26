import { useContext } from 'react';
import styles from '../../styles/components/LevelUpModal.module.css';
import { ChallengeContext } from '../contexts/ChallengeContext';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengeContext)
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header> {level} </header>
        <strong> Parabens </strong>
        <p> Voce alcancou um novo nivek</p>

        <button
          onClick={closeLevelUpModal}
        >
          <img src="/icons/close.svg" alt="Fechar Modal"/>
        </button>
      </div>
    </div>
  )
}
