import React from "react"
import styles from "../styles/footer.module.scss"
import { FaGithubAlt, FaLinkedinIn, FaMailBulk } from "react-icons/fa"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.linkWrapper}>
      <a href="https://github.com/htmercury" target="_blank">
        <FaGithubAlt />
        <span className="sr-only">Link leads to external page.</span>
      </a>
      <a href="https://www.linkedin.com/in/htmercury/" target="_blank">
        <FaLinkedinIn />
        <span className="sr-only">Link leads to external page.</span>
      </a>
      <a href="mailto:kawong2020@u.northwestern.edu" target="_blank">
        <FaMailBulk />
        <span className="sr-only">Link leads to external page.</span>
      </a>
    </div>
    <div>
      © {new Date().getFullYear()}, Site built with
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank">
        Gatsby
      </a>{" "}
      — a React based web framework
      <span className="sr-only">Link leads to external page.</span>
    </div>
  </footer>
)

export default Footer
