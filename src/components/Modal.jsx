import React, { Component } from 'react';
import { Loader } from './Loader';
import * as Styled from '../styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  state = {
    isLoading: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC);
    document.body.classList.add('modal-open');
    this.setState({ isLoading: true });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC);
    document.body.classList.remove('modal-open');
  }

  handlePressESC = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  handleImageLoad = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const { image, alt } = this.props;
    const { isLoading } = this.state;

    return (
      <>
        <Styled.ModalOverlay onClick={this.handleOverlayClick}>
          {isLoading && (
            <Styled.LoaderWrapperModal>
              <Loader />
            </Styled.LoaderWrapperModal>
          )}
          <Styled.Modal>
            <Styled.ModalImage
              src={image}
              alt={alt}
              onLoad={this.handleImageLoad}
            />
          </Styled.Modal>
        </Styled.ModalOverlay>
      </>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
