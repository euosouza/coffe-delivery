import { styled } from "styled-components";

export const HomeContainer = styled.div``;

export const SectionProducts = styled.section`

  display: flex;
  align-items: center;
  justify-content: center;

  h2{
    margin-bottom: 2rem;
  }

`;
export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  flex: 1 1 230px;
  background-color: ${({theme}) => theme["gray-300"]};
  padding: 1rem 0 2rem;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4rem;
  text-align:center;
  margin-top: 1.8rem;


  @media(min-width: 1024px) {
    flex: 0 1 23%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    top: -60%;
    width: 100px;
  }
`;

export const CardContent = styled.div`

  p {
    font-size:1rem;

    &:nth-child(1) {
      font-weight: bold;
    }

    &:nth-child(2) {
      margin: 0.6rem;
      font-size: 0.8rem;
    }

  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    line-height: 1;
    span {
      font-size: 0.8rem;

      &:nth-child(2) {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 0.1rem;
      }
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 0.4rem;
`;

export const ButtonShoppingCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  border: none;
  color: ${({theme}) => theme["gray-0"]};
  background-color: ${({theme}) => theme["purple-600"]};
  border-radius:4px;
  font-weight: 400;
  padding: 0.4rem;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: ${({theme}) => theme["purple-500"]};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 4rem;

  span {
    font-size:0.6rem;
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    background-color: ${({theme}) => theme["yellow-200"]};
    color: ${({theme}) => theme["yellow-600"]};
    text-transform: uppercase;
    font-weight: 600;
  }
`;


export const ButtonContainer = styled.div`
  button {
    background-color: ${({theme}) => theme["purple-500"]};
    color: ${({theme}) => theme["gray-0"]};
    border: none;
    border-radius:4px;
    padding: 0.4rem;
  }
`;

export const InputWrapper = styled.div`
  background-color: ${({theme}) => theme["gray-500"]};
  display: flex;
  align-items: stretch;
`;

