import React from "react";

const FeedCard = ({ user }) => {
  const { firstName, lastName, about } = user;
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl w-[280px]">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800">
          {firstName + " " + lastName}
        </h3>
        <p className="mt-1 text-gray-500">{about}</p>
        <div className="flex justify-around items-center gap-2">
          <button
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            href="#"
          >
            Interested
          </button>
          <button
            className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            href="#"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
