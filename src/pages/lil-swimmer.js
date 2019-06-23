import React from "react"
import { Link } from "gatsby"
import LilSwimmer from "../components/LilSwimmer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import $s from "./lil-swimmer.module.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Lil Swimmer" />
    <h1>LilSwimmer</h1>
    <div className={$s.gameGrid}>
      <div className={$s.game}>
        <LilSwimmer />
      </div>
      <div className={$s.controls}>
        <ul>
          <li>Hold down [LEFT] or [A] key to veer left</li>
          <li>Hold down [RIGHT] or [D] key to veer right</li>
          <li>Hold down [LEFT/A] and [RIGHT/D] keys to speed up</li>
          <li>Do nothing to slow down</li>
          <li>Sorry, touch screen not support atm :(</li>
        </ul>
      </div>
    </div>
    <div style={{ marginBottom: "1rem" }}>
      <p>For background on this doodle, see related blog posts</p>
      <ul>
        <li>
          {/* TODO: generate blog links using gatsby gql data (`allSitePage`?) */}
          <Link to="/blog/2019-06-20-lil-swimmer/">
            2019-06-20: Revisiting an old Doodle
          </Link>
        </li>
      </ul>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
