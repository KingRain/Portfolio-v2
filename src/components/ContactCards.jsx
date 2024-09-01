import '../styles/ContactCards.css';

const ContactCards = () => {
    const tools = [
        {
            name: 'Github',
            description: 'github.com/KingRain',
            icon: '../github.svg',
            link: 'https://github.com/KingRain',
        },
        {
            name: 'Discord',
            description: 'httperror.',
            icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png ',
            link: 'https://discord.com/users/546690021571297280',
        },
        {
            name: 'Instagram',
            description: 'samjoe.png',
            icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png ',
            link: 'https://instagram.com/samjoe.png',
        },
    ];

    return (
        <div className="contact-grid">
            {tools.map((tool, index) => (
                <a 
                    key={index} 
                    href={tool.link} 
                    className="contact-card" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={tool.icon} alt={tool.name} className="contact-icon" />
                    <div className="contact-content">
                        <h3 className="contact-title">{tool.name}</h3>
                        <p className="contact-description">{tool.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ContactCards;
