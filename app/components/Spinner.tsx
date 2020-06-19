import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

const Spinner = () => (
  <Container>
    <ActivityIndicator size="large" color="#0000ff" />
  </Container>
);

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Spinner;
