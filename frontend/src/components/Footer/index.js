import '../../normalize.css';
import './Footer.scss';
import telegram from '../../img/telegram.svg'
import vk from '../../img/vk-svg.svg'
import pinterest from '../../img/pinterest.svg'

function Footer () {

    return (
        <footer className="footer">
            <div  id='map' className="footer-box">
                <div className="footer-box__left-box">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8ced92b014462069987a2c4612d65c508e11f09623ce8afa48ddf3cac47fc08c&amp;source=constructor"
                        width="100%" height="100%" frameBorder="0">
                    </iframe>
                </div>
                <div className="footer-box__right-box">
                    <div className="footer-box__contact-box">
                        <div className="footer-box__contact-links">
                            <h1 className="footer-box__contact-heading">НАШИ КОНТАКТЫ</h1>
                            <a href="tel:+79609057096" className="footer-box__contacts-number">
                                +7 960 905 70 96
                            </a>
                            <a href="tel:+79138733682" className="footer-box__contacts-number">
                                +7 913 873 36 82
                            </a>
                            <a href="mailto: kamb-tom@yandex.ru" className="footer-box__contacts-email">
                                kamb-tom@yandex.ru
                            </a>
                        </div>
                        <div className="footer-box__contact-links">
                            <h1 className="footer-box__contact-heading">
                            НАШ АДРЕС
                              </h1>
                            <a href="https://goo.gl/maps/hNGi3KBAMBTNLy1S7" className="footer-box__contacts-city">
                                Кемерово, Заводской р-н, Таврическая 23-А
                            </a>
                            <p>
                                График: пн-пт: с 9 до 21, сб-вс: с 10 до 19
                            </p>
                        </div>

                    </div>
                    <div className="footer-box__social-box">
{/*                        <a href="https://t.me/vrcommercial">
                            <img src={telegram} alt="#" className="footer-box__social-icon"/>
                        </a>
                        <a href="https://vk.com/vasiliyrybakov">
                            <img src={vk} alt="#" className="footer-box__social-icon"/>
                        </a>*/}
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer