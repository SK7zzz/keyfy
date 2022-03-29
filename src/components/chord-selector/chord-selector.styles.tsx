import styled from "styled-components";

// Main chord selector container
export const ChordSelectorContainer = styled.div`
  padding: 0px;
  margin: 0px;
  margin-top: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChordNoteSelector = styled.select`
  appearance: none;
  color: #eeee;
  text-align: left;
  background-color: transparent;
  border: none;
  border: 2px solid #00adb5;
  padding: 12px;
  margin: 0;
  margin-right: 4vw;
  width: 10vw;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  & option {
    background-color: #222831;
  }
`;
export const ChordChordSelector = styled.select`
  appearance: none;
  color: #eeee;
  text-align: left;
  background-color: transparent;
  border: none;
  border: 2px solid #00adb5;
  padding: 12px;
  margin: 0;
  margin-right: 4vw;
  width: 10vw;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  & option {
    background-color: #222831;
  }
`;
