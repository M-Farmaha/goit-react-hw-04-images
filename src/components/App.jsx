import { Component } from 'react';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchRequest } from '../fetchRequest';
import { loadMoreFetchRequest } from '../fetchRequest';
import { LoadMoreBtn } from './Button';
import * as Styled from '../styled';

export class App extends Component {
  state = {
    galleryArray: [],
    total: null,
    error: null,
    isLoading: false,
  };

  handleFirstRequest = query => {
    this.setState({ isLoading: true, galleryArray: [] });
    fetchRequest(query)
      .then(response => {
        this.setState({
          galleryArray: response.hits,
          total: response.totalHits,
          isLoading: true,
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleNextRequest = () => {
    this.setState({ isLoading: true });
    loadMoreFetchRequest()
      .then(response => {
        this.setState(prevState => ({
          galleryArray: [...prevState.galleryArray, ...response.hits],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { handleFirstRequest, handleNextRequest, state } = this;

    return (
      <Styled.App>
        <Searchbar onSubmit={handleFirstRequest} />
        <ImageGallery galleryArray={state.galleryArray} />
        {state.isLoading && <Loader />}
        {state.galleryArray.length !== 0 &&
          state.galleryArray.length < state.total && (
            <LoadMoreBtn loadMore={handleNextRequest} />
          )}
      </Styled.App>
    );
  }
}
