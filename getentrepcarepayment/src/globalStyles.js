import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: "Open Sans", sans-serif; */
    font-family: "Figtree", sans-serif;
  }
`;

export const Marginer = styled.div`
  width: 85%;
  margin: 0 auto;


  @media (max-width: ${(props) =>
    props.theme.breakPoints.extralargeScreen.maxWidth}) {
    width: 95%;
  }
  @media (max-width: ${(props) =>
    props.theme.breakPoints.largeScreen.maxWidth}) {

  }

  @media (max-width: ${(props) =>
    props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 100%;
    }
  }
`;

export default GlobalStyle;
