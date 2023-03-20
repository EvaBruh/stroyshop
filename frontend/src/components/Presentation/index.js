import '../../normalize.css';
import './Presentation.scss'
import {useEffect, useRef, useState} from "react";
import {useLazyGetPdfQuery} from "../../store/api/pdfApi";
import {Helmet} from "react-helmet";
import React from "react";

const Presentation = () => {

    const [limit, setLimit] = useState(6);
    const [offset, setOffset] = useState(0);
    const [fetchPdf, { data }] = useLazyGetPdfQuery();

    const loadMore = () => {
        setLimit((prevState) => prevState + 3);
    };

    const div = useRef();
    const onClickHandler = () => {
        div.current?.classList.toggle('section-project__card-active')
    }

     useEffect(() => {
        fetchPdf ({limit, offset});

    }, [limit, offset])


    return  (
        <section className="section-project">
            <Helmet>
                <title>VR Презентации</title>
                <meta name="description" content="Коммерческий дизайн Фасады Брендбук Интерьер Презентации" />
                <meta name="keywords" content="Фасад Брендбук Дизайн Интерьер Интерьер Презентации" />
            </Helmet>
            <h2 className="section-project__project-heading">
            </h2>
            <div className="section-project__project-box">
                {data && data?.results.map((img, index) => (
                    <div className="section-project__project-card">
                        <div className="section-project__project-item" key={index}>
                            <img src={img.image} alt="#" className="section-project__item-img"/>
                            <div className="section-project__project-info" >
                                <div className="section-project__border">
                                    <div className="section-project__item-box" onClick={onClickHandler}>
                                        <span className="section-project__item-name">{img.project}</span>
                                        <span className="section-project__item-description">{img.description}</span>
                                        <div  className="section-project__item-button">
                                            <a href={img.pdf} className="section-project__item-link" >
                                                СКАЧАТЬ ПРОЕКТ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-project__project-description">
                            <p className="section-project__description-info">{img.project}</p>
                            {/*<p className="section-project__description-city">{img.town}</p>*/}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Presentation;
