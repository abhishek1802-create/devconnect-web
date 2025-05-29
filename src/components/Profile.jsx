import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePhoto from "./ProfilePhoto";
import useProfile from "../hooks/useProfile";

export default function Profile() {
  const user = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    age: user?.age || "",
    about: user?.about || "",
    skills: user?.skills || "",
    gender: user?.gender || "",
  });
  const { saveProfile } = useProfile();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    saveProfile(formData);
  };

  return (
    <>
      <ToastContainer />
      <div className=" w-full flex flex-row justify-center items-center gap-2">
        <ProfilePhoto />
        <div className="w-[600px] mt-5 mb-5 p-4 bg-white shadow-xl rounded-2xl border border-gray-200">
          <h2 className="text-center text-2xl/9 mb-3 font-semibold tracking-tight text-gray-900">
            Update Profile
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="age"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label
                  htmlFor="skills"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="about"
                  className="block text-gray-700 font-medium mb-1"
                >
                  About
                </label>
                <textarea
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-2 py-2 rounded-2xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md cursor-pointer"
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
