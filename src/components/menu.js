import React from "react"
import styles from "../styles/menu.module.scss"
import classnames from "classnames"
import Item from "./item"

const Menu = ({ hide, location }) => (
  <menu className={classnames(styles.modal, hide ? styles.modalHide : null)}>
    <nav>
      <Item location={location} text="Home" path="/" />
      <Item location={location} text="Technologies" path="/technologies/" />
      <Item location={location} text="Experience" path="/experience/" />
      <Item location={location} text="Portfolio" path="/portfolio/" />
      <Item location={location} text="Notes" path="/notes/" />
    </nav>
  </menu>
)

export default Menu
