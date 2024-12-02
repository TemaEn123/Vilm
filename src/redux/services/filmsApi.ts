import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IFilters, IResponseFromFilmsApi } from "../../interfaces";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  keepUnusedDataFor: 100000,
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getFilms: builder.query<IResponseFromFilmsApi, IFilters>({
      query: (filters) => ({
        url: `movie?limit=16&selectFields=id&selectFields=name&selectFields=year&selectFields=votes&selectFields=poster&selectFields=rating&notNullFields=name&votes.kp=3000-6666666`,
        headers: {
          accept: "application/json",
          "X-API-KEY": API_KEY,
        },
        params: {
          ...filters,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems, otherArgs) => {
        if (Number(otherArgs.arg.page) > 1) {
          currentCache.limit = newItems.limit;
          currentCache.page = newItems.page;
          currentCache.pages = newItems.pages;
          currentCache.total = newItems.total;
          currentCache.docs.push(...newItems.docs);
        } else {
          currentCache.limit = newItems.limit;
          currentCache.page = newItems.page;
          currentCache.pages = newItems.pages;
          currentCache.total = newItems.total;
          currentCache.docs = newItems.docs;
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getPopularFilms: builder.query<IResponseFromFilmsApi, null>({
      query: () => ({
        url: `movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=poster&lists=top10-hd`,
        headers: {
          accept: "application/json",
          "X-API-KEY": API_KEY,
        },
      }),
    }),
    getFilmById: builder.query<any, string>({
      query: (id) => ({
        url: `movie/${id}`,
        headers: {
          accept: "application/json",
          "X-API-KEY": API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useGetFilmsQuery,
  useGetPopularFilmsQuery,
  useGetFilmByIdQuery,
} = filmsApi;
