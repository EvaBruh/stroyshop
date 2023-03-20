import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import "swiper/css";
import "./SliderFeedBack.scss";
import 'swiper/scss/mousewheel';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/scss/effect-fade';
import elke from '../../img/logo_elkeFill.png';
import jeki from '../../img/logo_jeki.svg';
import sibagro from '../../img/logo_sibagro.png';
import megumi from '../../img/logo_megumi2.png';

export default function Slider() {

  return (
    <>
      <Swiper
        direction={"horizontal"}
        effect={"fade"}
        slidesPerView={1}
        navigation={true}
        loop={true}
        background={'white'}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        className="mySwiper">
        <SwiperSlide>
              <div className='project'>
                  <div className='project__sibagro'>
                      <img src={sibagro} alt='' className='project__logo'/>
                      <div className='project__text-box'>
                          <h2 className='project__heading'>СИБАГРО</h2>
                          <p className='project__middle-text'>Правильная "технологичность" работы с заказчиком и комфортное общение с каждым сотрудником компании.</p>
                      </div>
                  </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className='project'>
                  <div className='project__jeki'>
                      <img src={jeki} alt='' className='project__logo'/>
                      <div className='project__text-box'>
                          <h2 className='project__heading'>Джекина доставка</h2>
                          <p className='project__middle-text'>Тщательный, поэтапный подход к работе. Очень комфортно было работать.</p>
                      </div>
                  </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className='project'>
                  <div className='project__megumi'>
                      <img src={megumi} alt='' className='project__logo'/>
                      <div className='project__text-box'>
                          <h2 className='project__heading'>МЕГУМИ</h2>
                          <p className='project__middle-text'>Довольна проектом. Благодарю за проделанную работу.</p>
                      </div>
                  </div>
              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className='project'>
                  <div className='project__elke'>
                      <img src={elke} alt='' className='project__logo'/>
                      <div className='project__text-box'>
                          <h2 className='project__heading'>ELKE</h2>
                          <p className='project__middle-text'>Дизайнеры быстро улавливают идею, которую хочет воплотить заказчик
                              и оперативно выдают результат.</p>
                      </div>
                  </div>
              </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}