import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
  reducerPath: 'products/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: (ProductName) => {
        return `api/product/${ProductName}`
      },
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetProductsQuery, useLazyGetProductsQuery} = productsApi;