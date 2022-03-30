import styled from "styled-components";
import tw from "twin.macro";

// Search container
export const SearchContainer = styled.div`
  ${tw`
  p-0
  m-0
  flex
  justify-center
 `};
`;

// Search Icon
export const SearchIcon = styled.span`
  ${tw`
  p-0
  m-0
  `}
`;

// Search Input
export const SearchInput = styled.input`
  ${tw`
  ml-4
  text-left
  text-white
  text-lg
  bg-transparent
  outline-none
  border-none
  `}
`;
