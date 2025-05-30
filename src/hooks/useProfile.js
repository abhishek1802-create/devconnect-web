import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { adduser } from "../slices/userSlice";
import { BASE_URL } from "../utils/constants";

const useProfile = () => {
  const dispatch = useDispatch();
  const saveProfile = async (formData) => {
    try {
      const res = await axios.put(BASE_URL + "/profile/edit", formData, {
        withCredentials: true,
      });
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
