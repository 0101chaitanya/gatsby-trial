import React from "react"
import NavBar from "./NavBar"
import "../styles/global.css"
export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
