import React from 'react'











const Hello = () => {
    const name = "kaif"
    const headingStyle = {

  color:"green",
  fontSize:"50px",
  fontFamily:"Arial, sans-serif",
  textAlign:"center"
};

  return (
    <div>
      <h2 style={headingStyle}>    
      This is  {name} component
      </h2>
        <h2 style={{...headingStyle,color:"red",fontSize:"30px"}}>    
      This is  {name} component
      </h2>
    </div>
  )
}

export default Hello
