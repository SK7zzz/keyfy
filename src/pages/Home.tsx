import Header from "../components/header/header";
import HomeMenu from "../components/home-menu/home-menu";
import { HomeContainer } from "../containers/home-container";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeMenu />
    </HomeContainer>
  );
};

export default Home;
