import React from "react"
import classnames from "classnames"

import genStyles from "../styles/page.module.scss"
import styles from "../styles/experience.pages.module.scss"

import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"
import { Link } from "gatsby"

import { Location } from "@reach/router"

const ExperiencePage = ({ location }) => (
  <>
    <SEO title="Experience" />
    <div className={genStyles.title}>Experience.</div>
    <div className={styles.experienceGrid}>
      <div className={classnames(genStyles.container, styles.profileContainer)}>
        <h3 className={styles.title}>Overview.</h3>
        <div className={styles.profile}>
          <ProfileImage />
        </div>
        <div className={styles.profileInfo}>
          <p>Name</p>
          <p>Ka Wong</p>
        </div>
        <div className={styles.profileInfo}>
          <p>Age</p>
          <p>21</p>
        </div>
        <div className={styles.profileInfo}>
          <p>Residence</p>
          <p>Chicago, Illinois</p>
        </div>
        <div className={styles.profileInfo}>
          <p>Hobbies</p>
          <div>
            <p>Reading books</p>
            <p>Eating spicy stuff</p>
          </div>
        </div>
      </div>
      <div className={classnames(genStyles.container, styles.careerContainer)}>
        <h3 className={styles.title}>Career.</h3>
        <div className={styles.career}>
          <h3>
            title
            <h5>time</h5>
          </h3>
          <p>description</p>
          <hr></hr>
          <h3>
            title
            <h5>time</h5>
          </h3>
          <p>description</p>
          <div>
            <span>test</span>
          </div>
          <h3>
            title
            <h5>time</h5>
          </h3>
          <p>description</p>
        </div>
        <Link
          to="/portfolio"
          className={classnames(genStyles.link, styles.seeWork)}
        >
          Click here to see my work!
        </Link>
      </div>
    </div>
  </>
)

export default props => (
  <Location>
    {locationProps => <ExperiencePage {...locationProps} {...props} />}
  </Location>
)
