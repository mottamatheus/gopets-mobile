import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0 16px;
  background: #f2e9e2;
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #303033;
  font-size: 16px;
  font-family: 'FiraSans-Medium';
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
