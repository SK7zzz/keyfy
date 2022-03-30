import styled from "styled-components";
import tw from "twin.macro";

// Back Icon container
export const BackIconContainer = styled.div`
  ${tw`
  p-0
  m-0
  ml-20
  mt-10
  w-full
  `}

  & a {

    ${tw`
      p-0
      m-0
      w-12
      h-12
      no-underline
      text-white
      border-4
      border-solid
      border-secondary
      rounded-full
      flex
      justify-around
      items-center
      hover:bg-secondary
      hover:text-primary
      hover:font-bold
      hover:cursor-pointer
    `}
  }
`;
