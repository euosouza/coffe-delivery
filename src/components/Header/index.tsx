import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import urlImage from "../../assets/images/logo.svg";
import { Container } from "../Container";

import {
  HeaderWrapper,
  HeaderContent,
  HeaderLogo,
  HeaderNav,
  HeaderInfoLocation
} from "./styles";

export function Header() {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderLogo src={urlImage} alt="Logomarca Coffee Delivery" />

          <HeaderNav>
            <HeaderInfoLocation>
              <MapPin  />
              <p>Belo Horizonte, MG</p>
            </HeaderInfoLocation>

            <NavLink to="/checkout">
              <ShoppingCart />
            </NavLink>
          </HeaderNav>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}
