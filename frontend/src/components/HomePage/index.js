import React from 'react';
import '../../normalize.css';
import './HomePage.scss';
import VRFace from "../../img/Face-Vr.png";
import axios from "axios";
import {useEffect, useState} from "react";
import CardProject from "../CardProject";
import DNS1 from '../../img/DNS1.jpg';
import SLider from '../SliderFeedBack';
import {reveal} from "../../functions/ScrollAnimation";
import VR1 from '../../img/vr-1.jpg';
import VR2 from '../../img/vr-2.jpg';
import VR3 from '../../img/vr-3.jpg';
import VR4 from '../../img/vr-4.jpg';
import {Helmet} from "react-helmet";
import Counter from "./counter";


const HomePage = () => {
    /* принимаем картинки из API и ставим в src [номер массива нужной]*/


    const [img, setImg] = useState([]);
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get('api/img/');
            setImg(response.data);
        }
        fetchApi()
    }, [])

    /* анимация */
    reveal();

    function CounterBrand({ valBrand, time }) {
        const [ currVal, setCurrVal ] = useState(0);
        valBrand = 1000;
        useEffect(() => {
            currVal !== valBrand && setTimeout(setCurrVal, 9, currVal + 1);
        }, [ currVal ]);
        return <div className="section-achievements__heading-bottom" > { "> " }{currVal}{" идей"}  </div>;
    }
    function CounterM2({ valShops, time }) {
        const [ currVal, setCurrVal ] = useState(0);
        valShops = 80000;
        useEffect(() => {
            currVal !== valShops && setTimeout(setCurrVal, 1, currVal + 1);
        }, [ currVal ]);
        return <div className="section-achievements__heading-bottom" >{ "> " }{currVal}{" м²\n"} </div>;
    }
    function CounterWork({ valWork, time }) {
        const [ currVal, setCurrVal ] = useState(0);
        valWork = 100000;
        useEffect(() => {
            currVal !== valWork && setTimeout(setCurrVal, 1, currVal + 1);
        }, [ currVal ]);
        return <div className="section-achievements__heading-bottom" >{ "> " }{currVal}{" часов"}  </div>;
    }

    return (
      <main>
          <Helmet>
              <title>VR Commercial</title>
              <meta name="description" content="VR Василий Рыбаков Коммерческий дизайн Фасады Брендбук" />
          </Helmet>
          <div className="main-box">
              <div className="main-box__left-img">
                  <img src={img[0]?.image} alt="Брендбук" className="main-box__img"/>
                  <a className="main-box__box-link" href="/brand/">
                      БРЕНДБУК
                  </a>
              </div>
              <div className="main-box__middle-img">
                  <img src={img[1]?.image} alt="Интерьер" className="main-box__img"/>
                  <a className="main-box__box-link" href="/interior/">
                      ИНТЕРЬЕР
                  </a>
              </div>
              <div className="main-box__right-img">
                  <img src={img[2]?.image} alt="Фасад" className="main-box__img"/>
                  <a className="main-box__box-link" href="/facades/">
                      ФАСАД
                  </a>
              </div>
          </div>
          <CardProject />
          <section className="section-about">
              <div className="section-about__left-box ">
                  <img src={VRFace} alt="Василий Рыбаков" className="section-about__img"/>
              </div>
              <div className="section-about__right-box reveal">
                  <h1 className="section-about__heading ">
                      Коммерческий дизайн - это инструмент, создающий условия, при которых продажа будет совершена
                  </h1>
                  <p className="section-about__text">
                      Василий Рыбаков CEO VR Commercial design
                  </p>
              </div>
          </section>

          <section className="section-process">
              <h2 className="section-process__process-heading reveal fade-left">
                  КАК МЫ РАБОТАЕМ?
              </h2>
              <div className="section-process__items-box reveal">
                  <div className="section-process__item-box">
                      <div className="section-process__item-img">
                          <img src={VR1} alt="Встреча, определение цели" className="section-process__img"/>
                      </div>
                      <div className="section-process__item-text">
                      <Counter/>
                          <h2 className="section-process__text-heading">
                              Встреча, определение цели
                          </h2>
                          <p className="section-process__text">
                              Поговорим о вашем бизнесе, совместно сформулируем задачу, расставим приоритеты и определим средства достижения цели. Вам не обязательно представлять конечный результат, достаточно будет описать свои ожидания.
                          </p>
                      </div>
                  </div>
                  <div className="section-process__item-box">
                      <div className="section-process__item-text">
                          <h2 className="section-process__text-heading">
                              Утверждение технического задания
                          </h2>
                          <p className="section-process__text">
                              Мы составляем план работ, просчитываем их объём и стоимость, разрабатываем тактику исполнения. Каждый этап обязательно согласовывается.
                          </p>
                      </div>
                      <div className="section-process__item-img">
                          <img src={VR2} alt="Утверждение технического задания" className="section-process__img"/>
                      </div>
                  </div>
                  <div className="section-process__item-box">
                      <div className="section-process__item-img">
                          <img src={VR3} alt="Реализация" className="section-process__img"/>
                      </div>
                      <div className="section-process__item-text">
                          <h2 className="section-process__text-heading">
                              Реализация
                          </h2>
                          <p className="section-process__text">
                              В ходе выполнения основных работ мы будем находиться в постоянном диалоге. Это позволит вам следить за процессом и своевременно вносить изменения.
                          </p>
                      </div>
                  </div>
                  <div className="section-process__item-box">
                      <div className="section-process__item-text">
                          <h2 className="section-process__text-heading">
                              Запуск проекта
                          </h2>
                          <p className="section-process__text">
                              Самый долгожданный этап, на котором выполненный проект будет сдан вам со всей необходимой технической документацией.
                          </p>
                      </div>
                      <div className="section-process__item-img">
                          <img src={VR4} alt="Запуск проекта" className="section-process__img"/>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section-achievements" id="achievements">
              <img src={DNS1} alt="#" className="section-achievements__img"/>
              <div className="section-achievements__box-text">
                  <div className="section-achievements__heading-box reveal">
                      <h2 className="section-achievements__heading-top">
                          НАШИ ДОСТИЖЕНИЯ В ЦИФРАХ
                      </h2>
                      <h2 className="section-achievements__text-top">
                          Улучшаем продажи вашего бизнеса с 2008 года
                      </h2>
                  </div>
                  <div className="section-achievements__bottom-box reveal">
                      <div className="section-achievements__box">
                          <CounterBrand />
                          <h2 className="section-achievements__text-bottom">
                              предложили для 85 новых брендов
                          </h2>
                      </div>
                      <div className="section-achievements__box">
                          <CounterM2 />
                          <h2 className="section-achievements__text-bottom">
                              проектируем для 90 компаний ежегодно
                          </h2>
                      </div>
                      <div className="section-achievements__box">
                          <CounterWork />
                          <h2 className="section-achievements__text-bottom">
                              в год наши 65 сотрудников заняты любимым делом
                          </h2>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section-why">
              <div className="section-why__box">
                  <div className="section-why__box-top reveal">
                      <h2 className="section-why__heading-top">
                          ПОЧЕМУ ВЫБИРАЮТ НАС?
                      </h2>
                      <p className="section-why__text-top">
                          3 причины выбора нашей компании на основе реальных отзывов
                      </p>
                  </div>
                  <div className="section-why__box-middle reveal">
                      <div className="section-why__middle-item">
                          <h3 className="section-why__heading-middle">
                              Широкие возможности компании
                          </h3>
                          <p className="section-why__text-middle">
                              Дизайн коммерческих помещений и корпоративное брендирование в одной компании. Сопровождение от концепции до реализации вашего проекта.
                          </p>
                      </div>
                      <div className="section-why__middle-item">
                          <h3 className="section-why__heading-middle">
                              Многолетний опыт работы с бизнесом
                          </h3>
                          <p className="section-why__text-middle">
                              Наша команда работает только с проектами для бизнеса. Мы выбрали это направление и развиваем свои навыки наблюдая за успехами наших клиентов.
                          </p>
                      </div>
                      <div className="section-why__middle-item">
                          <h3 className="section-why__heading-middle">
                              Тщательная проработка проектов
                          </h3>
                          <p className="section-why__text-middle">
                              Рациональность и экономическая целесообразность лежат в основе творческого поиска идей. Чем больше мы тратим усилий на поиск решения, тем качественнее результат.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="section-price" id="price" >
              <h2 className="section-price__heading reveal fade-left" >
                  УСЛУГИ И ЦЕНЫ
              </h2>
              <div className="section-price__box reveal" >
                  <div className="section-price__price-box">
                      <div className="section-price__price-interior">
                          <div className="section-price__interior-box">
                              <h2 className="section-price__interior-left">
                                  ИНТЕРЬЕР офисов компаний
                              </h2>
                              <div className="section-price__interior-right">

                              </div>
                          </div>
                          <div className="section-price__box-price">
                              1 000 - 2 500 руб/м2
                          </div>
                      </div>
                      <div className="section-price__price-interior">
                          <div className="section-price__interior-box">
                              <h2 className="section-price__interior-left">
                                  ИНТЕРЬЕР торговых точек
                              </h2>
                              <div className="section-price__interior-right">
                              </div>
                          </div>
                          <div className="section-price__box-price">
                              800 - 3 000 руб/м2
                          </div>
                      </div>
                      <div className="section-price__price-interior">
                          <div className="section-price__interior-box">
                              <h2 className="section-price__interior-left">
                                  ИНТЕРЬЕР кафе, баров, ресторанов
                              </h2>
                              <div className="section-price__interior-right">
                              </div>
                          </div>
                          <div className="section-price__box-price">
                              2 500 - 4 000 руб/м2
                          </div>
                      </div>
                      <div className="section-price__price-interior" >
                          <div className="section-price__interior-box">
                              <h2 className="section-price__interior-left">
                                  ИНТЕРЬЕР медицинских клиник
                              </h2>
                              <div className="section-price__interior-right" >
                              </div>
                          </div>
                          <div className="section-price__box-price">
                              1 200  - 4 000 руб/м2
                          </div>
                      </div>
                      <div className="section-price__price-facade">
                          <div className="section-price__facade-box" >
                              <div className="section-price__facade-left">
                                  ФАСАД
                              </div>
                              <div className="section-price__facade-right">
                              </div>
                          </div>
                          <div className="section-price__box-price">
                              от 80 000 руб
                          </div>
                      </div>
                      <div className="section-price__price-book" >
                          <div className="section-price__book-box">
                              <div className="section-price__book-left">
                                  БРЕНДБУК
                              </div>
                              <div className="section-price__book-right" >
                              </div>
                          </div>
                          <div className="section-price__box-price" id="reviews">
                              от 120 000 руб
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className='section-feedback' >
              <section className='section-feedback' >
                  <SLider/>
              </section>
          </section>
      </main>
    )
}
export default HomePage;