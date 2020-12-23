import React from "react"
import { InlineIcon } from "@iconify/react"
import linkedinRect from "@iconify-icons/brandico/linkedin-rect"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="nav-hero">
            <div className="nav-logo">
              <a href="/">ZL</a>
            </div>
          </div>
          <div className="nav-menu">
            <a href="#contact">
              <InlineIcon icon={linkedinRect} height="40px" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}
