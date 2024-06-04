import React from 'react'
import Section from './Section'


function Main() {
  return (
      <>
            <div>
                  <Section 
                        title="Model S"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-s.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
                  />
                  <Section 
                        title="Model X"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
                  />
                  <Section 
                        title="Model Y"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-y.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
                  />
                  <Section 
                        title="Model 3"
                        description="Order Online for Touchless Delivery"
                        backgroundImg="model-y.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
                  />
            </div>
      </>
  )
}

export default Main