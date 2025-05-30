import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbCloudDataConnection } from "react-icons/tb";
import { LuGitPullRequestArrow } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeuser } from "../slices/userSlice";

const navItems = [
  { type: "link", to: "/app/profile", icon: <CgProfile />, label: "Profile" },
  {
    type: "link",
    to: "/app/connections",
    icon: <TbCloudDataConnection />,
    label: "Connections",
  },
  {
    type: "link",
    to: "/app/requests",
    icon: <LuGitPullRequestArrow />,
    label: "Requests",
  },
  { type: "button", icon: <MdLogout />, label: "Log Out" },
];

const NavItem = ({ type, to, icon, label, handleLogOut }) => {
  return (
    <>
      {type === "link" && (
        <Link to={to} className="flex items-center gap-2">
          {icon}
          <span className="text-[14px] font-semibold">{label}</span>
        </Link>
      )}
      {type === "button" && (
        <button
          onClick={handleLogOut}
          className="flex items-center gap-2 text-[14px] font-semibold cursor-pointer"
        >
          {icon}
          <span>{label}</span>
        </button>
      )}
    </>
  );
};

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        "http://localhost:7777/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeuser());
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="flex flex-col gap-4">
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} handleLogOut={handleLogOut} />
      ))}
    </nav>
  );
};

export default Navigation;
