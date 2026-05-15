import React from "react";
import classnames from "classnames";

import genStyles from "../styles/page.module.scss";
import styles from "../styles/technologies.page.module.scss";

import { Link } from "gatsby";
import { FaArrowRight } from "react-icons/fa";

import babelUrl from "../assets/babel.svg";
import webpackUrl from "../assets/webpack.svg";
import nodeUrl from "../assets/node.svg";
import yarnUrl from "../assets/yarn.svg";
import npmUrl from "../assets/npm.svg";
import reactUrl from "../assets/react.svg";
import htmlUrl from "../assets/html5.svg";
import cssUrl from "../assets/css3.svg";

import SEO from "../components/seo";

const TechnologiesPage = () => (
  <>
    <SEO title="Technologies" />
    <div className={genStyles.title}>Technologies.</div>
    <div className={styles.techGrid}>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.movingWrapper}>
              <img src={babelUrl} alt="babel"></img>
              <img src={webpackUrl} alt="webpack"></img>
              <img src={nodeUrl} alt="node"></img>
              <img src={yarnUrl} alt="yarn"></img>
              <img src={npmUrl} alt="npm"></img>
            </div>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>TypeScript & JavaScript.</h3>
              <p>
                TypeScript is my primary language across all professional
                projects. I also work with Python and SQL. My daily tooling
                includes Vite, webpack, Nx, and Node.js. On the testing
                side, I use Vitest and React Testing Library, with prior
                experience in Jest.
              </p>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.spinningWrapper}>
              <img src={reactUrl} alt="react"></img>
              React
            </div>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>React & Next.js.</h3>
              <p>
                7+ years with React across web and mobile (React Native).
                I build with Next.js for SSR/SSG, and have deep experience
                with Redux, Zustand, TanStack Query, and Apollo GraphQL for
                state management. I've built micro-frontend architectures
                using Webpack Module Federation with independently deployed,
                shared-runtime modules.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.htmlCssWrapper}>
              <div>
                <div className={styles.htmlCssImg}>
                  <img src={htmlUrl} alt="html"></img>
                  <img src={cssUrl} alt="css"></img>
                </div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>Accessibility & Performance.</h3>
              <p>
                WCAG 2.1 AA compliance across projects using semantic HTML,
                ARIA patterns, and VoiceOver testing. Improved Core Web
                Vitals by analyzing bundles with visualizer tools to identify
                tree-shaking opportunities and lazy-loadable modules. I also
                work with Tailwind CSS and design tokens via Style Dictionary.
              </p>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <img
              className={styles.genWrapper}
              src={nodeUrl}
              alt="node"
            ></img>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>Backend & Infrastructure.</h3>
              <p>
                Server-side rendering, BFF architecture, and REST API
                development with Node.js and Express. OAuth 2.0 flows
                (PKCE and client credentials), PostgreSQL, MongoDB, and
                Docker. CI/CD with GitHub Actions and Azure DevOps —
                including a Jenkins-to-GitHub Actions migration that
                reduced build times from 58 seconds to 3 seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <img
              className={styles.genWrapper}
              src={reactUrl}
              alt="react native"
            ></img>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>Mobile.</h3>
              <p>
                React Native for cross-platform mobile development. Built a
                patient-facing mobile portal and extended an in-house
                analytics platform to mobile, providing first-time
                visibility into mobile user journeys.
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className={styles.linkWrapper}>
      <Link to="/experience/" className={genStyles.link}>
        <button className={genStyles.button}>
          Experience <FaArrowRight />
        </button>
      </Link>
    </div>
  </>
);

export default TechnologiesPage;
