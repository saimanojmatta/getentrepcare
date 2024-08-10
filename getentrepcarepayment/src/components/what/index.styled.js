import styled from "styled-components";
// import WhatImg from "../../assets/what.jpg";
import WhatImg from "../../assets/modules.png";

export const Container = styled.div`
  width: 100%;
  height: 650px;
  background: ${(props) => props.theme.colors.lightBg};
  .current-container {
    height: 100%;
    display: flex;
    padding: 1rem 0;
    flex-direction: column;
  }

  h1 {
    text-align: center;
    font-size: 35px;
    color: #c6130e;
    // padding: 0px 20px;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
    // height: 600px;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    height: auto;
    .current-container {
      flex-direction: column;
    }
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 100%;
    height: 400px;
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: flex-start;
  padding-top: 25px;

  h1 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.primaryColor};
        // font-family: "Caveat", sans-serif;

  }

  p {
    width: 90%;
    font-size: 25px;
    // line-height: 200%;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: left;
    line-height: 36px;
      // font-family: "Kanit", sans-serif;
      // font-family: "Bebas Neue", sans-serif;
    font-family: "Caveat", sans-serif;
    color: ${(props) => props.theme.colors.text};

    // box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    // box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1rem;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 90%;
    margin: auto;
    height: auto;
    p {
      width: 100%;
      margin: 20px 0px 30px;
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin-top: 20px;
    gap: 20px;
  }

  .social-media div {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    font-weight: 500;
    color: #006da5;
    background: white;
    padding: 10px 20px;
    border-radius: 35px;
    box-shadow: 0px 0px 7px 1px #80808014;
    cursor: pointer;
  }

  .social-media img {
    height: 40px;
    width: 40px;
  }
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  background: url(${WhatImg}) no-repeat center right;
  background-size: contain;
  background-position: left;
  /* border: 1px solid grey; */

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
    width: 80%;
    height: 85%;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    background-position: center;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  min-height: 500px;
  margin-top: 3rem;
  display: flex;
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    flex-direction: column;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
`;
