import React from "react"
import { Link } from "gatsby"
import {
  FaPencilRuler,
  FaRegPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa"

import SEO from "../components/seo"

import styles from "../styles/index.page.module.scss"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className={styles.titleWrapper}>
      <div className={styles.title}>Hey. I'm Ka.</div>
      <div className={styles.subtitle}>
        A full-stack engineer based in Chicago, Illinois.
      </div>
    </div>
    <div className={styles.content}>
      <h1>About</h1>
      <span>
        Like my ancestors, I make interactive things on the internet. I attend
        Northwestern as a senior CS student and am currently employed by COVERT
        NINE as a React Developer Intern. Before COVERT NINE, I was a Full Stack
        Developer Trainee at Coding Dojo. Before Coding Dojo, I volunteered at
        Northwestern's Garage start-up scene. Before that, I was a baby.
        <br />
        <br />
        I like to design things, and then I like to build those things.
        <br />
        <br />I occasionally take on freelance projects. I'm always looking for
        new initiatives. Feel free to get in touch if you have an interesting
        project that you want to collaborate on. Or if you just want to say{" "}
        <a
          href="mailto:kawong2020@u.northwestern.edu?subject=hi"
          target="_blank"
        >
          hello <FaExternalLinkAlt />
          <span className="sr-only">Link leads to external page.</span>
        </a>
        , that’s cool too.
      </span>
      <div className={styles.exploreContent}>
        <div>
          <Link to="/technologies/">
            <button>
              <FaPencilRuler />
              See what I know
            </button>
          </Link>
        </div>
        <div>
          <Link to="/contact/">
            <button>
              <FaRegPaperPlane />
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default IndexPage
