import styled from 'styled-components';

export const colors = {
  darkGrey: '#484848',
  lightGrey: '#808080',
  lighterGrey: '#666666',
  blueGreen: '#009999',
  darkRed: '#660000',
};

export const Modal = styled.div`
  display: ${props => props.displayModal};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 1em;
  padding-bottom: 50px;
  background-color: rgb(255,255,255);
  background-color: rgba(255,255,255,0.4);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: auto;
  padding: 2em;
  box-shadow: 0 0 1px grey;
  width: 100%;
  max-width: 650px;
  justify-content: center;
`;
