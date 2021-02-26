import { useContext } from 'react'
import styles from '../../styles/components/ChalengeBox.module.css'
import { ChallengeContext } from '../contexts/ChallengeContext'

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengeContext)
 
  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header> Ganhe { activeChallenge.amount } xp </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p> { activeChallenge.description } </p>
          </main>
          <footer>
            <button 
              type="button"
              className={styles.challengeFailButton}
              onClick={resetChallenge}
            > 
              Falhei 
            </button>
            <button
              type="button"
              className={styles.challengeSuccecedButton}
            > 
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong> Finalize um ciclo para receber um desafio </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}
