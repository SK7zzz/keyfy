import styled from "styled-components";
import tw from "twin.macro";

// Key Table container
export const KeyTableContainer = styled.div`
  ${tw`
   mt-10
   flex-wrap
   md:flex
   justify-center
   text-sm
   md:text-base
   overflow-x-auto
   overflow-y-auto
  `};

  & th {
    ${tw`
    text-secondary
    px-4
    pb-4
    `}
  }

  & td {
    ${tw`
    pb-6
    text-center
    `}
  }
`;
