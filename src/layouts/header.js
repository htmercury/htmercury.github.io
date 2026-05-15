import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import Item from "./item";

import styles from "../styles/header.module.scss";
import logoUrl from "../assets/cubicle.svg";
import { FaGithubAlt, FaLinkedinIn, FaMailBulk } from "react-icons/fa";

class Header extends React.Component {
  render() {
    const { location, flicker } = this.props;

    const routes = [
      { text: "Home", path: "/" },
      { text: "Technologies", path: "/technologies/" },
      { text: "Experience", path: "/experience/" },
      { text: "Portfolio", path: "/portfolio/" },
      { text: "Contact", path: "/contact/" },
    ];

    return (
      <header className={styles.sideBar}>
        <div className={styles.logoWrapper}>
          <Link
            to="/"
            className={styles.headerLogo}
            state={{ prevPath: location.pathname }}
          >
            <img src={logoUrl} alt="logo" />
            KW
          </Link>
          <p>Software Engineer</p>
          <p>Frontend / Full-Stack</p>
          <p>Chicago, IL</p>
        </div>
        <div className={styles.navWrapper}>
          <nav>
            {routes.map(r => (
              <Item
                location={location}
                text={r.text}
                path={r.path}
                active={location.pathname === r.path}
                key={r.path}
                handler={
                  r.path !== "/" &&
                  location.state &&
                  location.state.prevPath !== location.pathname
                    ? flicker
                    : null
                }
              />
            ))}
          </nav>
        </div>
        <div className={styles.headerContact}>
          <p>
            For business enquiries or casual chatter—do drop me a line at{" "}
            <a href="mailto:khw9899@alum.northwestern.edu" target="_blank">
              khw9899@alum.northwestern.edu
              <span className="sr-only">Link leads to external page.</span>
            </a>
            .
          </p>
          <div className={styles.linkWrapper}>
            <a href="https://github.com/htmercury" target="_blank">
              <FaGithubAlt />
              <span className="sr-only">Link leads to external page.</span>
            </a>
            <a href="https://www.linkedin.com/in/khw9899/" target="_blank">
              <FaLinkedinIn />
              <span className="sr-only">Link leads to external page.</span>
            </a>
            <a href="mailto:khw9899@alum.northwestern.edu" target="_blank">
              <FaMailBulk />
              <span className="sr-only">Link leads to external page.</span>
            </a>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
