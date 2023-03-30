import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const buildApi = createApi({
  reducerPath: 'build/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getBuild: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/build/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetBuildQuery, useLazyGetBuildQuery} = buildApi;