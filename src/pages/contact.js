import React from "react"
import SEO from "../components/seo"
import classnames from "classnames"
import genStyles from "../styles/page.module.scss"
import styles from "../styles/contact.page.module.scss"
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa"

import { Location } from "@reach/router"

const ContactPage = ({ location }) => (
  <>
    <SEO title="Contact" />
    <div className={styles.contactContainer}>
      <div className={styles.contactOverlay}></div>
      <div className={genStyles.title}>Ways to get in touch.</div>
        <div className={classnames(genStyles.container, styles.contactWrapper)}>
          <div>
            <a href="mailto:kawong2020@u.northwestern.edu" target="_blank">
              <div>
                <FaMailBulk />
                kawong2020@u.northwestern.edu
              </div>
            </a>
            <a href="https://www.linkedin.com/in/htmercury/" target="_blank">
              <div>
                <FaLinkedinIn />
                linkedin.com/in/htmercury
              </div>
            </a>
            <a href="https://github.com/htmercury" target="_blank">
              <div>
                <FaGithubAlt />
                github.com/htmercury
              </div>
            </a>
            <a
              href="https://www.google.com/maps/place/Chicago,IL"
              target="_blank"
            >
              <div>
                <FaMapMarkerAlt />
                Chicago, IL, USA
              </div>
            </a>
          </div>
        </div>
    </div>
  </>
)

export default props => (
  <Location>
    {locationProps => <ContactPage {...locationProps} {...props} />}
  </Location>
)
