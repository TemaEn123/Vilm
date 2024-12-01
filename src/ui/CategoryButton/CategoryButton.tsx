import { ToggleButton } from "@mui/material";

interface Props {
  text: string;
}

const CategoryButton = ({ text }: Props) => {
  return (
    <ToggleButton
      sx={{
        color: "#fff",
        background: "#272727",
        borderRadius: "0px",
        flex: "1 1 14%",
        padding: "7px",
        border: "none",
        transition: "all 0.2s ease 0s",
        marginLeft: "0 !important",
      }}
      value={text}
    >
      {text}
    </ToggleButton>
  );
};

export default CategoryButton;
