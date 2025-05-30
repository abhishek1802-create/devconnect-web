import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../slices/feedSlice";

const NavButtons = () => {
  const [SearchUser, setSearchUser] = useState("");
  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const allFeed = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  const handleSearchButton = () => {
    setIsSearchButtonClicked((prev) => !prev);
  };

  const searchUsersFromFeed = () => {
    if (!isSearchButtonClicked) return;

    const searchedUsers = allFeed.filter((feed) =>
      feed.firstName.includes(SearchUser)
    );
    console.log(searchedUsers);
    dispatch(addFeed(searchedUsers));
  };

  useEffect(() => {
    setTimeout(() => {
      searchUsersFromFeed();
    }, 3000);
  }, [SearchUser]);

  return (
    <>
      {isSearchButtonClicked && (
        <input
          type="text"
          placeholder="Search here..."
          className=" bg-gray-200 outline-none rounded-3xl px-3 py-2 mx-1"
          onChange={(e) => setSearchUser(e.target.value)}
        />
      )}
      <button className="btn btn-ghost btn-circle" onClick={handleSearchButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {" "}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />{" "}
        </svg>
      </button>
    </>
  );
};

export default NavButtons;
