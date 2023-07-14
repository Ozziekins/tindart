import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import {
  Btns,
  Card,
  CardContent,
  CardTitle,
  Form,
  FormContent,
  EditBtn,
  EditCard,
  UploadPhoto,
  ProfileUser,
  UploadBackground
} from './EditProfile.styles'
// import Loading from '../loading/Loading'
import ProfilePhoto from '../../images/Profile photo PROFILE.png'
import authService from '../../services/authService'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/user/user.slice'
import { useNavigate } from 'react-router'

function hideEdit() {
  document.getElementById('edit1').style.display = 'none'
}

function EditProfile() {
  const [displayName, setDisplayName] = useState('')
  const [description, setDescription] = useState('')
  const [uploadedImg, setUploadedImg] = useState(ProfilePhoto)
  // const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  // setIsLoading(true);

  const login = useSelector((state) => state.user.username);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authService.getUserData(login);
        const { displayName, description, photo } = response.data;
        setDisplayName(displayName);
        setDescription(description);
        setUploadedImg(photo);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchData();
  }, [login]);

  const onSubmit = async (e) => {
    e.preventDefault()

    dispatch(
      userActions.fetchUserData(login)
    );

    authService
      .submitProfileChanges(login, displayName, description, uploadedImg)
      .then(() => {
        hideEdit()
        navigate('/profile')}
        )
      .catch((error) => setError(error.message))
      // .finally(() => setIsLoading(false));

    // hideEdit()
    // navigate('/profile')
  }

  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (eve) => {
        current.src = eve.target.result
        setUploadedImg(eve.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const editRef = useRef(null);

  const handleClickOutside = (event) => {
    if (editRef.current && !editRef.current.contains(event.target)) {
      hideEdit();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <EditCard id="edit1">
        <Card ref={editRef}>
          <CardContent>
            <CardTitle>
              <h2>Edit your profile</h2>
            </CardTitle>

            <Form onSubmit={onSubmit}>
              <UploadPhoto>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  style={{
                    marginTop: '30px',
                    display: 'none'
                  }}
                />
                <UploadBackground onClick={() => imageUploader.current.click()}>
                  <ProfileUser ref={uploadedImage} />
                </UploadBackground>
              </UploadPhoto>

              <label htmlFor="username" style={{ paddingTop: '13px', color: '#000000' }}>
                &nbsp;Username
              </label>
              <FormContent
                id="username"
                name="username"
                value={displayName}
                label="Username"
                placeholder="Enter username"
                rules={{ required: { message: 'Username is required', value: true } }}
                onChange={({ target }) => setDisplayName(target.value)}
                autoComplete="on"
              />
              <label htmlFor="description" style={{ paddingTop: '13px', color: '#000000' }}>
                &nbsp;Description
              </label>
              <FormContent
                id="description"
                name="description"
                value={description}
                label="Description"
                type="description"
                placeholder="Add your description"
                maxLength="80"
                onChange={({ target }) => setDescription(target.value)}
                autoComplete="on"
              />
              <Btns>
                <EditBtn type="submit" name="submit" value="Edit" />
              </Btns>
            </Form>
          </CardContent>
        </Card>
      {/* {isLoading && <Loading />} */}
      </EditCard>
    </div>
  )
}

export default EditProfile
