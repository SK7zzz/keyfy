import { useSelector } from "react-redux";
import {
  OtherNamesContainer,
  NotesContainer,
  IntervalsContainer,
  SemitonesContainer,
  ChordInfoContainer,
} from "./chord-info.styles";

const ChordInfo = () => {
  // Selector to access global states and functions
  const keyState = useSelector((state: any) => state.keyState.value);
 
  return (
    <ChordInfoContainer>
      <OtherNamesContainer>
        {`Other Names: ${keyState.currentChord.otherNames}`}
      </OtherNamesContainer>
      <NotesContainer>{`Notes: ${keyState.currentChord.notes}`}</NotesContainer>
      <IntervalsContainer>{`Intervals: ${keyState.currentChord.intervals}`}</IntervalsContainer>
      <SemitonesContainer>{`Semitones: ${keyState.currentChord.semitones}`}</SemitonesContainer>
    </ChordInfoContainer>
  );
};

export default ChordInfo;
