import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from 'styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="40"
        width="80"
        radius="8"
        color="#009dff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrapper>
  );
};
