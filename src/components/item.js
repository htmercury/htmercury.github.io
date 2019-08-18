import React from "react"
import classnames from "classnames"
import styles from "../styles/item.module.scss"
import { Link } from "gatsby"

const Item = ({ text, path, handler, active }) =>
  path ? (
    <Link
      to={path}
      onClick={handler}
      className={classnames(styles.item, active ? styles.active : null)}
    >
      <span className={styles.text}>
        {text}
        <span className={styles.underline} />
      </span>
    </Link>
  ) : (
    <a
      onClick={handler}
      className={classnames(styles.item, active ? styles.linkActive : null)}
    >
      <span className={styles.text}>
        {text}
        <span className={styles.underline} />
      </span>
    </a>
  )

export default Item
