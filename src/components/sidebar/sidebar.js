import React from "react";
import "./sidebar.css";
import HighFly from './HighFly.jpeg';
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
// import apiClient from "../../spotify";

const Sidebar = () => {
  // const [image, setImage] = useState(
  //   "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
  // );
  // useEffect(() => {
  //   apiClient.get("me").then((response) => {
  //     setImage(response.data.images[0].url);
  //   });
  // }, []);

  return (
    <div className="sidebar-container">
      {/* <img src={image} className="profile-img" alt="Profile" /> */}
      <img src={HighFly} className="profile-img" alt="Profile" />
      {/* <p className='p'>HighFly</p> */}
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
};

export default Sidebar;
