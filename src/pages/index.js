import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Main page</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: `300px`, display: 'flex', flexDirection: 'column' }}>
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/page-3/">Go to page 3</Link>
    </div>
  </Layout>
)

export default IndexPage
