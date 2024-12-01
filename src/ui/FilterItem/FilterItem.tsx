import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IDataForFiltersItem } from "../../interfaces";
import { changeFilters } from "../../redux/slices/filtersSlice";

interface Props {
  item: IDataForFiltersItem;
}

const FilterItem = ({ item }: Props) => {
  const [name, setName] = useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
    if (event.target.value === "") {
      dispatch(changeFilters([item.slugName, undefined]));
    } else {
      dispatch(changeFilters([item.slugName, event.target.value]));
    }
  };

  return (
    <FormControl
      variant="standard"
      sx={{
        margin: "0 10px 10px 0",
        minWidth: "100px",
        "& svg": {
          fill: "#fff",
        },
        "& .MuiSelect-iconOpen": {
          fill: "#1976d2",
        },
        "& .css-3yxd3g-MuiInputBase-root-MuiInput-root-MuiSelect-root::before":
          {
            borderBottom: "1px solid #fff",
          },
        "& .css-3yxd3g-MuiInputBase-root-MuiInput-root-MuiSelect-root:hover:not(.Mui-disabled, .Mui-error):before":
          {
            borderBottom: "1px solid #fff",
          },
      }}
    >
      <InputLabel sx={{ color: "#fff" }}>{item.name}</InputLabel>
      <Select sx={{ color: "#fff" }} value={name} onChange={handleChange}>
        {item.data.map((item, i) => (
          <MenuItem value={item.slug} key={i}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FilterItem;