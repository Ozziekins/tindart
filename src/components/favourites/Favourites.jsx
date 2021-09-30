import React from 'react'
import { FavDiv, FavTemplate, FavWrapper, OuterWrapper } from './Favourites.styles'
import { UploadTemplate } from '../uploads/Uploads.styles'
import { useSelector } from 'react-redux'

function Favourites() {
  const { favouriteImages } = useSelector((state) => state.favourite)

  return (
    <FavDiv id="favourites1">
      <OuterWrapper>
        {favouriteImages.map((fave, index) => (
          <FavWrapper key={index}>
            <UploadTemplate src={`https://www.artic.edu/iiif/2/${fave}/full/843,/0/default.jpg`} />
          </FavWrapper>
        ))}
      </OuterWrapper>
    </FavDiv>
  )
}

export default Favourites
