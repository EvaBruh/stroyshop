import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const pdfApi = createApi({
  reducerPath: 'cardpdf/api',
  baseQuery: fetchBaseQuery({
    baseUrl: ''
  }),
  endpoints: builder => ({
    getPdf: builder.query({
      query: ({limit, offset}) => ({
        method: 'GET',
        url: '/api/cardpdf/', params: {
          limit: limit,
          offset: offset
        }
      }),
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetPdfQuery, useLazyGetPdfQuery} = pdfApi;