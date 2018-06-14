import styled from 'styled-components';

export const colors = {
  darkGrey: '#404040',
  lightGrey: '#666666',
  blueGreen: '#009999',
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
