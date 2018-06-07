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
} from './styles/Amenities.styles';

const Amenities = props => (
  <Wrapper>
    <Title>Amenities</Title>
    <AmenitiesContainer>
      {
        props.amenities.items.map(item => (
          <CategoryContainer key={item.category_head}>
            <CategoryHead>{item.category_head}</CategoryHead>
            {
              item.category_items.map(categoryItem => (
                <CategoryItemContainer key={categoryItem.amenity_description}>
                  <AmenityDescription>{categoryItem.amenity_description}</AmenityDescription>
                  <Supplemental>{categoryItem.supplemental_description}</Supplemental>
                </CategoryItemContainer>
              ))
            }
          </CategoryContainer>
        ))
      }
    </AmenitiesContainer>
  </Wrapper>);

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

export default Amenities;
