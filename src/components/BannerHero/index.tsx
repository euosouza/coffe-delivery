import { Container } from "../Container";

import urlImage from "../../assets/images/banner-hero.png";
import { BannerHeroWrapper, BannerHeroContent, ImageContainer, TextContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function BannerHero() {
  return (
    <BannerHeroWrapper>
      <Container>
        <BannerHeroContent>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <ul>
              <li>
                <ShoppingCart />
                <span>Compra simples e segura</span>
              </li>
              <li>
                <Package />
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <Timer />
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <Coffee />
                <span>O café chega fresquinho até você</span>

              </li>
            </ul>
          </TextContainer>

          <ImageContainer>
            <img src={urlImage} alt="banner-hero" />
          </ImageContainer>
        </BannerHeroContent>
      </Container>
    </BannerHeroWrapper>
  );
}
