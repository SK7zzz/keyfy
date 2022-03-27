import { useSelector } from "react-redux";
import {
  ScalesInfoContainer,
  OtherNamesContainer,
  NotesContainer,
  IntervalsContainer,
  SemitonesContainer,
} from "./scales-info.styles";

const ScalesInfo = () => {
  // Dispach and Selector to access global states and functions
  const keyState = useSelector((state: any) => state.keyState.value);
  return (
    <ScalesInfoContainer>
      <OtherNamesContainer>
        {`Other Names: ${keyState.currentScale.otherNames}`}
      </OtherNamesContainer>
      <NotesContainer>{`Notes: ${keyState.currentScale.notes}`}</NotesContainer>
      <IntervalsContainer>{`Intervals: ${keyState.currentScale.intervals}`}</IntervalsContainer>
      <SemitonesContainer>{`Semitones: ${keyState.currentScale.semitones}`}</SemitonesContainer>
    </ScalesInfoContainer>
  );
};

export default ScalesInfo;
