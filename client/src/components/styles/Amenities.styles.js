import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  box-shadow: 0 0 2px grey;
  padding: 0.5em;
`;

export const Title = styled.div`
  order: 1;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 1em;
`;

export const AmenitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryHead = styled.div`
  order: 1;
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0.75em;
`;

export const CategoryItemContainer = styled.div`
  order: 2;
  border-bottom: solid black 1px;
  margin-bottom: 0.75em;
`;

export const AmenityDescription = styled.div`
  font-size: 1.1em;
  margin-bottom: 0.5em;
`;

export const Supplemental = styled.div`
  margin-bottom: 0.75em;
`;
