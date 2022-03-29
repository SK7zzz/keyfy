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
        <p>Other names: </p>
        {keyState.currentChord.otherNames.map((otherName: any) => (
          <p>{otherName}</p>
        ))}
      </OtherNamesContainer>
      <NotesContainer>
        <p>Notes: </p>
        {keyState.currentChord.notes.map((note: any) => (
          <p className="notes">{note}</p>
        ))}
      </NotesContainer>
      <IntervalsContainer>
        <p>Intervals: </p>
        {keyState.currentChord.intervals.map((interval: any) => (
          <p>{interval}</p>
        ))}
      </IntervalsContainer>
      <SemitonesContainer>
        <p>Semitones: </p>
        {keyState.currentChord.semitones.map((semitone: any) => (
          <p>{semitone}</p>
        ))}
      </SemitonesContainer>
    </ChordInfoContainer>
  );
};

export default ChordInfo;
