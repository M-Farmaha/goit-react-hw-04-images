import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryWrap } from 'styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ galleryArray }) => {
  return (
    <ImageGalleryWrap>
      {galleryArray.map(el => (
        <ImageGalleryItem key={el.id} {...el} />
      ))}
    </ImageGalleryWrap>
  );
};

ImageGallery.propTypes = {
  galleryArray: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  ),
};
