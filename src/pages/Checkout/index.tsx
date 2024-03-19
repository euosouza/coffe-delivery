import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
  Trash,
} from "@phosphor-icons/react";

import { Container } from "../../components/Container";

import urlImage from "../../assets/images/coffee-1.png";

import { CheckoutContainer,
  CheckoutContent,
  Column,
  AddresContainer,
  AddresContent,
  AddresHeader,
  PaymentContainer,
  ShoppingCardContainer,
  Tag,
  TagsPayment,
  ValuesContainer,
  ProductItem,
  ProductItemContainer,
  PaymentHeader,
  PaymentInput,
  ButtonConfirmOrder,
  ValuesContent,
  InputContainer,
  ButtonRemove
  } from "./styles";
import { InputAmount } from "../../components/InputAmount";


export function Checkout() {

  function handleSubmit() {}

  return(
    <CheckoutContainer onSubmit={handleSubmit}>
      <Container>
        <CheckoutContent>
          <Column>
            <h2>Complete seu pedido</h2>

            <AddresContainer>
              <AddresHeader>
                <MapPin  />
                <div>
                  <p>Endereço de Entrega</p>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </AddresHeader>

              <AddresContent>
                <input type="text" name="cep" placeholder="CEP"/>
                <input type="text" name="rua" placeholder="Rua"/>
                <input type="text" name="numero" placeholder="Número"/>
                <input type="text" name="complemento" placeholder="Complemento"/>
                <input type="text" name="bairro" placeholder="Bairro"/>
                <input type="text" name="cidade" placeholder="Cidade"/>
                <input type="text" name="uf" placeholder="UF"/>
              </AddresContent>
            </AddresContainer>

            <PaymentContainer>
              <PaymentHeader>
                <CurrencyDollar   />
                <div>
                  <p>Pagamento</p>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </PaymentHeader>

              <TagsPayment>
                <PaymentInput type="radio" id="card-credit" name="payment"/>
                <Tag htmlFor="card-credit">
                  <CreditCard />
                  <span>Cartão de Crédito</span>
                </Tag>

                <PaymentInput type="radio" id="card-debit" name="payment"/>
                <Tag htmlFor="card-debit">
                  <Bank />
                  <span>Cartão de Débito</span>
                </Tag>

                <PaymentInput type="radio" id="money" name="payment"/>
                <Tag htmlFor="money">
                  <Money />
                  <span>Dinheiro</span>
                </Tag>
              </TagsPayment>

            </PaymentContainer>
          </Column>

          <Column>
            <h2>Cafés selecionados</h2>

            <ShoppingCardContainer>
              <ProductItemContainer>
                <img src={urlImage} alt="" />
                <ProductItem>
                  <p>
                    <span>Expresso Tradicional</span>
                    <span>R$ 9,90</span>
                  </p>
                  <InputContainer>
                    <InputAmount />
                    <ButtonRemove type="button"><Trash /> Remover</ButtonRemove>
                  </InputContainer>
                </ProductItem>
              </ProductItemContainer>

              <hr />

              <ValuesContainer>
                <ValuesContent>
                  <span>Total de itens</span>
                  <span>R$ 29,90</span>
                </ValuesContent>

                <ValuesContent>
                  <span>Entrega</span>
                  <span>R$ 3,50</span>
                </ValuesContent>

                <ValuesContent>
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </ValuesContent>
              </ValuesContainer>

              <ButtonConfirmOrder type="submit">Confirmar pedido</ButtonConfirmOrder>
            </ShoppingCardContainer>
          </Column>
        </CheckoutContent>
      </Container>
    </CheckoutContainer>
  );
}
