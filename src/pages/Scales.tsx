import ScalesInfo from "../components/scales-info/scales-info";
import ScalesSelector from "../components/scales-selector/scales-selector";
import { ScalesContainer } from "../containers/scales.container";
import BackIcon from "../components/back-icon/back-icon";
const Scales = () => {
  return (
    <ScalesContainer>
      <BackIcon />
      <ScalesSelector />
      <ScalesInfo />
    </ScalesContainer>
  );
};

export default Scales;
