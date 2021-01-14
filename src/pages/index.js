import React from "react"

import "../styles/global.css"

import { Menu, Carousel, Button } from "antd"

import Nav from "./../components/Nav"

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  height: "500px",
}

export default function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Nav />
      <Carousel style={{ height: "100%" }}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  )
}
