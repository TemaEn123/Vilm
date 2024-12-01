import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router";
import { Box, Link as MUILink } from "@mui/material";
import Search from "../Search/Search";

const Header = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const handleTextInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    setOpenSearch((prev) => !prev);

    if (!openSearch) {
      setSearchValue("");
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 600 && openSearch) {
        setOpenSearch(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [openSearch]);

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: "15px 0", sm: "25px 0" },
        fontWeight: "bold",
      }}
    >
      <Box>
        <MUILink
          to="/"
          component={Link}
          sx={{
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            color: "#fff",
            textDecoration: "none",
          }}
        >
          VILM
        </MUILink>
      </Box>
      <Box
        sx={{
          flex: "0 1 50%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Search
          handleTextInput={handleTextInput}
          searchValue={searchValue}
          openSearch={openSearch}
          setOpenSearch={handleSearchClick}
        />
      </Box>
    </Box>
  );
};

export default Header;
