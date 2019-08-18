import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Location } from "@reach/router"

const SecondPage = ({ location }) => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default props => (
  <Location>
    {locationProps => <SecondPage {...locationProps} {...props} />}
  </Location>
)
