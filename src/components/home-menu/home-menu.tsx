import { HomeMenuContainer, MenuOptions } from "./home-menu.styles";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  /** <MenuOptions href="/key">Key</MenuOptions>
      <MenuOptions href="/chords">Chord</MenuOptions>
      <MenuOptions href="/scales">Scale</MenuOptions> */
  return (
    <HomeMenuContainer>
      <Link to="/key">Key</Link>
      <Link to="/chords">Chords</Link>
      <Link to="/scales">Scales</Link>
    </HomeMenuContainer>
  );
};

export default HomeMenu;
