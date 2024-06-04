import React from 'react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import Icon from '../assets/react.svg';
const StyledImg = styled.img`
      width: 100px;
`;
const Styledheader = styled.div`
      margin: 1%;
      display: flex;
      justify-content: space-between;
`;
const Sli = styled.li`
      list-style-type: none;

`
const Sul = styled.ul`
      display: flex;
      gap: 10px;
`
const Iconatics = styled.img`
      width: 50px;
      height: 50px;
`
function Header() {
      // JS
      const nav = ['Vehicle','Energy','Charging','Discover','Shop'];

  return (
    <Styledheader>
      {/* Use the styled component directly */}
      <StyledImg src={Logo}/>
      
      <nav>
            <Sul>
                  {nav.map((item,index)=>(
                        <Sli key={index}>{item}</Sli>
                  ))}
            </Sul>
      </nav>

      <nav>
            <Iconatics src = {Icon} alt="asdsd" />
            <Iconatics src = {Icon} alt="asdsd" />
            <Iconatics src = {Icon} alt="asdsd" />
      </nav>

    </Styledheader>
  );
}

export default Header;
