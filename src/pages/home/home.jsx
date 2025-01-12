import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Input from '../../components/input/input';
import "./home.css"
const Home = () => {
// {
//    email:{
//     name:name,
//     password:password,
//     todo:[todos]
//    }
// }

  const {state}=  useLocation();
  const data = JSON.parse(localStorage.getItem(state[0]));


  const [todos , setTodos]=useState(data.todos);
  const [todo , setTodo]=useState("");
  const [toggleAddEdit , setToggleAddEdit]=useState({
    buttonState:false,
    editIndex:null
  })

  function handleTodo(e){
    setTodo(e.target.value);
  }

  function addOrEdittodo(){
    if(todo.length<=0){
      return alert("enter valid todo");
    }
   if(!toggleAddEdit.buttonState){
    
    setTodos([...todos ,todo]);
    localStorage.setItem(state[0],JSON.stringify( { email:data.email,password:data.password,name:data.name,"todos":[...todos ,todo]}))
    setTodo("");
   }
   else{
     data.todos[toggleAddEdit.editIndex]=todo;
     setTodos(data.todos);
     localStorage.setItem(state[0],JSON.stringify( { email:data.email,password:data.password,name:data.name,"todos":data.todos}))
     setTodo("");
     setToggleAddEdit({
      buttonState:false,
      editIndex:null
    });
   }
  }
  
  function handleDelete(index){
    data.todos.splice(index,1);
    setTodos(data.todos);
    localStorage.setItem(state[0],JSON.stringify( { email:data.email,password:data.password,name:data.name,"todos":data.todos}))
  }
 
  function handleEdit(index){
    setTodo(data.todos[index]);
    setToggleAddEdit({
      buttonState:true,
      editIndex:index
    });      
  }
  
  return (
    <div className='home-container'>
      <h1>Welcome {state[2]}</h1>
      <h4>email is : {state[0]}</h4>
      <h4>password is : {state[1]}</h4>
      <div>
      <Input placeHolder={"Please Enter your task"} handleInput={handleTodo} type="text" value={todo} required={true} />
      <button className='todo-component-button' onClick={addOrEdittodo}>{toggleAddEdit.buttonState?"Edit Todo":"Add Todo"}</button>
      </div>
      
       { todos.map((todo,index)=>(
        <div className='todos-rapper'>
           <div key={index} className='single-todo'>{index} {todo}</div> 
           <button className='todo-component-button' onClick={()=>handleDelete(index)}>Delete</button>
           <button className='todo-component-button' onClick={()=>handleEdit(index)}>Edit</button>
        </div>
       ))
      }
    </div>
  )
}

export default Home;

