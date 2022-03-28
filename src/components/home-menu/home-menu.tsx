import { HomeMenuContainer } from "./home-menu.styles";
import { Link } from "react-router-dom";

const HomeMenu = () => {

  return (
    <HomeMenuContainer>
      <Link to="/key">Key</Link>
      <Link to="/chords">Chords</Link>
      <Link to="/scales">Scales</Link>
    </HomeMenuContainer>
  );
};

export default HomeMenu;
