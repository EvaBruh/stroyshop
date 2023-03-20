import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const jobApi = createApi({
  reducerPath: 'job/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getJob: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/job/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetJobQuery, useLazyGetJobQuery} = jobApi;