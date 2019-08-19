import React from "react"
import { Link } from "gatsby"

import genStyles from "../styles/page.module.scss"

import Image from "../components/image"
import SEO from "../components/seo"

import { Location } from "@reach/router"

const PortfolioPage = ({ location }) => (
  <>
    <SEO title="Portfolio" />
    <div className={genStyles.title}>Projects.</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mollis
      nisi. Ut eget odio at metus mollis convallis. Nam lacinia iaculis tortor
      nec scelerisque. Etiam in est vel erat luctus ultrices non et arcu. In
      bibendum dui vel ex fermentum mollis. In pulvinar, leo volutpat placerat
      euismod, urna eros vulputate massa, et egestas sem velit quis arcu.
      Praesent erat enim, pellentesque et enim et, rutrum lobortis nulla. Nulla
      facilisi. Fusce vel libero tristique elit luctus molestie. Vestibulum
      iaculis libero eu metus fermentum bibendum. Nulla tincidunt mi et
      malesuada luctus. Donec molestie ut ipsum ac mollis. Vivamus a semper
      elit, nec fringilla turpis. Proin dignissim sapien vel dui varius gravida.
      Suspendisse aliquam faucibus ex egestas pharetra. Aenean non sodales mi.
      Donec porta leo quis egestas hendrerit. Mauris ornare, odio vitae
      facilisis pulvinar, metus enim fringilla elit, nec sagittis enim risus eu
      mauris. Sed auctor orci hendrerit nisl dictum viverra. Praesent rhoncus,
      libero vitae scelerisque facilisis, eros lorem faucibus tortor, sed
      lacinia sapien purus elementum erat. Vestibulum et maximus diam, sit amet
      aliquet felis. Donec ultricies, diam et interdum ullamcorper, tortor neque
      sollicitudin nisl, id condimentum odio eros a nunc.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default props => (
  <Location>
    {locationProps => <PortfolioPage {...locationProps} {...props} />}
  </Location>
)
