import React from 'react';
import styled from 'styled-components/native';

import Check from '../../public/img/check.svg';

export interface Props {
  name: string;
  onFilterPressed: (name: string) => void;
  isActive: boolean;
}

const Filter: React.FC<Props> = ({name, onFilterPressed, isActive}) => {
  return (
    <Container onPress={() => onFilterPressed(name)}>
      <StyledText>{name}</StyledText>
      {isActive ? <Check /> : <CheckMock />}
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  margin-bottom: 30px;
  padding: 10px 0;
`;

const StyledText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  line-height: 19px;

  color: #7e7e7e;
`;

const CheckMock = styled.View`
  width: 25px;
  height: 19px;
`;

export default Filter;
