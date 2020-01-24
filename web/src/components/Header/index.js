import React from 'react';
import { MdMenu } from 'react-icons/md';

import { Container, User } from './styles';

export default function Header() {
  return (
    <Container>
      <MdMenu />
      <User>
        <span>João Ramos</span>
        <img
          src="https://api.adorable.io/avatars/40/abott@adorable.png"
          alt="avatar"
        />
      </User>
    </Container>
  );
}
