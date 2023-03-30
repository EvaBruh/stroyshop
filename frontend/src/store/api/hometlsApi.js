import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const hometlsApi = createApi({
  reducerPath: 'hometls/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getHometls: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/hometools/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetHometlsQuery, useLazyGetHometlsQuery} = hometlsApi;