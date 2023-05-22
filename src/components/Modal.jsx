import { useState, useEffect } from 'react';
import { Loader } from './Loader';
import {
  ModalOverlay,
  LoaderWrapperModal,
  ModalWrap,
  ModalImage,
} from '../styled';
import PropTypes from 'prop-types';

export const Modal = ({ image, alt, toggleModal }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handlePressESC = e => {
      if (e.code === 'Escape') toggleModal();
    };

    setIsLoading(true);
    window.addEventListener('keydown', handlePressESC);
    document.body.classList.add('modal-open');

    return () => {
      window.removeEventListener('keydown', handlePressESC);
      document.body.classList.remove('modal-open');
    };
  }, [toggleModal]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) toggleModal();
  };

  return (
    <>
      <ModalOverlay onClick={handleOverlayClick}>
        {isLoading && (
          <LoaderWrapperModal>
            <Loader />
          </LoaderWrapperModal>
        )}
        <ModalWrap>
          <ModalImage
            src={image}
            alt={alt}
            onLoad={() => setIsLoading(false)}
          />
        </ModalWrap>
      </ModalOverlay>
    </>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
