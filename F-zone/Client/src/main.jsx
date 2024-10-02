import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './Context/ShopContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopContextProvider>
      <ToastContainer />
      <App />
    </ShopContextProvider>
  </BrowserRouter>


)
