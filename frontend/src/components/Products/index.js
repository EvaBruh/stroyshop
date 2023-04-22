import React from 'react';
import {useLazyGetProductsQuery, useGetProductsQuery} from "../../store/api/productsApi";
import './products.scss';
import {useParams} from "react-router-dom";
import {reveal} from "../../functions/ScrollAnimation";
import {Helmet} from "react-helmet";

const ProductLink = () => {
  reveal();

  const {productId}  = useParams();
  const {isLoading, data } = useGetProductsQuery(productId);

  if (isLoading) {
    return null
  }

  return (
<main>
  <div className="product-page">
    <div className="product-page__images">
      <div className="product-page__image">
        <img src={data.image1} alt={data.name}/>
      </div>
      <div className="product-page__image">
        <img src={data.image2} alt={data.name}/>
      </div>
      <div className="product-page__image">
        <img src={data.image3} alt={data.name}/>
      </div>
    </div>
    <div className="product-page__info">
      <h1 className="product-page__name">{data.name}</h1>
              <h2>Описание:</h2>
      <div className="product-page__description"

        dangerouslySetInnerHTML={{ __html: data.description }}
      />
                    <h2>Характеристики, детали:</h2>
      <div className="product-page__detail"
        dangerouslySetInnerHTML={{ __html: data.detail }}
      />
      <p className="product-page__price">Цена: {data.price}</p>
      <h2>Дополнительное описание 1:</h2>
      <div className="product-page__extra-info">

        <div dangerouslySetInnerHTML={{ __html: data.textOne }} />
      </div>
              <h2>Дополнительное описание 2:</h2>
        <div className="product-page__extra-info">
        <div dangerouslySetInnerHTML={{ __html: data.textTwo }} />
      </div>
    </div>
  </div>
</main>
  )
}

export default ProductLink;