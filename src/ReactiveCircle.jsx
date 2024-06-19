import React, { useEffect, useRef } from "react";
import "./ReactiveCircle.css";

const ReactiveCircle = () => {
  const circleRef = useRef(null);
  const dotRef = useRef(null);
  const requestRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = () => {
      positionRef.current.x +=
        (mouseRef.current.x - positionRef.current.x) * 0.1;
      positionRef.current.y +=
        (mouseRef.current.y - positionRef.current.y) * 0.1;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${
          positionRef.current.x - 25
        }px, ${positionRef.current.y - 25}px)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${
          mouseRef.current.x - 3
        }px, ${mouseRef.current.y - 3}px)`;
      }

      requestRef.current = requestAnimationFrame(updatePosition);
    };

    requestRef.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="reactive-circle" ref={circleRef}></div>
      <div className="dot" ref={dotRef}></div>
    </>
  );
};

export default ReactiveCircle;
