import axios from "axios";
import { useDispatch } from "react-redux";
import { getRequests } from "../slices/requestSlice";
import { toast } from "react-toastify";

const useRequests = () => {
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7777/user/requests/recieved",
        { withCredentials: true }
      );
      dispatch(getRequests(res?.data?.requests));
      toast.success(res?.data?.message, { position: "top-right" });
    } catch (e) {
      console.log("Error: " + e.message);
      toast.error(e?.message, { position: "top-right" });
    }
  };

  return { fetchRequests };
};

export default useRequests;
