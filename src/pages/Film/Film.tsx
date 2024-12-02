import { Params, useParams } from "react-router";

import { useGetFilmByIdQuery } from "../../redux/services/filmsApi";

const Film = () => {
  const params: Readonly<Params<string>> = useParams();

  const {
    data: film,
    error,
    isLoading,
  } = useGetFilmByIdQuery(params.filmId as string);

  if (error) {
    return <>404</>;
  }

  return <>film</>;
};

export default Film;
