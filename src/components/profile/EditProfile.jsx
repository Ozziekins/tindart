import React, { useState } from 'react'
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
import ProfilePhoto from '../../images/Profile photo PROFILE.png'

function hideEdit() {
  document.getElementById('edit1').style.display = 'none'
}

function EditProfile({ getUserInfo }) {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [uploadedImg, setUploadedImg] = useState(ProfilePhoto)

  const onSubmit = async (e) => {
    e.preventDefault()

    getUserInfo(username, description, uploadedImg)
    hideEdit()
    history.replace('/profile')
  }

  const uploadedImage = React.useRef(null)
  const imageUploader = React.useRef(null)

  const handleImageUpload = (e) => {
    const [file] = e.target.files
    if (file) {
      const reader = new FileReader()
      const { current } = uploadedImage
      current.file = file
      reader.onload = (e) => {
        current.src = e.target.result
        setUploadedImg(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <EditCard id="edit1">
        <Card>
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
                value={username}
                label="Username"
                placeholder="Enter username"
                rules={{ required: { message: 'Username is required', value: true } }}
                onChange={({ target }) => setUsername(target.value)}
              />
              <label htmlFor="description" style={{ paddingTop: '13px', color: '#000000' }}>
                &nbsp;Description
              </label>
              <FormContent
                name="description"
                value={description}
                label="Description"
                type="description"
                placeholder="Add your description"
                onChange={({ target }) => setDescription(target.value)}
              />
              <Btns>
                <EditBtn type="submit" name="submit" value="Edit" />
              </Btns>
            </Form>
          </CardContent>
        </Card>
      </EditCard>
    </div>
  )
}

export default EditProfile
