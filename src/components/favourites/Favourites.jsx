import React, { useEffect, useState } from 'react';
import { FavDiv, FavWrapper, OuterWrapper } from './Favourites.styles';
import { UploadTemplate } from '../uploads/Uploads.styles';
import { useSelector } from 'react-redux';
import authService from '../../services/authService';
import Loading from '../loading/Loading';

function Favourites() {
  const [isLoading, setIsLoading] = useState(false)
  // const { favouriteImages } = useSelector((state) => state.favourite)

  const [favouriteImages, setFavouriteImages] = useState([]);
  const login = useSelector((state) => state.user.username);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await authService.getUserFaves(login);
        const { favourites } = response.data;
        setFavouriteImages(favourites);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch favourite images:', error);
      }
    };

    fetchData();
  }, [login]);

  return (
    <FavDiv id="favourites1">
      <OuterWrapper>
        {favouriteImages.map((fave, index) => (
          <FavWrapper key={index}>
            <UploadTemplate src={`https://www.artic.edu/iiif/2/${fave}/full/843,/0/default.jpg`} />
          </FavWrapper>
        ))}
      </OuterWrapper>
      {isLoading && <Loading />}
    </FavDiv>
  );
}

export default Favourites;
