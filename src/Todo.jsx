import { useState } from "react";   


const Todo = () => {

    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);   




    const handlesubmit = (e) => {}



    const handleDelete = (index) => {}



return(
<>
<h1></h1>
<form onSubmit = {handlesubmit}>

<input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
<button type="submit">Add Todo</button>



</form>

</>


)


}



    export default Todo;