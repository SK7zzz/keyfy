import { BackIconContainer, BackIconButton } from "./back-icon.styles";
import { FaArrowLeft } from "react-icons/fa";

const BackIcon = () => {
  return (
    <BackIconContainer>
      <BackIconButton href="/keyfy">
        <FaArrowLeft />
      </BackIconButton>
    </BackIconContainer>
  );
};

export default BackIcon;
