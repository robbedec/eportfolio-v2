import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

import './layout.css';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header = null;

    if (location.pathname === rootPath + 'blog') {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
            {title}
          </Link>
        </h1>
      );
    } else if (
      location.pathname === rootPath + 'about' ||
      location.pathname === rootPath
    ) {
      header = null;
      console.log('test');
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div className="layout">
        {header ? <header>{header}</header> : null}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
