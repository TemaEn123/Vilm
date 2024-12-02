import { useGetPopularFilmsQuery } from "../../redux/services/filmsApi";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import FilmCard from "../../ui/FilmCard/FilmCard";
import FilmCardSkeleton from "../../ui/FilmCardSkeleton/FilmCardSkeleton";
import { Box } from "@mui/material";

import { IPopularFilm } from "../../interfaces";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3.8,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2.2,
    slidesToSlide: 1,
  },
};

const Popular = () => {
  const { data: films, error, isLoading } = useGetPopularFilmsQuery(null);

  if (error) {
    console.error(error);
  }

  return (
    <Box
      component="section"
      sx={{ marginBottom: "10px", cursor: "grab", overflow: "hidden" }}
    >
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <FilmCardSkeleton count={6} popular />
        </Box>
      ) : (
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          keyBoardControl={true}
          transitionDuration={400}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {films?.docs.map((film: IPopularFilm) => {
            return <FilmCard popular film={film} key={film.id} />;
          })}
        </Carousel>
      )}
    </Box>
  );
};

export default Popular;
