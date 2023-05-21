import { ThreeDots } from 'react-loader-spinner';
import * as Styled from 'styled';

export const Loader = () => {
  return (
    <Styled.LoaderWrapper>
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
    </Styled.LoaderWrapper>
  );
};
