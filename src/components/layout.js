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
        <div
          style={{
            margin: `0 auto`
          }}
        >
          <main>{children}</main>
          <footer style={{padding: '20px', textAlign: 'center', color: '#fff', backgroundColor: 'steelblue', marginTop: '50px', bottom: '0', position: 'fixed', width: '100vw' }}>
            © {new Date().getFullYear()}
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
