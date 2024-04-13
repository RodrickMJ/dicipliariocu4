import React from "react";
import Slider from "react-slick";
import { baseUrl } from "../../../utils/baseUrl";
import './vistaProdu.css';

function VistaProdu() {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${baseUrl[i].baseUrl}`} alt={`Imagen ${i+1}`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container">
    <Slider {...settings} vertical className="xd">
      {baseUrl.map((image, index) => (
        <div key={index} className="xd2">
          <img src={image.baseUrl} alt={`Imagen ${index+1}`} />
        </div>
      ))}
    </Slider>
  </div>
  );
}

export default VistaProdu;
