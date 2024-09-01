import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolder,
  faTools,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


// eslint-disable-next-line react/prop-types
const Sidebar = ({ isVisible, toggleSidebar }) => {
  const handleResumeClick = () => {
    alert("Oops, I havent made my resume yet. But you can check my LinkedIn profile.");
  };

  return (
    <div className={`sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="profile">
        <img
          src="https://cdn.discordapp.com/avatars/546690021571297280/52433392d835f179384068db90cb8122.png?size=512"
          alt="Profile"
          className="profile-image"
        />
        <h2>Sam Joe</h2>
        <p>Fullstack Devoloper</p>
        <button className="res-btn" onClick={handleResumeClick}>Resume</button>
        
      </div>
      <nav className="menu">
        <a href="#home" onClick={toggleSidebar}>
          <FontAwesomeIcon  icon={faHome} className="icon"/>
          Home
        </a>
        <a href="#projects" onClick={toggleSidebar}>
          <FontAwesomeIcon  icon={faFolder} className="icon"/>
          Projects
        </a>
        <a href="#tools" onClick={toggleSidebar} >
          <FontAwesomeIcon  icon={faTools} className="icon"/>
          Tools
        </a>
        <a href="#about" onClick={toggleSidebar} >
          <FontAwesomeIcon  icon={faUser} className="icon"/>
          About
        </a>
        <a href="#contact" onClick={toggleSidebar}>
          <FontAwesomeIcon  icon={faEnvelope} className="icon"/>
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
