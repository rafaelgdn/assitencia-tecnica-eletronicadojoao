import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Container, RegisterArea, SubmitButton, CancelButton } from './styles';

export default function SignIn() {
  const formattedDate = format(
    new Date(),
    "EEEE, 'dia' dd 'de' MMMM 'de' yyyy",
    {
      locale: pt,
    }
  );

  return (
    <Container>
      <strong>Cadastro de Ordem de Serviço</strong>
      <span>{formattedDate}</span>
      <RegisterArea>
        <div>
          <strong>Nº 1642</strong>
          <span>{formattedDate}</span>
        </div>
        <Form>
          <h1>Cliente:</h1>
          <Input type="text" name="cpf" placeholder="CPF..." />
          <Input type="text" name="name" placeholder="Nome..." />
          <Input type="email" name="email" placeholder="E-mail..." />
          <Input type="text" name="phoneNumber" placeholder="Telefone..." />
          <Input type="text" name="zipcode" placeholder="CEP..." />
          <Input type="text" name="street" placeholder="Logradouro..." />
          <Input type="text" name="number" placeholder="Numero..." />
          <Input type="text" name="complement" placeholder="Complemento..." />
          <Input type="text" name="district" placeholder="Bairro..." />
          <Input type="text" name="city" placeholder="Cidade..." />
          <Input type="text" name="state" placeholder="Estado..." />
          <Input type="text" name="country" placeholder="País..." />
          <h1>Produto:</h1>
          <Input type="text" name="brand" placeholder="Marca..." />
          <Input type="text" name="model" placeholder="Modelo..." />
          <Input type="text" name="serie" placeholder="Serie..." />
          <Input type="text" name="defect" placeholder="Defeito..." />
          <Input type="text" name="accessories" placeholder="Acessórios..." />
          <div>
            <SubmitButton type="submit">Salvar</SubmitButton>
            <CancelButton type="button">Cancelar</CancelButton>
          </div>
        </Form>
      </RegisterArea>
    </Container>
  );
}
