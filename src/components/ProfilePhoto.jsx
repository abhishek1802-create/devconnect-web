import React from "react";
import UserImage from "../assets/blank-avatar-photo-place-holder-600nw-1095249842.webp";

const ProfilePhoto = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="w-80 h-80 ">
        <img
          className="w-full h-full border border-gray-200  rounded-full"
          src={UserImage}
          alt="User Image"
        />
      </div>
      <button className="bg-blue-600 text-white px-2 py-2 rounded-2xl font-semibold hover:bg-blue-700 transition duration-200 shadow-md cursor-pointer">
        Add Photo
      </button>
    </div>
  );
};

export default ProfilePhoto;
