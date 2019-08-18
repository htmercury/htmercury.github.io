import React from "react"
import classnames from "classnames"
import styles from "../styles/navbar.module.scss"

import Menu from "./menu"

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
          <p
            onClick={() =>
              this.setState({ menuOpened: !this.state.menuOpened })
            }
          >
            test
          </p>
        </div>
        {this.state.menuOpened && <Menu />}
      </>
    )
  }
}

export default Navbar
