import { useState, useEffect, useContext } from 'react'
import styles from '../../styles/components/Countdown.module.css'
import { ChallengeContext } from '../contexts/ChallengeContext'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const { StartNewChallenge } = useContext(ChallengeContext)
  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setisActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setisActive(true)
  }

  function resetCountdown(){
    clearTimeout(countdownTimeout)
    setisActive(false)
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if(isActive && time === 0){
      setHasFinished(true)
      setisActive(false)
      StartNewChallenge()
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.coutdownContainer}>
        <div>
          <span> {minuteLeft} </span>
          <span> {minuteRight} </span>
        </div>
        <span>:</span>
        <div>
          <span> {secondLeft} </span>
          <span> {secondRight} </span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          className={styles.countDownButton}
        >
          Ciclo encerrado
        </button>
      ): (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countDownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  )
}
