import React from "react";
import { Link } from "gatsby";
import {
  FaPencilRuler,
  FaRegPaperPlane,
  FaExternalLinkAlt,
} from "react-icons/fa";

import SEO from "../components/seo";

import styles from "../styles/index.page.module.scss";

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
        I’m a full-stack engineer with 5+ years of experience building
        healthcare platforms at Publicis Sapient. I’ve worked across web and
        mobile for clients including Humana/CenterWell, Optum, and Mayo
        Clinic — building patient portals, search systems handling millions
        of requests, and micro-frontend architectures.
        <br />
        <br />
        My core stack is TypeScript, React, and Next.js. I care about
        accessibility, performance, and shipping things that work well for
        real people.
        <br />
        <br />
        I’m always open to new opportunities and interesting projects. Feel
        free to get in touch if you’d like to collaborate or just want to
        say{" "}
        <a
          href="mailto:khw9899@alum.northwestern.edu?subject=hi"
          target="_blank"
        >
          hello <FaExternalLinkAlt />
          <span className="sr-only">Link leads to external page.</span>
        </a>
        .
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
);

export default IndexPage;
