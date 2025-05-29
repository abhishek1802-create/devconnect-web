import userImage from "../assets/blank-avatar-photo-place-holder-600nw-1095249842.webp";

const ChipCard = ({ item, buttons }) => {
  return (
    <div className="w-[75%] border border-gray-200 rounded-3xl bg-gray-50 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md gap-4">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <div className="shrink-0">
          <img
            src={userImage}
            alt="user"
            className="w-16 h-16 border border-gray-300 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">
            {item?.firstName} {item?.lastName}
          </h3>
          <span className="text-sm text-gray-500">{item?.about}</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto justify-start sm:justify-end">
        {buttons &&
          buttons.map((button) => (
            <button
              key={button.id}
              className={`py-2 px-4 text-sm font-medium rounded-lg border border-transparent
              bg-${button.color}-600 text-white hover:bg-${button.color}-700
              focus:outline-none focus:ring-2 focus:ring-${button.color}-500 disabled:opacity-50 cursor-pointer`}
            >
              {button.lable}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ChipCard;
