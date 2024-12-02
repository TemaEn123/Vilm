import { useGetFilmsQuery } from "../../redux/services/filmsApi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import ShowMoreButton from "../../ui/ShowMoreButton/ShowMoreButton";
import LoadingIcon from "../../ui/LoadingIcon/LoadingIcon";
import FilmCard from "../../ui/FilmCard/FilmCard";
import { Box } from "@mui/material";
import FilmCardSkeleton from "../../ui/FilmCardSkeleton/FilmCardSkeleton";

import { IFilmInCatalog } from "../../interfaces";

const Films = () => {
  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filters.filters);

  const { data: films, error, isFetching } = useGetFilmsQuery(filters);

  const handleShowMoreClick = () => {
    dispatch(changeFilters(["page", (Number(filters.page) + 1).toString()]));
  };

  if (error) {
    console.error(error);
  }

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexWrap: "wrap", margin: "-5px" }}
    >
      {isFetching && Number(filters.page) < 2 ? (
        <FilmCardSkeleton count={16} popular={false} />
      ) : (films?.docs as []).length < 1 ? (
        <Box
          sx={{
            width: "100%",
            fontSize: "20px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Не найдено
        </Box>
      ) : (
        films?.docs.map((film: IFilmInCatalog) => {
          return <FilmCard popular={false} film={film} key={film.id} />;
        })
      )}
      {films?.pages !== Number(filters.page) &&
      !isFetching &&
      films?.docs.length ? (
        <ShowMoreButton handleShowMoreClick={handleShowMoreClick} />
      ) : null}
      {films?.pages !== Number(filters.page) &&
      isFetching &&
      films?.docs.length ? (
        <LoadingIcon />
      ) : null}
    </Box>
  );
};

export default Films;
