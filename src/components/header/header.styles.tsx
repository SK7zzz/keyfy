import styled from "styled-components";
import tw from "twin.macro";

// Main header container
export const HeaderContainer = styled.div`
  ${tw`
  p-0
  m-0
  md:mt-32
  mt-20
  flex
  flex-col
  items-center
  text-center
`}
`;

// Header Title
export const HeaderTitle = styled.p`
  ${tw`
  p-0
  m-0
  text-3xl
  md:text-5xl
  `}
`;
