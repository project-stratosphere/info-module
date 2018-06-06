import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  width: 75%;
  margin: auto;
  padding: 0.5em;
  box-shadow: 0 0 1px grey;
  font-family: 'Raleway', sans-serif;
`;

export const Title = styled.div`
  order: 1;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.7em;
  margin: 1em;
`;

export const HighlightsWrapper = styled.div`
  order: 2;
  margin: 1em;
`;

export const Highlight = styled.div`
  font-weight: bold;
  margin-bottom: 1.5em;
`;
