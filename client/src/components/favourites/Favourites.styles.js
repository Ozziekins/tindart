import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato');
`

export const FavTemplate = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  margin: 10px;
`

export const FavDiv = styled.div`
  display: none;
`

export const OuterWrapper = styled.div`
  margin-left: 15%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fill, 120px);
  grid-row-gap: 40%;
  grid-column-gap: 1em;
`

export const FavWrapper = styled.div`
  margin-right: 10%;
`
