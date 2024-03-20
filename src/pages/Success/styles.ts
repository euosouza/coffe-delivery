import { styled } from "styled-components";

export const SuccessContainer = styled.div``;

export const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0;

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 0;
  }
`;

export const SuccesColumn = styled.div`
  p {
    font-size: 1rem;
  }
`;

export const SuccesInfoOrder= styled.div`
  max-width: 600px;
  margin-top: 3rem;
  border: 10px solid transparent;
  border-radius: 4px 16px;
  border-image-slice: 1;
  border-width: 3px;
  border-image-source: linear-gradient(to left, ${({theme}) => theme["purple-500"]},
  ${({theme}) => theme["yellow-500"]});

  ul {
    display: grid;
    gap: 0.8rem;

    padding: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.8rem;
      list-style: none;

      svg {
        width:35px;
        height:35px;
        padding: 0.4rem;
        border-radius: 50%;
        box-sizing: border-box;
        color: ${({theme}) => theme["gray-0"]};
      }

      &:nth-child(1) {
        svg {
          background-color: ${({theme}) => theme["purple-500"]};
        }
      }

      &:nth-child(2) {
        svg {
          background-color: ${({theme}) => theme["yellow-500"]};
        }
      }

      &:nth-child(3) {
        svg {
          background-color: ${({theme}) => theme["yellow-600"]};
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 400px;
  }
`;
