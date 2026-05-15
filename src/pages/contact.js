import React from "react";
import SEO from "../components/seo";
import classnames from "classnames";
import genStyles from "../styles/page.module.scss";
import styles from "../styles/contact.page.module.scss";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <div className={styles.contactContainer}>
      <div className={styles.contactOverlay}></div>
      <div className={genStyles.title}>Ways to get in touch.</div>
      <div className={classnames(genStyles.container, styles.contactWrapper)}>
        <div>
          <a href="mailto:khw9899@alum.northwestern.edu" target="_blank">
            <div>
              <FaMailBulk />
              khw9899@alum.northwestern.edu
              <span className="sr-only">Link leads to external page.</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/khw9899/" target="_blank">
            <div>
              <FaLinkedinIn />
              linkedin.com/in/khw9899
              <span className="sr-only">Link leads to external page.</span>
            </div>
          </a>
          <a href="https://github.com/htmercury" target="_blank">
            <div>
              <FaGithubAlt />
              github.com/htmercury
              <span className="sr-only">Link leads to external page.</span>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/place/Chicago,IL"
            target="_blank"
          >
            <div>
              <FaMapMarkerAlt />
              Chicago, IL, USA
              <span className="sr-only">Link leads to external page.</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </>
);

export default ContactPage;
