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

      currentNote: "A",

      // Key Page
      currentKey: "Major",
      currentMajorKeyData: [],
      currentMinorKeyData: [],

      // Chord Page
      availableChords: [
        "Major",
        "Minor",
        "Diminished",
        "Seventh",
        "Major Seventh",
        "Minor Seventh",
        "Semidiminished",
      ],
      selectedChord: "Major",
      currentChord: {
        otherNames: "Amaj, AM, A",
        notes: ["A", "C#", "E"],
        intervals: ["1P", "3M", "5P"],
        semitones: [4, 3],
      },

      // Scales Page
      availableScales: [
        "Ionian",
        "Dorian",
        "Phrygian",
        "Major Phrygian",
        "Lydian",
        "Mixolydian",
        "Aeolian",
        "Locrian",
      ],
      selectedScale: "Ionian",
      currentScale: {
        otherNames: "Ionian, Major, Ethiopian",
        notes: ["A", "B", "C#", "D", "E", "F#", "G#"],
        intervals: ["1P", "2M", "3M", "4P", "5P", "6M", "7M"],
        semitones: [2, 2, 1, 2, 2, 2, 1],
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
      state.value.selectedScale = action.payload;
      const currentNote = state.value.currentNote;

      switch (action.payload) {
        case "Ionian":
          state.value.currentScale = {
            otherNames: keyFormulas().getIonianScale(currentNote).otherNames,
            notes: keyFormulas().getIonianScale(currentNote).notes,
            intervals: keyFormulas().getIonianScale(currentNote).intervals,
            semitones: keyFormulas().getIonianScale(currentNote).semitones,
          };
          break;
        case "Dorian":
          state.value.currentScale = {
            otherNames: keyFormulas().getDorianScale(currentNote).otherNames,
            notes: keyFormulas().getDorianScale(currentNote).notes,
            intervals: keyFormulas().getDorianScale(currentNote).intervals,
            semitones: keyFormulas().getDorianScale(currentNote).semitones,
          };
          break;
        case "Phrygian":
          state.value.currentScale = {
            otherNames: keyFormulas().getPhrygianScale(currentNote).otherNames,
            notes: keyFormulas().getPhrygianScale(currentNote).notes,
            intervals: keyFormulas().getPhrygianScale(currentNote).intervals,
            semitones: keyFormulas().getPhrygianScale(currentNote).semitones,
          };
          break;
        case "Major Phrygian":
          state.value.currentScale = {
            otherNames:
              keyFormulas().getMajorPhrygianScale(currentNote).otherNames,
            notes: keyFormulas().getMajorPhrygianScale(currentNote).notes,
            intervals:
              keyFormulas().getMajorPhrygianScale(currentNote).intervals,
            semitones:
              keyFormulas().getMajorPhrygianScale(currentNote).semitones,
          };
          break;
        case "Lydian":
          state.value.currentScale = {
            otherNames: keyFormulas().getLydianScale(currentNote).otherNames,
            notes: keyFormulas().getLydianScale(currentNote).notes,
            intervals: keyFormulas().getLydianScale(currentNote).intervals,
            semitones: keyFormulas().getLydianScale(currentNote).semitones,
          };
          break;
        case "Mixolydian":
          state.value.currentScale = {
            otherNames:
              keyFormulas().getMixolydianScale(currentNote).otherNames,
            notes: keyFormulas().getMixolydianScale(currentNote).notes,
            intervals: keyFormulas().getMixolydianScale(currentNote).intervals,
            semitones: keyFormulas().getMixolydianScale(currentNote).semitones,
          };
          break;
        case "Aeolian":
          state.value.currentScale = {
            otherNames: keyFormulas().getAeoliancScale(currentNote).otherNames,
            notes: keyFormulas().getAeoliancScale(currentNote).notes,
            intervals: keyFormulas().getAeoliancScale(currentNote).intervals,
            semitones: keyFormulas().getAeoliancScale(currentNote).semitones,
          };
          break;
        case "Locrian":
          state.value.currentScale = {
            otherNames: keyFormulas().getLocrianScale(currentNote).otherNames,
            notes: keyFormulas().getLocrianScale(currentNote).notes,
            intervals: keyFormulas().getLocrianScale(currentNote).intervals,
            semitones: keyFormulas().getLocrianScale(currentNote).semitones,
          };
          break;
        default:
      }
    },
  },
});

export const { setKeyData, setKey, setChord, setScale, setNote } =
  keySlice.actions;

export default keySlice.reducer;
