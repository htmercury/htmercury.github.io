import React from "react"

import SEO from "../components/seo"
import genStyles from "../styles/page.module.scss"

import { Location } from "@reach/router"

const NotesPage = ({ location }) => (
  <>
    <SEO title="Notes" />
    <div className={genStyles.title}>Notebook.</div>
    <div className={genStyles.subtitle}>A collection of useful resources.</div>
    
    <ol>
      <li>TBD</li>
      <li>TBD</li>
      <li>TBD</li>
    </ol>
  </>
)

export default props => (
  <Location>
    {locationProps => <NotesPage {...locationProps} {...props} />}
  </Location>
)
