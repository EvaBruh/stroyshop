import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const decorApi = createApi({
  reducerPath: 'hometools/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getDecor: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/decor/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetDecorQuery, useLazyGetDecorQuery} = decorApi;