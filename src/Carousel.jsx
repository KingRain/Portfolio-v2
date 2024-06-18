import React, { useRef, useEffect } from "react";
import Card from "./Cards.jsx";
import "./Carousel.css";

const Carousel = ({ cards }) => {
  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  }, []);

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-track" ref={carouselRef}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
        {cards.map((card, index) => (
          <Card
            key={cards.length + index}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
