import { ReactNode } from "react";

import { WrapperContainer } from "./styles";

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <WrapperContainer>
      { children }
    </WrapperContainer>
  );
}
