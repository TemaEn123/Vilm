import { ChangeEvent } from "react";

import { Box, Button, Input } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleTextInput: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  searchValue: string;
  setOpenSearch: () => void;
  openSearch: boolean;
}

const Search = ({
  handleTextInput,
  searchValue,
  setOpenSearch,
  openSearch,
}: Props) => {
  return (
    <>
      <Box
        component="form"
        sx={
          openSearch
            ? {
                background: "#111",
                padding: "10px",
                position: "absolute",
                top: "100%",
                width: "100%",
                right: "0",
                height: " 100vh",
                display: "flex",
                flex: "1 1 100%",
              }
            : {
                display: { xs: "none", sm: "flex" },
                flex: "1 1 100%",
              }
        }
      >
        <Input
          value={searchValue}
          onChange={(e) => handleTextInput(e)}
          sx={{
            color: "#fff",
            width: "100%",
            border: "2px solid #222",
            borderRight: "none",
            padding: "0 5px 0 10px",
            textDecoration: "none",
            height: "30px",
          }}
          placeholder="Поиск..."
        />
        <Button
          variant="contained"
          sx={{
            background: "#222",
            borderRadius: "0px",
            color: "#888",
            height: "30px",
          }}
        >
          Поиск
        </Button>
      </Box>
      <Box
        onClick={setOpenSearch}
        component="button"
        sx={{
          background: "none",
          color: "#fff",
          display: { xs: "flex", sm: "none" },
          alignItems: "center",
        }}
      >
        <SvgIcon sx={{ fontSize: "28px" }}>
          {openSearch ? <CloseIcon /> : <SearchIcon />}
        </SvgIcon>
      </Box>
    </>
  );
};

export default Search;
