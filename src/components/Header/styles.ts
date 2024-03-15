import { styled } from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.img`
  width: 80px;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 0.5rem;

  font-size: 0.8rem;

  svg {
    font-size: 1rem;
  }

  a {
    background-color: ${({theme}) => theme["yellow-200"]};
    color: ${({theme}) => theme["yellow-600"]};
    padding: 0.4rem;
    border-radius: 4px;
    line-height: 1;
    transition: 0.3s ease-in;

    &:hover {
      background-color: ${({theme}) => theme["yellow-500"]};
    }
  }
`;

export const HeaderInfoLocation= styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({theme}) => theme["purple-200"]};
  padding: 0.4rem 0.8rem;
  border-radius: 4px;

  p {
    color: ${({theme}) => theme["purple-600"]};
  }

  svg {
    color: ${({theme}) => theme["purple-600"]};
  }
`;
