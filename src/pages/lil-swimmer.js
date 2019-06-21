import React from "react"
import { Link } from "gatsby"
import LilSwimmer from "../components/LilSwimmer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Lil Swimmer" />
    <h1>LilSwimmer</h1>
    <Link to="/">Go back to the homepage</Link>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "640px auto",
        gridTemplateRows: "auto",
        gridColumnGap: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          gridColumnStart: 1,
          gridColumnEnd: 2,
          gridRowStart: 1,
          gridRowEnd: 2,
        }}
      >
        <LilSwimmer />
      </div>
      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
        }}
      >
        <ul>
          <li>Hold down [LEFT] key to veer left</li>
          <li>Hold down [RIGHT] key to veer right</li>
          <li>Hold down [LEFT] and [RIGHT] keys to speed up</li>
          <li>Do nothing to slow down</li>
          <li>Sorry, no touch screen support atm :(</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default SecondPage
