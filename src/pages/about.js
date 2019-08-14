import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import Avatar from '../../content/assets/images/avatar.jpg';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/layout.css';

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="about">
          <SEO title="Page two" />
          <h1 className="h1-wrap">About me</h1>
          <div className="about-content">
            <Img
              className="avatar"
              style={{
                width: '15vw',
                height: '30vh',
                backgroundSize: 'cover',
              }}
              fixed={data.avatar.childImageSharp.fixed}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              luctus venenatis lectus magna. Aliquam sem et tortor consequat id
              porta nibh venenatis. Quis commodo odio aenean sed. Vulputate ut
              pharetra sit amet. Tristique sollicitudin nibh sit amet commodo
              nulla facilisi nullam. Pulvinar etiam non quam lacus suspendisse
              faucibus interdum posuere lorem. Tellus cras adipiscing enim eu
              turpis egestas. Ultricies tristique nulla aliquet enim tortor at.
              Mi bibendum neque egestas congue quisque egestas. Venenatis cras
              sed felis eget velit aliquet sagittis id consectetur. Rhoncus
              dolor purus non enim praesent elementum facilisis leo. Amet nisl
              suscipit adipiscing bibendum est. Sit amet aliquam id diam
              maecenas. Justo eget magna fermentum iaculis eu non diam phasellus
              vestibulum. Laoreet suspendisse interdum consectetur libero.
              Aliquet enim tortor at auctor urna nunc. Condimentum id venenatis
              a condimentum vitae. Tortor at risus viverra adipiscing at in
              tellus integer. Lectus urna duis convallis convallis tellus id.
              Orci dapibus ultrices in iaculis nunc sed augue lacus viverra.
              Suspendisse in est ante in. Proin nibh nisl condimentum id
              venenatis a. Vitae elementum curabitur vitae nunc sed velit
              dignissim sodales. Aenean pharetra magna ac placerat vestibulum
              lectus. Imperdiet sed euismod nisi porta. Convallis aenean et
              tortor at risus. Lacus laoreet non curabitur gravida arcu ac
              tortor dignissim convallis. Congue mauris rhoncus aenean vel elit
              scelerisque mauris. Libero justo laoreet sit amet cursus sit amet
              dictum. Vulputate eu scelerisque felis imperdiet proin fermentum
              leo vel. Scelerisque varius morbi enim nunc faucibus a
              pellentesque. Lectus magna fringilla urna porttitor rhoncus dolor
            </p>
          </div>
          <div className="link-home">
            <Link style={{ borderBottom: '1px solid white' }} to="/">
              Go back to the homepage
            </Link>
          </div>
        </div>
      </Layout>
    );
  }
}
export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/images/avatar.jpg/" }) {
      childImageSharp {
        fixed(width: 665, height: 672) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
