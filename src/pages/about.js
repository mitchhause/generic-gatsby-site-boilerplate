import React from "react"

import styled from "styled-components"

import { Image, Layout } from "antd"

import Nav from "./../components/Nav"

const StyledLayout = styled(Layout)`
  display: flex;
  background-color: white;
  flex-direction: row;
`

export default function About() {
  return (
    <>
      <Nav />
      <StyledLayout></StyledLayout>
    </>
  )
}
