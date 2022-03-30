import { ChordsContainer } from "../containers/chords-container";
import ChordSelector from "../components/chord-selector/chord-selector";
import ChordInfo from "../components/chord-info/chord-info";
import BackIcon from "../components/back-icon/back-icon";

const Chords = () => {
  return (
    <ChordsContainer>
      <BackIcon />
      <ChordSelector />
      <ChordInfo />
    </ChordsContainer>
  );
};

export default Chords;
