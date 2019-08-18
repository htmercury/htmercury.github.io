import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Item from "./item"
import classnames from "classnames"

import styles from "../styles/header.module.scss"
import logoUrl from "../assets/cubicle.svg"

class Header extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      preLoad: true,
      postLoad: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ preLoad: false })
    }, 50)
  }

  render() {
    const { siteTitle, location } = this.props
    const { preLoad, postLoad } = this.state

    const routes = [
      { text: "Home", path: "/" },
      { text: "Technolgies", path: "/technologies/" },
      { text: "Experience", path: "/experience/" },
      { text: "Portfolio", path: "/portfolio/" },
      { text: "Notes", path: "/notes/" },
      { text: "Contact", path: "/contact/" },
    ]

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
          <p>Programmer</p>
          <p>Software Engineer</p>
          <p>Full-Stack Developer</p>
        </div>
        <div className={styles.navWrapper}>
          <nav
            className={classnames(
              preLoad ? styles.preLoad : null,
              postLoad ? styles.postLoad : null
            )}
          >
            {routes.map(r => (
              <Item
                location={location}
                text={r.text}
                path={r.path}
                active={location.pathname === r.path}
                key={r.path}
              />
            ))}
          </nav>
        </div>
        <div className={styles.headerContact}>
          <p>
            For business enquiries or casual chatter—do drop me a line at{" "}
            <a href="mailto: kawong2020@u.northwestern.edu">kawong2020@u.northwestern.edu</a>.
          </p>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
