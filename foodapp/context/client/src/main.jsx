
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from "./Context-API/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <StoreContextProvider>
 <BrowserRouter>
    <App />
  </BrowserRouter>
 </StoreContextProvider>

);
