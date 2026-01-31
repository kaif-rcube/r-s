import React from 'react'


const Hello = () => {
    

const getName = (yourname) =>{
  return yourname;
}



        function handlClick(){

alert ("Button Is CLicked")

        }


const handleInput = (event)=>{
console.clear()
console.log("value: ", event.target.value)

}

const handleMouseOver = ()=> {console.log("Mouse is Over to Text")}
const handleDoubleClick = ()=> {console.log("Par is Double Clicke")}

  return (
    <div>

    
      <button onClick={handlClick}> Click Me</button>
      <button onClick={()=>alert("button 2 isClick")}> Click Me 2</button>
      <br/><input type="text" onChange={handleInput}placeholder="Type Something"/>

      <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>This is Para and here we learn how to add 
      multiple events
      </p>

     
    </div>
  )
}

export default Hello
