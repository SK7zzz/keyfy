import styled from "styled-components";
import tw from "twin.macro";

// Main chord selector container
export const ChordSelectorContainer = styled.div`
  ${tw`
    p-0
    m-0
    mt-10
    flex
    justify-center
  `}
`;

export const Selector = styled.select`
  ${tw`
    p-0
    m-0
    mx-4
    w-32
    h-8
    appearance-none
    text-white
    text-center
    text-base
    bg-transparent
    border-2
    border-solid
    border-secondary
    cursor-pointer
    outline-none
  `}

  & option {
    ${tw`
      bg-primary
    `}
  }
`;
