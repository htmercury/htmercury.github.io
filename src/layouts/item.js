import React from "react"
import classnames from "classnames"
import styles from "../styles/item.module.scss"
import { Link } from "gatsby"

const Item = ({ text, path, handler, active, location }) =>
  path ? (
    <Link
      state={{ prevPath: location.pathname }}
      to={path}
      onClick={handler}
      className={classnames(styles.item, active ? styles.linkActive : null)}
      data-active={active}
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
      data-active={active}
    >
      <span className={styles.text}>
        {text}
        <span className={styles.underline} />
      </span>
    </a>
  )

export default Item
