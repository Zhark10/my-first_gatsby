import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Page 2</h1>
    <Link to="/">Go back</Link>
  </Layout>
)

export default SecondPage
