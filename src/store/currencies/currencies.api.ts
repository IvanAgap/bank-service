import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API = 'https://api.coinbase.com/';
export const currenciesApi = createApi({
  reducerPath: 'currencies/api',
  baseQuery: fetchBaseQuery({
    baseUrl: API,
  }),
  endpoints: (build) => ({
    getCurrencies: build.query<any, string>({
      query: () => `v2/currencies`,
    }),
  }),
});

export const { useGetCurrenciesQuery } = currenciesApi;
