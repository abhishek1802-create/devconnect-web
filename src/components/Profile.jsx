import { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePhoto from "./ProfilePhoto";
import useProfile from "../hooks/useProfile";
import ProfileForm from "./ProfileForm";

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
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 p-4 border border-gray-200">
        <ProfilePhoto />
        <div className="hidden md:block w-[2px] h-[400px] bg-black"></div>
        <ProfileForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
      </div>
    </>
  );
}
