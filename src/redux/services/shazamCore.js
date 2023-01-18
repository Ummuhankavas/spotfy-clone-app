import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '2cd4bcbe3cmsh2e4375d4f2ba8a9p186e27jsn2a5d357df65d');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world '}),
    }),
  });

  export const {
    useGetTopChartsQuery,
  } = shazamCoreApi;