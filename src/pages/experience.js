import React from "react"
import classnames from "classnames"

import genStyles from "../styles/page.module.scss"
import styles from "../styles/experience.pages.module.scss"

import SEO from "../components/seo"
import ProfileImage from "../components/profile-image"
import { Link } from "gatsby"

const ExperiencePage = () => (
  <>
    <SEO title="Experience" />
    <div className={genStyles.title}>Experience.</div>
    <div className={styles.experienceGrid}>
      <div>
        <div
          className={classnames(genStyles.container, styles.profileContainer)}
        >
          <h3 className={styles.title}>Overview.</h3>
          <div className={styles.profile}>
            <ProfileImage />
          </div>
          <div className={styles.profileInfo}>
            <p>Name</p>
            <p>Ka Wong</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Location</p>
            <p>Chicago, Illinois</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Education</p>
            <p>B.S. Computer Science, Northwestern University</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Focus</p>
            <p>Frontend &amp; Full-Stack Engineering</p>
          </div>
        </div>
      </div>
      <div className={classnames(genStyles.container, styles.careerContainer)}>
        <h3 className={styles.title}>Career.</h3>
        <div className={styles.career}>
          <h3>
            Associate Software Engineer (Junior &rarr; L1 &rarr; L2)
            <span>(Oct 2020 - Present) @ Publicis Sapient</span>
          </h3>
          <p>
            Building healthcare platforms at scale across web and mobile for
            Humana/CenterWell, Optum, and Mayo Clinic.
          </p>
          <p>
            Key work includes building Humana and CenterWell's guest scheduling
            experience, module-federated search micro-frontends handling 2M
            requests/month, a patient portal securing access for ~1.3M patients
            across 50 states and 130 countries, and a CI/CD migration that cut
            build times from 58 seconds to 3 seconds.
          </p>
          <hr></hr>
          <h3>
            React Developer (Intern &rarr; Full Time)
            <span>(Jun 2019 - Oct 2020) @ COVERT NINE</span>
          </h3>
          <p>
            Led development of c9-blocks, an open-source React/Redux plugin
            extending WordPress's Gutenberg editor. Grew the plugin to ~300
            active installations, adopted by brands including Riot Fest,
            Aloha Poke Co., and WowBao.
          </p>
          <hr></hr>
          <h3>
            B.S. in Computer Science
            <span>(Sep 2016 - Jun 2020) @ Northwestern University</span>
          </h3>
          <p>
            Graduated with a 3.75 cumulative GPA from Northwestern University
            in Evanston, Illinois.
          </p>
        </div>
        <Link
          to="/portfolio/"
          className={classnames(genStyles.link, styles.seeWork)}
        >
          See my work
        </Link>
      </div>
    </div>
  </>
)

export default ExperiencePage
