import React from "react"
import classnames from "classnames"

import genStyles from "../styles/page.module.scss"
import styles from "../styles/experience.pages.module.scss"

import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"

import { Location } from "@reach/router"

const ExperiencePage = ({ location }) => (
  <>
    <SEO title="Experience" />
    <div className={genStyles.title}>Experience.</div>
    <div className={styles.experienceGrid}>
      <div className={classnames(genStyles.container, styles.profileContainer)}>
        <h3 className={styles.title}>Overview</h3>
        <div className={styles.profile}>
          <ProfileImage />
        </div>
      </div>
      <div className={classnames(genStyles.container, styles.careerContainer)}>
        <h3 className={styles.title}>Career</h3>
        <div className={styles.career}>

        </div>
      </div>
    </div>
  </>
)

export default props => (
  <Location>
    {locationProps => <ExperiencePage {...locationProps} {...props} />}
  </Location>
)
