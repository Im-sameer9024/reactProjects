import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Placeorder from "./components/Placeorder/Placeorder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import Login from "./components/LoginInPop/Login"


const App = () => {

  const[showLogin,setShowLogin] = useState(false)

  return (
    <>
    {
      showLogin ? <Login setShowLogin={setShowLogin}/> : <> </>
    }
      <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
