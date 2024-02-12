import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? checked : value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={submitHandler} className="w-[700px] bg-white p-6 rounded-md shadow-md">
        <label htmlFor="firstName" className="block text-sm font-medium  text-gray-700">First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Saurabh"
          value={formData.firstName}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />
        <label htmlFor="lastName" className="block mt-4 text-sm font-medium text-gray-700">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Pal"
          value={formData.lastName}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />
        <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@example.com"
          value={formData.email}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />
        <label htmlFor="country" className="block mt-4 text-sm font-medium text-gray-700">Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        >
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />
        <label htmlFor="streetAddress" className="block mt-4 text-sm font-medium text-gray-700" >Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25C"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />

        <label htmlFor="city" className="block mt-4 text-sm font-medium text-gray-700">City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Rudrapur"
          value={formData.city}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />

        <label htmlFor="state" className="block mt-4 text-sm font-medium text-gray-700">State/Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Uttarakhand"
          value={formData.state}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />
        <label htmlFor="postalCode" className="w-full mt-1 p-2 outline-none border rounded-md">Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="263153"
          value={formData.postalCode}
          onChange={changeHandler}
          className="w-full mt-1 p-2 outline-none border rounded-md"
        />
        <br />
        <br/>
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-gray-700">By Email</legend>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.checked}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="comments"  className="text-sm font-medium text-gray-700">Comments</label>
              <p className="text-sm text-gray-600">Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="candidates" className="text-sm font-medium text-gray-700">Candidates</label>
              <p className="text-sm text-gray-600">Get notified when a candidate applies for a job.</p>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
              className="mr-2"
            />
            <div>
              <label htmlFor="offers" className="text-sm font-medium text-gray-700">offers</label>
              <p className="text-sm text-gray-600">Get notified when a candidate accespts or rejects an offer.</p>
            </div>
          </div>
        </fieldset>
         <br/><br/>
        <fieldset className="mt-4">
          <legend className="text-sm font-medium text-gray-700">Push Notifications</legend>
          <p className="text-sm text-gray-600">These are delievered via SMS to your mobile phones.</p>
         <div className="mt-2">
          <input
            type="radio"
            name="pushNotifications"
            id="pushEverything"
            value="Everything"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushEverything" className="text-sm font-medium text-gray-700">Everything</label>
         <br/>
          <input
            type="radio"
            name="pushNotifications"
            id="pushEmail"
            value="Same as Email"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushEmail" className="text-sm font-medium text-gray-700">Same as Email</label>
          <br/>
          <input
            type="radio"
            name="pushNotifications"
            id="pushNothing"
            value="No push Notification"
            onChange={changeHandler}
            className="mr-2"
          />
          <label htmlFor="pushNothing" className="text-sm font-medium text-gray-700">No push Notification</label>
          </div>
        </fieldset>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </form>
    </div>
  );
}

export default App;
