/* eslint-disable react/no-unescaped-entities */
import "../styles/MainContent.css";
import BentoCards from "../components/BentoCards";
import ContactCards from "./ContactCards";

const MainContent = () => {
  return (
    <div className="main-content">
      <section id="home">
        <h1 className="hero-txt">Backend and frontend enthusiast.</h1>
        <p>
          Currently a student at Indian Institute of Techonology, Kottayam 🫠
        </p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>Details about some selected projects I have worked on.</p>
        <div className="container">
          <div className="card">
            <div className="logo">S</div>
            <div className="title">Shareload</div>
            <div className="description">
              Remote Download Assistant is a browser extension that lets users
              download files directly to a remote device, such as a home
              computer or cloud server.
            </div>
          </div>
          <div className="card">
            <div className="logo">D</div>
            <div className="title">Doge</div>
            <div className="description">
              A multipurpose discord bot, written in discord.js and hosted on
              replit. It has a variety of features, including moderation, music,
              and fun commands. It is currently being used in a 90+ servers.
            </div>
          </div>
          <div className="card">
            <div className="logo">X</div>
            <div className="title">Dashboard X</div>
            <div className="description">
              A simple site with a dashboard layout, built using HTML, CSS, and
              JavaScript. It has a login page, a dashboard with a sidebar, and a
              main content area.
            </div>
          </div>
          <div className="card">
            <div className="logo">W</div>
            <div className="title">DiscordWebScrapper</div>
            <div className="description">
              A simple web scrapper which scraps the messages from a discord
              server and displays in the console. It is written in python and
              websocket.
            </div>
          </div>
        </div>
      </section>
      <section id="tools">
        <h1>Tools</h1>
        <p>Some tools I use.</p>
        <BentoCards />
      </section>
      <section id="about">
        <h1>About</h1>
        <p>Information about me.</p>
        <p id="about-txt">
          I'm a CSE student with a knack for web development. I've dabbled in
          Python and JavaScript, building small projects here and there. Always
          learning and excited about creating cool stuff!
        </p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>How to contact me.</p>
        <ContactCards />       
      </section>
    </div>
  );
};

export default MainContent;
