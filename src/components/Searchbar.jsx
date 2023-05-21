import { Component } from 'react';
import * as Styled from '../styled';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.searchQuery !== this.state.searchQuery) {
  //     }
  //   }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  handleInputChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { handleSubmit, handleInputChange, state } = this;

    return (
      <Styled.Searchbar>
        <Styled.SearchForm onSubmit={handleSubmit}>
          <Styled.SearchFormButton type="submit">
            <Styled.SearchIcon />
          </Styled.SearchFormButton>

          <Styled.SearchFormInput
            onChange={handleInputChange}
            value={state.searchQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Styled.SearchForm>
      </Styled.Searchbar>
    );
  }
}
