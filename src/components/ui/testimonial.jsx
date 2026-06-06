import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonial = ({ review, image, name, location, icon }) => {
  return (
    <div className="testimonial">
      <p className="testimonial__review">{review}</p>
      <div className="testimonial__info">
        <figure className="testimonial__info__img__wrapper">
          <img src={image} alt="" className="testimonial__info__img" />
        </figure>
        <div className="testimonial__info__profile">
          <h4 className="testimonial__info__name">{name}</h4>
          <h5 className="testimonial__info__location">{location}</h5>
        </div>
        <FontAwesomeIcon
          icon={icon}
          className="testimonial__info__icon"
        />
      </div>
    </div>
  );
};

export default Testimonial;
