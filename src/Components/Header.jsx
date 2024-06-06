import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
  return (
    <Headers>
      <a href="#">
            <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>  
            <a href="#">Model S</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>
            <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu />

      </RightMenu>

    </Headers>
  )
}

export default Header

const Headers = styled.div`
      min-height: 60px;
      position: fixed;
      display: flex;
      align-items: center;
      padding: 0 20px;
      top:0;
      left:0;
      right:0;
      justify-content:space-between;
      
`
const Menu = styled.div`
      display: flex;
      align-items: center;

      a{
            font-weight: 600;
            text-transform: uppercase;
            padding: 0 10px;
            flex-wrap: no-wrap;
      }
      @media(max-width: 768px){
            display:none;
      }
`

const RightMenu = styled.div`
      display: flex;
      align-items: center;
      a{
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
      }
      
`

const CustomMenu = styled(MenuIcon)`
      cursor: pointer;
`