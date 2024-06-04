import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
      width: 100vw;
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('/images/model-s.jpg');
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-image: ${props => `url("/images/${props.bgImage}")`};
`     
const ItemText = styled.div`
      padding-top: 10vh;
      text-align: center;
`
const ButtonGroup = styled.div`
      display: flex;
      align-items: end;
      justify-content: center;
      @media (max-width: 768px){
            flex-direction: column;
      }
      
      
`
const LeftButton = styled.button`
      background-color: rgba(23,22,32,0.8);
      height: 40px;
      width: 256px;
      color: white;
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      oppacity: 0.5;
      text-transform: uppercase;
      font-size: 15px;
      margin: 8px;
      font-weight: 900;
      border: none;
      
`
const RightButton = styled(LeftButton)`
      background-color: white;
      color: rgba(23,22,32,0.8);
`

const DownArrow = styled.img`

      height: 30px;
      width: 30px;
      margin-bottom: 15px;
      animation: hop infinite 1.5s;
      overflow-x: hidden;
      
`
const Buttons = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`
function Section({title,description,backgroundImg,leftBtnText,rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
      </ItemText>
      <Buttons>
            <ButtonGroup>
                  <LeftButton>
                        {leftBtnText}
                  </LeftButton>

                  <RightButton>
                        {rightBtnText}
                  </RightButton>
            </ButtonGroup>
            <DownArrow src = "images/down-arrow.svg" />
      </Buttons>
      
    </Wrap>
  )
}

export default Section