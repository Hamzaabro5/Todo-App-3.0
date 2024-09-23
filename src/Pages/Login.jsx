import React, { useRef } from 'react'
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../Config';
import { Link } from 'react-router-dom';

function Register() {
  const email = useRef()
  const password = useRef()

  const getUser = (event)=>{
    event.preventDefault();
    
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert(`User LoggedIn!`)
      window.location = `/`
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
    <h1 className='text-4xl font-bold text-center mt-60'>Login</h1>
    <form className='text-center'  onSubmit={getUser} >
      <input className='input input-bordered rounded-full input-lg mt-10' type="email" placeholder='Enter Your Email' ref={email}/><br /><br />
      <input className='input input-bordered rounded-full ms-1 input-lg' type="password" placeholder='Enter Your Password' ref={password}/><br /><br />
      <button className='btn btn-info rounded-full btn-md'>Login</button>
    </form>
    <h1 className='text-center mt-5 font-bold text-xl'>Not a User? <Link className='text-blue-600 underline' to="/register">Register</Link></h1>
    </>
  )
}

export default Register