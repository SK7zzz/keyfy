import styled from "styled-components";

// Main scales info container
export const ScalesInfoContainer = styled.div`
  padding: 0px;
  margin: 0px;
  margin-top: 4vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 76vw;
  font-size: 20px;
  & .notes {
    background-color: #00adb5;
    color: #222831;
    font-weight: bold;
    border: 3px solid #00adb5;
    padding: 10px;
    border-radius: 100%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OtherNamesContainer = styled.div`
  display: flex;
  & p {
    margin-right: 16px;
  }
`;
export const NotesContainer = styled.div`
  align-items: center;
  display: flex;
  & p {
    justify-content: center;
    align-items: center;
    margin-right: 16px;
  }
`;
export const IntervalsContainer = styled.div`
  display: flex;
  & p {
    margin-right: 16px;
  }
`;
export const SemitonesContainer = styled.div`
  display: flex;
  & p {
    margin-right: 16px;
  }
`;
