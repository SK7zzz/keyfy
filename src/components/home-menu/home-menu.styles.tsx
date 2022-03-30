import styled from "styled-components";
import tw from "twin.macro";

// Main menu container
export const HomeMenuContainer = styled.div`
  ${tw`
  p-0
  m-0
  w-full
  h-full
  flex
  justify-around
  items-center
  `};

  & a {
    ${tw`
      m-0
      text-white
      no-underline
      text-xl
      border-4
      border-solid
      border-secondary
      rounded-full
      px-28
      py-8
      hover:bg-secondary
      hover:text-primary
      hover:font-bold
      hover:cursor-pointer

    `}
  }
`;
