import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("student");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function submitHandler(e) {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Acount Created Successfully");
    const accountData = {
      ...formData,
    };
    navigate("/dashboard");
    const finalData = {
      ...accountData,
      accountType,
    };
    console.log("Printing Final Account Data");
    console.log(finalData);
  }
  return (
    <div>
      {/* Students-Instructor Tab */}
      <div className="flex bg-richblack-800 max-w-max my-6 rounded-full p-1 gap-x-1">
        <button
          onClick={() => setAccountType("student")}
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Students
        </button>
        <button
          onClick={() => setAccountType("instructor")}
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        {/* first name & Last name */}
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter Fisrt Name"
              value={formData.firstName}
            />
          </label>
          <label className="w-full">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>
        <label className="w-full">
          <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
            Email Address{" "}
          </p>
          <input
            className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Adress"
            value={formData.email}
          />
        </label>
        <div className="flex gap-x-4">
          {/* createPassword and Confirm Password */}
          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Create Password<sup>*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
              className="absolute top-[38px] right-3 z-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
              Confirm Password<sup>*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
              className="absolute top-[38px] right-1.5 z-10 cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
