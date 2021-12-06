import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../styles/home.module.css"
export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <StaticImage
          placeholder="tracedSVG"
          src="../images/banner.png"
          alt="banner"
          layout="constrained"
          as="section"
          className="banner-img"
        />
      </section>
    </Layout>
  )
}
