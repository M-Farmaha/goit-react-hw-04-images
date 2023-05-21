import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import * as Styled from 'styled';
import PropTypes from 'prop-types';

export class ImageGallery extends Component {
  componentDidUpdate(prevProps) {
    if (
      prevProps.galleryArray.length !== 0 &&
      prevProps.galleryArray !== this.props.galleryArray
    ) {
      window.scrollBy({
        top: 520,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { galleryArray } = this.props;
    return (
      <Styled.ImageGallery>
        {galleryArray.map(el => (
          <ImageGalleryItem key={el.id} {...el} />
        ))}
      </Styled.ImageGallery>
    );
  }
}

ImageGallery.propTypes = {
  galleryArray: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
};
