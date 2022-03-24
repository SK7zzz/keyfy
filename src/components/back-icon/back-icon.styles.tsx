import styled from "styled-components";

// Back Icon container
export const BackIconContainer = styled.div`
  padding: 0px;
  margin: 0px;
  padding-top: 4vh;
  padding-left: 6vw;
`;

export const BackIconButton = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #eeeeee;
  border: 3px solid #00adb5;
  border-radius: 100%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background-color: #00adb5;
    color: #15191f;
    font-weight: bold;
    cursor: pointer;
  }
`;
