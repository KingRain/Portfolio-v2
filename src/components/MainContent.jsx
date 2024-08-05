import '../styles/MainContent.css';


const MainContent = () => {
    return (
        <div className="main-content">
            <section id="home">
                <h1 className='hero-txt'>Backend and frontend enthusiast.</h1>
                <p>Currently a student at xyz 🫠</p>
            </section>
            
            <section id="projects">
                <h1 >Projects</h1>
                <p>Details about some selected projects I have worked on.</p>
                <div className="container">
                    <div className="card">
                        <div className="logo">S</div>
                        <div className="title">Shareload</div>
                        <div className="description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore consectetur, assumenda, laudantium distinctio neque expedita deserunt adipisci iure quidem tenetur praesentium, quae maiores fuga. Modi beatae asperiores fugiat repellendus hic.
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo">D</div>
                        <div className="title">Doge</div>
                        <div className="description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur maxime nostrum voluptate non. Illum, itaque! Laudantium porro atque et inventore, sunt repellendus ratione deserunt eligendi quas, doloremque placeat non eos!
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo">X</div>
                        <div className="title">Dashboard X</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum et quidem asperiores ab amet saepe. Sequi laudantium est mollitia nostrum ad culpa reiciendis? Nam quia sequi delectus consequatur? Eum!
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo">W</div>
                        <div className="title">DiscordWebScrapper</div>
                        <div className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quo officia quibusdam nisi omnis ratione porro. Ut quos doloremque, quasi reprehenderit consectetur eius nulla. Error similique distinctio perferendis doloremque nostrum.
                        </div>
                    </div>
                </div>

            </section>
            <section id="tools">
                <h1>Tools</h1>
                <p>Details about tools I use.</p>
            </section>
            <section id="about">
                <h1>About</h1>
                <p>Information about me.</p>
            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>How to contact me.</p>
            </section>
        </div>
    );
};

export default MainContent;
