import FilterItem from "../../ui/FilterItem/FilterItem";
import { dataForFilters } from "../../data";
import { Box, Button, SvgIcon } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilters } from "../../redux/slices/filtersSlice";
import { RootState } from "../../redux/store";

const Filters = () => {
  const [sortType, setSortType] = useState<boolean>(false);

  const dispatch = useDispatch();

  const filters = useSelector((state: RootState) => state.filters.filters);

  const handleClick = () => {
    if (filters.sortField !== undefined) {
      dispatch(changeFilters(!sortType));
    }
    setSortType((prev) => !prev);
  };

  return (
    <Box
      sx={{
        marginBottom: "10px",
        display: "flex",
        alignItems: "flex-end",
        color: "#fff",
        flexWrap: "wrap",
      }}
    >
      <Button
        onClick={handleClick}
        sx={{
          padding: "0px",
          minWidth: "unset",
          margin: "0 10px 10px 0",
          color: "#fff",
          transform: !sortType ? "rotate(180deg)" : "rotate(0)",
          transition: "all 0.3s ease 0s",
        }}
      >
        <SvgIcon sx={{ fontSize: "24px" }}>
          <ArrowDownwardIcon />
        </SvgIcon>
      </Button>
      {dataForFilters.map((item, i) => {
        return <FilterItem key={i} item={item} />;
      })}
    </Box>
  );
};

export default Filters;
