import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { DiscussionEmbed } from "disqus-react"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  ...props
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { title, date } = frontmatter
  // const disqusConfig = {
  //   shortname: process.env.GATSBY_DISQUS_NAME,
  //   config: { identifier: path, title },
  // }
  console.log(data, props)
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      {/* <DiscussionEmbed {...disqusConfig} /> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
