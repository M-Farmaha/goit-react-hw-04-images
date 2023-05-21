import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

export const App = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;

export const Searchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: rgba(41, 54, 67, 0.9);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border: none;
  color: #b6b6b6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:first-child:hover {
    color: #0080ff;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 20px;
  padding-right: 20px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const ImageGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const ImageGalleryItem = styled.li`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

export const ImageGalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const LoadMoreBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;

  color: #fff;
  border: 0;
  cursor: pointer;

  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const LoaderWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  z-index: 9999;
`;

export const LoaderWrapperModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const Modal = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ModalImage = styled.img`
  max-width: calc(100vw - 50px);
  max-height: calc(100vh - 50px);
  object-fit: scale-down;
`;
