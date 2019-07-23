import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../components/layout.css'

const linkStyle = {
  padding: '10px',
};

const IndexPage = () => (
  <div className="wrapper">
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
      <Link style={linkStyle} to="/404">blog</Link>
      <a style={linkStyle} target="_blank" href="https://robbedec.github.io/resume">resume</a>
    </div>
  </Layout>
  </div>
)

export default IndexPage
