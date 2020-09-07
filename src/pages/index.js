import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Talk from '../components/talk'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Talk />
  </Layout>
)

export default IndexPage
