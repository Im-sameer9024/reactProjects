import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/sideBar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";


export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <hr className=" border border-black" />
      <div className=" flex">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  )
}
