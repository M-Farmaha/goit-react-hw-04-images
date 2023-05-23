import { NoImagesPicture, NoImagesText } from '../styled';
import NoImages from '../images/no-images.svg';

export const EmptyRequest = () => {
  return (
    <>
      <NoImagesPicture src={NoImages} alt="no images" />
      <NoImagesText>No images were found for your request</NoImagesText>
    </>
  );
};
