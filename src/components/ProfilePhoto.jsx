import UserImage from "../assets/blank-avatar-photo-place-holder-600nw-1095249842.webp";

const ProfilePhoto = () => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div className="w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80">
        <img
          className="w-full h-full object-cover border border-gray-200 rounded-full"
          src={UserImage}
          alt="User"
        />
      </div>
      <button className="py-2 px-4 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Add Photo
      </button>
    </div>
  );
};

export default ProfilePhoto;
