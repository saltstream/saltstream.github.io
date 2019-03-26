import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div id="wrapper" className="wrapper">
    <Header />
    {children}
    <Footer />
  </div>
)
