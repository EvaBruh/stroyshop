import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const gardenApi = createApi({
  reducerPath: 'garden/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getGarden: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/garden/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetGardenQuery, useLazyGetGardenQuery} = gardenApi;