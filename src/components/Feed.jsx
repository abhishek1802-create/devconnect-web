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
    <div className="flex flex-start gap-7 m-2 px-5 flex-wrap ">
      {feedUsers
        ? feedUsers.map((user, index) => {
            return <FeedCard key={index} user={user} />;
          })
        : null}
    </div>
  );
};

export default Feed;
