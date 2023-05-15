import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {close} from "../../store/slices/modalSlice"
import {useSendRequestMutation} from "../../store/api/modulApi.js";
import '../../normalize.css'
import Modal from 'antd/lib/modal';
import './Form.scss';
import VRFace from '../../img/ShopLogo.png';

const getOpened = (state) => state.modal.opened

const Form = () => {

    const [name, setName] = useState('');
    const [familya, setFamilya] = useState('');
    const [phone, setPhone] = useState('');
    const opened = useSelector(getOpened)
    const dispatch = useDispatch();
    const [sendRequest, data] = useSendRequestMutation();
    const onSubmitClicked = () => {
        sendRequest({name, familya, phone })
        dispatch(close())
    };
    if (!opened) {
        return null;
    }

    return (
        <Modal
            className='myTest'
            open
            width={'90vw'}
            footer={null}
            onCancel={() => dispatch(close())}
            mask={true}
            centered
        >
            <div className="form-box">
                <div className="form-box__left">
                    <div className="form-box__left-input">
                        <div className="col-3">
                            <input
                              className="effect-8"
                              type="text"
                              placeholder="Имя"
                              onChange={(e) => setName(e.target.value)}
                            />
                            <span className="focus-border"> <i></i> </span>
                        </div>
                        <div className="col-3">
                            <input
                              className="effect-8"
                              type="text"
                              placeholder="Фамилия"
                              onChange={(e) => setFamilya(e.target.value)}
                            />
                            <span className="focus-border"> <i></i> </span>
                        </div>
                        <div className="col-3">
                            <input
                              className="effect-8"
                              type="tel"
                              placeholder="Номер"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <span className="focus-border"> <i></i> </span>
                        </div>
                    </div>
                    <div className="form-box__btn btn-one" onClick={onSubmitClicked}>
                        <button className="form-box__item-button">
                            <span >Отправить нам</span>
                        </button>
                    </div>
                    <p className="form-box__rules">
                        Нажимая на кнопку вы даете согласие на обработку данных.</p>
                    <p className="form-box__rules-link"><a href='/privacy' className='form-box__a'>Политика конфиденциальности</a> <a href='/terms' className='form-box__a'>Пользовательское соглашение</a></p>
                </div>
                <div className="form-box__right">
                    <div className="form-box__text-box">
                        <h2 className="form-box__heading">
                            Заявка на обратный звонок.
                        </h2>
                        <p className="form-box__about">
                            Наш график работы:
                        </p>
                        <p className="form-box__about">
                            Понедельник - пятница c 9 до 21
                        </p>
                        <p className="form-box__about">
                            Суббота - воскресенье с 10 до 19
                        </p>
                    </div>
                    <img src={VRFace} alt="" className="form-box__right-img"/>
                </div>
            </div>
        </Modal>
    );
};
export default Form;


