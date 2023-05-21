import { Component } from 'react';
import * as Styled from 'styled';
import PropTypes from 'prop-types';

export class LoadMoreBtn extends Component {
  handleLoadMoreBtnClick = () => {
    this.props.loadMore();
  };

  render() {
    const { handleLoadMoreBtnClick } = this;
    return (
      <Styled.LoadMoreBtn type="button" onClick={handleLoadMoreBtnClick}>
        Load more
      </Styled.LoadMoreBtn>
    );
  }
}

LoadMoreBtn.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
