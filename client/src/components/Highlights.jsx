import PropTypes from 'prop-types';
import React from 'react';

const Highlights = props => (
  <div id="highlights" style={props.border}><h1>Higlights</h1>
    {
      props.highlights.map(highlight => (
        <div key={highlight.head}><h5>{highlight.head}</h5></div>
      ))
    }
  </div>
);

Highlights.propTypes = {
  highlights: PropTypes.shape([
    {
      head: String,
      body: String,
    },
  ]),
  border: PropTypes.shape({
    border: String,
  }),
};

Highlights.defaultProps = {
  highlights: [
    {
      head: 'String',
      body: 'String',
    },
  ],
  border: {
    border: 'solid black 1px',
  },
};

export default Highlights;
