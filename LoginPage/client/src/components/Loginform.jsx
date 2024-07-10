/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import labour from "../img/labour.png";

const Loginform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    code: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    // const allData = {formData}
    axios
      .post("http://localhost:4000/api/v1/user", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));

    console.log(formData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="row my-4">
          <div className="my-4 mx-auto">
            <img src={labour} alt="" width="100px" height="100px" />
            <h1>On-site Inquires</h1>
          </div>
          {/* First Name  */}
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="first name"
              value={formData.firstName}
              onChange={changeHandler}
              name="firstName"
            />
          </div>

          {/* Last Name  */}
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="last name"
              value={formData.lastName}
              onChange={changeHandler}
              name="lastName"
            />
          </div>

          {/* Email  */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="email"
              value={formData.email}
              onChange={changeHandler}
              name="email"
            />
          </div>

          {/* Country  */}
          <div className="mb-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              id="country"
              className="form-select"
              aria-label="Default select example"
              value={formData.country}
              name="country"
              onChange={changeHandler}
            >
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="UAE">UAE</option>
              <option value="USA">USA</option>
              <option value="Thailand">Thailand</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Qatar">Qatar</option>
            </select>
          </div>

          {/* State /Province */}
          <div className="mb-3">
            <label htmlFor="state" className="form-label">
              State / Province
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="Rajasthan"
              value={formData.state}
              onChange={changeHandler}
              name="state"
            />
          </div>

          {/* City  */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="jaipur"
              value={formData.city}
              onChange={changeHandler}
              name="city"
            />
          </div>

          {/* ZIP /Postal code  */}
          <div className="mb-3">
            <label htmlFor="code" className="form-label">
              ZIP / Postal code
            </label>
            <input
              type="text"
              className="form-control"
              id="code"
              placeholder="890243"
              value={formData.code}
              onChange={changeHandler}
              name="code"
            />
          </div>

          {/* Checkbox  */}
          <div>
            <h6 style={{ fontWeight: "bold" }}>By Email</h6>
            <div className="d-flex gap-3">
              <div>
                <input
                  type="checkbox"
                  id="comments"
                  name="comments"
                  checked={formData.comments}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="comments" style={{ fontWeight: "bold" }}>
                  Comments
                </label>
                <p>Get notified when someones posts a comment on a posting.</p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <input
                  type="checkbox"
                  id="candidates"
                  name="candidates"
                  checked={formData.candidates}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="candidates" style={{ fontWeight: "bold" }}>
                  Candidates
                </label>
                <p>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <div>
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={formData.offers}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="offers" style={{ fontWeight: "bold" }}>
                  Offers
                </label>
                <p>
                  Get notified when a candidate accepts or rejects an offer.
                </p>
              </div>
            </div>
          </div>

          {/* Radio  */}
          <div>
            <h6 style={{ fontWeight: "bold" }}>Push Notifications</h6>
            <p>These are delivered via SMS to your mobile phone.</p>
            <div className="d-flex gap-3">
              <input
                type="radio"
                id="pushEverything"
                name="pushNotifications"
                value="Everything"
                onChange={changeHandler}
              />
              <label htmlFor="pushEverything" style={{ fontWeight: "bold" }}>
                Everything
              </label>
            </div>
            <div className="d-flex gap-3">
              <input
                type="radio"
                id="same"
                name="pushNotifications"
                value="Same as email"
                onChange={changeHandler}
              />

              <label htmlFor="same" style={{ fontWeight: "bold" }}>
                Same as email
              </label>
            </div>
            <div className="d-flex gap-3">
              <input
                type="radio"
                id="pushNothing"
                name="pushNotifications"
                value="No Push Notifications"
                onChange={changeHandler}
              />

              <label htmlFor="pushNothing" style={{ fontWeight: "bold" }}>
                No Push Notifications
              </label>
            </div>
          </div>
          <Button
            type="submit"
            style={{ width: "150px", marginBlock: "10px", margin: "auto" , zIndex:"10" }}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Loginform;
