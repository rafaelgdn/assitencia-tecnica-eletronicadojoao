import React from 'react';
import {
  MdLibraryBooks,
  MdSearch,
  MdAssignmentTurnedIn,
  MdAddCircle,
} from 'react-icons/md';

import { Container, Logo, NavList, Categories } from './styles';

export default function Navbar() {
  return (
    <Container>
      <Logo>
        ELETRONICADO<strong>JOÃO</strong>
      </Logo>
      <hr />
      <Categories>ORDEM DE SERVIÇO</Categories>
      <NavList>
        <li>
          <a href="/">
            <MdLibraryBooks />
            Cadastrar
          </a>
        </li>
        <li>
          <a href="/">
            <MdSearch />
            Pesquisar
          </a>
        </li>
        <li>
          <a href="/">
            <MdAssignmentTurnedIn />
            Finalizar
          </a>
        </li>
      </NavList>
      <Categories>ESTOQUE</Categories>
      <NavList>
        <li>
          <a href="/">
            <MdAddCircle />
            Cadastrar
          </a>
        </li>
        <li>
          <a href="/">
            <MdSearch />
            Pesquisar
          </a>
        </li>
      </NavList>
    </Container>
  );
}
