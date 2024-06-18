import "./Cards.css";

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="project-title">{title}</h2>
      <p className="project-details">{content}</p>
      <div className="project-buttons">
        <button className="btn view-btn">View Project</button>
        <button className="btn source-btn">Source Code</button>
      </div>
    </div>
  );
};

export default Card;
