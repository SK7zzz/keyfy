import { useSelector, useDispatch } from "react-redux";
import { setNote, setScale } from "../../redux/features/KeyState";
import { Selector, ScalesSelectorContainer } from "./scales-selector.styles";

const ScalesSelector = () => {
  // Dispach and Selector to access global states and functions
  const dispatch = useDispatch();
  const keyState = useSelector((state: any) => state.keyState.value);

  return (
    <ScalesSelectorContainer>
      <Selector
        onChange={(e) => {
          dispatch(setNote(e.target.value));
          dispatch(setScale(keyState.selectedScale));
        }}
      >
        {keyState.availableNotes.map((note: string, i: number) => (
          <option key={i} value={note}>
            {note}
          </option>
        ))}
      </Selector>
      <Selector
        onChange={(e) => {
          dispatch(setScale(e.target.value));
        }}
      >
        {keyState.availableScales.map((scale: string, i: number) => (
          <option key={i} value={scale}>
            {scale}
          </option>
        ))}
      </Selector>
    </ScalesSelectorContainer>
  );
};

export default ScalesSelector;
