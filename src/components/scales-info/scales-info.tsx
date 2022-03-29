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
        <p>Other names: </p>
        {keyState.currentScale.otherNames.map((otherName: any) => (
          <p>{otherName}</p>
        ))}
      </OtherNamesContainer>
      <NotesContainer>
        <p>Notes: </p>
        {keyState.currentScale.notes.map((note: any) => (
          <p className="notes">{note}</p>
        ))}
      </NotesContainer>
      <IntervalsContainer>
        <p>Intervals: </p>
        {keyState.currentScale.intervals.map((interval: any) => (
          <p>{interval}</p>
        ))}
      </IntervalsContainer>
      <SemitonesContainer>
        <p>Semitones: </p>
        {keyState.currentScale.semitones.map((semitone: any) => (
          <p>{semitone}</p>
        ))}
      </SemitonesContainer>
    </ScalesInfoContainer>
  );
};

export default ScalesInfo;
