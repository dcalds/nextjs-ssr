import styles from '../styles.module.css'
import Link from 'next/link'

export default function Social({ children }) {
    return (
        <div className={styles.social}>
            <i className="fab fa-github" style={{ cursor: "pointer" }} />
            <i className="fab fa-linkedin ml-2" style={{ cursor: "pointer" }} />
        </div>
    )
}