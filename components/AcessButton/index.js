import styles from './styles.module.css'

export default function AcessButton({ children }) {
  return (
    <button className={styles.postcard}>
      {children}
    </button>
  )
}