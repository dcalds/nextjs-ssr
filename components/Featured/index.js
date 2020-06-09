import Link from 'next/link'

import styles from '../styles.module.css'

export default function Featured({ children }) {
  return (
    <p className={styles.featured}>
      <Link href="/posts/post">
        <a>
          {children}
        </a>
      </Link>
    </p>
  )
}