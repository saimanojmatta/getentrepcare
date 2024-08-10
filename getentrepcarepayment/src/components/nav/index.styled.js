import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
    from {
        right: -100%;
    }
    to {
        right: 0;
    }
`;

const slideOut = keyframes`
    from {
        right: 0;
    }
    to {
        right: -100%;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    padding: 0px 20px;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    align-items: ${(props) => (props.open ? "center" : "flex-start")};
    padding: 0;
  }
`;

export const CloseImg = styled.img`
  position: absolute;
  top: 10%;
  right: 30px;
  display: none;
  z-index: 1;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: ${(props) => (props.open ? "block" : "none")};
  }
`;

export const LogoHolder = styled.div`
  width: 20%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
    /* width: 310px;
        object-fit: contain; */
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    display: none;
  }
`;

export const NavigationMenus = styled.div`
  width: 65%;
  height: 100%;

  display: flex;
  align-items: center;

  ul {
    flex: 1;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: ${(props) =>
        props.theme.breakPoints.extralargeScreen.maxWidth}) {
      justify-content: space-between;
    }

    li {
      list-style: none;
      color: ${(props) => props.theme.colors.link};
      cursor: pointer;
      font-size: 17px;
      padding: 0 10px;
    }
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.extralargeScreen.maxWidth}) {
    width: 65%;
  }

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: none;
  }
`;

export const Cta = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  padding: 0 10px;
  font-size: 15px;
  border-radius: 8px;
  border: none;
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryColor};
  /* box-shadow: 0 2px 4px 1px rgba(50, 50, 93, .3); */
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const HamburgerTriggerContainer = styled.div`
  width: 100%;
  padding: 20px 20px 20px 10px;
  display: none;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: ${(props) => (props.open ? "none" : "flex")};
    align-items: center;
  }
`;

export const HamburgerTriggerLogoHolder = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 265px;
  }
`;

export const HamburgerMenu = styled.div`
  height: 60%;
  padding-right: 30px;
  width: 100vw;
  background-color: white;

  display: none;

  @media (max-width: ${(props) =>
      props.theme.breakPoints.mediumScreen.maxWidth}) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    height: calc(100svh - 40px);
    animation: ${(props) => (props.open ? slideIn : slideOut)} 0.1s forwards;
    right: ${(props) => (props.open ? "0%" : "100%")};
  }
`;

export const MobileLogoHolder = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  img {
    width: 300px;
  }
`;

export const MobileNavigationMenus = styled.div`
  ul {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    li {
      list-style: none;
      color: ${(props) => props.theme.colors.link};
      cursor: pointer;
      font-size: 17px;
      margin-bottom: 2rem;
    }
  }
`;

export const MobileCta = styled.div`
  button {
    height: 50px;
    padding: 0 20px;
    font-size: 15px;
    border-radius: 8px;
    border: none;
    border: 1px solid ${(props) => props.theme.colors.primaryColor};
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryColor};
    /* box-shadow: 0 2px 4px 1px rgba(50, 50, 93, .3); */
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
