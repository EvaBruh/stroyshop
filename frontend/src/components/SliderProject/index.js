import './SliderProject.scss'
import React from 'react';
import { Carousel } from 'antd';
import img from "../../img/DNS2.jpg";
import {useLazyGetCarouselQuery} from "../../store/api/carouselApi";
import {useEffect, useState} from "react";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import {reveal} from "../../functions/ScrollAnimation";



const SliderProject = (props) => {

  reveal();

  const [fetchCarousel, { data }] = useLazyGetCarouselQuery();
  const [limit, setLimit] = useState(6);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchCarousel ({limit, offset});

  }, [limit, offset])

  const settings = {
    autoplay: true,
    draggable: true,
    className: "carousel",
  }


  return (
    <div className="carousel reveal">
      <div className="carousel__heading-box">
        <h2 className="section-shops__heading-slide" id={props.data.anchor}>{props.data.name}</h2>
        {props.data.tour.length > 2 && <a href={props.data.tour} className="section-shops__tour-link">СМОТРЕТЬ 3D ТУР</a>}
      </div>
      <Carousel arrows prevArrow={<DoubleLeftOutlined />} nextArrow={<DoubleRightOutlined  />} className="carousel" {...settings}>
        {props.data.src.map((slide) => (
          <div className='carousel-box'>    {/* вот это номер слайда 1*/}
            <img alt="#" src={slide} className="carousel-box__img" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SliderProject;
