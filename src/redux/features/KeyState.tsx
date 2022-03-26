import { createSlice } from "@reduxjs/toolkit";
import { createImportSpecifier } from "typescript";
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
      avaibleChords: [
        "Major",
        "Minor",
        "Diminished",
        "Seventh",
        "Major Seventh",
        "Minor Seventh",
        "Semidiminished",
      ],

      currentNote: "A",

      // Key Page
      currentKey: "Major",
      currentMajorKeyData: [],
      currentMinorKeyData: [],

      // Chord Page
      selectedChord: "Major",
      currentChord: {
        otherNames: "Amaj, AM, A",
        notes: ["A", "C#", "E"],
        intervals: ["1P", "3M", "5P"],
        semitones: [4, 3],
      },
    },
  },
  reducers: {
    setKeyData: (state: any, action: any) => {
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
    setNote: (state: any, action: any) => {
      state.value.currentNote = action.payload;
    },
    setChord: (state: any, action: any) => {

      state.value.selectedChord = action.payload;

      const currentNote = state.value.currentNote;

      switch (action.payload) {
        case "Major":
          state.value.currentChord = {
            otherNames:
              keyFormulas().getMajorTriadChord(currentNote).otherNames,
            notes: keyFormulas().getMajorTriadChord(currentNote).notes,
            intervals: keyFormulas().getMajorTriadChord(currentNote).intervals,
            semitones: keyFormulas().getMajorTriadChord(currentNote).semitones,
          };
          break;
        case "Minor":
          state.value.currentChord = {
            otherNames:
              keyFormulas().getMinorTriadChord(currentNote).otherNames,
            notes: keyFormulas().getMinorTriadChord(currentNote).notes,
            intervals: keyFormulas().getMinorTriadChord(currentNote).intervals,
            semitones: keyFormulas().getMinorTriadChord(currentNote).semitones,
          };
          break;
        case "Diminished":
          state.value.currentChord = {
            otherNames:
              keyFormulas().getDiminishedTriadChord(currentNote).otherNames,
            notes: keyFormulas().getDiminishedTriadChord(currentNote).notes,
            intervals:
              keyFormulas().getDiminishedTriadChord(currentNote).intervals,
            semitones:
              keyFormulas().getDiminishedTriadChord(currentNote).semitones,
          };
          break;
        case "Seventh":
          state.value.currentChord = {
            otherNames: keyFormulas().getSeventh(currentNote).otherNames,
            notes: keyFormulas().getSeventh(currentNote).notes,
            intervals: keyFormulas().getSeventh(currentNote).intervals,
            semitones: keyFormulas().getSeventh(currentNote).semitones,
          };
          break;
        case "Major Seventh":
          state.value.currentChord = {
            otherNames: keyFormulas().getMajorSeventh(currentNote).otherNames,
            notes: keyFormulas().getMajorSeventh(currentNote).notes,
            intervals: keyFormulas().getMajorSeventh(currentNote).intervals,
            semitones: keyFormulas().getMajorSeventh(currentNote).semitones,
          };
          break;
        case "Minor Seventh":
          state.value.currentChord = {
            otherNames: keyFormulas().getMinorSeventh(currentNote).otherNames,
            notes: keyFormulas().getMinorSeventh(currentNote).notes,
            intervals: keyFormulas().getMinorSeventh(currentNote).intervals,
            semitones: keyFormulas().getMinorSeventh(currentNote).semitones,
          };
          break;
        case "Semidiminished":
          state.value.currentChord = {
            otherNames: keyFormulas().getSemiDiminished(currentNote).otherNames,
            notes: keyFormulas().getSemiDiminished(currentNote).notes,
            intervals: keyFormulas().getSemiDiminished(currentNote).intervals,
            semitones: keyFormulas().getSemiDiminished(currentNote).semitones,
          };
          break;
      }
    },
    setScale: (state: any, action: any) => {
      state.value.currentKey = action.payload;
    },
  },
});

export const { setKeyData, setKey, setChord, setNote } = keySlice.actions;

export default keySlice.reducer;
