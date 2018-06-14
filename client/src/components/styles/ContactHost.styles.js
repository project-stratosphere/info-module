import styled from 'styled-components';
import { colors } from './styles';

export const Wrapper = styled.div`
  border-bottom: solid ${colors.lightGrey} 1px;
  padding-bottom: 1em;
  margin-bottom: 1em;
`;

export const StyledButton = styled.button`
  color: ${colors.blueGreen};
  border: solid ${colors.blueGreen} 1.25px;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em 0.5em 1em;
  margin: 1em;
`;

export const Button = styled.div`
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  padding: 1em;
  margin-top: 1em;
  background-color: ${(props) => {
    if (props.btnType === 'facebook') {
      return 'rgb(71, 105, 176)';
    } else if (props.btnType === 'google') {
      return 'white';
    }
    return 'rgb(252, 91, 98)';
  }};
  border: ${(props) => {
    if (props.btnType === 'google') {
      return 'solid rgb(118, 118, 118) 2px';
    }
    return 'none';
  }};
  color: ${(props) => {
    if (props.btnType === 'google') {
      return 'rgb(71, 71, 71)';
    }
    return 'white';
  }};
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: rgb(118, 118, 118);
  padding-top: 2em;
  padding-bottom: 2em;
  .half-line {
    width: 45%;
  }
  .full-line {
    width: 96%;
  }
`;

export const Login = styled.div`
  color: rgb(71, 71, 71);
  font-weight: lighter;
  text-align: center;
  span {
    cursor: pointer;
    color: rgb(17, 132, 136);
    padding-left: 1em;
    &:hover {
      text-decoration: underline;
    }
  }
`;
