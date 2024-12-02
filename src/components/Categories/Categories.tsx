import { ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { categories } from "../../data";
import CategoryButton from "../../ui/CategoryButton/CategoryButton";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../redux/slices/filtersSlice";
import { RootState } from "../../redux/store";
import useThrottle from "../../helpers/hooks/useThrottle";

const Categories = () => {
  const filters = useSelector((state: RootState) => state.filters.filters);

  const [category, setCategory] = useState<string | undefined>(
    filters.type ? "СЕРИАЛЫ" : filters["genres.name"]?.toUpperCase()
  );

  const [throttle, setThrottle] = useState<boolean>(false);

  useThrottle(() => setThrottle(false), 500);

  const dispatch = useDispatch();

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCat: string
  ) => {
    setThrottle(true);
    setCategory(newCat);

    if (Number(filters.page) > 1) {
      dispatch(changeFilters(["page", "1"]));
    }

    if (newCat === "СЕРИАЛЫ") {
      dispatch(changeFilters(["type", "tv-series"]));
    } else if (newCat) {
      if (filters.type) {
        dispatch(changeFilters(["type", undefined]));
      }
      dispatch(changeFilters(["genres.name", newCat.toLowerCase()]));
    } else {
      dispatch(changeFilters(["genres.name", undefined]));
    }
  };

  return (
    <ToggleButtonGroup
      exclusive
      color="primary"
      value={category}
      onChange={handleChange}
      sx={{ flexWrap: "wrap", marginBottom: "10px" }}
    >
      {categories.map((cat: string) => (
        <CategoryButton throttle={throttle} text={cat} key={cat} />
      ))}
    </ToggleButtonGroup>
  );
};

export default Categories;
