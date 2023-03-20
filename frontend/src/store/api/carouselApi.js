import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const carouselApi = createApi({
  reducerPath: 'carousel/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getCarousel: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/carousel/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetCarouselQuery, useLazyGetCarouselQuery} = carouselApi;