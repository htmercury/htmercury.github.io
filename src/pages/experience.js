import React from "react";
import classnames from "classnames";

import genStyles from "../styles/page.module.scss";
import styles from "../styles/experience.pages.module.scss";

import SEO from "../components/seo";
import ProfileImage from "../components/profile-image";
import { Link } from "gatsby";

const ExperiencePage = () => (
  <>
    <SEO title="Experience" />
    <div className={genStyles.title}>Experience.</div>
    <div className={styles.experienceGrid}>
      <div>
        <div
          className={classnames(genStyles.container, styles.profileContainer)}
        >
          <h3 className={styles.title}>Overview.</h3>
          <div className={styles.profile}>
            <ProfileImage />
          </div>
          <div className={styles.profileInfo}>
            <p>Name</p>
            <p>Ka Wong</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Age</p>
            <p>21</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Residence</p>
            <p>Chicago, Illinois</p>
          </div>
          <div className={styles.profileInfo}>
            <p>Hobbies</p>
            <div>
              <p>Reading books</p>
              <p>Eating spicy stuff</p>
            </div>
          </div>
          <div className={styles.profileInfo}>
            <p>Thoughts</p>
            <p>
              Code always does what you tell it to do, but you don't always tell
              it what you want it to do.
            </p>
          </div>
        </div>
      </div>
      <div className={classnames(genStyles.container, styles.careerContainer)}>
        <h3 className={styles.title}>Career.</h3>
        <div className={styles.career}>
          <h3>
            React Developer Intern
            <span>(2019.6 - Present) @ COVERT NINE</span>
          </h3>
          <p>
            Responsible for maintaining and development of new features to an
            open sourced components plugin using React.js + Redux that extends
            the functionality of the current new editor of WordPress, Gutenberg
            (2018), which is still in its development stages.
          </p>
          <hr></hr>
          <h3>
            Full Stack Developer Trainee
            <span>(2018.6 - 2018.9) @ Coding Dojo</span>
          </h3>
          <p>
            Received on-hands training for using various technologies including:
            Django, Flask, Node using Express, C# Net Core, mySQL, MongoDB, and
            Angular to create full stack applications. Gained valuable
            experience in web architectural patterns especially about REST, MVC,
            and also familiarity working with HTTP methods. In addition,
            obtained exposure deploying web applications using AWS or Azure.
          </p>
          <p>
            Also, in private, he learns React, Redux, GraphQL, and other
            technologies.
          </p>
          <div>
            <span>(Various twists and turns)</span>
          </div>
          <h3>
            High school student
            <span>(2012)</span>
          </h3>
          <p>
            For some reason, he chances upon Minecraft mod development and wakes
            up to the fun of programming. I am determined to make this a
            lifelong job.
          </p>
        </div>
        <Link
          to="/portfolio/"
          className={classnames(genStyles.link, styles.seeWork)}
        >
          Click here to see my work!
        </Link>
      </div>
    </div>
  </>
);

export default ExperiencePage;
