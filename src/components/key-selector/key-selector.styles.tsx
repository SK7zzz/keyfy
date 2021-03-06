import styled from "styled-components";
import tw from "twin.macro";

// Key Selector container
export const KeySelectorContainer = styled.div`
  ${tw`
    p-0
    m-0
    mt-4
    md:mt-8
    flex
    flex-col
    md:flex-row
    justify-center
  `}
`;

export const KeyOptions = styled.button`
  ${tw`
  p-0
  m-0
  px-12
  py-2
  bg-transparent
  mx-4
  my-2
  md:my-0
  no-underline
  text-base
  text-white
  border-2
  border-solid
  border-secondary
  rounded-full
  hover:bg-secondary
  hover:text-primary
  hover:font-bold
  hover:cursor-pointer
  `}

  &.selected {
    ${tw`
      bg-secondary
      text-primary
      font-bold
    `}
  }
`;
