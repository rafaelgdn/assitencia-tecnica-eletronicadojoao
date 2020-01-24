import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/components/Header';
import Navbar from '~/components/Navbar';

import { Wrapper, Content } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Content>{children}</Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
