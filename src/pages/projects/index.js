import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
console.log(styles)
export default function index({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const { contact } = data.contact.siteMetadata
  console.log(contact)
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & websites I've created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.frontmatter.slug}`}>
              <GatsbyImage
                placeholder="tracedSVG"
                image={getImage(project.frontmatter.thumb)}
                alt="banner"
                layout="constrained"
                as="section"
                className="banner-img"
              />
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.stack}</p>
            </Link>
          ))}
        </div>
        <p>Like what you see ? email me at {contact}</p>
      </div>
    </Layout>
  )
}

export const page = graphql`
  query ProjectPage {
    projects: allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
