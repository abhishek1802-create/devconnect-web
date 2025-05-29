import axios from "axios";
import { toast } from "react-toastify";
import { addConnections } from "../slices/connectionSlice";
import { useDispatch } from "react-redux";

const useConnections = () => {
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get("http://localhost:7777/user/connections", {
        withCredentials: true,
      });
      toast.success(res?.data?.message, { position: "top-right" });
      dispatch(addConnections(res?.data?.connections));
    } catch (err) {
      console.error("Error: " + err.message);
      toast.error(err?.message, { position: "top-right" });
    }
  };

  return { fetchConnections };
};

export default useConnections;
