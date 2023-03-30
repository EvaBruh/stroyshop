import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const cardsApi = createApi({
  reducerPath: 'cards/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getCards: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/sale/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetCardsQuery, useLazyGetCardsQuery} = cardsApi;