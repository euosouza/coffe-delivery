
import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
  padding: 2rem 0;
`;

export const CheckoutContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    font-size:1rem;
    margin-bottom: 1rem;
  }
`;

export const Column = styled.div`
  flex: 1 0 480px;

  &:nth-child(2) {
    flex: 1 0 390px;
  }
`;

export const AddresContainer = styled.div`
  background-color: ${({theme}) => theme["gray-300"]};
  border-radius: 4px;
  padding: 1.4rem 1rem;
`;

export const AddresHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    font-size: 1.4rem;
    color: ${({theme}) => theme["yellow-500"]};
  }

  p {
    font-size: 1rem;
    font-weight: 500;

    &:nth-child(2) {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
`;

export const AddresContent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  input {
    border: 1px solid ${({theme}) => theme["gray-500"]};
    border-radius: 4px;
    padding: 1rem;
    height: 48px;
    box-sizing: border-box;
  }

  input[name="cep"] {
    flex: 1 0 100%;
  }

  input[name="rua"] {
    flex: 1 0 200px;
  }

  input[name="numero"] {
    flex: 1 0 100px;

    @media(min-width: 568px) {
      max-width: 120px;
    }
  }

  input[name="complemento"] {
    flex: 1 0 250px;
  }

  input[name="bairro"] {
    flex: 1 0 200px;
  }

  input[name="cidade"] {
    flex: 1 0 150px;

    @media(min-width: 568px) {
      max-width: 150px;
    }
  }

  input[name="uf"] {
    flex: 1;

    @media(min-width: 400px) {
      max-width: 60px;
    }
  }
`;

export const PaymentContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({theme}) => theme["gray-300"]};
  border-radius: 4px;
  padding: 1.4rem 1rem;
`;

export const PaymentHeader = styled(AddresHeader)`
  svg {
    color: ${({theme}) => theme["purple-500"]};
  }
`;

export const PaymentInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({theme}) => theme["purple-500"]};
    background-color: ${({theme}) => theme["purple-200"]};
  }
`;

export const TagsPayment = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: stretch;
  gap: 0.6rem;

`;

export const Tag = styled.label`
  flex: 1;
  background-color: ${({theme}) => theme["gray-400"]};
  border-radius: 4px;
  border: none;
  padding: 0.8rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  font-size: 0.6rem;
  text-transform: uppercase;
  transition: 0.2s ease-in;
  position: relative;
  border: 1px solid transparent;

  svg {
    font-size: 0.8rem;
    color: ${({theme}) => theme["purple-500"]};
  }

  &:hover {
    border: 1px solid ${({theme}) => theme["purple-500"]};
    background-color: ${({theme}) => theme["purple-200"]};
  }

  input[type="radio"] {
    display: none;

    &:checked + label {
      background-color: red;
    }
  }
`;

export const ShoppingCardContainer = styled.div`
  background-color: ${({theme}) => theme["gray-300"]};
  border-radius: 4px;
  padding: 2rem 1rem;
  display:grid;
  gap: .5rem;

  hr {
    opacity:0.2;
  }

  div {
    span {
      font-size: 0.8rem;
    }

    &:last-child {
      span {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
`;

export const ProductItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  padding-bottom: 1rem;

  img {
    width: 80px;
  }
`;

export const ProductItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  p {
    width: 100%;

    display: flex;
    justify-content: space-between;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.4rem;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  border:1px solid ${({theme}) => theme["purple-500"]};
  color: ${({theme}) => theme["purple-500"]};
  border-radius:4px;
  font-weight: 400;
  padding: 0.4rem;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    border: 1px solid ${({theme}) => theme["red-500"]};
    color: ${({theme}) => theme["red-500"]};

  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem 0;

`;

export const ValuesContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonConfirmOrder = styled.button`
  border: none;
  border-radius: 4px;
  color: ${({theme}) => theme["gray-0"]};
  padding: 1rem;
  width: 100%;
  font-weight: 600;
  background-color: ${({theme}) => theme["yellow-500"]};
  transition: 0.2s ease-in;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme["yellow-600"]};
  }
`;


