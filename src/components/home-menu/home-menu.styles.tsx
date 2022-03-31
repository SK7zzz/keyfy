import styled from "styled-components";
import tw from "twin.macro";

// Main menu container
export const HomeMenuContainer = styled.div`
  ${tw`
  p-0
  m-0
  mt-16
  md:mt-0
  w-full
  h-full
  flex
  flex-col
  md:flex-row
  md:justify-around
  items-center
  `};

  & a {
    ${tw`
      m-0
      my-8
      md:my-0
      text-white
      no-underline
      text-xl
      text-center
      border-4
      border-solid
      border-secondary
      rounded-full
      w-8/12
      md:w-1/5
      py-5
      md:py-8
      hover:bg-secondary
      hover:text-primary
      hover:font-bold
      hover:cursor-pointer

    `}
  }
`;
