import React from "react"
import { InlineIcon } from "@iconify/react"
import darkMode from "@iconify-icons/gg/dark-mode"
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
            <InlineIcon icon={darkMode} height="40px" />
          </div>
        </nav>
      </div>
    </div>
  )
}
