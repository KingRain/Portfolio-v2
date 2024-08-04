import '../styles/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <section id="home">
                <h1>Home</h1>
                <p>Welcome to the Home section.</p>
            </section>
            <section id="projects">
                <h1>Projects</h1>
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
