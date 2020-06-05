import styles from './styles.module.css'

export default function Subtitle({ children }) {
    return (
      <p className={styles.subtitle}>
        {children}
      </p>
    )
  }