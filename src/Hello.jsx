import React from 'react'


const Hello = () => {
    const headingStyle = {

  color:"green",
  fontSize:"80px",
  fontFamily:"Arial, sans-serif",
  textAlign:"center"
};



    const name = "kaif"


    
  return (
    <div>

      <h2 style={headingStyle}>    
      This is  {name} component
      </h2>
        <h2 style={{...headingStyle,color:"red"}}>    
      This is  {name} component
      </h2>

     

     
    </div>
  )
}

export default Hello
