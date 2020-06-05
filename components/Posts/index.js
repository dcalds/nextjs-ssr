import styles from './styles.module.css'

export default function Posts({ children }) {
    return (
      <div className={styles.postcard}>
        {children}
      </div>
    )
  }