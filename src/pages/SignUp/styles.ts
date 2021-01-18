import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #303033;
  font-family: 'FiraSans-Medium';
  margin: 64px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
`;

export const BackToSignInText = styled.Text`
  font-size: 14px;
  color: #303033aa;
  margin-left: 8px;
  font-family: 'FiraSans-Medium';
`;
