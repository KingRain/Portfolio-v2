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
            <section id="shop">
                <h1>Shop</h1>
                <p>Information about the shop.</p>
            </section>
            <section id="notes">
                <h1>Notes</h1>
                <p>Here are some notes.</p>
            </section>
            <section id="tools">
                <h1>Tools</h1>
                <p>Details about tools.</p>
            </section>
            <section id="about">
                <h1>About</h1>
                <p>Information about us.</p>
            </section>
            <section id="contact">
                <h1>Contact</h1>
                <p>How to contact us.</p>
            </section>
        </div>
    );
};

export default MainContent;
