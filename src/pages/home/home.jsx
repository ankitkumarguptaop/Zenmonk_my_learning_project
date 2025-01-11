import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Input from '../../components/input/input';
import "./home.css"
const Home = () => {
  const {state}=  useLocation();
  const data = JSON.parse(localStorage.getItem(state[0]));
  // console.log(data);
  // console.log(data.todos);

  const [todos , setTodos]=useState(data.todos);
  const [todo , setTodo]=useState("");



   
  function handleTodo(e){
    setTodo(e.target.value);
  }

  function addtodo(){
    setTodos([...todos ,todo]);
    localStorage.setItem(state[0],JSON.stringify( { email:data.email,password:data.password,name:data.name,"todos":[...todos ,todo]}))
    setTodo("");
  }
  

  function handleDelete(index){
    console.log(index);
    data.todos.splice(index,1);
    setTodos(data.todos);
    localStorage.setItem(state[0],JSON.stringify( { email:data.email,password:data.password,name:data.name,"todos":data.todos}))
  }
 
  function handleEdit(index){

  }


// {
//    email:{
//     name:name,
//     password:password,
//     todo:[todos]
//    }
// }
  
  return (
    <div className='home-container'>
      <h1>Welcome {state[2]}</h1>
      <h4>email is : {state[0]}</h4>
      <h4>password is : {state[1]}</h4>
      <div>
      <Input placeHolder={"Please Enter your task"} handleInput={handleTodo} type="text" value={todo} required={true} />
      <button className='add-todo-button' onClick={addtodo}>Add Todo</button>
      </div>
      <div className='todos-rapper'>
       { todos.map((todo,index)=>(
        <>
           <div key={index} className='single-todo'>{index} {todo}</div> 
           <button onClick={()=>handleDelete(index)}>Delete</button>
           <button onClick={()=>handleEdit(index)}>Edit</button>
        </>

       ))
      }
        </div>
      
    </div>
  )


}

export default Home

