import { HomeMenuContainer, MenuOptions } from "./home-menu.styles";

const HomeMenu = () => {
  return (
    <HomeMenuContainer>
      <MenuOptions href="/key">Key</MenuOptions>
      <MenuOptions href="">Chord</MenuOptions>
      <MenuOptions href="">Scale</MenuOptions>
    </HomeMenuContainer>
  );
};

export default HomeMenu;
