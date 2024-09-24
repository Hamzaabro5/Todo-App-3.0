import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../config';
import { useState , useRef } from "react"

const Home = ()=> {
  const [todo , setTodo] = useState([])
  const todoValue = useRef()


  const addTodo =(event)=>{
    event.preventDefault()
    if (todoValue.current.value === ``) {
      alert(`Please Enter Your todo`);
    } else {   
      todo.push(todoValue.current.value)
    }
    setTodo([...todo])
    
    todoValue.current.value = ``
  }

  const deleteTodo = (index)=>{
    // console.log(`todo deleted` , index);
    todo.splice(index , 1)
    setTodo([...todo])
    
  }

  const editTodo = (index)=>{
    // console.log(`todo edit` , index);
    const updatedTodo = prompt(`Edit Your Todo`)
    todo.splice(index , 1 , updatedTodo)
    setTodo([...todo])
  }

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //   } else {
  //     window.location = "/Register";
  //   }
  // });

  return(
  <>
  <h1 className="text-center text-5xl font-bold my-10">Todo App</h1>
  <form onSubmit={addTodo}>
    <div className="flex justify-center items-center">
    <input type="text" className="input input-bordered rounded-full p-5 text-2xl w-25" placeholder="Enter Todo" ref={todoValue}/>
    <button className="btn btn-primary rounded-full my-4 fw-bold ms-3" type="submit">Add Todo</button>
    </div>
  </form>
  <ul className="text-center">
    {todo.map((item , index)=>{
      return <div key={index}>
      <h1 className="mt-12 text-3xl font-semibold mb-3">{item}</h1>
      <button className="btn btn-error rounded-5" onClick={()=> deleteTodo(index)}>Delete</button>
      <button className="btn btn-success rounded-5 ms-4" onClick={()=> editTodo(index)}>Edit</button>
      </div>
    })}
  </ul>
  </>
)}

export default Home