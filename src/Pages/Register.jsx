import React, { useRef } from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Config';

function Register() {
  const email = useRef()
  const password = useRef()

  const getUser = (event)=>{
    event.preventDefault();
    
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert(`User Registered!`)
      window.location = `./Login`
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
    email.current.value = ``
    password.current.value = ``
    
  }
  
  return (
    <>
    <h1 className='text-4xl font-bold text-center mt-60'>Register Yourself</h1>
    <form className='text-center'  onSubmit={getUser} >
      <input className='input input-bordered rounded-full input-lg mt-10' type="email" placeholder='Enter Your Email' ref={email}/><br /><br />
      <input className='input input-bordered rounded-full ms-1 input-lg' type="password" placeholder='Enter Your Password' ref={password}/><br /><br />
      <button className='btn btn-info rounded-full btn-md'>Register</button>
    </form>
    </>
  )
}

export default Register