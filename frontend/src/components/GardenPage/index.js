import '../../normalize.css';
import '../CardProject/CardProject.scss';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {useLazyGetGardenQuery} from "../../store/api/gardenApi";

const CardProject = () => {

    const [limit, setLimit] = useState(6);
    const [offset, setOffset] = useState(0);
    const [fetchCards, { data }] = useLazyGetGardenQuery();

    const loadMore = () => {
        setLimit((prevState) => prevState + 3);
    };
    const div = useRef();
    const onClickHandler = () => {
        div.current?.classList.toggle('section-project__card-active')
    }
    useEffect(() => {
        fetchCards ({limit, offset});

    }, [limit, offset])

    return  (
        <section className="section-project">
            <h2 className="section-project__project-heading">
                ТОВАРЫ ДЛЯ САДА И ОГОРОДА

            </h2>
            <div className="section-project__project-box">
                {data && data?.results.map((img, index) => (
                    <div className="section-project__project-card">
                        <div className="section-project__project-item" key={index}>
                            <img src={img.image} alt="#" className="section-project__item-img"/>
                            <div className="section-project__project-info" >
                                <div className="section-project__border">
                                    <div className="section-project__item-box" onClick={onClickHandler}>
                                        <span className="section-project__item-name">{img.product}, {img.price}</span>
                                        <span className="section-project__item-description">{img.description}</span>
                                        <div  className="section-project__item-button">
                                            <a href={img.urlProduct} className="section-project__item-link" >
                                                ПОСМОТРЕТЬ ТОВАР
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-project__project-description">
                            <p className="section-project__description-info">{img.product}, {img.saletime}</p>
                            {/*<p className="section-project__description-city">{img.town}</p>*/}
                        </div>
                    </div>
                ))}
            </div>
            <div className="section-project__button-more reveal">
                <button type="button" className="section-project__more-link " onClick={loadMore} >
                    <span>Загрузить ещё</span>
                </button>
            </div>
        </section>
    )
}
export default CardProject;