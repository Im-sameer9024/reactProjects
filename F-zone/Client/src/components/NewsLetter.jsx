import { useDispatch, useSelector } from "react-redux"
import { resetForm, updateField } from "../redux/fetures/cartSlice"

export default function NewsLetter() {

  const email = useSelector((state) => state.cart.email)
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(email)
    dispatch(resetForm())
  }

  const changeHandler = (event) => {
    const { name, value } = event.target
    dispatch(updateField({name,value}))
  }

  return (
    <div className="w-10/12 mx-auto text-center">

      <p className=" font-smallHeading text-2xl font-bold ">Subscribe now & get 20% off</p>
      <p className="font-content text-gray-400 text-[1.2rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, autem?</p>
      <form onSubmit={submitHandler}>
        <div className=" w-6/12  my-[1rem] flex items-center mx-auto ">
          <input type="text" name="email" value={email} onChange={changeHandler} placeholder="xyz12345@gmail.com" className=" py-2 outline-none border w-full pl-2" />
          <button className=" px-4 py-2 bg-black text-white font-content">SUBSCRIBE</button>
        </div>
      </form>

    </div>
  )
}
