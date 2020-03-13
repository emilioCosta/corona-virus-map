import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Map from '../components/Map';
import logo from '../assets/logo.svg';

const Container = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: #61dafb;
`;

const App = () => (
  <Container>
    <Header>
      <Logo src={logo} alt="logo" />
      <Map />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Header>
  </Container>
);

export default App;
