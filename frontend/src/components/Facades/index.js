import '../../normalize.css';
import './Facades.scss'
import tusur from  '../../img/tusur.jpg'
import tusur2 from  '../../img/tusur2.jpg'
import tusur3 from  '../../img/tusur3.jpg'
import church from  '../../img/church.jpg'
import church2 from  '../../img/church2.jpg'
import church3 from  '../../img/church3.jpg'
import spar1 from '../../img/SFASAD.jpg'
import spar2 from '../../img/fasadeSpar2.jpg'
import spar3 from '../../img/fasadeSpar3.jpg'
import office1 from '../../img/fasadeOffice1.jpg'
import office2 from '../../img/fasadeOffice2.jpg'
import office3 from '../../img/fasadeOffice3.jpg'
import jiraf from '../../img/jiraf.jpg'
import jiraf2 from '../../img/jiraf2.jpg'
import sibagro1 from '../../img/fasadeSibagro1.jpg'
import sibagro2 from '../../img/fasadeSibagro2.png'
import apparts1 from '../../img/fasadeApparts1.jpg'
import apparts2 from '../../img/fasadeApparts2.jpg'
import business from '../../img/bd.jpg'
import business2 from '../../img/bd2.jpg'
import business3 from '../../img/bd3.jpg'
import {Helmet} from "react-helmet";
import React from "react";

const Facades = () => {
    return (
        <main>
            <section className="product-box">
                <Helmet>
                    <title>VR Фасад</title>
                    <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер " />
                </Helmet>
                <div className="product-box__spar">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__3C3B3F">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        МАГАЗИН SPAR
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                        Разнообразие материалов и пластика на утилитарном фасаде сетевого магазина.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item">
                            <div className="product-box__right-img">
                                <img src={spar1} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={spar2} alt="#" className="product-box__big-img"/>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={spar3} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__3C3B3F">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        МАГАЗИН SPAR
                                    </h2>
                                    <p className="product-box__about">
                                        Тесная взаимосвязь фасада и благоустройства привлекает положительное внимание.
                                        Так решается задача внедрения коммерческого объекта в сложившуюся городскую среду.
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box__office">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__606c88">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        ОФИСНОЕ ЗДАНИЕ
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                        Реконструкция фасада времён СССР. Баланс реновации, оптимального бюджета и дизайна.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item">
                            <div className="product-box__right-img">
                                <img src={office1} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={office2} alt="#" className="product-box__big-img"/>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={office3} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__606c88">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        ОФИСНОЕ ЗДАНИЕ
                                    </h2>
                                    <p className="product-box__about">
                                        Контрастное сочетание современного алюминия и традиционной штукатурки.
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box__electric">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__457fca">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        БАТУТНЫЙ ЦЕНТР ЖИРАФ
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__457fca">
                            <div className="product-box__right-img">
                                <img src={jiraf} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={jiraf2} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__457fca">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        БАТУТНЫЙ ЦЕНТР ЖИРАФ
                                    </h2>
                                    <p className="product-box__about">
                                        Объемно-пространственное решение объекта в стиле минимализма соответствует духу
                                        современных общественных пространств
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box__sibagro">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={sibagro1} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__093028">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        СИБАГРО
                                    </h2>
                                    <p className="product-box__about">
                                        Масштабное брендирование холдинга - это новый шаг для компании.
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="https://tour10.vasiliyrybakov.online/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={sibagro2} alt="#" className="product-box__big-img"/>
                    </div>
                </div>
                <div className="product-box__apparts">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={apparts1} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__536976">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        3 ЖИЛЫХ ДОМА
                                    </h2>
                                    <p className="product-box__about">
                                        Нейтральный дизайн в стиле европейского урбанизма. Внимание к жилой среде и коммерческой недвижимости.
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={apparts2} alt="#" className="product-box__big-img"/>
                    </div>
                </div>
                <div className="product-box__tusur">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__919e6a">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        IT - ДЕРЕВНЯ
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item">
                            <div className="product-box__right-img">
                                <img src={tusur} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={tusur2} alt="#" className="product-box__big-img"/>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={tusur3} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__919e6a">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        IT - ДЕРЕВНЯ
                                    </h2>
                                    <p className="product-box__about">
                                        Концепция малоэтажной и среднеэтажной застройки современного жилого комплекса
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box__church">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__8ebce9">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        ЦЕРКОВЬ ПРОСЛАВЛЕНИЯ
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item">
                            <div className="product-box__right-img">
                                <img src={church} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={church2} alt="#" className="product-box__big-img"/>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={church3} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__8ebce9">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        ЦЕРКОВЬ ПРОСЛАВЛЕНИЯ
                                    </h2>
                                    <p className="product-box__about">
                                        Реконструкция производственного комплекса в конфессиональный объект
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-box__business">
                    <div className="product-box__double-box">
                        <div className="product-box__left-item background-color__d4d7df">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        БИЗНЕС - ЦЕНТР
                                    </h2>
                                </div>
                                <div className="product-box__about-box">
                                    <p className="product-box__about">
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="product-box__right-item">
                            <div className="product-box__right-img">
                                <img src={business} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-box__main-img">
                        <img src={business2} alt="#" className="product-box__big-img"/>
                    </div>
                    <div className="product-box__double-box">
                        <div className="product-box__left-item">
                            <div className="product-box__left-img">
                                <img src={business3} alt="#" className="product-box__img"/>
                            </div>
                        </div>
                        <div className="product-box__right-item background-color__d4d7df">
                            <div className="product-box__text-box">
                                <div className="product-box__heading-box">
                                    <h2 className="product-box__heading">
                                        БИЗНЕС - ЦЕНТР
                                    </h2>
                                    <p className="product-box__about">
                                        Реконструкция гаража в арендопригодные площади
                                    </p>
                                </div>
                                <div className="product-box__about-box">
                                    <div className="box-1">
                                        <a href="/interior/" className="btn btn-one">
                                            <span>ПОСМОРЕТЬ ПРОЕКТ</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

export default Facades;