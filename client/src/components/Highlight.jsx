import PropTypes from 'prop-types';
import React from 'react';
import { ThumbSVG } from './SVG.jsx';
import { SVGContainer } from './styles/Summary.styles';
import {
  Wrapper,
  HelpfulContainer,
  Clickable,
  HelpfulText,
  ThanksContainer,
} from './styles/Highlight.styles';

export default class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.state = {
      display: false,
    };
  }

  toggleDisplay() {
    this.setState({
      display: !this.state.display,
    });
  }

  render() {
    return (
      <Wrapper>
        {this.props.highlight.head}
        <span
          hidden={this.state.display}
        >
          <HelpfulContainer>
            <Clickable
              onClick={this.toggleDisplay}
            >
              <HelpfulText>
                Helpful
              </HelpfulText>
              <SVGContainer>
                <ThumbSVG />
              </SVGContainer>
            </Clickable>
            <span>
              .
            </span>
            <Clickable
              onClick={this.toggleDisplay}
            >
              <HelpfulText>
                Not Helpful
              </HelpfulText>
            </Clickable>
          </HelpfulContainer>
        </span>
        <span
          hidden={!this.state.display}
        >
          <ThanksContainer>
            <HelpfulText>
              Thanks for your feedback.
            </HelpfulText>
          </ThanksContainer>
        </span>
      </Wrapper>
    );
  }
}

Highlight.propTypes = {
  highlight: PropTypes.shape({
    head: PropTypes.string,
    body: PropTypes.string,
  }),
};

Highlight.defaultProps = {
  highlight: {
    head: 'String',
    body: 'String',
  },
};
