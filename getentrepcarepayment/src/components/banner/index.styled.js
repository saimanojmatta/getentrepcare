import styled from "styled-components";
import ConsultImg from "../../assets/consult.jpg";

export const Container = styled.div`
  width: 100%;
  // height: 350px;
  /* background: url(${ConsultImg}) no-repeat center right fixed;
    background-size: cover; */

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    // height: 500px;
  }
`;

export const Overlay = styled.div`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: ${(props) => props.theme.colors.darkGrey}; */
  background: #353535;
  /* background: rgba(0, 0, 0, 0.85); Change the RGB values and the opacity as needed */

  div.current-container {
    height: 100%;
    padding: 0 20px;

    display: flex;
    /* align-items: center; */
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;

  .yellow-text {
    margin-bottom: 30px;
    font-size: 25px;
    // margin-bottom: 100px;
  }

  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.white};
    // text-align: center;

    @media (max-width: ${(props) =>
        props.theme.breakPoints.mediumScreen.maxWidth}) {
      font-size: 30px;
    }

    span {
      color: ${(props) => props.theme.colors.white};

      @media (max-width: ${(props) =>
          props.theme.breakPoints.mediumScreen.maxWidth}) {
        font-size: 30px;
      }

      &.primary {
        color: ${(props) => props.theme.colors.white};
        position: relative;
        margin-right: 30px;
      }
    }
  }

  .tm {
    color: ${(props) => props.theme.colors.white};
    font-size: 18px;
    position: absolute;
    top: 4px;
  }

  p.bold {
    font-weight: 500;
    font-size: 35px;
    // font-size: 45px;
  }

  p {
    margin-top: 10px;
    // font-size: 30px;
    font-size: 35px;
    color: ${(props) => props.theme.colors.secondaryColor};
    font-weight: 300;

    @media (max-width: ${(props) =>
        props.theme.breakPoints.mediumScreen.maxWidth}) {
      font-size: 25px;
    }
  }

  // button {
  //   width: 300px;
  //   margin-top: 30px;
  //   height: 50px;
  //   border-radius: 6px;
  //   border: none;
  //   font-size: 16px;
  //   cursor: pointer;
  //   border: 1px solid ${(props) => props.theme.colors.white};
  //   color: ${(props) => props.theme.colors.white};
  //   background-color: transparent;
  //   transition: all 0.1s ease-in-out;

  //   &:hover {
  //     background-color: ${(props) => props.theme.colors.white};
  //     color: ${(props) => props.theme.colors.black};
  //   }
  // }
`;

export const Cta = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 60px;

    // background-color: #1e1e1e;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    width: 35%;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: none;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 100%;
  padding: 0 10px;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  // border: 1px solid ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.white};
  // background-color: transparent;
  background-color: ${(props) => props.theme.colors.primaryColor};

  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  /* box-shadow: 0 2px 4px 1px rgba(50, 50, 93, .3); */
  transition: all 0.1s ease-in-out;

  // &:hover {
  //   background-color: ${(props) => props.theme.colors.primaryColor};
  //   color: ${(props) => props.theme.colors.white};
  // }

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.colors.primaryColor};
    border: 1px solid ${(props) => props.theme.colors.primaryColor};
  }
`;