import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm John Doe</h1>
          <p>
            I'm a software engineer with a passion for building beautiful and
            functional web applications. I love working with the latest
            technologies and continuously improving my skills. Let's build
            something amazing together!
          </p>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/150" alt="John Doe" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
