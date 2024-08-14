import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-key': 'a16fe67009mshe693b2439a95b00p153843jsn671723fe2da0',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

// simple utility function for which url 
const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders
})

export const cryptoapi = createApi({
  reducerPath: 'cryptoapi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
})

export const {
  useGetCryptosQuery,
} = cryptoapi




// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl'
//   },
//   headers: {
//     'x-rapidapi-key': 'a16fe67009mshe693b2439a95b00p153843jsn671723fe2da0',
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
//   }
// };
