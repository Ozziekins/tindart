import styled from 'styled-components'

export const UploadTemplate = styled.img`
  position: relative;
  width: 300px;
  height: 200px;
  margin: 10px;
`

export const UploadsDiv = styled.div`
  position: relative;
  margin-left: 30px;
  display: none;
`

export const UploadBtn = styled.button`
  background: #6c4125;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  padding: 20px;
`

export const AllWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImgsWrapper = styled.div`
  margin-left: 15%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 40%;
  grid-column-gap: 1em;
`

export const ImageBtnWrapper = styled.div`
  margin-right: 10%;
`

export const DeleteBtn = styled.button`
  background: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #6c4125;
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  padding: 5px;
  margin-left: 5px;
`
