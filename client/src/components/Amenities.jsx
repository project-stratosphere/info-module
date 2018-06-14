import PropTypes from 'prop-types';
import React from 'react';
import { SVGContainer } from './styles/Summary.styles';
import {
  Modal,
  ModalContent,
} from './styles/styles';
import {
  BasicSVG,
  DiningSVG,
  FacilitiesSVG,
  GuestSVG,
  BnbSVG,
  SafetySVG,
} from './SVG';
import {
  Wrapper,
  Title,
  CategoryHead,
  CategoryItemContainer,
  PreviewContainer,
  ShowAll,
  PreviewAmenity,
  PreviewText,
} from './styles/Amenities.styles';

const renderIcon = (category) => {
  if (category === 'Dining') {
    return (
      <SVGContainer>
        <DiningSVG />
      </SVGContainer>
    );
  } else if (category === 'Facilities') {
    return (
      <SVGContainer>
        <FacilitiesSVG />
      </SVGContainer>
    );
  } else if (category === 'Guest access') {
    return (
      <SVGContainer>
        <GuestSVG />
      </SVGContainer>
    );
  } else if (category === 'Bed and bath') {
    return (
      <SVGContainer>
        <BnbSVG />
      </SVGContainer>
    );
  } else if (category === 'Safety features') {
    return (
      <SVGContainer>
        <SafetySVG />
      </SVGContainer>
    );
  }
  return (
    <SVGContainer>
      <BasicSVG />
    </SVGContainer>
  );
};

const amenitiesCount = (amenities) => {
  let count = 0;
  for (let i = 0; i < amenities.length; i += 1) {
    count += amenities[i].category_items.length;
  }
  return count;
};

export default class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.handleAmenitiesDisplay = this.handleAmenitiesDisplay.bind(this);
    this.handleAmenitiesHide = this.handleAmenitiesHide.bind(this);
    this.state = {
      displayModal: 'none',
    };
  }

  handleAmenitiesDisplay() {
    this.setState({
      displayModal: 'flex',
    });
  }

  handleAmenitiesHide() {
    this.setState({
      displayModal: 'none',
    });
  }

  render() {
    return (
      <Wrapper>
        <PreviewContainer>
          <PreviewText>
            Amenitites
          </PreviewText>
          {
            this.props.amenities.items.map(item => (
              <PreviewAmenity
                key={item.category_head}
              >
                {renderIcon(item.category_head)}
                {item.category_items[0].amenity_description}
              </PreviewAmenity>
            ))
          }
          <ShowAll
            onClick={this.handleAmenitiesDisplay}
            className="modal-display"
          >
            Show all {amenitiesCount(this.props.amenities.items)} amenities
          </ShowAll>
        </PreviewContainer>
        <Modal
          displayModal={this.state.displayModal}
          onClick={this.handleAmenitiesHide}
          className="modal-hide"
        >
          <ModalContent>
            <Title>
              Amenities
            </Title>
            <Wrapper>
              {
                this.props.amenities.items.map(item => (
                  <Wrapper
                    key={item.category_head}
                  >
                    <CategoryHead>
                      {item.category_head}
                    </CategoryHead>
                    {
                      item.category_items.map(categoryItem => (
                        <CategoryItemContainer
                          key={categoryItem.amenity_description}
                        >
                          <PreviewText>
                            {categoryItem.amenity_description}
                          </PreviewText>
                          <PreviewText>
                            {categoryItem.supplemental_description}
                          </PreviewText>
                        </CategoryItemContainer>
                      ))
                    }
                  </Wrapper>
                ))
              }
            </Wrapper>
          </ModalContent>
        </Modal>
      </Wrapper>);
  }
}

Amenities.propTypes = {
  amenities: PropTypes.shape({
    id: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      category_head: PropTypes.string,
      category_items: PropTypes.arrayOf(PropTypes.shape({
        amenity_description: PropTypes.string,
        supplemental_description: PropTypes.string,
      })),
    })),
  }),
};

Amenities.defaultProps = {
  amenities: {
    id: 1,
    items: [
      {
        category_head: 'String',
        category_items: [
          {
            amenity_description: 'String',
            supplemental_description: 'String',
          },
        ],
      },
    ],
  },
};
