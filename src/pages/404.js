import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Nothing to see here, move along!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NotFoundPage
