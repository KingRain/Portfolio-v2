import '../styles/BentoCards.css';

const BentoCards = () => {
    const tools = [
        {
            name: 'Obsidian',
            description: 'Obsidian is a personal knowledge base and note-taking software application that operates on Markdown files.',
            icon: 'https://forum.obsidian.md/uploads/default/original/3X/a/9/a9a34885821fff8941270ccd6e2ca923c83801b2.png',
        },
        {
            name: 'Visual Studio Code',
            description: 'Source code editor developed by Microsoft for Windows, Linux and macOS.',
            icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png',
        },
        {
            name: 'CLion',
            description: 'A cross-platform IDE for C and C++. It is built on JetBrains\' IntelliJ IDEA software.',
            icon: 'https://icon.icepanel.io/Technology/svg/CLion.svg',
        },
    ];

    return (
        <div className="bento-grid">
            {tools.map((tool, index) => (
                <div key={index} className="bento-card">
                    <img src={tool.icon} alt={tool.name} className="bento-icon" />
                    <div className="bento-content">
                        <h3 className="bento-title">{tool.name}</h3>
                        <p className="bento-description">{tool.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BentoCards;
