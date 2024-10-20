import React, { useState } from 'react';
import './carouselStyles.scss';
import { DataPlanProps } from "../../modules/planModule/config/config";
import CardPlan from "../cardPlan/CardPlan";

interface CarouselProps {
    plans: DataPlanProps[]
}

const Carousel: React.FC<CarouselProps> = ({ plans }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel__container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
          >
            <CardPlan {...plan} />
          </div>
        ))}
      </div>
      <div className="carousel__controls">
        <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel__indicator">
          {currentIndex + 1} / {plans.length}
        </div>
        <button className="carousel__button carousel__button--next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;