import React from "react"
import styles from "../styles/menu.module.scss"
import classnames from "classnames"

const Menu = ({ hide }) => (
  <menu className={classnames(styles.modal, hide ? styles.modalHide : null)}>
    <p>stuff</p>
  </menu>
)

export default Menu
