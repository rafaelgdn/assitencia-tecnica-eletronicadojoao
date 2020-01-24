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
            Cadastrar OS
          </a>
        </li>
        <li>
          <a href="/">
            <MdSearch />
            Pesquisar OS
          </a>
        </li>
        <li>
          <a href="/">
            <MdAssignmentTurnedIn />
            Finalizar OS
          </a>
        </li>
      </NavList>
      <Categories>ESTOQUE</Categories>
      <NavList>
        <li>
          <a href="/">
            <MdAddCircle />
            Cadastrar Produto
          </a>
        </li>
        <li>
          <a href="/">
            <MdSearch />
            Pesquisar Produto
          </a>
        </li>
      </NavList>
    </Container>
  );
}
