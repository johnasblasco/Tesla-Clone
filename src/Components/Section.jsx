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
`     
const ItemText = styled.div`
      padding-top: 10vh;
      text-align: center;
`
const ButtonGroup = styled.div`
      display: flex;
      align-items: end;
      justify-content: center;
      
      
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
      animation: hop e 1.5s;
      overflow-x: hidden;
      
`
const Buttons = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`
function Section() {
  return (
    <Wrap>
      <ItemText>
            <h1>Model S</h1>
            <p>Order Online Touchless Delivery</p>
      </ItemText>
      <Buttons>
            <ButtonGroup>
                  <LeftButton>
                        Custom Order
                  </LeftButton>

                  <RightButton>
                        Existing Inventory
                  </RightButton>
            </ButtonGroup>
            <DownArrow src = "images/down-arrow.svg" />
      </Buttons>
      
    </Wrap>
  )
}

export default Section