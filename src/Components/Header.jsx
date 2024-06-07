import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

      // state
      const [burgerStatus, setBurgerStatus] = useState(0);

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
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>

      </RightMenu>

      <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                  <CustomClose onClick={()=>setBurgerStatus(false)}></CustomClose>
            </CloseWrapper>

            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>
            <li><a href="#">mga list</a></li>

      </BurgerNav>

    </Headers>
  )
}

export default Header

const Headers = styled.div`
      z-index: 1;
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
            color: black;
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
            color:black;
            font-weight: 600;
            text-transform: uppercase;
            margin-right: 10px;
      }
      
`

const CustomMenu = styled(MenuIcon)`
      cursor: pointer;
`

const BurgerNav = styled.ul`
      list-style: none;
      z-index:10;
      margin:0;
      width:300px;
      position: fixed;
      top:0;
      right:0;
      bottom: 0;
      background-color: white;
      padding: 20px;
      display: flex;

      flex-direction: column;


      transform: ${props=>props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition: 1s;

      li{   padding: 15px 0;
            border-bottom: 1px solid rgba(0,0,0, .2);

            a{
                  font-weight: 600;
            }
      }
      
`
const CloseWrapper = styled.div`
      display: flex;
      justify-content: end;
`
const CustomClose = styled(CloseIcon)`
      cursor: pointer;
`