import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 90%;
  height: 60px;
  background: #f9665f;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'FiraSans-Medium';
  color: #fff5ee;
  font-size: 18px;
`;
