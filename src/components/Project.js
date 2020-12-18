import React from "react"
import "./project.css"
import Img from "gatsby-image"
import { InlineIcon } from "@iconify/react"
import link45deg from "@iconify-icons/bi/link-45deg"
import githubFilled from "@iconify-icons/ant-design/github-filled"

export default function Project({ project }) {
  const { frontmatter, html } = project

  return (
    <div className="project">
      <div className="feature-image">
        <Img fluid={frontmatter.picture.childImageSharp.fluid} />
      </div>
      <div className="project-content">
        <div className="project-tags">{frontmatter.tags.join(" · ")}</div>
        <div className="project-title">{frontmatter.title}</div>
        <div
          className="project-body"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>
        <div className="buttons">
          {!!frontmatter.url && (
            <a className="link-btn" href={frontmatter.url}>
              <InlineIcon height={20} width={20} icon={link45deg} />
              Link
            </a>
          )}
          {!!frontmatter.githubUrl && (
            <a className="gh-btn" href={frontmatter.githubUrl}>
              <InlineIcon height={20} width={20} icon={githubFilled} />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
