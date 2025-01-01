import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AchievementCard from './AchievementCard';

const AchievementsCarousel = ({ achievements }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="achievements-carousel px-8">
      <Slider {...settings}>
        {achievements.map((achievement, index) => (
          <div key={index} className="h-full px-5 py-8">
            <AchievementCard {...achievement} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AchievementsCarousel;