import styled from "styled-components";

// Main menu container
export const HomeMenuContainer = styled.div`
  padding: 0px;
  margin: 0px;
  margin-bottom: 4vh;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & a {
    text-decoration: none;
    font-size: 28px;
    color: #eeeeee;
    border: 3px solid #00adb5;
    border-radius: 80px;
    height: 12vh;
    width: 20vw;
    margin: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
      background-color: #00adb5;
      color: #15191f;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;