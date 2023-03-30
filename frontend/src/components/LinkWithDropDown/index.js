import {CaretDownOutlined, CaretRightOutlined} from "@ant-design/icons";
import {useRef} from "react";
import './LinkWithDropDown.css'
import {HashLink} from 'react-router-hash-link';

function LinkWithDropDown(props) {

    let timer;
    const {data} = props;
    const div = useRef()
    const onMouseEnterHandler = () => {
        clearTimeout(timer);
        div.current?.classList.add('drop-links__opened')
    }

    const onMouseLeaveHandler = () => {
        timer = setTimeout(() => {
            div.current?.classList.remove('drop-links__opened')
        }, 500); // Задержка в 500 миллисекунд
    }

    const onClickHandler = data.onClick ?? null;

    return (
        <li
            className="header-box__list-item"
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
        >
            <a href={data.href} onClick={onClickHandler} className={data.class}>
                {data.title}
                {data.links.length > 0 && <CaretDownOutlined className="arrow-header"/>}
            </a>
            {data.links.length > 0 && <div className="drop-links" ref={div}>
                <ul className="drop-links__items">
                    {data.links.map((link, i) => (
                        <li className="drop-list__link-item" key={`${link.href}-${i}`}>
                            <a href={link.href} className='drop-list__link'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>}
        </li>

    )
}

export default LinkWithDropDown;