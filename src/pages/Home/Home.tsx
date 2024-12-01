import Categories from "../../components/Categories/Categories";
import Films from "../../components/Films/Films";
import Filters from "../../components/Filters/Filters";
import Popular from "../../components/Popular/Popular";

const Home = () => {
  return (
    <>
      {/* <Popular /> */}
      <Categories />
      <Filters />
      <Films />
    </>
  );
};

export default Home;
