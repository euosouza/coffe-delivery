import { styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.4rem;
  background-color: ${({theme}) => theme["gray-500"]};

  input {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 30px;
    border: 0;
    background-color: ${({theme}) => theme["gray-500"]};

  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type="number"] {
      -moz-appearance: textfield;
      position:relative;
  }

  button {
    border:0;
    background-color: ${({theme}) => theme["gray-500"]};
    color: ${({theme}) => theme["purple-600"]};
    font-weight: 700;
    padding: 0.4rem;
    font-size: 0.8rem;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${({theme}) => theme["purple-500"]};
      color: ${({theme}) => theme["gray-0"]};
    }

  }
`;
