import styled from 'styled-components';

export const Wrapper = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  margin: 1em;
  font-family: 'Raleway', sans-serif;
`;

export const ShortDescription = styled.div`
  order: 1;
  margin-bottom: 1.5em;
`;

export const MoreDescription = styled.div`
  order: 2;
  flex-direction: column;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;
`;
export const DescriptionHead = styled.div`
  order: 1;
  font-weight: bold;
  font-size: 0.9em;
  margin-bottom: 0.75em;
`;
export const DescriptionBody = styled.div`
  order: 2;
`;

export const Clickable = styled.div`
  order: 3;
  color: blue;
`;
