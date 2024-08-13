import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {


  const[todos,setTodos]=useState([{task:"",id:uuidv4()}])
  const[newTodos,setNewTodos]=useState([""])

  function changeHandler(event){
    setNewTodos(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
  }

  function addTodo(){
    setTodos((prev) => ([...prev,{task:newTodos,id:uuidv4()}]))
    setNewTodos("")
  }

  function toUpperCase(){
    setTodos((prevTask) => prevTask.map((el) => ({...el,task:el.task.toUpperCase()})))
  }

  function toLowerCase(){
    setTodos((prevTask) => prevTask.map((el) => ({...el,task:el.task.toLowerCase()})))
  }

  function delHandler(id){
    setTodos(todos.filter((todo) => todo.id != id))
  }

  return(
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
       <div className=' bg-slate-500 w-[600px] h-[500px] opacity-60 rounded-lg flex flex-col items-center'>
          <h1 className=' text-[40px] '>Todo App</h1>

          <form onSubmit={submitHandler} className='flex flex-col mt-5 justify-center items-center'>
            <input type="text" value={newTodos} onChange={changeHandler} placeholder='Type Your Task' className='p-1 w-[250px]'/>
            <button onClick={addTodo} className='border border-black w-[100px] p-1 font-bold mt-1 hover:shadow-xl transition-all duration-200 hover:bg-slate-600'>Add Task</button>
          </form>
          <br /><br />

          <h2 className='text-black text-[20px] underline bg-white p-2'>Tasks List</h2>
          <ul className=' bg-white w-[300px] h-[200px] flex  flex-col  items-center mt-4 list-inside list-disc'>{todos.map((todo) => 
          (<li key={todo.id}>
          {todo.task}
          <button onClick={()=>delHandler(todo.id)} className='border border-black  p-1 font-bold mt-1 hover:shadow-xl transition-all duration-200 hover:bg-red-200 bg-white ml-1'>Delete</button>
          </li>))}</ul>

          <div className='space-x-7 mt-2'>
            <button onClick={toUpperCase} className='border border-black  p-1 font-bold mt-1 hover:shadow-xl transition-all duration-200 hover:bg-red-200 bg-white'>ToUpperCase</button>
            <button onClick={toLowerCase} className='border border-black  p-1 font-bold mt-1 hover:shadow-xl transition-all duration-200 hover:bg-red-200 bg-white'>ToLowerCase</button>
          </div>
       </div>
    </div>
  )
}

export default Todo
