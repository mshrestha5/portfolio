import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "dgh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit iste",
  },

  {
    avatar: AVTR2,
    name: "dgh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit iste",
  },

  {
    avatar: AVTR3,
    name: "dgh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit iste",
  },

  {
    avatar: AVTR4,
    name: "dgh",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime sit iste",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="c__avatar">
                <img src={avatar} alt="sth" />
              </div>
              <h5 className="c__name">{name}</h5>
              <small className="c__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
