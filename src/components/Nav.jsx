import React from "react"
import styled from "styled-components"

import { Menu } from "antd"
import { Link } from "gatsby"

const StyledMenu = styled(Menu)`
  right: 0px;
`
const StyledMenuItem = styled(Menu.Item)`

  }
`
const Nav = () => (
  <StyledMenu mode="horizontal">
    <StyledMenuItem key="home">
      <Link to="/">home</Link>
    </StyledMenuItem>
    <StyledMenuItem key="about">
      <Link to="/about">about</Link>
    </StyledMenuItem>
    <StyledMenuItem key="contact">
      <Link to="/contact">contact</Link>
    </StyledMenuItem>
  </StyledMenu>
)

export default Nav
