import { BackIconContainer } from "./back-icon.styles";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackIcon = () => {
  return (
    <BackIconContainer>
      <Link to="/">
        <FaArrowLeft />
      </Link>
    </BackIconContainer>
  );
};

export default BackIcon;
