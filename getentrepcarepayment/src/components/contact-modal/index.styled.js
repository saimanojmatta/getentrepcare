import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: #0000006e;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  // max-height: 600px;
  height: auto;
  width: 90vw;
  padding: 20px;
  border-radius: 8px;
  form {
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .giftForm {
    gap: 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  .close-button{
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    padding: 0.5rem;
  `;

export const Body = styled.div`

  .thankYou {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content; center;

    h1 {
      width: auto;
      margin-bottom: 1rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    label {
      font-size: 20px;
      font-weight: 400;
    }
    input,
    textarea {
      height: 35px;
      outline: none;
      border: solid 1px #bbbbbb;
      border-radius: 4px;
      padding: 10px 10px;
      font-size: 16px;
    }
    .message-input {
      height: 100px;
    }
  }

  .phoneContainer {
    height: 35px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0.5rem 0;
  }

  .PhoneInput {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  button {
    height: 40px;
    font-size: 19px;
    border: none;
    outline: none;
    background: ${(props) => props.theme.colors.primaryColor};
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }

 button:disabled,
  button[disabled]{
    border: 1px solid #999999;
    background-color: ${(props) => props.theme.colors.fadedPrimaryColor};
    color: #666666;
  }

  select {
    height: 35px;
    outline: none;
    border: solid 1px #bbbbbb;
    border-radius: 4px;
    padding: 0px 10px;
    font-size: 16px;
  }

  .psychoanalytic-assessment {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 2rem 0;
    }

    form {
      gap: 1rem;
    }

    span {
      display: flex;
      align-items: center;
    }

    button {
      margin-bottom: 2rem;
    }

  }

  .psychoanalytic-assessment p {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    line-height: 30px;
  }




`;