import React from 'react';
import {
  Modal,
  ModalContent,
} from './styles/styles';
import {
  Wrapper,
  StyledButton,
  Button,
  Line,
  Login,
} from './styles/ContactHost.styles';

export default class ContactHost extends React.Component {
  constructor(props) {
    super(props);
    this.handleModalDisplay = this.handleModalDisplay.bind(this);
    this.handleModalHide = this.handleModalHide.bind(this);
    this.state = {
      displayModal: 'none',
    };
  }

  handleModalDisplay() {
    this.setState({
      displayModal: 'flex',
    });
  }

  handleModalHide(event) {
    if (event.target.className.split(' ')[0] === 'modal-hide') {
      this.setState({
        displayModal: 'none',
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <StyledButton
          onClick={this.handleModalDisplay}
          className="modal-display"
        >
          Contact host
        </StyledButton>
        <Modal
          onClick={this.handleModalHide}
          displayModal={this.state.displayModal}
          className="modal-hide"
        >
          <ModalContent>
            <Button
              btnType="facebook"
            >
              Continue with Facebook
            </Button>
            <Button
              btnType="google"
            >
              Continue with Google
            </Button>
            <Line>
              <hr className="half-line" />
              or
              <hr className="half-line" />
            </Line>
            <Button
              btnType="email"
            >
              Sign up with Email
            </Button>
            <Line>
              <hr className="full-line" />
            </Line>
            <Login>
              Already have an Airbnb account?
              <span>
                Log in
              </span>
            </Login>
          </ModalContent>
        </Modal>
      </Wrapper>
    );
  }
}
