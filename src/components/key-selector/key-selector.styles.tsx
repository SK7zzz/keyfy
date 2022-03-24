import styled from "styled-components";

// Key Selector container
export const KeySelectorContainer = styled.div`
  padding: 0;
  margin: 0;
  margin-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const KeyOptions = styled.button`
  padding: 0;
  margin: 0;
  background: none;
  margin-inline: 1vw;
  text-decoration: none;
  font-size: 20px;
  color: #eeeeee;
  border: 3px solid #00adb5;
  border-radius: 80px;
  height: 6vh;
  width: 12vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.selected {
    background-color: #00adb5;
    color: #15191f;
    font-weight: bold;
  }

  &:hover {
    background-color: #00adb5;
    color: #15191f;
    font-weight: bold;
    cursor: pointer;
  }
`;
