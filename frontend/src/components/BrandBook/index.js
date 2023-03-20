import '../../normalize.css'
import './BrandBook.scss'
import med from '../../img/med.jpg'
import vezi from '../../img/vezi.jpg'
import profi from '../../img/ProfiStyle.jpg'
import soleta from '../../img/Soleta.jpg'
import djeki from '../../img/djeki.jpg'
import van  from  '../../img/VanLaar.jpg'
import beer from '../../img/Beerfolio.jpg'
import elke from '../../img/Elke.jpg'
import megumi from '../../img/megumi.jpg'
import povod from '../../img/povod.jpg'
import zoo from '../../img/zoo.jpg'
import maglena from '../../img/maglena.jpg'
import fish from '../../img/fish.jpg'
import hvost from '../../img/hvost.jpg'
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import React from "react";



const BrandBook = () => {

    return (
      <main className="main-brand__padding">
          <section className="section-product">
              <Helmet>
                <title>VR Брендбук</title>
                <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер " />
            </Helmet>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__5894b8">
                          <h2 className="section-product__heading">
                              Медкабинет
                          </h2>
                          <p className="section-product__title">
                              Принципиально новый формат медицинской организации, в которой в равной степени учитываются интересы и врачей, и пациентов. Междисциплинарная медицина, позволяет вылечить широкий спектр заболеваний в одном месте, без утомительных поисков нужных врачей по всему городу и нескончаемых консультаций.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one"><span>ПОСМОРЕТЬ ПРОЕКТ</span></a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={med} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={vezi} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__6cb079">
                          <h2 className="section-product__heading">
                              ВЕЗИБЕНЗИН
                          </h2>
                          <p className="section-product__title">
                              Мобильный сервис доставки топлива это возможность заправляться в удобном для себя месте.
                              Компания «Везибензин» предоставляет услуги по комплексному топливному обслуживанию корпоративных парков и частных клиентов.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__d53369">
                          <h2 className="section-product__heading">
                              Profi Style
                          </h2>
                          <p className="section-product__title">
                              Сеть магазинов профессиональной косметики.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Profi'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={profi} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={soleta} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__8ec0cc">
                          <h2 className="section-product__heading">
                              Soletta
                          </h2>
                          <p className="section-product__title">
                              Салон обуви и аксессуаров.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Soleta'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__F2994A">
                          <h2 className="section-product__heading">
                              Джекина Доставка
                          </h2>
                          <p className="section-product__title">
                              Доставка суши, сетов, пиццы, wok в Томске – основная специализация компании «Джекина Доставка».
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="https://panorama10.vasiliyrybakov.online" className="btn btn-one">
                                      <span className='section-product__span-Jeki'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={djeki} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse" >
                      <div className="section-product__box-img">
                          <img src={van} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__45665d">
                          <h2 className="section-product__heading">
                              VAN LAAR
                          </h2>
                          <p className="section-product__title">
                              Магазин разливных напитков — VAN LAAR.⁣
                              Бренд, вдохновленный путешествиями и самыми необычными местами земного шара
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__313436">
                          <h2 className="section-product__heading">
                              BEERFOLIO
                          </h2>
                          <p className="section-product__title">
                              Частная пивоварня. Придумано и сварено в Томске.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={beer} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={elke} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__4d5cb3">
                          <h2 className="section-product__heading">
                              ELKE
                          </h2>
                          <p className="section-product__title">
                              На сегодняшний день в ГК "ELKE" входят четыре успешно развивающихся компании: официальные авто-дилеры Toyota, Mazda, Lexus, и Hyundai, а также 12 авто-заправочных станций "ELKE Auto".
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__2C7744">
                          <h2 className="section-product__heading">
                              МЕГУМИ
                          </h2>
                          <p className="section-product__title">
                              Локальный ребрендинг магазина сети "Мегуми".
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={megumi} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={povod} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__d48c2f">
                          <h2 className="section-product__heading">
                              Есть повод!
                          </h2>
                          <p className="section-product__title">
                              Сеть магазинов разливных напитков в Томской области и Республике Алтай. 9 лет на рынке и более 40 магазинов.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__aad647">
                          <h2 className="section-product__heading">
                              Планета ZOO
                          </h2>
                          <p className="section-product__title">
                              Сеть магазинов товаров для животных в Томской области. Сеть насчитывает более 30 магазинов.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Zoo'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={zoo} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={maglena} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__eacda3">
                          <h2 className="section-product__heading">
                              Maglena
                          </h2>
                          <p className="section-product__title">
                              Более 20 лет салон – ателье «Maglena» является престижным салоном в городе Томске. Отличительной чертой ателье является строго ИНДИВИДУАЛЬНЫЙ подход к каждому аспекту ремонта, будь то просто ремонт изделия или полная его реставрация.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Maglena'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items">
                      <div className="section-product__text background-color__a0abb8">
                          <h2 className="section-product__heading">
                              Рыбный остров
                          </h2>
                          <p className="section-product__title">
                              Торговый остров по продаже замороженных и консервированных морепродуктов.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Fish'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                      <div className="section-product__box-img">
                          <img src={fish} alt="" className="section-product__img"/>
                      </div>
                  </div>
              </div>
              <div className="section-product__box">
                  <div className="section-product__box-items section-product__box-reverse">
                      <div className="section-product__box-img">
                          <img src={hvost} alt="" className="section-product__img"/>
                      </div>
                      <div className="section-product__text background-color__ffffff">
                          <h2 className="section-product__heading">
                              ХВОСТИКИ ZOOМИР
                          </h2>
                          <p className="section-product__title">
                              Магазин зоотоваров в Томске.
                          </p>
                          <div className="section-product__about-box">
                              <div className="box-1">
                                  <a href="/interior/" className="btn btn-one">
                                      <span className='section-product__span-Zoomir'>ПОСМОРЕТЬ ПРОЕКТ</span>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>
    )
}
export default BrandBook;