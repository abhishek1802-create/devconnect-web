import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/constants";
import { removeRequest } from "../slices/requestSlice";

const useAcceptCase = () => {
  const dispatch = useDispatch();

  const getAcceptData = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
      toast.success(res?.data?.message, { position: "top-right" });
    } catch (err) {
      toast.error(err?.message, { position: "top-right" });
      console.error("Error:", err.response || err.message);
    }
  };

  return { getAcceptData };
};

export default useAcceptCase;
