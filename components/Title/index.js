import styles from '../styles.module.css'

export default function Title({ children }) {
    return (
      <p className={styles.title}>
        {children}
      </p>
    )
  }