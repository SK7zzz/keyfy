import styled from "styled-components";
import tw from "twin.macro";
// Main chord selector container
export const ScalesSelectorContainer = styled.div`
  ${tw`
    p-0
    m-0
    mt-6
    md:mt-10
    flex
    flex-col
    md:flex-row
    justify-center
  `}
`;

export const Selector = styled.select`
  ${tw`
    p-0
    m-0
    mx-4
    my-2
    md:my-0
    w-48
    md:w-32
    h-12
    md:h-8
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
