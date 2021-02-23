import styles from '../../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/12084688?s=200&v=4" alt="Vadnir"/>
      <div>
        <strong> Vadnir Vieira </strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
