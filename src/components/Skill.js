import React from "react"
import "./skill.css"
import Img from "gatsby-image"

export default function Skills({ language }) {
    console.log(language);
  return (
    <div className="skill-container">
      <h1>{language.name}</h1>
      <div className="skills-grid">
        {language.skills.map(skill => (
          <div className="skill-card" key={skill.name}>
            <Img fixed={skill.image.childImageSharp.fixed} />
            <p>{skill.name}</p>
            { skill.learning ? <p className="learning">Learning</p> : null}
          </div>
        ))}
      </div>
    </div>
  )
}
