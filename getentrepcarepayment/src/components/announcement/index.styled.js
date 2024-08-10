import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryColor};
  padding: 5px;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    padding: 5px 20px;
  }

  div.current-container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    @media (max-width: ${(props) =>
        props.theme.breakPoints.mediumScreen.maxWidth}) {
      flex-direction: column;
      gap: 10px;
    }

    @media (max-width: ${(props) =>
        props.theme.breakPoints.extraSmallScreen.maxWidth}) {
    }
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extraSmallScreen.maxWidth}) {
  }
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;
  min-width: 355px;
  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 100%;
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extraSmallScreen.maxWidth}) {
    width: 100%;
  }
`;

export const LogoHolder = styled.div`
  width: 150px;
  height: 100%;

  display: none;
  align-items: center;
  overflow: hidden;

  p {
    color: white;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    /* width: 310px;
        object-fit: contain; */
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    display: block;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extraSmallScreen.maxWidth}) {
    display: none;
  }
`;

export const Email = styled.div`
  /* width: 300px; */
  height: 30px;

  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
  }
`;

export const Phone = styled.div`
  /* width: 300px; */
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    margin-right: 10px;
  }

  p {
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extraSmallScreen.maxWidth}) {
    justify-content: flex-start;
  }
`;

export const MarqueeContainer = styled.div`
  width: 50%;

  marquee {
    color: ${(props) => props.theme.colors.white};
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 100%;
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extraSmallScreen.maxWidth}) {
    // width: 0%;
  }
`;
