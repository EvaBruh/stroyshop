import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const projectsApi = createApi({
  reducerPath: 'projects/api',
  baseQuery: fetchBaseQuery({
    baseUrl: '/'
  }),
  endpoints: builder => ({
    getProjects: builder.query({
      query: (ProjectName) => {
        console.log('test = ', ProjectName)
        return `api/project/${ProjectName}`
      },
      keepUnusedDataFor: 30
    })
  })
})

export const {useGetProjectsQuery, useLazyGetProjectsQuery} = projectsApi;