# Coffee Delivery
Coffee Delivery é uma página web de catálogo e compra de cafés.

## Funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

## Entidades

**Coffee** (Café):

```ts
  interface coffee {
    id: string;
    name: sring;
    description: string;
    value: number;
    amount: number
    tags: string[];
    url_image: string;
  }
```

**User** (Usuário):

```ts
  interface user {
    id: string;
    name: sring;
    address: Address;
  }
```

**Address** (Usuário):

```ts
  interface Address {
    zip_code: string;
    street: sring;
    number: sring;
    complement?: sring;
    neighborhood: sring;
    city: sring;
    uf: sring;
  }
```

**Order** (Pedido):

```ts
  interface order {
    id: string;
    user: User;
    payment: PaymentType;
    delivery_forecast: string;
    shopping_cart: ShoppingCart;
  }
```

**Shopping Cart** (Carrinho de compras):

```ts
  interface ShoppingCart {
      products:  Coffe[];
      delivery_value: number;
      total_itens: number;
      total_value: number;
  }
```

**Payment** (Pagamento):

```ts
  enum PaymentType {
    CREDIT_CARD = "CREDIT_CARD",
    DEBIT_CARD = "DEBIT_CARD",
    MONEY = "MONEY"
  }
```


