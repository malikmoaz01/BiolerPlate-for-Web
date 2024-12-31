import React, { useState, useEffect } from "react";
import Logo1 from "../assets/logo-brand.jpg";
import Logo2 from "../assets/logo-brand.jpg";
import Logo3 from "../assets/logo-brand.jpg";
import Logo4 from "../assets/logo-brand.jpg";
import Logo5 from "../assets/logo-brand.jpg";
import Logo6 from "../assets/logo-brand.jpg";
import Logo7 from "../assets/logo-brand.jpg";
import Logo8 from "../assets/logo-brand.jpg";
import Logo9 from "../assets/logo-brand.jpg";
import Logo10 from "../assets/logo-brand.jpg";

const AutoCarousel = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10];
  const infiniteLogos = [...logos, ...logos];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleLogos, setVisibleLogos] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setVisibleLogos(window.innerWidth < 768 ? 2 : 6);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  const translateX = `-${(currentIndex * 100) / visibleLogos}%`;

  return (
    <div className="flex items-center justify-center overflow-hidden w-full h-32 bg-white px-4">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(${translateX})`,
          width: `${(infiniteLogos.length / visibleLogos) * 100}%`,
        }}
      >
        {infiniteLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: `${100 / visibleLogos}%`,
            }}
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-20 w-auto object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
