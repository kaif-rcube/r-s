import {React} from "react";




const Array_Object =()=>{


const fruits =["mango","Banana","Watermelon"]

const person ={
name:"Zain",
gender:"male",
age:12,
class:10,
}


const members = [
    {name:"Ajay",age:25, gender:"male"},
    {name:"john",age:35, gender:"male"},
    {name:"jency",age:40, gender:"Female"}
]

function fullName(person) {
// const person1 ={
// name:"Zainidrisi",
// gender:"male",
// age:12,
// class:10
// }
return person.name +" "+ person.age;

}

return(
<>

<h1>
This This is dynamic Fruity list
</h1>
<ul>{fruits.map((fruit,index)=>(
<li> {index} {fruit}</li>))}   
</ul>

<h2> THis is Person Details</h2>

<p>Name is {person.name}</p>
<p>Gender is {person.age}</p>
<p>Age is {person.gender}</p>
<p>Class is {person.class}</p>
<p>Here i am using combination function  is 
:{fullName(person)}</p>
<h1>Here we are extracting Values from array of object</h1>
<ul>

{members.map((user,index)=>(

<li>
   {fullName(user)} is {user.gender}
</li>

))}

</ul>




</>
)
}


export default Array_Object