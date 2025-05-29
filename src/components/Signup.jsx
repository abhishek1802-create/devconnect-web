import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useregister from "../hooks/useRegister";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { getSignUp } = useregister();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    getSignUp(formData);
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-12">
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
            <div className="p-4 space-y-4 sm:p-6">
              <h1 className="text-center pb-2 text-2xl/9 font-semibold tracking-tight text-gray-900">
                Create an account
              </h1>
              <form className="space-y-4" onSubmit={onHandleSubmit}>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
