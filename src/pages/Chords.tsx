import { ChordsContainer } from "../containers/chords-container";
import ChordSelector from "../components/chord-selector/chord-selector";
import ChordInfo from "../components/chord-info/chord-info";

const Chords = () => {
  return (
    <ChordsContainer>
      <ChordSelector />
      <ChordInfo />
    </ChordsContainer>
  );
};

export default Chords;
