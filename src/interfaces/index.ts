export interface IFilmInCatalog {
  id: number;
  name: string;
  poster: { url: string };
  rating: { kp: number };
  votes: { kp: number };
  year: number;
}

export interface IPopularFilm {
  id: number;
  name: string;
  poster: { url: string };
}

export interface IResponseFromFilmsApi {
  docs: IFilmInCatalog[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export interface IDataForFiltersItem {
  name: string;
  slugName: string;
  data: { slug: string; name: string }[];
}

export interface IFilters {
  ["genres.name"]: string | undefined;
  sortField: string | undefined;
  sortType: string | undefined;
  year: string | undefined;
  ["countries.name"]: string | undefined;
  type: string | undefined;
  page: string;
}
