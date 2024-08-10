import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};

  div.current-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 2rem 0;

    h1 {
      font-size: 30px;
      color: ${(props) => props.theme.colors.primaryColor};
      // margin-bottom: 35px;
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
`;

export const CtaContainer = styled.div`
  display: flex;
  gap: 10px;
  // flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
  // justify-content: center;
  align-items: center;

    button {
      width: 300px;
      // margin-top: 30px;
      height: 50px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      cursor: pointer;
      border: 1px solid ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.primaryColor};
      background-color: transparent;
      transition: all 0.1s ease-in-out;

      &:hover {
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.black};
      }
    }

    h1 {
      font-size: 35px;
      color: ${(props) => props.theme.colors.primaryColor};
      margin-bottom: 0;
      padding-left: 5px;
      // padding: 50px 50px;
    }
`;

export const ClientCardContainer = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  gap: 20px;
  /* padding: 0px 20px; */
  margin-top:25px;
`;

export const ClientCard = styled.div`
  width: 23%;
  height: 200px;
  min-width: 275px;
  border-radius: 20px;
  background: ${(props) => `url(${props.imgUrl}) no-repeat center right`};
  background-size: cover;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0000007d;
    border-radius: 20px;
    flex-direction: column;
  }

  div {
    padding: 0 10px;
  }
  h2 {
    text-align: center;
    color: white;
    line-height: 42px;
    font-size: 30px;
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    width: 100%;
  }
`;
