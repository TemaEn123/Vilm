import { Box, SvgIcon } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const LoadingIcon = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "30px",
      }}
    >
      <SvgIcon className="loading" sx={{ fontSize: "30px" }}>
        <RestartAltIcon />
      </SvgIcon>
    </Box>
  );
};

export default LoadingIcon;
