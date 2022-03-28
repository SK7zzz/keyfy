import { useSelector, useDispatch } from "react-redux";
import { setChord, setNote } from "../../redux/features/KeyState";
import BackIcon from "../back-icon/back-icon";
import {
  ChordNoteSelector,
  ChordSelectorContainer,
  ChordChordSelector,
} from "./chord-selector.styles";

const ChordSelector = () => {
  // Dispach and Selector to access global states and functions
  const dispatch = useDispatch();
  const keyState = useSelector((state: any) => state.keyState.value);

  console.log(keyState.currentChord);
  return (
    <ChordSelectorContainer>
      <ChordNoteSelector
        onChange={(e) => {
          dispatch(setNote(e.target.value));
          dispatch(setChord(keyState.selectedChord));
        }}
      >
        {keyState.availableNotes.map((note: string, i: number) => (
          <option key={i} value={note}>
            {note}
          </option>
        ))}
      </ChordNoteSelector>
      <ChordChordSelector
        onChange={(e) => {
          dispatch(setChord(e.target.value));
        }}
      >
        {keyState.availableChords.map((chord: string, i: number) => (
          <option key={i} value={chord}>
            {chord}
          </option>
        ))}
      </ChordChordSelector>
    </ChordSelectorContainer>
  );
};

export default ChordSelector;
