import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const toolsApi = createApi({
  reducerPath: 'tools/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getTools: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/tools/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetToolsQuery, useLazyGetToolsQuery} = toolsApi;