import { useEffect, useState } from "react";
import "../styles/Hero.css";

function Hero() {
  const slides = [
    "/assets/hands.jpg",
    "/assets/hands.jpg",
    "/assets/hands.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${slides[currentSlide]})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>JOIN CAMPDAVID</h1>

        <p className="desc">
          Raise men. Shape nations. Step into purpose through discipleship and
          mission.
        </p>

        <button className="cta">APPLY NOW</button>

        {/* Slider Dots */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                currentSlide === index ? "active-dot" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
