import ScalesInfo from "../components/scales-info/scales-info";
import ScalesSelector from "../components/scales-selector/scales-selector";
import { ScalesContainer } from "../containers/scales.container";

const Scales = () => {
  return (
    <ScalesContainer>
      <ScalesSelector />
      <ScalesInfo />
    </ScalesContainer>
  );
};

export default Scales;
