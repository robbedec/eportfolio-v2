import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

const linkStyle = {
  padding: "10px",
}

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    //const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} /*title={siteTitle}*/>
        <div className="index">
          <SEO title="Home" />
          <h1>Hi — You look nice today.</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link style={linkStyle} to="/404/">
              about
            </Link>
            <a
              style={linkStyle}
              target="_blank"
              href="https://github.com/robbedec"
            >
              portfolio
            </a>
            <Link style={linkStyle} to="/blog">
              blog
            </Link>
            <a
              style={linkStyle}
              target="_blank"
              href="https://robbedec.github.io/resume"
            >
              resume
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
