
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Signupform = ({ setIsLoggedIn }) => {
  const [createPassword, setCreatePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [Data, setData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    createPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  function dataHandler(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (Data.createPassword !== Data.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...Data,
    };

    console.log(accountData);
    navigate("/dashboard");

    fetch("http://localhost:3000/api/v1/signup",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(Data)
     })
     .then((res)=>{console.log(res)})
     .catch(err => console.log(err))
  
  }

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="w-full  font-content flex flex-col gap-3 "
      >
        <div className=" flex  gap-5">
          <label htmlFor="firstName" className=" flex flex-col gap-1">
            <p>
              First Name<sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              value={Data.firstName}
              onChange={dataHandler}
              className=" outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md "
            />
          </label>
          <label htmlFor="lastName" className=" flex flex-col gap-1">
            <p>
              Last Name<sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
              value={Data.lastName}
              onChange={dataHandler}
              className=" outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md "
            />
          </label>
        </div>

        <label htmlFor="emailAddress" className=" flex flex-col gap-1">
          <p>
            Email Address<sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter email Address"
            name="emailAddress"
            id="emailAddress"
            value={Data.emailAddress}
            onChange={dataHandler}
            className=" outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md "
          />
        </label>

        {/* password  */}
        <div className=" flex gap-5 ">
          {/* Create Password  */}
          <div className=" flex flex-col justify-center relative ">
            <label htmlFor="createPassword flex">
              <p>
                Create Password<sup className="text-red-500">*</sup>
              </p>
            </label>
            <input
              type={createPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              name="createPassword"
              id="createPassword"
              onChange={dataHandler}
              value={Data.createPassword}
              className=" outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md "
            />
            <span
              onClick={() => setCreatePassword((pre) => !pre)}
              className=" absolute right-2 bottom-2 text-[20px] "
            >
              {createPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>

          {/* Confirm Password  */}
          <div className=" flex flex-col justify-center relative ">
            <label htmlFor="confirmPassword">
              <p>
                Confirm Password<sup className="text-red-500">*</sup>
              </p>
            </label>
            <input
              type={confirmPassword ? "text" : "password"}
              required
              placeholder="Enter Password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={dataHandler}
              value={Data.confirmPassword}
              className=" outline-none bg-slate-800 w-full px-3 pl-2 py-2 rounded-md "
            />
            <span
              onClick={() => setConfirmPassword((pre) => !pre)}
              className=" absolute text-[20px] right-2 bottom-2  "
            >
              {confirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>
        </div>
        <button className=" bg-yellow-500 py-2 text-black rounded-md font-bold">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signupform;
