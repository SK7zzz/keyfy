import { HomeMenuContainer, MenuOptions } from "./home-menu.styles";

const HomeMenu = () => {
  return (
    <HomeMenuContainer>
      <MenuOptions href="/keyfy/key">Key</MenuOptions>
      <MenuOptions href="/keyfy/chords">Chord</MenuOptions>
      <MenuOptions href="/keyfy/scales">Scale</MenuOptions>
    </HomeMenuContainer>
  );
};

export default HomeMenu;
