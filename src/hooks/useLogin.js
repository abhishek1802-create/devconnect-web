import axios from "axios";
import { useDispatch } from "react-redux";
import { adduser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/constants";

const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getLogin = async (email, password) => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(adduser(res?.data?.user));
      toast.success(res?.data?.message, { position: "top-right" });
      setTimeout(() => navigate("/app/feed"), 2000);
    } catch (err) {
      toast.error(err?.message, { position: "top-right" });
      console.error("Login failed:", err.response || err.message);
    }
  };

  return { getLogin };
};

export default useLogin;
