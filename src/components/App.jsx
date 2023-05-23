import { useState, useEffect } from 'react';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { fetchRequest } from '../fetchRequest';
import { LoadMoreBtn } from './Button';
import { EmptyRequest } from './EmptyRequest';
import { AppWrap, Starter } from '../styled';
import StarterPicture from '../images/starter.svg';

export const App = () => {
  const [galleryArray, setGalleryArray] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowEmpty, setIsShowEmpty] = useState(false);
  const [isShowStarter, setIsShowStarter] = useState(true);

  useEffect(() => {
    if (search === '') {
      return;
    }
    setIsShowStarter(false);
    setIsShowEmpty(false);
    setIsLoading(true);
    fetchRequest(search, page)
      .then(response => {
        setGalleryArray(prev => [...prev, ...response.hits]);
        setTotal(response.totalHits);

        if (!response.totalHits) setIsShowEmpty(true);
      })
      .catch(err => alert(err))
      .finally(() => setIsLoading(false));
  }, [page, search]);

  useEffect(() => {
    if (galleryArray.length <= 12) return;
    window.scrollBy({
      top: 520,
      behavior: 'smooth',
    });
  }, [galleryArray]);

  const handleSearchRequest = query => {
    if (query === search || query === '') {
      return;
    }
    setSearch(query);
    setGalleryArray([]);
    setPage(1);
  };

  const handleLoadMoreClick = () => {
    setPage(prev => prev + 1);
  };

  return (
    <AppWrap>
      <Searchbar onSubmit={handleSearchRequest} />
      {isShowStarter && <Starter src={StarterPicture} alt="starter picture" />}
      {isShowEmpty && <EmptyRequest />}
      <ImageGallery galleryArray={galleryArray} />
      {isLoading && <Loader />}
      {galleryArray.length !== 0 &&
        galleryArray.length < total &&
        !isLoading && <LoadMoreBtn handleLoadMoreClick={handleLoadMoreClick} />}
    </AppWrap>
  );
};
