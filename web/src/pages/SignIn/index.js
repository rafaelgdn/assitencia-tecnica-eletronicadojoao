import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <span>
        ELETRÔNICADO
        <strong>JOÃO</strong>
      </span>

      <hr />

      <Form>
        <Input type="email" name="email" placeholder="Digite seu email..." />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua senha..."
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
}
