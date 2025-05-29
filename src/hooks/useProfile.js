import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { adduser } from "../slices/userSlice";

const useProfile = () => {
  const dispatch = useDispatch();
  const saveProfile = async (formData) => {
    try {
      const res = await axios.put(
        "http://localhost:7777/profile/edit",
        formData,
        { withCredentials: true }
      );
      toast.success(res?.data?.message, { position: "top-right" });
      dispatch(adduser(res?.data?.user));
    } catch (e) {
      console.log("Error: " + e.message);
      toast.error(e.message, { position: "top-right" });
    }
  };
  return { saveProfile };
};

export default useProfile;
