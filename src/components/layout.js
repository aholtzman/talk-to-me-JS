import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{height: '100vh'}}>
        <Header siteTitle={"Happy Thoughts"} />
          <main>{children}</main>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
