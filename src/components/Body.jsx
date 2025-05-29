import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../slices/userSlice";

const Body = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUser = async () => {
    if (user) return;
    try {
      const res = await axios.get("http://localhost:7777/profile/view", {
        withCredentials: true,
      });
      dispatch(adduser(res?.data?.user));
    } catch (err) {
      navigate("/");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body;
