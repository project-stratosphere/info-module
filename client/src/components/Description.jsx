import PropTypes from 'prop-types';
import React from 'react';

const Description = props => (
  <div id="description" style={props.border}><h1>Description</h1>
    <div id="short-description"><p>{props.short_description}</p></div>
    <div id="more-descriptions">
      {
        props.more_description.map(description => (
          <div key={description.head}><h4>{description.head}</h4>
            <p>{description.body}</p>
          </div>
        ))
      }
    </div>
  </div>);

Description.propTypes = {
  short_description: String,
  more_description: PropTypes.shape([
    {
      head: String,
      body: String,
    },
  ]),
  border: PropTypes.shape({
    border: String,
  }),
};

Description.defaultProps = {
  short_description: 'Short Description',
  more_description: [
    {
      head: 'String',
      body: 'String',
    },
  ],
  border: {
    border: 'solid black 1px',
  },
};

export default Description;
