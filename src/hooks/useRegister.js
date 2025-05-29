import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegister = () => {
  const navigate = useNavigate();
  const getSignUp = async (formData) => {
    try {
      const res = await axios.post("http://localhost:7777/signup", formData, {
        withCredentials: true,
      });
      toast.success(res?.data?.message, { position: "top-right" });
      setTimeout(() => navigate("/"), 2000);
    } catch (e) {
      console.log("Error: " + e.message);
      toast.error(e.message, { position: "top-right" });
    }
  };
  return { getSignUp };
};

export default useRegister;
