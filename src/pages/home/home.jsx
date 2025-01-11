import React from 'react'
import { useLocation } from 'react-router-dom';
const Home = () => {

  const {state}=  useLocation();
  // const {email,password}=  useLocation();
  
  return (
    <div>
      <h1>Welcome to home</h1>
      <h3>
        Successfuly Sign in:{state}
      </h3>
 
      <h4>email is : {state[0]}</h4>
      <h4>password is : {state[1]}</h4>
    </div>
  )
}

export default Home
