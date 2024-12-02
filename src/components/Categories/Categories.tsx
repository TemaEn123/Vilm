import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changeFilters } from "../../redux/slices/filtersSlice";

import CategoryButton from "../../ui/CategoryButton/CategoryButton";
import { ToggleButtonGroup } from "@mui/material";

import { categories } from "../../data";

const Categories = () => {
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filters.filters);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newCat: string
  ) => {
    setCategory(newCat);
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
        <CategoryButton text={cat} key={cat} />
      ))}
    </ToggleButtonGroup>
  );
};

export default Categories;
