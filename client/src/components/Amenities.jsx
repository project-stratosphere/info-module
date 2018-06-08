import PropTypes from 'prop-types';
import React from 'react';
import {
  Wrapper,
  Title,
  AmenitiesContainer,
  CategoryContainer,
  CategoryHead,
  CategoryItemContainer,
  AmenityDescription,
  Supplemental,
  Modal,
  PreviewContainer,
  ShowAll,
  PreviewAmenity,
  PreviewTitle,
  ModalContent,
} from './styles/Amenities.styles';

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
          <PreviewTitle>
            Amenitites
          </PreviewTitle>
          {
            this.props.amenities.items.map(item => (
              <PreviewAmenity
                key={item.category_head}
              >
                {item.category_items[0].amenity_description}
              </PreviewAmenity>
            ))
          }
          <ShowAll
            onClick={this.handleAmenitiesDisplay}
          >
            Show all amenities
          </ShowAll>
        </PreviewContainer>
        <Modal
          displayModal={this.state.displayModal}
          onClick={this.handleAmenitiesHide}
        >
          <ModalContent>
            <Title>
              Amenities
            </Title>
            <AmenitiesContainer>
              {
                this.props.amenities.items.map(item => (
                  <CategoryContainer
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
                          <AmenityDescription>
                            {categoryItem.amenity_description}
                          </AmenityDescription>
                          <Supplemental>
                            {categoryItem.supplemental_description}
                          </Supplemental>
                        </CategoryItemContainer>
                      ))
                    }
                  </CategoryContainer>
                ))
              }
            </AmenitiesContainer>
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
