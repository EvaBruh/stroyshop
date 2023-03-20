import {CaretDownOutlined, CaretRightOutlined} from "@ant-design/icons";
import {useRef} from "react";
import './LinkWithDropDown.css'
import {HashLink} from 'react-router-hash-link';

function LinkWithDropDown(props) {

    const {data} = props;
    const div = useRef()
    const onMouseEnterHandler = () => {
        div.current?.classList.toggle('drop-links__opened')
    }

    const onMouseLeaveHandler = () => {
        div.current?.classList.toggle('drop-links__opened')
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
                        <li
                            className="drop-list__link-item"
                            key={`${link.href}-${i}`}
                            onMouseEnter={(e) => e.currentTarget.classList.add('sub-drop-links__opened')}
                            onMouseLeave={(e) => e.currentTarget.classList.remove('sub-drop-links__opened')}
                        >
                            <a href={link.href} className='drop-list__link'>
                                {link.title}
                                {link.links && link.links.length > 0 && <CaretRightOutlined/>}
                            </a>
                            {link.links && link.links.length > 0 && (
                                <ul className="sub-drop-links">
                                    {link.links.map((subLink, j) => (
                                        <li className="sub-drop-list__link-item" key={`${subLink.href}-${j}`}>
                                            <a href={subLink.href} className='sub-drop-list__link'>
                                                {subLink.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>}
        </li>
    )
}

export default LinkWithDropDown;