import React from "react"
import { Link } from "gatsby"
import { IoIosDocument, IoIosPaperPlane } from "react-icons/io"

import SEO from "../components/seo"

import styles from "../styles/index.page.module.scss"

import { Location } from "@reach/router"

const IndexPage = ({ location }) => (
  <>
    <SEO title="Home" />
    <div className={styles.title}>Hey. I'm Ka.</div>
    <div className={styles.subtitle}>
      A full-stack engineer based in Chicago, Illinois.
    </div>
    <div className={styles.content}>
      <span>
        Like my ancestors, I make interactive things on the internet. I am a
        senior CS student at Northwestern and am currently employed by COVERT
        NINE as a React Developer Intern. Before COVERT NINE, I was a Full Stack
        Developer Trainee at Coding Dojo. Before Coding Dojo, I volunteered at
        Northwestern's Garage start-up scene. Before that, I was a baby.
        <br />
        <br />
        I like to design things, and then I like to build those things.
        <br />
        <br />I occasionally take on freelance projects. I'm always looking for
        new initiatives. Feel free to get in touch if you have an interesting
        project that you want to collaborate on. Or if you just want to
        say&nbsp;
        <a href="mailto: kawong2020@u.northwestern.edu">hello</a>, that’s cool
        too.
      </span>
    </div>
    <div className={styles.exploreContent}>
      <Link to="/portfolio/">
        <button>
          <IoIosDocument />
          See my work
        </button>
      </Link>
      <Link to="/contact/">
        <button>
          <IoIosPaperPlane />
          Contact me
        </button>
      </Link>
    </div>
  </>
)

export default props => (
  <Location>
    {locationProps => <IndexPage {...locationProps} {...props} />}
  </Location>
)
