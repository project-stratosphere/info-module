import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  order: ${props => props.order || 1};
  font-family: 'Raleway', sans-serif;
  margin: 0.3em;
`;

export const HomeType = styled.div`
  order: 1;
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: bold;
`;

export const HomeTitle = styled.div`
  order: 2;
  font-size: 2em;
`;

export const HomeLocation = styled.div`
  order: 3;
  font-size: 1em;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  order: 4;
  background-color
`;

export const Feature = styled.div`
  order: ${props => props.order || 1};
  margin-right: 0.4em;
`;

export const StyledImage = styled.img`
  order: 1;
  width: 4em;
  height: auto;
  border-radius: 100%;

`;

export const OwnerName = styled.div`
  order: 2;
  text-align: center;
`;
