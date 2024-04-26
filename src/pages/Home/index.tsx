
import {
  HomeContainer,
  ContainerList,
  SectionProducts,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  TagsContainer,
  InputContainer,
  ButtonShoppingCart,
} from "./styles";

import { BannerHero } from "../../components/BannerHero";

import urlImage from "../../../public/images/coffees/americano.png";
import { Container } from "../../components/Container";
import { InputAmount } from "../../components/InputAmount";
import { ShoppingCart } from "@phosphor-icons/react";

export function Home() {
  return(
    <HomeContainer>
      <BannerHero />

      <SectionProducts>
        <Container>
          <h2>Nossos cafés</h2>

          <ContainerList>
          <Card>
              <CardHeader>
                <img src={urlImage} alt="" />
                <TagsContainer>
                  <span>Tradicional</span>
                  <span>Com leite</span>
                </TagsContainer>
              </CardHeader>
              <CardContent>
                <p>Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span>R$</span>
                  <span>9,90</span>
                </p>
                <InputContainer>
                  <InputAmount />
                  <ButtonShoppingCart type="button"><ShoppingCart /></ButtonShoppingCart>
                </InputContainer>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <img src={urlImage} alt="" />
                <TagsContainer>
                  <span>Tradicional</span>
                  <span>Com leite</span>
                </TagsContainer>
              </CardHeader>
              <CardContent>
                <p>Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span>R$</span>
                  <span>9,90</span>
                </p>
                <InputContainer>
                  <InputAmount />
                  <ButtonShoppingCart type="button"><ShoppingCart /></ButtonShoppingCart>
                </InputContainer>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <img src={urlImage} alt="" />
                <TagsContainer>
                  <span>Tradicional</span>
                  <span>Com leite</span>
                </TagsContainer>
              </CardHeader>
              <CardContent>
                <p>Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span>R$</span>
                  <span>9,90</span>
                </p>
                <InputContainer>
                  <InputAmount />
                  <ButtonShoppingCart type="button"><ShoppingCart /></ButtonShoppingCart>
                </InputContainer>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <img src={urlImage} alt="" />
                <TagsContainer>
                  <span>Tradicional</span>
                  <span>Com leite</span>
                </TagsContainer>
              </CardHeader>
              <CardContent>
                <p>Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span>R$</span>
                  <span>9,90</span>
                </p>
                <InputContainer>
                  <InputAmount />
                  <ButtonShoppingCart type="button"><ShoppingCart /></ButtonShoppingCart>
                </InputContainer>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <img src={urlImage} alt="" />
                <TagsContainer>
                  <span>Tradicional</span>
                  <span>Com leite</span>
                </TagsContainer>
              </CardHeader>
              <CardContent>
                <p>Expresso Tradicional</p>
                <p>O tradicional café feito com água quente e grãos moídos</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span>R$</span>
                  <span>9,90</span>
                </p>
                <InputContainer>
                  <InputAmount />
                  <ButtonShoppingCart type="button"><ShoppingCart /></ButtonShoppingCart>
                </InputContainer>
              </CardFooter>
            </Card>
          </ContainerList>
        </Container>
      </SectionProducts>
    </HomeContainer>
  );
}

