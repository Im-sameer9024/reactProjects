import React from 'react'
import './app.css'
import Todo from './components/Todo'
import img from './img/back.jpg'

const App = () => {
  
  return (
    <div id='app' style={{backgroundImage:`url(${img})`}} >
      <Todo/>
    </div>
  )
}

export default App
