import { Container } from "../../components/Container";
import { ImageContainer, SuccesColumn, SuccesInfoOrder, SuccessContainer, SuccessWrapper } from "./styles";

import urlImage from "../../assets/images/banner-success.png";
import { MapPin, Money, Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <SuccessContainer>
      <Container>
        <SuccessWrapper>
          <SuccesColumn>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <SuccesInfoOrder>
              <ul>
                <li>
                  <MapPin />
                  <span>
                    Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
                  </span>
                </li>
                <li>
                  <Timer />
                  <span>
                    Previsão de entrega
                    20 min - 30 min
                  </span>
                </li>
                <li>
                  <Money />
                  <span>
                    Pagamento na entrega
                    Cartão de Crédito
                  </span>
                </li>
              </ul>

            </SuccesInfoOrder>
          </SuccesColumn>

          <ImageContainer>
            <img src={urlImage} alt="" />
          </ImageContainer>
        </SuccessWrapper>
      </Container>
    </SuccessContainer>
  );
}
