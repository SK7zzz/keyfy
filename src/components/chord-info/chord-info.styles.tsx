import styled from "styled-components";
import tw from "twin.macro";

// Main chord info container
export const ChordInfoContainer = styled.div`
  ${tw`
    p-0
    m-0
    mt-4
    width[18rem]
    flex
    flex-col
    text-base
  `}
  & .notes {
    ${tw`
    p-0
    m-0
    mx-2
    w-10
    h-10
    bg-secondary
    text-primary
    font-bold
    border-2
    border-solid
    border-secondary
    rounded-full
    flex
    justify-center
    items-center
    `}
  }
`;

export const OtherNamesContainer = styled.div`
  ${tw`
    flex
    items-center
  `}

  & p {
    ${tw`
      mr-4
    `}
  }
`;
export const NotesContainer = styled.div`
  ${tw`
    flex
    items-center
  `}

  & p {
    ${tw`
      mr-4
    `}
  }
`;
export const IntervalsContainer = styled.div`
  ${tw`
    flex
    items-center
  `}

  & p {
    ${tw`
      mr-4
    `}
  }
`;
export const SemitonesContainer = styled.div`
  ${tw`
    flex
    items-center
  `}

  & p {
    ${tw`
      mr-4
    `}
  }
`;
