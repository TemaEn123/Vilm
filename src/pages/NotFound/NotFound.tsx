import { Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NotFound = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          padding: "0 15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <main>Page Not Found</main>
        <Footer />
      </Container>
    </>
  );
};

export default NotFound;
