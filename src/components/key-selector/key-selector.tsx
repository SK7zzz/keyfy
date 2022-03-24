import { useSelector, useDispatch } from "react-redux";
import { setKey } from "../../redux/features/KeyState";
import { KeySelectorContainer, KeyOptions } from "./key-selector.styles";

const KeySelector = () => {
  // Dispach and Selector to access global states and functions
  const dispatch = useDispatch();
  const keyState = useSelector((state: any) => state.keyState.value);

  return (
    <KeySelectorContainer>
      <KeyOptions
        className={keyState.currentKey === "Major" ? "selected" : ""}
        onClick={() => {
          dispatch(setKey("Major"));
        }}
      >
        Major
      </KeyOptions>
      <KeyOptions
        className={keyState.currentKey === "Minor" ? "selected" : ""}
        onClick={() => {
          dispatch(setKey("Minor"));
        }}
      >
        Minor
      </KeyOptions>
    </KeySelectorContainer>
  );
};

export default KeySelector;
