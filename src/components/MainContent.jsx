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
                <p>Details about projects.</p>
            </section>
            <section id="tools">
                <h1>Tools</h1>
                <p>Details about tools.</p>
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
