import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../slices/feedSlice";
import FeedCard from "./FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedUsers = useSelector((state) => state.feed);

  const getUsersFeed = async () => {
    try {
      const res = await axios.get("http://localhost:7777/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.users));
    } catch (e) {
      console.log("ERROR: " + e.message);
    }
  };

  useEffect(() => {
    getUsersFeed();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {feedUsers?.map((user, index) => (
        <FeedCard key={index} user={user} />
      ))}
    </div>
  );
};

export default Feed;
