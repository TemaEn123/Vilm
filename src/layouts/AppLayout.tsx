import { Outlet } from "react-router";

import { Container } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AppLayout = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: "0 15px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default AppLayout;
