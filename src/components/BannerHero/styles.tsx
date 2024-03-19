import { styled } from "styled-components";

export const BannerHeroWrapper = styled.div``;

export const BannerHeroContent = styled.div`
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

export const TextContainer = styled.div`
  @media(min-width: 768px) {
    flex: 1 0 450px;
  }

  h1 {
    font-size: 2rem;
  }

  p{
    margin-top: 0.8rem;
    font-size: 1rem;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.8rem;

    padding:0;
    margin-top: 3rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 0.8rem;
      flex: 1 0 230px;
      list-style: none;

      svg {
        width:35px;
        height:35px;
        padding: 0.4rem;
        border-radius: 50%;
        color: ${({theme}) => theme["gray-0"]};
      }

      &:nth-child(1) {
          svg {
            background-color: ${({theme}) => theme["yellow-600"]};
          }
        }

        &:nth-child(2) {
          svg {
            background-color: ${({theme}) => theme["gray-700"]};
          }
        }

        &:nth-child(3) {
          svg {
            background-color: ${({theme}) => theme["yellow-500"]};
          }
        }

        &:nth-child(4) {
          svg {
            background-color: ${({theme}) => theme["purple-500"]};
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
