import styled from 'styled-components';

export const colors = {
  darkGrey: '#484848',
  lightGrey: '#808080',
  lighterGrey: '#666666',
  blueGreen: '#009999',
  darkRed: '#660000',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  box-shadow: ${props => props.boxShadow};
  color: ${props => props.color};
`;
