import React from "react";
import classnames from "classnames";
import { Link } from "gatsby";

import { FaArrowRight, FaGlobeAmericas, FaGithub } from "react-icons/fa";
import genStyles from "../styles/page.module.scss";
import styles from "../styles/portfolio.page.module.scss";

import SEO from "../components/seo";

const PortfolioPage = () => (
  <>
    <SEO title="Portfolio" />
    <div className={genStyles.title}>Work.</div>
    <div className={genStyles.subtitle}>Professional Projects</div>
    <div className={styles.portfolioGrid}>
      <div>
        <div className={classnames(genStyles.container, styles.portfolioItem, styles.accentHumana)}>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Humana / CenterWell — Guest Scheduling</span>
            </h3>
            <p>
              Building the frontend for Humana and CenterWell's guest scheduling
              experience in React and Next.js, enabling unauthenticated users to
              find providers and book appointments across a distributed
              onshore/offshore team.
            </p>
            <div className={styles.tags}>
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.portfolioItem, styles.accentOptum)}>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Optum — Site-Wide Search & Design System</span>
            </h3>
            <p>
              Built and maintained module-federated site-wide search
              micro-frontends for Optum, Optum Business, and
              LiveAndWorkWell — independently deployed with shared runtime
              dependencies across multiple teams, handling 2M search requests
              per month. Maintained design tokens with Style Dictionary and
              published packages via Artifactory.
            </p>
            <div className={styles.tags}>
              <span>React</span>
              <span>TypeScript</span>
              <span>Webpack Module Federation</span>
              <span>Style Dictionary</span>
              <span>Artifactory</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.portfolioItem, styles.accentMayo)}>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Mayo Clinic — Patient Portal</span>
            </h3>
            <p>
              Built authentication and patient-facing features for Mayo Clinic's
              web (Next.js) and mobile (React Native) portals using Azure B2C
              with OAuth 2.0 PKCE, securing access for ~1.3 million patients
              across all 50 states and 130 countries.
            </p>
            <div className={styles.tags}>
              <span>Next.js</span>
              <span>React Native</span>
              <span>TypeScript</span>
              <span>OAuth 2.0</span>
              <span>Azure B2C</span>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.portfolioItem, styles.accentCicd)}>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Optum — CI/CD Migration & Mobile Analytics</span>
            </h3>
            <p>
              Migrated Optum's UI CI/CD pipeline from Jenkins to GitHub Actions,
              reducing build times from 58 seconds to 3 seconds. Extended
              Optum's in-house analytics platform (Pixel) to mobile, providing
              first-time visibility into member journeys for call center agents
              and reducing resolution times.
            </p>
            <div className={styles.tags}>
              <span>GitHub Actions</span>
              <span>CI/CD</span>
              <span>Mobile Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={genStyles.subtitle} style={{ marginTop: "2rem" }}>Open Source</div>
    <div className={styles.portfolioGrid}>
      <div>
        <div className={classnames(genStyles.container, styles.portfolioItem, styles.accentC9)}>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>c9-blocks</span>
            </h3>
            <p>
              Led development of an open-source React/Redux plugin extending
              the WordPress Gutenberg editor. ~300 active installations, used
              by Riot Fest, Aloha Poke Co., and WowBao.
            </p>
            <div className={styles.tags}>
              <span>React</span>
              <span>Redux</span>
              <span>WordPress</span>
              <span>Open Source</span>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <a
                className={genStyles.link}
                href="https://wordpress.org/plugins/c9-blocks/"
                target="_blank"
              >
                <FaGlobeAmericas />{" "}
                <span className="sr-only">Link leads to external page.</span>
                WordPress Plugin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div className={styles.linkWrapper}>
      <Link to="/contact/" className={genStyles.link}>
        <button className={genStyles.button}>
          Contact <FaArrowRight />
        </button>
      </Link>
    </div>
  </>
);

export default PortfolioPage;
