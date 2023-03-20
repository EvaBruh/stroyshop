import '../../normalize.css';
import './Header.scss';
import VrLogo from '../../img/logonew3.png';
import Phone from '../../img/phone.png';
import LinkWithDropDown from "../LinkWithDropDown/index";
import { useDispatch } from "react-redux";
import { open } from "../../store/slices/modalSlice";
import Form from "../Form/Form";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import LinkA from "../LinkaA";


const Header = () => {

    const dispatch = useDispatch();
    const {pathname} = useLocation()
const topLinks = [
    {
        title: 'КАТАЛОГ',
        href: '#',
        class: 'header-box__list-link',
        links: [
            {
                title: 'САД И ДОМ',
                href:'/brand/',
                links: [
                    {title: 'Попопопопоппопопо', href:'/sublink1/'},
                    {title: 'попопопопоппопопо', href:'/sublink2/'},
                ]
            },
            {
                title: 'СТРОЙМАТЕРИАЛ',
                href:'/brand/',
                links: [
                    {title: 'аоаоаоаоаоааоаоао', href:'/sublink3/'},
                    {title: 'аоаоаоаоаоааоаоао', href:'/sublink4/'},
                ]
            },
                        {
                title: 'ЖИВОТНЫЕ',
                href:'/brand/',
                links: [
                    {title: 'аоа3аоаоа33аоаоао', href:'/sublink3/'},
                    {title: 'аоаоао2аоаоааоаоао', href:'/sublink4/'},
                ]
            },
            {title: 'ОГОРОД', href:'/facades/'},
        ]
    },
        {
            title: 'О НАС',
            href: '/#price',
            class: 'header-box__list-link',
            links: []
        },
        {
            title: 'СПЕЦТЕХНИКА',
            href: '/tours/',
            class: "header-box__list-link animation-tours",
            links: []

        },
        {
            title: 'ПРЕЗЕНТАЦИИ',
            href: '/presentation/',
            class: "header-box__list-link",
            links: []

        },
        {
            title: 'ОТЗЫВЫ',
            href: '/#reviews',
            class: 'header-box__list-link',
            links: []
        },
        {
            title: 'ОСТАВИТЬ ЗАЯВКУ',
            to: '#',
            class: 'header-box__list-link',
            onClick: () => dispatch(open()),
            links: []
        },
      {
            title: 'ВАКАНСИИ',
            href: '/job/',
            class: 'header-box__list-link',
            links: []
        },
    ]

    const [style, setStyle] = useState(null)
    if (pathname.match(/\/tours\//) !== null && (window.screen.width <= 989) && style === null) {
        setStyle({
            width: '65%'
        })
    }

    return (
      <header className="header header-container header--hidden">
          <div className="hamburger-menu" style={style}>
              <input id="menu__toggle" type="checkbox"/>
              <label className="menu__btn" htmlFor="menu__toggle">
                  <span className='span-width'>
                  </span>
              </label>
              <ul className="menu__box">
                  <li><a className="menu__item" href="/brand/">Брендбук</a></li>
                  <li><a className="menu__item" href="/interior/">Интерьер</a></li>
                  <li><a className="menu__item" href="/facades/">Фасад</a></li>
                  <li><a className="menu__item" href="/tours/">3D Туры</a></li>
                  <li><a className="menu__item" href="/job/">Вакансии</a></li>
                  <li><a className="menu__item" href="/presentation/">Презентации</a></li>
                  <li><a className="menu__item" href="/#price">Услуги и цены</a></li>
                  <li><a className="menu__item" onClick={() => dispatch(open())}>Оставить заявку</a></li>
          </ul>
      </div>
    <div className="header-box__img">
        <a className="header-box__logo" href="/" style={style} >
            <img src={VrLogo} alt="#" className="header-box__logo-img"/>
        </a>
        <LinkA />
    </div>
    <div className="header-box__menu">
        <ul className="header-box__menu-list">
            {topLinks.map((data, i) => (<LinkWithDropDown key={i} data={data} />))}
        </ul>
    </div>
    <div className="header-box__contacts">
        <div className="header-box__contacts-links">
            <a href="tel:+79009215777" className="header-box__contacts-link svg-phone">
                <img src={Phone} alt="" className="header-box__contacts-phone"/>
            </a>
            <a href="tel:+79009215777" className="header-box__contacts-link number-phone">
                +7 900 921 5777
            </a>
        </div>
    </div>
    <div className="form-component">
        <Form/>
    </div>
</header>
);
}

export default Header;