/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import styles from "../styles/layout.module.scss"
import classnames from "classnames"

class Layout extends React.Component {
  constructor() {
    super(...arguments)

    this.state = {
      preLoad: true,
      timeOutId: 0,
    }
  }

  componentDidMount() {
    const id = setTimeout(() => this.setState({ preLoad: false }), 50)

    this.setState({ timeOutId: id })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeOutId)
  }

  render() {
    const { preLoad } = this.state
    const { children, location, data } = this.props

    console.log(location)

    const imageData = data.desktop.childImageSharp.fluid

    return (
      <>
        <Navbar location={location} />
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <main
          className={classnames(
            styles.content,
            preLoad ? styles.preLoad : null,
            preLoad && location.state && location.state.prevPath === "/" ? styles.blank : null,
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

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        desktop: file(relativePath: { eq: "main-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
