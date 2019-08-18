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

    this.state = {
      scrollPosition: 0,
      menuOpened: false,
    }
  }

  componentDidMount() {
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
    return (
      <>
        <div
          className={classnames(
            styles.navbar,
            this.state.menuOpened ? styles.shadowNone : null
          )}
          data-scroll={this.state.scrollPosition}
        >
          <div>
            <Item
              text="Menu"
              handler={() =>
                this.setState({ menuOpened: !this.state.menuOpened })
              }
              active={this.state.menuOpened}
            />
          </div>
          <Link to="/" className={styles.navbarLogo}>
            {this.state.menuOpened ? (
              <img src={logoUrl} alt="logo" />
            ) : (
              <img src={altLogoUrl} alt="logo" />
            )}
            KW
          </Link>
          <div className={styles.navbarContact}>
            <Item text="Contact" path="/contact/" />
          </div>
        </div>
        {this.state.menuOpened && <Menu />}
      </>
    )
  }
}

export default Navbar
