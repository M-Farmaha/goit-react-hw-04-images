import { LoadMoreButton } from 'styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ handleLoadMoreClick }) => {
  return (
    <LoadMoreButton type="button" onClick={() => handleLoadMoreClick()}>
      Load more
    </LoadMoreButton>
  );
};

LoadMoreBtn.propTypes = {
  handleLoadMoreClick: PropTypes.func.isRequired,
};
