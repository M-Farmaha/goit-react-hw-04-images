import { Component } from 'react';
import { Modal } from './Modal';
import * as Styled from 'styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { toggleModal, state } = this;

    return (
      <>
        <Styled.ImageGalleryItem onClick={toggleModal}>
          <Styled.ImageGalleryImg src={webformatURL} alt={tags} />
        </Styled.ImageGalleryItem>
        {state.isModalOpen && (
          <Modal image={largeImageURL} alt={tags} toggleModal={toggleModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
