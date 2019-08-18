import React from "react"

import SEO from "../components/seo"

import { Location } from "@reach/router"

const NotFoundPage = ({location}) => (
  <>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
)

export default props => (
  <Location>
    {locationProps => <NotFoundPage {...locationProps} {...props} />}
  </Location>
);
