import styled from "styled-components";
import tw from "twin.macro";

// Key Table container
export const KeyTableContainer = styled.div`
  ${tw`
   mt-10
   flex
   justify-center
   text-base
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
