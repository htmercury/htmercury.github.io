import React from "react";
import classnames from "classnames";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

import { FaArrowRight, FaGlobeAmericas, FaGithub } from "react-icons/fa";
import genStyles from "../styles/page.module.scss";
import styles from "../styles/portfolio.page.module.scss";

import SEO from "../components/seo";

const PortfolioPage = ({ data }) => (
  <>
    <SEO title="Portfolio" />
    <div className={genStyles.title}>Projects.</div>
    <div className={genStyles.subtitle}>Selected Projects</div>
    <div className={styles.portfolioGrid}>
      <div>
        <div className={classnames(genStyles.container, styles.portfolioItem)}>
          <div className={styles.portfolioImage}>
            <Img fluid={data.projectOne.childImageSharp.fluid} />
            <div className={styles.time}>2019</div>
            <div className={styles.refs}>
              <div>
                <a
                  className={genStyles.link}
                  href="https://github.com/htmercury/plane-a-picnic"
                  target="_blank"
                >
                  <FaGithub />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
              <div>
                <a
                  className={genStyles.link}
                  href="https://plane-a-picnic.azurewebsites.net/"
                  target="_blank"
                >
                  <FaGlobeAmericas />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
            </div>
            <div className={styles.type}>web</div>
          </div>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Plane a Picnic</span>
            </h3>
            <p>
              Plane-a-picnic utilizes the open sourced data available on
              <a href="https://ourairports.com/" target="_blank">
                {" "}
                OurAirports
                <span className="sr-only">Link leads to external page.</span>
              </a>{" "}
              to reference runways located worldwide given an airport. A user is
              able to select an airport and given an airport, the app retrieves
              a five day forecast for where the airport is located. Using the
              forecast information, primarily the opposing wind angle, the app
              predicts and returns the most expected runway to be used each day.
              With the predicted runway, the user is able to plan on those days
              better picnic spots.
            </p>
            <div className={styles.tags}>
              <span>Aurelia</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Net Core</span>
              <span>Entity Framework</span>
              <span>AzureSQL</span>
              <span>Powershell</span>
            </div>
          </div>
        </div>
        <div className={classnames(genStyles.container, styles.portfolioItem)}>
          <div className={styles.portfolioImage}>
            <Img fluid={data.projectTwo.childImageSharp.fluid} />
            <div className={styles.time}>2018</div>
            <div className={styles.refs}>
              <div>
                <a
                  className={genStyles.link}
                  href="https://github.com/htmercury/coin_match_api"
                  target="_blank"
                >
                  <FaGithub />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
              <div>
                <a
                  className={genStyles.link}
                  href="https://htmercury.github.io/coin_match_api/"
                  target="_blank"
                >
                  <FaGlobeAmericas />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
            </div>
            <div className={styles.type}>api</div>
          </div>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Coin Match</span>
            </h3>
            <p>
              Coin Match api is engineered by aggregating cryptocurrency
              exchanges API to compare prices for various cryptocurrencies
              across several platforms for the purposes of price analysis,
              research, and logging. Coin match can also be used to compare one
              exchange to another, and display whatever currencies are available
              on those exchanges.
            </p>
            <div className={styles.tags}>
              <span>Django</span>
              <span>Django REST Framework</span>
              <span>Python</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={classnames(genStyles.container, styles.portfolioItem)}>
          <div className={styles.portfolioImage}>
            <Img fluid={data.projectThree.childImageSharp.fluid} />
            <div className={styles.time}>2017</div>
            <div className={styles.refs}>
              <div>
                <a
                  className={genStyles.link}
                  href="https://github.com/htmercury/OKrammus"
                  target="_blank"
                >
                  <FaGithub />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
              <div>
                <a
                  className={genStyles.link}
                  href="https://codepen.io/htmercury/full/ypazEp"
                  target="_blank"
                >
                  <FaGlobeAmericas />
                  <span className="sr-only">Link leads to external page.</span>
                </a>
              </div>
            </div>
            <div className={styles.type}>Web</div>
          </div>
          <div className={styles.portfolioDesc}>
            <h3 className={genStyles.subtitle}>
              <span>Random Quote Machine</span>
            </h3>
            <p>
              Random Quote Machine returns a random quote from a League of
              Legends (LoL) champion on button press and allows for resharing on
              Twitter or Tumblr. The backend is a custom Node Express API that
              stores over 140+ champions comprising over multiple quotes in
              addition to a splash image. Quote transcriptions from{" "}
              <a
                href="https://leagueoflegends.wikia.com/wiki/League_of_Legends_Wiki"
                target="_blank"
              >
                the unofficial League of Legends Wiki
                <span className="sr-only">Link leads to external page.</span>
              </a>
              , licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/3.0/"
                target="_blank"
              >
                CC-BY-SA
                <span className="sr-only">Link leads to external page.</span>
              </a>
              . Splash art from the{" "}
              <a
                href="https://www.riotgames.com/asset-kit/league-of-legends"
                target="_blank"
              >
                official League of Legends asset kit
              </a>
              , owned by Riot Games and used following{" "}
              <a
                href="https://www.riotgames.com/legal-jibber-jabber"
                target="_blank"
              >
                Riot Games' guidelines
                <span className="sr-only">Link leads to external page.</span>
              </a>
              .
            </p>
            <div className={styles.tags}>
              <span>Node</span>
              <span>Express</span>
              <span>JavaScript</span>
              <span>jQuery</span>
              <span>Bootstrap</span>
              <span>CSS</span>
              <span>Mongoose</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div className={styles.linkWrapper}>
      <Link to="/contact/" className={genStyles.link}>
        <button className={genStyles.button}>
          Contact <FaArrowRight />
        </button>
      </Link>
    </div>
  </>
);

export default PortfolioPage;

export const query = graphql`
  query {
    projectOne: file(relativePath: { eq: "project-1.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectTwo: file(relativePath: { eq: "project-2.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projectThree: file(relativePath: { eq: "project-3.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
