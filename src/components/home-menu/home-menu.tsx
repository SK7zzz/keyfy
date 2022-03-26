import { HomeMenuContainer, MenuOptions } from "./home-menu.styles";

const HomeMenu = () => {
  return (
    <HomeMenuContainer>
      <MenuOptions href="/key">Key</MenuOptions>
      <MenuOptions href="/chords">Chord</MenuOptions>
      <MenuOptions href="/scales">Scale</MenuOptions>
    </HomeMenuContainer>
  );
};

export default HomeMenu;
