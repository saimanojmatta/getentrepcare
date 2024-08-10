import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: ${(props) => props.theme.colors.lightBg};
  display: flex;
  align-items: center;

  div.current-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding: 30px 0; */

    h1 {
      font-size: 35px;
      color: ${(props) => props.theme.colors.primaryColor};
      padding: 0px 20px;
    }

    p {
      width: 90%;
      font-size: 21px;
      margin-top: 20px;
      text-align: center;
      line-height: 24px;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    // padding: 20px 0px;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    padding: 20px 0px;
  }
`;
