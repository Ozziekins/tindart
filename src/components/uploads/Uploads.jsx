import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { uploadActions } from '../../store/uploads/uploads.slice'
import authService from '../../services/authService'

function Uploads() {
  const [uploadedImgs, setUploadedImgs] = useState([]);
  const { uploadedImages } = useSelector((state) => state.upload)
  const login = useSelector((state) => state.user.username);

  const dispatch = useDispatch()

  const [images, setImages] = React.useState([])
  const maxNumber = 6
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    // console.log(imageList, addUpdateIndex)
    setImages(imageList)
    dispatch(uploadActions.setUploads({ uploadedImages: imageList }))
    authService.submitUploads(login, uploadedImages);
  }

  const handleClearUploads = () => {
    authService.clearUploads(login);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authService.getUserUploads(login);
        const { uploads } = response.data;
        setUploadedImgs(uploads);
      } catch (error) {
        console.error('Failed to fetch uploaded images:', error);
      }
    };

    fetchData();
  }, [login]);

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
              <UploadBtn onClick={handleClearUploads}>Clear uploads</UploadBtn>
            </BtnsWrapper>
            <ImgsWrapper>
              {uploadedImgs.map((image, index) => (
                <ImageBtnWrapper key={index} className="image-item">
                  <UploadTemplate src={image.data_url} />
                  {/* <DeleteBtn onClick={() => onImageRemove(index)}>&times;</DeleteBtn> */}
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
