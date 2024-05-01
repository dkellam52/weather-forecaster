import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <div className="container">
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
        <footer className="footer">Created by <a href="http://dominiquekellam.com">Dominique Kellam</a> </footer>
      </div>
    )}
/>
)
