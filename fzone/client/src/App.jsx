import { lazy, Suspense, useCallback, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));



const App = () => {

  const [isLoading, setIsLoading] = useState(false)

  const loading = useCallback(() => {
    
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)

    },[])



  return (
    <div>

      <Navbar loading={loading} />
      {/* <SearchBar /> */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={isLoading ? <Loader /> : <Home />} />
          <Route path="/collection" element={isLoading ? <Loader /> : <Collection />} />
          <Route path="/about" element={isLoading ? <Loader /> : <About />} />
          <Route path="/contact" element={isLoading ? <Loader /> : <Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
      <Footer/>

    </div>
  )
}

export default App
