import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi i'm HttpError</h1>
          <p>
            I'm a rich scholar, got the city shook <br></br>I make top dollar
            like a white-collar crook <br></br>Keep a white collar, black forces
            on my foot And I stick with my brothers like the pages of uh-huh,
            book
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.discordapp.com/avatars/546690021571297280/52433392d835f179384068db90cb8122.png?size=512"
            alt="HttpError"
          />
        </div>
        <div className="rotating-text">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="
                M 50, 50
                m -40, 0
                a 40,40 0 1,1 80,0
                a 40,40 0 1,1 -80,0"
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Made with Vite+Reactjs
              </textPath>
            </text>
            <text
              x="50"
              y="50"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="star-icon"
            >
              &#9733;
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
