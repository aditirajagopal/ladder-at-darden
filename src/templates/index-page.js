import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <section className="hero is-medium is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Who Are We?
          </h1>
          <h2 className="subtitle">
            Ladder is a network of women who want to maximize their ROI in consulting - whether that's to get on the right projects, get the next promotion, exit into industry or rise to partner.
            Subscribe to our newsletter
          </h2>
          <div className="buttons">
            <button className="button is-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content" id="about">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                    <img src={`/img/gender_gap.png`} />
                </div>
                <h3 className="has-text-weight-semibold is-size-2">
                  {intro.title}
                </h3>
                <Features gridItems={intro.blurbs} />
                <div className="columns" id="playbook">
                  <div className="column is-12">
                    <h4 className="has-text-weight-semibold is-size-2">
                      Our Vision
                    </h4>
                    <p>We want to see a world where there is gender parity at all levels of consulting organizations.</p>
                    <h4 className="has-text-weight-semibold is-size-2">
                      Our Mission
                    </h4>
                    <p>To encourage womyn to excel as consultants and leaders, by building a community supporting each womyn on their unique path.</p>
                    <h4 className="has-text-weight-semibold is-size-2">
                      Our Solution
                    </h4>
                    <p>We want to support womyn to build their networks, learn from the wisdom of a collective community of womyn (and male allies), and get engaged with womyn on a similar journey.</p>
                      <h4 className="is-size-4">We’re doing this by:</h4>
                        <div style={{ marginLeft: '2.5rem'}}>
                          <li>hosting small group intimate conversations with womyn leaders on their journeys to senior leadership roles at consulting firms.</li> 
                          <li>hosting large group panels and events to share insights, build skills</li> 
                          <li>Piloting events that help foster connection and community for womyn in consulting across geographies and organizations</li> 
                        </div>
                      <br/>
                      <h4 className="is-size-4">What we’re doing now:</h4> 
                        <div style={{ marginLeft: '2.5rem'}}>
                          <li>Monthly newsletter with events, trends, narratives, and opportunities</li> 
                          <li>Blogs and personal essays on womyn’s experiences from the workplace</li>
                          <li>Pilot events with senior womyn leaders and early career womyn at different consulting firms to build your community</li> 
                        </div>
                      <br/>
                      <h4 className="is-size-4">What members access:</h4>
                      <h5>Horizontal Network Development</h5>
                      <div style={{ marginLeft: '2.5rem'}}>
                        <li>Small group community building with women from different firms</li>
                        <li>Monthly programming and connection</li>
                      </div>
                      <br/>
                      <h5>Vertical Network Cultivation</h5>
                      <div style={{ marginLeft: '2.5rem'}}>
                        <li>Intimate events with senior women leaders</li> 
                        <li>Ask Me Anything forum </li>
                        <li>Access to former consultants in industry</li> 
                        <li>Skill building sessions</li>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    title: PropTypes.string,
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          title
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
