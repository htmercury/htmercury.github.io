import React from "react"
import styles from "../styles/menu.module.scss"
import classnames from "classnames"
import Item from "./item"

const Menu = ({ hide }) => (
  <menu className={classnames(styles.modal, hide ? styles.modalHide : null)}>
    <nav>
      <Item text="Home" path="/" />
      <Item text="Technologies" path="/technologies/" />
      <Item text="Experience" path="/experience/" />
      <Item text="Portfolio" path="/portfolio/" />
      <Item text="Notes" path="/notes/" />
    </nav>
  </menu>
)

export default Menu
