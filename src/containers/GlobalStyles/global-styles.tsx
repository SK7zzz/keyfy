import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyles = createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap");

    html, #root, .layout {
        height: 100%;
    }

    body {
        ${tw`
        h-full
        font-family["Quicksand", sans-serif]
        text-white
        bg-primary
        p-0
        m-0
        overflow-x-hidden
        `};
    }
`;
