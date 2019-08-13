import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="about">
      <SEO title="Page two" />
      <h1 className="h1-wrap">About me</h1>
      <p>Welcome to page 2</p>
      
        <div>fqkfjqsmkfsqjdfmqkfljqsdmfkqjsmfkqsjflqdslmkjfmqfjkqmsjdfkljqlsdjfmkqsfjlqkfjmqksdjqdlqfmdsjfkqjdsflqkjmjqkdjmqjfs</div>
      
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
