import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Input from '../../components/input/input';
import "./home.css"
const Home = () => {

  const {state}=  useLocation();
  const [todos , setTodos]=useState(["play","brush"]);
  const [todo , setTodo]=useState("");
   
  function handleTodo(e){
    setTodo(e.target.value);
  }

  function addtodo(){
    setTodos([...todos ,todo]);
    setTodo("");
  }

  
  return (
    <div className='home-container'>
      <h1>Welcome to home user name </h1>
      <h4>email is : {state[0]}</h4>
      <h4>password is : {state[1]}</h4>
      <div>
      <Input placeHolder={"Please Enter your task"} handleInput={handleTodo} type="text" value={todo} required={true} />
      <button className='add-todo-button' onClick={addtodo}>Add Todo</button>
      </div>
      <div className='todos-rapper'>
       {todos.map((todo,index)=>{
          return  <div key={index} className='single-todo'>{index+1} {todo}</div> 
        })
      }
        </div>
      
    </div>
  )
}

export default Home
