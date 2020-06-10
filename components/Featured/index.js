import Link from 'next/link'

import styles from '../styles.module.css'

const pic = "https://avatars2.githubusercontent.com/u/31120411?s=460&u=692df66c638b77a50a88e1fee34dbed6796404f1&v=4"

export default function Featured({ children }) {
  return (
    <>
      <div className={styles.featured}>
        <Link href="/posts/post">
          <p style={{ cursor: "pointer" }}>
            {children}
          </p>
        </Link>
      </div>

      <div className="d-flex flex-row justify-content-between">

        <div className="d-flex flex-row justify-content-center">
          <img src={pic} className="img-fluid" style={{ borderRadius: 50, width: 25, height: 25 }} />
          <p className={styles.author}> Danilo Caldas </p>
        </div>

        <div className="d-flex flex-row justify-content-center">
          <i className="fas fa-bookmark" style={{ fontSize: "1.6vh", color: "#999"}}></i>
          <p className={styles.read}>
            1 min
          </p>
        </div>

      </div>
    </>
  )
}