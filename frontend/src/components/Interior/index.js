import '../../normalize.css';
import './Interior.scss';
import img from "../../img/DNS2.jpg";
import SliderProject from "../SliderProject/";
import React from "react";
import {useState} from "react";

import shopsCarousel1slide1 from "../../img/sliders/shops/crazyPodarki/crazypodarki1.jpg"
import shopsCarousel1slide2 from "../../img/sliders/shops/crazyPodarki/crazypodarki2.jpg"
import shopsCarousel1slide3 from "../../img/sliders/shops/crazyPodarki/crazypodarki3.jpg"
import shopsCarousel1slide5 from "../../img/sliders/shops/crazyPodarki/crazypodarki5.jpg"
import shopsCarousel1slide6 from "../../img/sliders/shops/crazyPodarki/crazypodarki6.jpg"
import shopsCarousel2slide1 from "../../img/sliders/shops/efirHome/efirhome1.jpg"
import shopsCarousel2slide2 from "../../img/sliders/shops/efirHome/efirhome2.jpg"
import shopsCarousel2slide3 from "../../img/sliders/shops/efirHome/efirhome3.jpg"
import shopsCarousel2slide4 from "../../img/sliders/shops/efirHome/efirhome4.jpg"
import shopsCarousel2slide5 from "../../img/sliders/shops/efirHome/efirhome5.jpg"
import shopsCarousel2slide6 from "../../img/sliders/shops/efirHome/efirhome6.jpg"
import shopsCarousel2slide7 from "../../img/sliders/shops/efirHome/efirhome7.jpg"
import shopsCarousel2slide8 from "../../img/sliders/shops/efirHome/efirhome8.jpg"
import shopsCarousel3slide1 from "../../img/sliders/shops/koreaMarket/koreamarket1.jpg"
import shopsCarousel3slide2 from "../../img/sliders/shops/koreaMarket/koreamarket2.jpg"
import shopsCarousel3slide3 from "../../img/sliders/shops/koreaMarket/koreamarket3.jpg"
import shopsCarousel3slide4 from "../../img/sliders/shops/koreaMarket/koreamarket4.jpg"
import shopsCarousel3slide5 from "../../img/sliders/shops/koreaMarket/koreamarket5.jpg"
import shopsCarousel3slide6 from "../../img/sliders/shops/koreaMarket/koreamarket6.jpg"
import shopsCarousel3slide7 from "../../img/sliders/shops/koreaMarket/koreamarket7.jpg"
import shopsCarousel4slide1 from "../../img/sliders/shops/megumi/megumi1.jpg"
import shopsCarousel4slide2 from "../../img/sliders/shops/megumi/megum2.jpg"
import shopsCarousel4slide3 from "../../img/sliders/shops/megumi/megum3.jpg"
import shopsCarousel4slide4 from "../../img/sliders/shops/megumi/megum4.jpg"
import shopsCarousel4slide5 from "../../img/sliders/shops/megumi/megumi5.jpg"
import shopsCarousel4slide6 from "../../img/sliders/shops/megumi/megumi6.jpg"
import shopsCarousel5slide1 from "../../img/sliders/shops/minidino/minidino1.jpg"
import shopsCarousel5slide2 from "../../img/sliders/shops/minidino/minidino2.jpg"
import shopsCarousel5slide3 from "../../img/sliders/shops/minidino/minidino3.jpg"
import shopsCarousel5slide4 from "../../img/sliders/shops/minidino/minidino4.jpg"
import shopsCarousel5slide5 from "../../img/sliders/shops/minidino/minidino5.jpg"
import shopsCarousel6slide1 from "../../img/sliders/shops/planetElectrik/planetElectrik1.jpg"
import shopsCarousel6slide2 from "../../img/sliders/shops/planetElectrik/planetElectrik2.jpg"
import shopsCarousel6slide3 from "../../img/sliders/shops/planetElectrik/planetElectrik3.jpg"
import shopsCarousel7slide1 from "../../img/sliders/shops/profiStyle/profistyle1.jpg"
import shopsCarousel7slide2 from "../../img/sliders/shops/profiStyle/profistyle2.jpg"
import shopsCarousel7slide3 from "../../img/sliders/shops/profiStyle/profistyle3.jpg"
import shopsCarousel7slide4 from "../../img/sliders/shops/profiStyle/profistyle4.jpg"
import shopsCarousel7slide5 from "../../img/sliders/shops/profiStyle/profistyle5.jpg"
import shopsCarousel7slide6 from "../../img/sliders/shops/profiStyle/profistyle6.jpg"
import shopsCarousel7slide7 from "../../img/sliders/shops/profiStyle/profistyle7.jpg"
import shopsCarousel7slide8 from "../../img/sliders/shops/profiStyle/profistyle8.jpg"
import shopsCarousel8slide1 from "../../img/sliders/shops/soleta/soleta1.jpg"
import shopsCarousel8slide2 from "../../img/sliders/shops/soleta/soleta2.jpg"
import shopsCarousel8slide3 from "../../img/sliders/shops/soleta/soleta3.jpg"
import shopsCarousel8slide4 from "../../img/sliders/shops/soleta/soleta4.jpg"
import shopsCarousel8slide5 from "../../img/sliders/shops/soleta/soleta5.jpg"
import shopsCarousel8slide6 from "../../img/sliders/shops/soleta/soleta6.jpg"

import retailCarousel1slide1 from "../../img/sliders/retail/dns/dns1.jpg"
import retailCarousel1slide2 from "../../img/sliders/retail/dns/dns2.jpg"
import retailCarousel1slide3 from "../../img/sliders/retail/dns/dns3.jpg"
import retailCarousel1slide4 from "../../img/sliders/retail/dns/dns4.jpg"
import retailCarousel1slide5 from "../../img/sliders/retail/dns/dns5.jpg"
import retailCarousel1slide6 from "../../img/sliders/retail/dns/dns6.jpg"
import retailCarousel1slide7 from "../../img/sliders/retail/dns/dns7.jpg"
import retailCarousel1slide8 from "../../img/sliders/retail/dns/dns8.jpg"
import retailCarousel1slide9 from "../../img/sliders/retail/dns/dns9.jpg"
import retailCarousel1slide10 from "../../img/sliders/retail/dns/dns10.jpg"
import retailCarousel1slide11 from "../../img/sliders/retail/dns/dns11.jpg"
import retailCarousel2slide1 from "../../img/sliders/retail/elke/elke1.jpg"
import retailCarousel2slide2 from "../../img/sliders/retail/elke/elke2.jpg"
import retailCarousel2slide3 from "../../img/sliders/retail/elke/elke3.jpg"
import retailCarousel2slide4 from "../../img/sliders/retail/elke/elke4.jpg"
import retailCarousel2slide5 from "../../img/sliders/retail/elke/elke5.jpg"
import retailCarousel2slide6 from "../../img/sliders/retail/elke/elke6.jpg"
import retailCarousel2slide7 from "../../img/sliders/retail/elke/elke7.jpg"
import retailCarousel2slide8 from "../../img/sliders/retail/elke/elke8.jpg"
import retailCarousel3slide1 from "../../img/sliders/retail/spar/spar1.jpg"
import retailCarousel3slide2 from "../../img/sliders/retail/spar/spar2.jpg"
import retailCarousel3slide3 from "../../img/sliders/retail/spar/spar3.jpg"
import retailCarousel3slide4 from "../../img/sliders/retail/spar/spar4.jpg"
import retailCarousel3slide5 from "../../img/sliders/retail/spar/spar5.jpg"
import retailCarousel3slide6 from "../../img/sliders/retail/spar/spar6.jpg"
import retailCarousel3slide7 from "../../img/sliders/retail/spar/spar7.jpg"
import retailCarousel3slide8 from "../../img/sliders/retail/spar/spar8.jpg"
import retailCarousel3slide9 from "../../img/sliders/retail/spar/spar9.jpg"
import retailCarousel3slide10 from "../../img/sliders/retail/spar/spar10.jpg"

import cafeCarousel1slide1 from "../../img/sliders/cafe/54A4/54А41.jpg"
import cafeCarousel1slide2 from "../../img/sliders/cafe/54A4/54А42.jpg"
import cafeCarousel1slide3 from "../../img/sliders/cafe/54A4/54А43.jpg"
import cafeCarousel1slide4 from "../../img/sliders/cafe/54A4/54А44.jpg"
import cafeCarousel1slide5 from "../../img/sliders/cafe/54A4/54А45.jpg"
import cafeCarousel1slide6 from "../../img/sliders/cafe/54A4/54А46.jpg"
import cafeCarousel1slide7 from "../../img/sliders/cafe/54A4/54А47.jpg"
import cafeCarousel2slide1 from "../../img/sliders/cafe/beerfolio/beerfolio1.jpg"
import cafeCarousel2slide2 from "../../img/sliders/cafe/beerfolio/beerfolio2.jpg"
import cafeCarousel2slide3 from "../../img/sliders/cafe/beerfolio/beerfolio3.jpg"
import cafeCarousel2slide4 from "../../img/sliders/cafe/beerfolio/beerfolio4.jpg"
import cafeCarousel2slide5 from "../../img/sliders/cafe/beerfolio/beerfolio5.jpg"
import cafeCarousel2slide6 from "../../img/sliders/cafe/beerfolio/beerfolio6.jpg"
import cafeCarousel2slide7 from "../../img/sliders/cafe/beerfolio/beerfolio7.jpg"
import cafeCarousel2slide8 from "../../img/sliders/cafe/beerfolio/beerfolio8.jpg"
import cafeCarousel2slide9 from "../../img/sliders/cafe/beerfolio/beerfolio9.jpg"
import cafeCarousel2slide10 from "../../img/sliders/cafe/beerfolio/beerfolio10.jpg"
import cafeCarousel3slide1 from "../../img/sliders/cafe/meetUp/meetup1.jpg"
import cafeCarousel3slide2 from "../../img/sliders/cafe/meetUp/meetup2.jpg"
import cafeCarousel3slide3 from "../../img/sliders/cafe/meetUp/meetup3.jpg"
import cafeCarousel3slide4 from "../../img/sliders/cafe/meetUp/meetup4.jpg"
import cafeCarousel3slide5 from "../../img/sliders/cafe/meetUp/meetup5.jpg"
import cafeCarousel3slide6 from "../../img/sliders/cafe/meetUp/meetup6.jpg"
import cafeCarousel4slide1 from "../../img/sliders/cafe/vanLar/vanlar1.jpg"
import cafeCarousel4slide2 from "../../img/sliders/cafe/vanLar/vanlar2.jpg"
import cafeCarousel4slide3 from "../../img/sliders/cafe/vanLar/vanlar3.jpg"
import cafeCarousel4slide4 from "../../img/sliders/cafe/vanLar/vanlar4.jpg"
import cafeCarousel4slide5 from "../../img/sliders/cafe/vanLar/vanlar5.jpg"
import cafeCarousel4slide6 from "../../img/sliders/cafe/vanLar/vanlar6.jpg"
import cafeCarousel4slide7 from "../../img/sliders/cafe/vanLar/vanlar7.jpg"
import cafeCarousel4slide8 from "../../img/sliders/cafe/vanLar/vanlar8.jpg"
import cafeCarousel4slide9 from "../../img/sliders/cafe/vanLar/vanlar9.jpg"
import cafeCarousel4slide10 from "../../img/sliders/cafe/vanLar/vanlar10.jpg"

import companyCarousel1slide1 from "../../img/sliders/company/rubius/rubius1.jpg"
import companyCarousel1slide2 from "../../img/sliders/company/rubius/rubius2.jpg"
import companyCarousel1slide3 from "../../img/sliders/company/rubius/rubius3.jpg"
import companyCarousel1slide4 from "../../img/sliders/company/rubius/rubius4.jpg"
import companyCarousel1slide5 from "../../img/sliders/company/rubius/rubius5.jpg"
import companyCarousel1slide6 from "../../img/sliders/company/rubius/rubius6.jpg"
import companyCarousel1slide7 from "../../img/sliders/company/rubius/rubius7.jpg"
import companyCarousel1slide8 from "../../img/sliders/company/rubius/rubius8.jpg"
import companyCarousel1slide9 from "../../img/sliders/company/rubius/rubius9.jpg"
import companyCarousel1slide10 from "../../img/sliders/company/rubius/rubius10.jpg"
import companyCarousel2slide1 from "../../img/sliders/company/yagodnoe/yagodnoe1.jpg"
import companyCarousel2slide2 from "../../img/sliders/company/yagodnoe/yagodnoe2.jpg"
import companyCarousel2slide3 from "../../img/sliders/company/yagodnoe/yagodnoe3.jpg"
import companyCarousel2slide4 from "../../img/sliders/company/yagodnoe/yagodnoe4.jpg"

import saleCarousel1slide1 from "../../img/sliders/sale/1&3/1&31.jpg"
import saleCarousel1slide2 from "../../img/sliders/sale/1&3/1&32.jpg"
import saleCarousel1slide3 from "../../img/sliders/sale/1&3/1&33.jpg"
import saleCarousel1slide4 from "../../img/sliders/sale/1&3/1&34.jpg"
import saleCarousel1slide5 from "../../img/sliders/sale/1&3/1&35.jpg"
import saleCarousel1slide6 from "../../img/sliders/sale/1&3/1&36.jpg"
import saleCarousel1slide7 from "../../img/sliders/sale/1&3/1&37.jpg"
import saleCarousel1slide8 from "../../img/sliders/sale/1&3/1&38.jpg"
import saleCarousel1slide9 from "../../img/sliders/sale/1&3/1&39.jpg"
import saleCarousel2slide1 from "../../img/sliders/sale/mihailovskiu/mihailovskiu1.jpg"
import saleCarousel2slide2 from "../../img/sliders/sale/mihailovskiu/mihailovskiu2.jpg"
import saleCarousel2slide3 from "../../img/sliders/sale/mihailovskiu/mihailovskiu3.jpg"
import saleCarousel2slide4 from "../../img/sliders/sale/mihailovskiu/mihailovskiu4.jpg"
import saleCarousel2slide5 from "../../img/sliders/sale/mihailovskiu/mihailovskiu5.jpg"
import saleCarousel2slide6 from "../../img/sliders/sale/mihailovskiu/mihailovskiu6.jpg"

import professionalCarousel1slide1 from "../../img/sliders/professional/maglena/maglena1.jpg"
import professionalCarousel1slide2 from "../../img/sliders/professional/maglena/maglena2.jpg"
import professionalCarousel1slide3 from "../../img/sliders/professional/maglena/maglena3.jpg"
import professionalCarousel1slide4 from "../../img/sliders/professional/maglena/maglena4.jpg"
import professionalCarousel1slide5 from "../../img/sliders/professional/maglena/maglena5.jpg"
import professionalCarousel2slide1 from "../../img/sliders/professional/medCabinet/medcabinet1.jpg"
import professionalCarousel2slide2 from "../../img/sliders/professional/medCabinet/medcabinet2.jpg"
import professionalCarousel2slide3 from "../../img/sliders/professional/medCabinet/medcabinet3.jpg"
import professionalCarousel2slide4 from "../../img/sliders/professional/medCabinet/medcabinet4.jpg"
import professionalCarousel2slide5 from "../../img/sliders/professional/medCabinet/medcabinet6.jpg"
import professionalCarousel2slide6 from "../../img/sliders/professional/medCabinet/medcabinet7.jpg"
import professionalCarousel2slide7 from "../../img/sliders/professional/medCabinet/medcabinet8.jpg"
import {reveal} from "../../functions/ScrollAnimation";
import {Helmet} from "react-helmet";

const Interior = (props) => {
    reveal();
    const [shopsArray, setShopsArray] = useState ([
        {
            id: 2,
            name: 'ЭФИРНЫЙ ДОМ',
            src: [shopsCarousel2slide1, shopsCarousel2slide2, shopsCarousel2slide3, shopsCarousel2slide4, shopsCarousel2slide5, shopsCarousel2slide6, shopsCarousel2slide7, shopsCarousel2slide8 ],
            tour: ''

        },
        {
            id: 5,
            name: 'MINIDINO',
            src: [shopsCarousel5slide1, shopsCarousel5slide2, shopsCarousel5slide3, shopsCarousel5slide4, shopsCarousel5slide5, ],
            tour: 'https://tour2.vasiliyrybakov.online/'
        },
        {
            id: 8,
            name: 'SOLETTA',
            src: [shopsCarousel8slide1, shopsCarousel8slide2, shopsCarousel8slide3, shopsCarousel8slide4, shopsCarousel8slide5, shopsCarousel8slide6],
            tour: '',
            anchor: 'soletta'
        },
        {
            id: 3,
            name: 'KOREA MARKET',
            src: [shopsCarousel3slide1, shopsCarousel3slide2, shopsCarousel3slide3, shopsCarousel3slide4, shopsCarousel3slide5, shopsCarousel3slide6, shopsCarousel3slide7],
            tour: ''
        },
        {
            id: 4,
            name: 'МЕГУМИ',
            src: [shopsCarousel4slide1, shopsCarousel4slide2, shopsCarousel4slide3, shopsCarousel4slide4, shopsCarousel4slide5, shopsCarousel4slide6, ],
            tour: '',
            anchor: 'megumi'
        },

        // {
        //     id: 6,
        //     name: 'Планета ЭЛЕКТРИКА',
        //     src: [shopsCarousel6slide1, shopsCarousel6slide2, shopsCarousel6slide3,],
        //     tour: ''
        // },
        {
            id: 7,
            name: 'PROFI-STYLE',
            src: [shopsCarousel7slide1, shopsCarousel7slide2, shopsCarousel7slide3, shopsCarousel7slide4, shopsCarousel7slide5, shopsCarousel7slide6, shopsCarousel7slide7, shopsCarousel7slide8],
            tour: '',
            anchor: 'profistyle'
        },
        {
            id: 1,
            name: 'CRAZY ПОДАРКИ',
            src: [shopsCarousel1slide1, shopsCarousel1slide2, shopsCarousel1slide3, shopsCarousel1slide5, shopsCarousel1slide6],
            tour: ''
        },


    ])
    const [retailArray, setRetailArray] = useState ([
        {
            id: 1,
            name: 'DNS',
            src: [retailCarousel1slide1, retailCarousel1slide2, retailCarousel1slide3, retailCarousel1slide4, retailCarousel1slide5, retailCarousel1slide6, retailCarousel1slide7, retailCarousel1slide8, retailCarousel1slide9, retailCarousel1slide10, retailCarousel1slide11],
            tour: 'https://tour9.vasiliyrybakov.online/'
        },
        {
            id: 2,
            name: 'ELKE',
            src: [retailCarousel2slide1, retailCarousel2slide2, retailCarousel2slide3, retailCarousel2slide4, retailCarousel2slide5],
            tour: '',
            anchor: 'elke'
        },
        // {
        //     id: 3,
        //     name: 'SPAR',
        //     src: [retailCarousel3slide1, retailCarousel3slide2, retailCarousel3slide3, retailCarousel3slide4, retailCarousel3slide5, retailCarousel3slide6, retailCarousel3slide7, retailCarousel3slide8, retailCarousel3slide9, retailCarousel3slide10],
        //     tour: ''
        // },
    ])
    const [cafeArray, setCafeArray] = useState ([
        {
            id: 1,
            name: '54A4',
            src: [cafeCarousel1slide1, cafeCarousel1slide2,cafeCarousel1slide3,cafeCarousel1slide4,cafeCarousel1slide5,cafeCarousel1slide6,cafeCarousel1slide7, ],
            tour: ''
        },
        {
            id: 2,
            name: 'BEERFOLIO',
            src: [cafeCarousel2slide1, cafeCarousel2slide2, cafeCarousel2slide3, cafeCarousel2slide4, cafeCarousel2slide5, cafeCarousel2slide6, cafeCarousel2slide7, cafeCarousel2slide8, cafeCarousel2slide9, cafeCarousel2slide10],
            tour: '',
            anchor: 'beerfolio'
        },
        {
            id: 3,
            name: 'MEET UP',
            src: [cafeCarousel3slide1, cafeCarousel3slide2, cafeCarousel3slide3, cafeCarousel3slide4, cafeCarousel3slide5, cafeCarousel3slide6],
            tour: ''
        },
        {
            id: 4,
            name: 'VAN LAAR',
            src: [cafeCarousel4slide1, cafeCarousel4slide2, cafeCarousel4slide3, cafeCarousel4slide4, cafeCarousel4slide5, cafeCarousel4slide6, cafeCarousel4slide7, cafeCarousel4slide8, cafeCarousel4slide9, cafeCarousel4slide10],
            tour: '',
            anchor: 'vanlaar'
        }
    ])
    const [companyArray, setCompanyArray] = useState ([
        {
            id: 1,
            name: 'РУБИУС',
            src: [companyCarousel1slide1, companyCarousel1slide2, companyCarousel1slide3, companyCarousel1slide4, companyCarousel1slide5, companyCarousel1slide6, companyCarousel1slide7, companyCarousel1slide8, companyCarousel1slide9, companyCarousel1slide10],
            tour: ''
        },
        {
            id: 2,
            name: 'ЯГОДНОЕ',
            src: [companyCarousel2slide1, companyCarousel2slide2, companyCarousel2slide3, companyCarousel2slide4,],
            tour: ''
        },
    ])
    const [saleArray, setSaleArray] = useState ([
        {
            id: 1,
            name: "1&3",
            src: [saleCarousel1slide1, saleCarousel1slide2, saleCarousel1slide3, saleCarousel1slide4, saleCarousel1slide5, saleCarousel1slide6, saleCarousel1slide7, saleCarousel1slide8, saleCarousel1slide9],
            tour: 'https://tour8.vasiliyrybakov.online/'
        },
        {
            id: 2,
            name: "МИХАЙЛОВСКИЙ",
            src: [saleCarousel2slide1, saleCarousel2slide2, saleCarousel2slide3, saleCarousel2slide4, saleCarousel2slide5, saleCarousel2slide6],
            tour: ''
        }
    ])
    const [professionalArray, setProfessionalArray] = useState ([
        {
            id: 1,
            name: 'MAGLENA',
            src: [professionalCarousel1slide1, professionalCarousel1slide2, professionalCarousel1slide3, professionalCarousel1slide4, professionalCarousel1slide5, ],
            tour: '',
            anchor: 'maglena'
        },
        {
            id: 2,
            name: 'МЕДКАБИНЕТ',
            src: [professionalCarousel2slide1, professionalCarousel2slide2, professionalCarousel2slide3, professionalCarousel2slide4, professionalCarousel2slide5, professionalCarousel2slide6, professionalCarousel2slide7],
            tour: '',
            anchor: "medcabinet"
        }
    ])

    return (
        <main>
            <section className="section-cards">
                <div className="section-cards__cards-item">
                    <Helmet>
                        <title>VR Интерьеры</title>
                        <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер" />
                    </Helmet>
                    <img src={shopsCarousel1slide1} alt="МАГАЗИНЫ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#shops">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">МАГАЗИНЫ</span>
                                <span className="section-cards__item-description">Идеальные условия для выкладки товара и комфорт при совершении покупки.</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="section-cards__cards-item">
                    <img src={retailCarousel1slide1} alt="ТОРГОВЫЕ СЕТИ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#retail">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">ТОРГОВЫЕ СЕТИ</span>
                                <span className="section-cards__item-description">Масштабируемые решения для сетевых операторов. Скорость открытия и соблюдение бюджета.</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="section-cards__cards-item">
                    <img src={cafeCarousel1slide1} alt="КАФЕ И РЕСТОРАНЫ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#cafe">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">КАФЕ И РЕСТОРАНЫ</span>
                                <span className="section-cards__item-description">Погружение в атмосферу и только лучшие места для ваших гостей.</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="section-cards__cards-item">
                    <img src={companyCarousel1slide1} alt="ОФИСЫ КОМПАНИЯ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#company">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">ОФИСЫ КОМПАНИЙ</span>
                                <span className="section-cards__item-description">Превосходные условия для продуктивной работы и командный дух под флагом вашей компании.</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="section-cards__cards-item">
                    <img src={saleCarousel1slide1} alt="ОФИСЫ ПРОДАЖ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#sale">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">ОФИСЫ ПРОДАЖ</span>
                                <span className="section-cards__item-description">Комфортные условия для ваших клиентов в неповторимой стилистике бренда.</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="section-cards__cards-item">
                    <img src={professionalCarousel1slide1} alt="ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ" className="section-cards__item-img"/>
                    <a className="section-cards__cards-info" href="/interior/#professional">
                        <div className="section-cards__border">
                            <div className="section-cards__item-box">
                                <span className="section-cards__item-name">ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ</span>
                                <span className="section-cards__item-description">Максимальный комфорт и соблюдение гигиенических требований. Престижное место работы для ваших специалистов.</span>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            <section className="section-shops reveal" id="shops">
                <h2 className="section-shops__heading">
                    МАГАЗИНЫ
                </h2>
                {shopsArray.map((shopsArray) =>
                    <SliderProject data={shopsArray} key={shopsArray.id} />
                ) }
            </section>
            <section className="section-retail reveal" id="retail">
                <h2 className="section-retail__heading">
                    ТОРГОВЫЕ СЕТИ
                </h2>
                {retailArray.map((retailArray) =>
                    <SliderProject data={retailArray} key={retailArray.id} />
                ) }
            </section>
            <section className="section-cafe reveal" id="cafe">
                <h2 className="section-retail__heading">
                    КАФЕ И РЕСТОРАНЫ
                </h2>
                {cafeArray.map((cafeArray) =>
                    <SliderProject data={cafeArray} key={cafeArray.id} />
                ) }
            </section>
            <section className="section-company reveal" id="company">
                <h2 className="section-retail__heading">
                    ОФИСЫ КОМПАНИЙ
                </h2>
                {companyArray.map((companyArray) =>
                    <SliderProject data={companyArray} key={companyArray.id} />
                ) }
            </section>
            <section className="section-sale reveal" id="sale">
                <h2 className="section-retail__heading">
                    ОФИСЫ ПРОДАЖ
                </h2>
                {saleArray.map((saleArray) =>
                    <SliderProject data={saleArray} key={saleArray.id} />
                ) }
            </section>
            <section className="section-professional reveal" id="professional">
                <h2 className="section-retail__heading">
                    ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ
                </h2>
                {professionalArray.map((professionalArray) =>
                    <SliderProject data={professionalArray} key={professionalArray.id} />
                ) }
            </section>
        </main>
    )
}

export default Interior;