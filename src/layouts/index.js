/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { ContextProviderComponent } from "./context"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import styles from "../styles/layout.module.scss"
import classnames from "classnames"

class Layout extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      preLoad: false,
      timeOutId: 0,
    }

    this.flicker = this.flicker.bind(this)
  }

  flicker() {
    this.setState({ preLoad: true })
    setTimeout(() => this.setState({ preLoad: false }), 500)
  }

  render() {
    const { preLoad } = this.state
    const { children, location, data } = this.props

    // const imageData = data.desktop.childImageSharp.fluid

    return (
      <>
        <ContextProviderComponent>
          <Navbar location={location} />
          <Header
            location={location}
            flicker={this.flicker}
          />
        </ContextProviderComponent>
        <main
          className={classnames(
            styles.content,
            preLoad && location.state && location.state.prevPath !== "/"
              ? styles.preLoad
              : null,
            location.pathname === "/" ? styles.contentHome : null
          )}
        >
          {children}
        </main>
        <div className={styles.wrapper}></div>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout

// export default props => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//         desktop: file(relativePath: { eq: "main-bg.jpg" }) {
//           childImageSharp {
//             fluid(quality: 100, maxWidth: 4160) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => <Layout data={data} {...props} />}
//   />
// )
