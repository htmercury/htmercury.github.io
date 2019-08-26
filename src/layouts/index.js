/**
 * Layout component that queries for data
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { ContextProviderComponent } from "./context";

import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import styles from "../styles/layout.module.scss";
import classnames from "classnames";
import Transition from "../components/transition";

class Layout extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      preLoad: false,
      timeOutId: 0,
    };

    this.flicker = this.flicker.bind(this);
  }

  flicker() {
    this.setState({ preLoad: true });
    setTimeout(() => this.setState({ preLoad: false }), 350);
  }

  render() {
    const { preLoad } = this.state;
    const { children, location } = this.props;

    // const imageData = data.desktop.childImageSharp.fluid

    return (
      <>
        <ContextProviderComponent>
          <Navbar location={location} />
          <Header location={location} flicker={this.flicker} />
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
          <Transition location={location}>{children}</Transition>
        </main>
        <div className={styles.wrapper}></div>
        <Footer />
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
