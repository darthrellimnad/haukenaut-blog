import React from "react"
import { Link } from "gatsby"
import HaukenautDogImage from "../components/HaukenautDogImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Haukenaut Blog Home" />
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "256px auto",
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
        <HaukenautDogImage />
      </div>
      <div
        style={{
          gridColumnStart: 2,
          gridColumnEnd: 3,
          gridRowStart: 1,
          gridRowEnd: 2,
        }}
      >
        <h1>Thoughts and Doodles from a JavaScript Developer</h1>
        <pre>... it's a work in progress :)</pre>
      </div>
    </div>
    <h2>Blog Posts</h2>
    <ul>
      <li>
        {/* TODO: generate blog links using gatsby gql data (`allSitePage`?) */}
        <Link to="/blog/2019-06-20-lil-swimmer/">
          2019-06-20: Revisiting an old Doodle
        </Link>
      </li>
    </ul>
    <h2>Code Doodles</h2>
    <ul>
      <li>
        <Link to="/lil-swimmer/">&#9658; Play "Lil Swimmer"</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
