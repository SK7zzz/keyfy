import { createSlice } from "@reduxjs/toolkit";
import keyFormulas from "../../helpers/keyFormulas";

export const keySlice = createSlice({
  name: "key",
  initialState: {
    value: {
      availableNotes: [
        "A",
        "Ab",
        "A#",
        "Bb",
        "B",
        "C",
        "C#",
        "D",
        "Db",
        "D#",
        "E",
        "Eb",
        "F",
        "F#",
        "G",
        "Gb",
        "G#",
      ],
      currentNote: "",
      currentKey: "Major",
      currentMajorKeyData: [],
      currentMinorKeyData: [],
    },
  },
  reducers: {
    setKeyData: (state: any, action: any) => {
      state.value.currentNote = action.payload;
      state.value.currentMajorKeyData = keyFormulas().getMajorKeyInfo(
        action.payload
      );
      state.value.currentNote = action.payload;
      state.value.currentMinorKeyData = keyFormulas().getMinorKeyInfo(
        action.payload
      );
    },
    setKey: (state: any, action: any) => {
      state.value.currentKey = action.payload;
    },
  },
});

export const { setKeyData, setKey } = keySlice.actions;

export default keySlice.reducer;
