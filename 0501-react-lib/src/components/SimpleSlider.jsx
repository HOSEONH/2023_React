import React, { Component } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {

    const settings = {
      arrows :false ,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    const pics = ["pic2.jpg","pic3.jpg"];

    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div
            style={{
                width: "100%",
                height: "60vh",
                backgroundImage : `url(${require('../img/pic1.png')})`,
                backgroundSize : "cover",
                backgroundPosition: "center"
            }}
            ></div>
          </div>
        
          {
            pics.map((pic)=>(
              <div>
                <div
                style={{
                    width: "100%",
                    height: "60vh",
                    backgroundImage : `url(${require(`../img/${pic}`)})`,
                    backgroundSize : "cover",
                    backgroundPosition: "center"
                }}
                ></div>
              </div>
            ))
          }


        </Slider>
      </div>
    );
  
}