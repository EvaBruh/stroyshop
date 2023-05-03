import React from 'react';
import {useLazyGetProductsQuery, useGetProductsQuery} from "../../store/api/productsApi";
import './products.scss';
import {useParams} from "react-router-dom";
import {reveal} from "../../functions/ScrollAnimation";
import {Helmet} from "react-helmet";
import {StarIcon} from "@heroicons/react/20/solid";

const ProductLink = () => {
    reveal();

    const {productId} = useParams();
    const {isLoading, data} = useGetProductsQuery(productId);

    if (isLoading) {
        return null
    }

    return (
        <main>
{/*            <div className="product-page">
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

                         dangerouslySetInnerHTML={{__html: data.description}}
                    />
                    <h2>Характеристики, детали:</h2>
                    <div className="product-page__detail"
                         dangerouslySetInnerHTML={{__html: data.detail}}
                    />
                    <p className="product-page__price">Цена: {data.price}</p>
                    <h2>Дополнительное описание 1:</h2>
                    <div className="product-page__extra-info">

                        <div dangerouslySetInnerHTML={{__html: data.textOne}}/>
                    </div>
                    <h2>Дополнительное описание 2:</h2>
                    <div className="product-page__extra-info">
                        <div dangerouslySetInnerHTML={{__html: data.textTwo}}/>
                    </div>
                </div>
            </div>*/}
            <div className="bg-white">
                <div className="mt-32">


                    {/* Image gallery */}
                    <div
                        className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={data.image1}
                                alt={data.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={data.image2}
                                    alt={data.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={data.image3}
                                    alt={data.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div
                            className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={data.image3}
                                alt={data.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div
                        className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{data.name}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{data.price} р.</p>
                          <div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3 className="text-lg font-medium tracking-wide text-gray-900">Характеристики</h3>

                            <div className="space-y-6 tracking-wide">
                              <div dangerouslySetInnerHTML={{__html: data.detail}}/>
                            </div>
                          </div>

                            <form className="mt-10">


                                <a href="#map" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  Купить!
</a>
                            </form>
                        </div>

                        <div
                            className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Описание</h3>

                                <div className="space-y-6 tracking-wide text-base ">
                                    <div dangerouslySetInnerHTML={{__html: data.description}}/>
                                </div>
                               <br></br>
                            </div>

                            <div>
                                <h3 className="sr-only">Дополнительная информация</h3>

                                <div className="space-y-6 tracking-wide text-base">
                                    <div dangerouslySetInnerHTML={{__html: data.textOne}}/>
                                </div>
                            </div>
                            <div>
                                <h3 className="sr-only">Дополнительная информация</h3>
                                <br></br>
                                <div className="space-y-6 tracking-wide text-base">
                                    <div dangerouslySetInnerHTML={{__html: data.textTwo}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductLink;