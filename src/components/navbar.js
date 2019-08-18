import React from "react"
import classnames from "classnames"
import styles from "../styles/navbar.module.scss"
import { Link } from "gatsby"

import Menu from "./menu"
import Item from "./item"

import logoUrl from "../assets/cubicle.svg"
import altLogoUrl from "../assets/cubicle-light.svg"

class Navbar extends React.Component {
  constructor() {
    super(...arguments)

    const { location } = this.props

    this.state = {
      scrollPosition: 0,
      menuOpened: false,
      preload: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ preload: false })
    }, 50)

    window.addEventListener("scroll", this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll)
  }

  listenToScroll = () => {
    this.setState({
      scrollPosition: window.scrollY,
    })
  }

  render() {
    const { location } = this.props
    const { scrollPosition, menuOpened, preload } = this.state

    const isContact = location.pathname === "/contact/"

    return (
      <>
        <div
          className={classnames(
            styles.navbar,
            menuOpened ? styles.shadowNone : null
          )}
          data-scroll={scrollPosition}
        >
          <div>
            <Item
              location={location}
              text="Menu"
              handler={() => this.setState({ menuOpened: !menuOpened })}
              active={menuOpened}
            />
          </div>
          <Link
            to="/"
            className={styles.navbarLogo}
            state={{ prevPath: location.pathname }}
          >
            {menuOpened ? (
              <img src={logoUrl} alt="logo" />
            ) : (
              <img src={altLogoUrl} alt="logo" />
            )}
            KW
          </Link>
          <div
            className={classnames(
              styles.navbarContact,
              preload ? styles.preLoad : null
            )}
          >
            <Item
              location={location}
              text="Contact"
              path="/contact/"
              active={isContact}
            />
          </div>
        </div>
        {menuOpened && <Menu location={location} />}
      </>
    )
  }
}

export default Navbar
