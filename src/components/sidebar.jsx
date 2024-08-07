import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faTools,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://cdn.discordapp.com/avatars/546690021571297280/52433392d835f179384068db90cb8122.png?size=512"
          alt="Profile"
          className="profile-image"
        />
        <h2>Sam Joe</h2>
        <p>Fullstack Devoloper</p>
      </div>
      <nav className="menu">
        <a href="#home">
          <FontAwesomeIcon icon={faHome} className="icon"/>
          Home
        </a>
        <a href="#projects">
          <FontAwesomeIcon icon={faFolder} className="icon"/>
          Projects
        </a>
        <a href="#tools">
          <FontAwesomeIcon icon={faTools} className="icon"/>
          Tools
        </a>
        <a href="#about">
          <FontAwesomeIcon icon={faUser} className="icon"/>
          About
        </a>
        <a href="#contact">
          <FontAwesomeIcon icon={faEnvelope} className="icon"/>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
