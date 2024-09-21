import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Collection from './Pages/Collections/Collection'
import About from "./Pages/About/About"
import Contact from './Pages/Contact/Contact'
import Product from "./Pages/Products/Products"
import Cart from './Pages/Cart/Cart'
import Login from './Pages/Login/Login'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Order from './Pages/Orders/Order'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<Product />} />
        <Route path='/about' element={<Cart />} />
        <Route path='/about' element={<Login />} />
        <Route path='/about' element={<PlaceOrder />} />
        <Route path='/about' element={<Order />} />
      </Routes>
      <Footer/>

    </>
  )
}
