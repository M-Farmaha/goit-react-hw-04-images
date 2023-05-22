import { useState } from 'react';
import { Modal } from './Modal';
import { ImageGalleryItemWrap, ImageGalleryImg } from 'styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  return (
    <>
      <ImageGalleryItemWrap onClick={toggleModal}>
        <ImageGalleryImg src={webformatURL} alt={tags} />
      </ImageGalleryItemWrap>
      {isModalOpen && (
        <Modal image={largeImageURL} alt={tags} toggleModal={toggleModal} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
