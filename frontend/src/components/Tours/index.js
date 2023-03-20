import tour1 from '../../img/tour1.jpg';
import tour2 from '../../img/tour2.jpg';
import tour3 from '../../img/tour3.jpg';
import tour4 from '../../img/tour4.jpg';
import tour5 from '../../img/tour5.jpg';
import tour6 from '../../img/sirius.jpg';
import tour7 from '../../img/vid.jpg';
import tour8 from '../../img/1&3.jpg';
import tour9 from '../../img/dns_tour.jpg';
import tour10 from '../../img/sibagro.jpg';
import tour11 from '../../img/mir.jpg';
import tour12 from '../../img/biulit.jpeg';
import tour13 from '../../img/lemoineau.jpeg';
import tour14 from '../../img/djekina.jpeg';
import office from '../../img/office.svg'
import home from '../../img/home.png'
import '../../normalize.css';
import './Tours.scss';
import {Helmet} from "react-helmet";
import React from "react";

const Tours = () => {
  return (
      <main>
        <section className="section-tour">
          <Helmet>
            <title>VR 3D туры</title>
            <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер 3D Туры" />
          </Helmet>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour9.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                МАГАЗИН DNS
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour9.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour9} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour11.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ОФИС МИР
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour11.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour11} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour5.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ЗАГОРОДНЫЙ ДОМ ЕЛОВЫЙ
              </a>
              <img className="section-tour__link-img" src={home}/>
            </div>
            <a href="https://tour5.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour5} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour2.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                МАГАЗИН MINIDINO
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour2.vasiliyrybakov.online/"  className="section-tour__box-img">
              <img src={tour2} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour10.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ОФИС СИБАГРО
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour10.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour10} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour1.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ЗАГОРОДНЫЙ ДОМ
              </a>
              <img className="section-tour__link-img" src={home}/>
            </div>
            <a href="https://tour1.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour1} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour3.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                МАГАЗИН СИБИРСКИЙ КЕДР
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour3.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour3} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour8.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ОФИС 1&3
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour8.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour8} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour7.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                SKIN BAR VID
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour7.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour7} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour4.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                МАГАЗИН ВСЕ ХОЧУ
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour4.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour4} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://tour6.vasiliyrybakov.online/" className="section-tour__link" target="_blank">
                ОФИС СИРИУС
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://tour6.vasiliyrybakov.online/" className="section-tour__box-img">
              <img src={tour6} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://panorama9.vasiliyrybakov.online" className="section-tour__link" target="_blank">
                МАГАЗИН LE MOINEAU
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://panorama9.vasiliyrybakov.online" className="section-tour__box-img">
              <img src={tour13} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://panorama8.vasiliyrybakov.online" className="section-tour__link" target="_blank">
                МАГАЗИН БИОЛИТ
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://panorama8.vasiliyrybakov.online" className="section-tour__box-img">
              <img src={tour12} alt="" className="section-tour__img"/>
            </a>
          </div>
          <div className="section-tour__box">
            <div className="section-tour__box-item">
              <a href="https://panorama10.vasiliyrybakov.online" className="section-tour__link" target="_blank">
                ДЖЕКИНА ДОСТАВКА
              </a>
              <img className="section-tour__link-img" src={office}/>
            </div>
            <a href="https://panorama10.vasiliyrybakov.online" className="section-tour__box-img">
              <img src={tour14} alt="" className="section-tour__img"/>
            </a>
          </div>
        </section>
      </main>
  )
}

export default Tours;
