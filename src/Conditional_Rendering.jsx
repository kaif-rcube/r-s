import {React} from 'react'
import './App.css'


function Login(){

const isLoggedIn = false;
// let message;
// if (isLoggedIn){
//  message =   <h1>Welcom User</h1>
// }
// else{
// message = <h1> Please Login </h1>
// }

// const hasMessage = true;
const isVisible = true;

const visibility = isVisible ? "visible": "invisible";

return ( 
<div>
    {/* {isLoggedIn ? <h1>Welcomes User</h1>: <h2>Please Login</h2>} */}
    

    {/* {hasMessage && <p>you have new message</p>} */}

<h1 className={isVisible ? "invisible": "visible"}>This is Conditional Css</h1>
<p className={visibility}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, corporis veritatis architecto incidunt sunt vel accusantium itaque natus unde tempore place?</p>
</div>

)
}


function unLogin(){

const isLoggedIn = false;
// let message;
// if (isLoggedIn){
//  message =   <h1>Welcom User</h1>
// }
// else{
// message = <h1> Please Login </h1>
// }

// const hasMessage = true;
const isVisible = true;

const visibility = isVisible ? "visible": "invisible";

return ( 
<div>
   

<h1 className={isVisible ? "invisible": "visible"}>This is Second Component</h1>
<p className={visibility}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, corporis veritatis architecto incidunt sunt vel accusantium itaque natus unde tempore placeat obcaecati deserunt officiis sit quasi enim quis distinctio ?</p>
</div>

)
}

const Conditional_Rendering = ()=>{


return (
<>
<Login />
</>
)
}

export default Conditional_Rendering