import React from 'react'
import {
  UploadTemplate,
  DeleteBtn,
  UploadsDiv,
  UploadBtn,
  BtnsWrapper,
  ImageBtnWrapper,
  ImgsWrapper,
  AllWrapper
} from './Uploads.styles'
import ImageUploading from 'react-images-uploading'

function Uploads() {
  // const div = document.createElement('UploadTemplate')
  // div.style.backgroundImage = `url(${uploadImage})`
  // div.setAttribute('id', 'upload1')

  const [images, setImages] = React.useState([])
  const maxNumber = 6
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <UploadsDiv id="uploads1">
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          // write your building UI
          <AllWrapper>
            <BtnsWrapper>
              <UploadBtn style={isDragging ? { color: 'red' } : null} onClick={onImageUpload} {...dragProps}>
                Upload
              </UploadBtn>
              &nbsp;
              <UploadBtn onClick={onImageRemoveAll}>Clear uploads</UploadBtn>
            </BtnsWrapper>
            <ImgsWrapper>
              {imageList.map((image, index) => (
                <ImageBtnWrapper key={index} className="image-item">
                  <UploadTemplate src={image.data_url} />
                  <DeleteBtn onClick={() => onImageRemove(index)}>&times;</DeleteBtn>
                </ImageBtnWrapper>
              ))}
            </ImgsWrapper>
          </AllWrapper>
        )}
      </ImageUploading>
    </UploadsDiv>
  )
}

export default Uploads
