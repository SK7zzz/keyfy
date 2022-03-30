import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap");
    body {
        padding: 0;
        margin: 0;
        background: #222831;
        font-family: "Quicksand", sans-serif;
        color: #EEEEEE;
        overflow-x: hidden;
        overflow-y: hidden;
    }
`;
