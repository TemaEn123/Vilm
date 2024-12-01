import { Box } from "@mui/material";
import FilmCard from "../FilmCard/FilmCard";
import { useGetFilmsQuery } from "../../redux/services/filmsApi";
import FilmCardSkeleton from "../../ui/FilmCardSkeleton/FilmCardSkeleton";
import { IFilmInCatalog } from "../../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Films = () => {
  const filters = useSelector((state: RootState) => state.filters.filters);

  const { data: films, error, isFetching } = useGetFilmsQuery(filters);

  if (error) {
    console.error(error);
  }

  return (
    <Box
      component="section"
      sx={{ display: "flex", flexWrap: "wrap", margin: "-5px" }}
    >
      {isFetching ? (
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
    </Box>
  );
};

export default Films;