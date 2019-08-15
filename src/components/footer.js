import React from "react"
import styles from "../styles/footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

export default Footer
