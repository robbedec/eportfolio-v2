import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const linkStyle = {
  padding: '10px',
  display: 'flex',
  justifyContent: 'center'
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi — You look nice today.</h1>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    }}>
      <Link style={linkStyle} to="/page-2/">about</Link>
      <Link style={linkStyle} to="/page-2">portfolio</Link>
      <Link style={linkStyle}to="/page-2">blog</Link>
    </div>
    
  </Layout>
)

export default IndexPage
