import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'
import UserPhoto from '../../images/Userphoto.png'
import LogoPages4 from '../../images/Logo-pages4.png'
import Dan from '../../images/dan.png'
import Minus from '../../images/minus.png'
import Add from '../../images/add.png'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`

export const AuctionDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  top: 70px;
`

export const UserAuction = styled.div`
  position: absolute;
  left: 87%;
  float: right;
  margin-top: 20px;
  margin-right: 10px;
  background-color: grey;
  background-image: url(${UserPhoto});
  border-radius: 50%;
  width: 60px;
  height: 60px;
`

export const LogoAuction = styled(Link)`
  position: relative;
  float: left;
  top: 20px;
  margin-left: 150px;
  background-image: url(${LogoPages4});
  width: 476px;
  height: 80px;
`

export const ArtInfo = styled.div`
  position: relative;
  margin-left: 150px;
  width: 70%;
  height: 500px;
`

export const ArtPiece = styled.div`
  position: relative;
  background-image: url(${Dan});
  width: 490px;
  height: 364px;
`

export const ArtH3 = styled.h3`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
`

export const ArtP = styled.p`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  text-align: justify;
  width: 60%;

  color: #000000;
`

export const BidBox = styled.div`
  position: relative;
  margin-right: 150px;
  width: 374px;
  height: 442px;
  background-color: #ffffff;
  border-radius: 15px;
  border: 1px solid #6c4125;
  box-sizing: border-box;
  box-shadow: 5px 5px 10px 5px #e6cfc0;
`

export const MoneyAuction = styled.div`
  position: absolute;
  left: 39.04%;
  right: 39.3%;
  top: 10.86%;
  bottom: 76.47%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  text-align: justify;

  color: #000000;
`

export const CurrentBidsAuction = styled.div`
  width: 400px;
  position: absolute;
  left: 26.47%;
  right: 26.74%;
  top: 30.54%;
  bottom: 64.71%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  text-align: justify;

  color: rgba(0, 0, 0, 0.8);
`

export const CurrentBidsAuctionSpan = styled.span`
  color: rgba(151, 105, 75, 0.7);
`

export const TimeLeftAuction = styled.div`
  width: 400px;

  position: absolute;
  left: 35.83%;
  right: 29.68%;
  top: 42.31%;
  bottom: 53.62%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  text-align: justify;

  color: #ff0000;
`

export const ButtonsPriceAuction = styled.div`
  position: relative;

  left: 15.73%;
  right: 22.73%;
  top: 55.47%;
  bottom: 29.86%;
`

export const InlineBidAuction = styled.ul`
  list-style-type: none;
  display: inline-flex;
`

export const PriceAuction = styled.div`
  margin-left: 10px;
  justify-content: center;
  width: 108px;

  font-style: normal;
  font-weight: normal;
  font-size: 48px;

  color: #97694b;
`

export const MinusAuction = styled.li`
  margin-left: 10px;
  justify-content: center;

  width: 30px;
  height: 30px;
  background-image: url(${Minus});
`

export const PlusAuction = styled.li`
  margin-left: 10px;
  justify-content: center;

  width: 30px;
  height: 30px;
  background-image: url(${Add});
`

export const BidAuctionButton = styled.div`
  width: 88px;
  height: 35px;
  position: absolute;
  left: 40%;
  right: 34.09%;
  top: 75%;
  bottom: 22.86%;

  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #ffffff;

  background: #6c4125;
  border-radius: 10px;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const OverlayContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

/* The Close Button (x) */
export const CloseButton = styled.span`
  float: right;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;

  &:hover {
    color: red;
    cursor: pointer;
  }
  &:focus {
    color: red;
    cursor: pointer;
  }
`

export const BidAcceptedMessage = styled.div`
  font-size: 24px;
  color: #000;
`;
