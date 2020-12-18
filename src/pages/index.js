import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import "../styles/styles.css"
import yearbookPhoto from "../images/yearbook.png"
import { Helmet } from "react-helmet";

export default function Home({ data }) {
  const projects = data.allMarkdownRemark.edges.map(data => data.node)
  return (
    <div className="App">
      <Helmet>
        <title>Zach Lefkovitz</title>
        <meta name="description" content="Zach Lefkovitz's portfolio website."></meta>
      </Helmet>
      <Navbar />
      <section className="hero">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-picture">
              <img src={yearbookPhoto} alt="Me!"></img>
            </div>
            <div className="hero-content">
              <h1>
                Hey there{" "}
                <span role="img" aria-label="Waving hand">
                  👋
                </span>
                <br />
                I’m Zach
              </h1>
              <h3>
                I’m a student who makes interactive websites and I’m learning
                how to hack.
              </h3>
              <span
                className="button-container"
                style={{ marginBottom: "1rem" }}
              >
                <a href={`/Resume.pdf`} className="button">
                  View my resume
                </a>
                <span className="outline"></span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container" id="projects">
        <div className="lead">Projects</div>
        <div className="sublead">Check out what I've done</div>
        <div className="wrapper">
          {projects.map(project => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    imageSharp(id: { eq: "f4aa8cf4-f133-57c1-9e0b-67f00499e486" }) {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
            url
            githubUrl
            picture {
              childImageSharp {
                fluid(maxWidth: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
