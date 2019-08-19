import React from "react"
import styles from "../styles/footer.module.scss"
import { FaGithubAlt, FaLinkedinIn, FaMailBulk } from "react-icons/fa"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.linkWrapper}>
      <a href="https://github.com/htmercury" target="_blank">
        <FaGithubAlt />
      </a>
      <a href="https://www.linkedin.com/in/htmercury/" target="_blank">
        <FaLinkedinIn />
      </a>
      <a href="mailto:kawong2020@u.northwestern.edu" target="_blank">
        <FaMailBulk />
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}, Site built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> — a React based web
      framework
    </div>
  </footer>
)

export default Footer
