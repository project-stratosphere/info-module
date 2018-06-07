import PropTypes from 'prop-types';
import React from 'react';
import {
  Wrapper,
  Title,
  HighlightsWrapper,
  Highlight,
} from './styles/Highlights.styles';

const Highlights = props => (
  <Wrapper>
    <Title>Home Highlights</Title>
    <HighlightsWrapper>
      {
        props.highlights.map(highlight => (
          <Highlight key={highlight.head}>{highlight.head}</Highlight>
        ))
      }
    </HighlightsWrapper>
  </Wrapper>
);

Highlights.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.shape({
    head: PropTypes.string,
    body: PropTypes.string,
  })),
};

Highlights.defaultProps = {
  highlights: [
    {
      head: 'String',
      body: 'String',
    },
  ],
};

export default Highlights;
