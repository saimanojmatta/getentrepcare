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

export const SubModuleLeftImg = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  border: 1px solid #e1e1e1;
  align-items: center;
  border-bottom: 0;

  &:last-child {
    border-bottom: 1px solid #e1e1e1;
  }

  .left {
    width: 50%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
      background: ${(props) => `url(${props.imgUrl}) no-repeat center right`};
      background-size: cover;
    }
  }

  .right {
    width: 50%;
    height: 100%;
    padding: 20px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 25px;
      font-weight: 600;
    }

    ol {
      li {
        font-size: 17px;
        margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};

        &.no-style {
          list-style: none;
        }
      }
    }
  }
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
      height: auto;
      width: 100vw;
    }
  }
`;

export const SubModuleRightImg = styled.div`
  width: 100%;
  min-height: 400px;
  border: 1px solid #e1e1e1;

  display: flex;
  align-items: center;
  border-bottom: 0;
  justify-content: flex-end;
  &:last-child {
    border-bottom: 1px solid #e1e1e1;
  }

  .right {
    width: 50%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
      background: ${(props) => `url(${props.imgUrl}) no-repeat center right`};
      background-size: cover;
    }
  }

  .left {
    width: 50%;
    height: auto;
    padding: 20px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 25px;
      font-weight: 600;
    }

    ol {
      li {
        font-size: 17px;
        margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};

        &.no-style {
          list-style: none;
        }
      }
    }
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    flex-direction: column-reverse;
    .left {
      width: 100%;
      height: auto;
      width: 100vw;
    }
    .right {
      width: 100%;
    }
  }
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 10px 5px;
  label {
    display: flex;
    gap: 5px;
    width: 100%;
    padding: 5px;
    font-size: 18px;
  }

  label p {
    width: 105px;
    font-weight: 700;
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

export const SubModuleLeftNew = styled.div`
  width: 100%;
  // min-height: 600px;
  display: grid;
  // row-gap: 30px;
  border: 1px solid #e1e1e1;
  // border: 2px solid #000000;
  align-items: center;
  border-bottom: 0;
  // margin-top: 30px;
  // margin-bottom: 30px;
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};

  .head {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    // height: 50%;
    // background-color: #80ced6;

    padding: 20px 30px;
    margin-bottom: 20px;
    h1 {
      font-size: 25px;
      font-weight: 600;
    }

    ol {
      li {
        font-size: 17px;
        // margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};
  // font-family: "Edu AU VIC WA NT Hand", cursive;
  font-family: "Ubuntu Mono", monospace;
        &.no-style {
          list-style: none;
        }
      }
    }
  }

  .left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;

    height: 100%;

    background-color: #d5f4e6;

    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
      background: ${(props) => `url(${props.imgUrl}) no-repeat center right`};
      background-size: cover;
    }
  }

  .right {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;

    height: 100%;

    // background-color: #f18973;

    height: 100%;
    padding: 0 30px 20px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 25px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primaryColor};

      margin-bottom: 20px;
    }

    ol {
      li {
        font-size: 17px;
        margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};

        &.no-style {
          list-style: none;
        }
      }
    }
  }

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
      height: auto;
      width: 100vw;
    }
  }
`;

export const SubModuleRightNew = styled.div`
  width: 100%;
  // min-height: 600px;
  display: grid;
  // row-gap: 30px;
  border: 1px solid #e1e1e1;
  // border: 2px solid #000000;
  align-items: center;
  border-bottom: 0;
  // margin-top: 30px;
  // margin-bottom: 30px;  
  border-bottom: 2px solid ${(props) => props.theme.colors.primaryColor};


  .head {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;

    // height: 50%;
    // background-color: #80ced6;

    padding: 20px 30px;
    margin-bottom: 20px;
    h1 {
      font-size: 25px;
      font-weight: 600;
    }

    ol {
      li {
        font-size: 17px;
        // margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};
        font-family: "Ubuntu Mono", monospace;
        &.no-style {
          list-style: none;
        }
      }
    }
  }

  .left {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 4;

    height: 100%;

    height: 100%;
    padding: 0 30px 20px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 25px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.primaryColor};

      margin-bottom: 20px;
    }

    ol {
      li {
        font-size: 17px;
        margin-top: 20px;
        line-height: 24px;
        color: ${(props) => props.theme.colors.text};

        &.no-style {
          list-style: none;
        }
      }
    }
  }

  .right {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;

    height: 100%;

    background-color: #d5f4e6;

    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image-container {
      width: 100%;
      height: 100%;
      background: ${(props) => `url(${props.imgUrl}) no-repeat center right`};
      background-size: cover;
    }
  }

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
      height: auto;
      width: 100vw;
    }
  }
`;

// export const CtaContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;

//   button {
//     min-height: 40px;
//     padding: 10px 10px;
//     height: auto;
//     font-size: 18px;
//     border-radius: 8px;
//     border: none;
//     border: 1px solid ${(props) => props.theme.colors.primaryColor};
//     background-color: transparent;
//     cursor: pointer;
//     color: ${(props) => props.theme.colors.primaryColor};
//     /* box-shadow: 0 2px 4px 1px rgba(50, 50, 93, .3); */
//     transition: all 0.1s ease-in-out;

//     &:hover {
//       background-color: ${(props) => props.theme.colors.primaryColor};
//       color: ${(props) => props.theme.colors.white};
//     }
//   }
// `;

export const CtaContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;

  button {
    height: auto;
    min-height: 40px;
    padding: 10px 20px;
    height: auto;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    /* border: 1px solid ${(props) => props.theme.colors.primaryColor}; */
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryColor};
    box-shadow: 0 2px 4px 1px rgba(50, 50, 93, 0.3);
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.white};
    }

    &:disabled {
      opacity: 0.4;
      cursor: unset;
      // background-color: transparent;
      background-color: ${(props) => props.theme.colors.white};
      // background-color: ${(props) => props.theme.colors.primaryColor};

          &:hover {
            background-color: ${(props) => props.theme.colors.white};
            // color: ${(props) => props.theme.colors.white};
                color: ${(props) => props.theme.colors.primaryColor};

    }
    }
  }
`;


export const Wrapper = styled.div`
  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
  }
  @media (max-width: ${(props) =>
      props.theme.breakPoints.largeScreen.maxWidth}) {
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: flex;
    width: 100%;
    overflow-x: auto;
  }
`;
