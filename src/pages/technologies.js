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
          <div>
            <div className={styles.techContent}>
              <h3>Javascript.</h3>
              <p>
                I have a vast amount of experience using Javascript, building
                websites, mobile apps, and games. I have worked with ECMA Script
                (ES) 2015 since I started college and transitioned to using ES6
                and ES7 daily, and have professional experience with modern
                tooling such as Node, Webpack, Babel, and the package managers
                npm and yarn. I have worked in TDD environments and have used
                the testing framework Jasmine.
              </p>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <div className={styles.spinningWrapper}>
              <img src={reactUrl} alt="react"></img>
              React
            </div>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>React.</h3>
              <p>
                I have 3 years experience with React, building websites,
                applications, and component libraries. I also have used a
                similar framework React Native to build mobile apps. I started
                using React professionally since last year, and have been
                exposed to using both Redux and a bit of Apollo which uses
                graphQL for client side state management. I also have
                professional experience with other packages that aid React
                development including React Router and Styled Components.
              </p>
            </div>
          </div>
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
          <div>
            <div className={styles.techContent}>
              <h3>HTML & CSS.</h3>
              <p>
                I have worked with HTML and CSS over 4 years starting a year
                just before college, producing responsive markup and styles with
                a focus on accessiblity and performance. I have come to learn
                more about web accessiblity standards in UI as well additions to
                markup to allow for more functionality to devices such as screen
                readers. I have a good amount of knowledge of the CSS spec and
                have worked with flexbox and grid. I have also used both
                pre-processors SASS and Less.
              </p>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.tech)}>
          <div>
            <img
              className={styles.genWrapper}
              src={gatsbyUrl}
              alt="gatsby"
            ></img>
          </div>
          <div>
            <div className={styles.techContent}>
              <h3>JAMstack.</h3>
              <p>
                I have some experience of creating headless front-ends, and
                working with the JAMstack. This website is built with Gatsby, a
                static site framework based on React.
              </p>
            </div>
          </div>
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
          <div>
            <div className={styles.techContent}>
              <h3>C# Net Core.</h3>
              <p>
                I have used C# Net Core extensively as a backend for my
                projects. I first learned about Net Core as a Full Stack
                Developer Trainee as Coding Dojo. I have mainly used Net Core in
                conjunction with SQL databases such as PostgreSQL and Azure SQL
                to create backend APIs for websites and mobile apps. I have
                experience using LINQ, Dapper, and the Entity Framework to query
                and model data. In addition, I have deployed full stack apps
                using the Azure cloud service with a custom build pipline using
                Azure devOps.
              </p>
            </div>
          </div>
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
