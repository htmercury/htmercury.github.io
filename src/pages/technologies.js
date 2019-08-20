import React from "react"
import classnames from "classnames"

import genStyles from "../styles/page.module.scss"
import styles from "../styles/technologies.page.module.scss"

// 1
import babelUrl from "../assets/babel.svg"
import webpackUrl from "../assets/webpack.svg"
import nodeUrl from "../assets/node.svg"
import yarnUrl from "../assets/yarn.svg"
import npmUrl from "../assets/npm.svg"
// 2
import reactUrl from "../assets/react.svg"
// 3
import htmlUrl from "../assets/html5.svg"
import cssUrl from "../assets/css3.svg"
// 4
import gatsbyUrl from "../assets/gatsby.svg"
// 5
import netcoreUrl from "../assets/NET_Core.svg"

import SEO from "../components/seo"

import { Location } from "@reach/router"

const TechnologiesPage = ({ location }) => (
  <>
    <SEO title="Technologies" />
    <div className={genStyles.title}>Technologies.</div>
    <div className={styles.techGrid}>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.movingWrapper}>
              <img src={babelUrl} alt="babel"></img>
              <img src={webpackUrl} alt="webpack"></img>
              <img src={nodeUrl} alt="node"></img>
              <img src={yarnUrl} alt="yarn"></img>
              <img src={npmUrl} alt="npm"></img>
            </div>
          </div>
          <div></div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.spinningWrapper}>
              <img src={reactUrl} alt="react"></img>
              React
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.htmlCssWrapper}>
              <div>
                <div className={styles.htmlCssImg}>
                  <img src={htmlUrl} alt="html"></img>
                  <img src={cssUrl} alt="css"></img>
                </div>
                <div>HTML</div>
                <div>CSS</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <img
              className={styles.genWrapper}
              src={gatsbyUrl}
              alt="gatsby"
            ></img>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <img
              className={styles.coreWrapper}
              src={netcoreUrl}
              alt="netcore"
            ></img>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  </>
)

export default props => (
  <Location>
    {locationProps => <TechnologiesPage {...locationProps} {...props} />}
  </Location>
)
