import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function NavBar() {
  const data = useStaticQuery(graphql`
    query StaticQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)

  const { description } = data.site.siteMetadata

  console.log(description)
  return (
    <nav>
      <h2>{description}</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
