import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};

  .current-container {
    height: 100%;
    padding: 2rem 0;

    > h1 {
      text-align: center;
      font-size: 35px;
      color: ${(props) => props.theme.colors.primaryColor};
      padding: 20px 20px;
      margin-bottom: 2rem;
      position: sticky;
      top: 0;
      background: #ffffffd1;
    }
  }

  .wrapper::-webkit-scrollbar {
    height: 6px;
  }
  .wrapper::-webkit-scrollbar-thumb {
    background-color: #939393;
    border-radius: 2px;
    border: 1px solid #b4b4b4;
  }
  .wrapper::-webkit-scrollbar-thumb:hover {
    background-color: #000000;
  }
  .wrapper::-webkit-scrollbar-track {
    background: #cecece;
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

export const DetailsNew = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  // margin: 10px 5px;

  label {
    display: flex;
    gap: 5px;
    width: 100%;
    padding: 10px 5px;
    font-size: 18px;

    align-items: center;
  }

  label p {
    // min-width:20%;
    // max-width: 80%;

    font-weight: 700;
    width: 25%;
  }

  label span {
    width: 75%;
  }
`;
