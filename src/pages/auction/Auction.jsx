import React from 'react'
import {
  ArtInfo,
  ArtH3,
  ArtP,
  ArtPiece,
  AuctionDiv,
  BidBox,
  LogoAuction,
  MoneyAuction,
  UserAuction,
  CurrentBidsAuction,
  CurrentBidsAuctionSpan,
  TimeLeftAuction,
  ButtonsPriceAuction,
  InlineBidAuction,
  PlusAuction,
  PriceAuction,
  MinusAuction,
  BidAuctionButton
} from './Auction.styles'
import { useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'

function showProfile() {
  document.getElementById('profile1').style.display = 'block'
}

function Auction() {
  var i = 0

  const incrementBid = () => {
    i += 5
    const div = document.getElementById('bid-value')
    div.innerText = '$' + i
  }

  const decrementBid = () => {
    i -= 5
    const div = document.getElementById('bid-value')
    div.innerText = '$' + i
  }

  const { photo } = useSelector((state) => state.user)
  const { title, auction_description, auction_photo } = useSelector((state) => state.auction)

  return (
    <div>
      <LogoAuction to="/home" />
      <UserAuction
        onClick={showProfile}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <NavProfile id="profile1" />
      <AuctionDiv>
        <ArtInfo>
          <ArtPiece
            style={{
              backgroundImage: auction_photo,
              backgroundSize: '490px 364px',
              objectFit: 'contain'
            }}
          />
          <ArtH3>{title}</ArtH3>
          <ArtP>{auction_description}</ArtP>
        </ArtInfo>
        <BidBox>
          <MoneyAuction>$50</MoneyAuction>
          <CurrentBidsAuction>
            Current bids:<CurrentBidsAuctionSpan> 5 people</CurrentBidsAuctionSpan>
          </CurrentBidsAuction>
          <TimeLeftAuction>12 hours remaining</TimeLeftAuction>
          <ButtonsPriceAuction>
            <InlineBidAuction>
              <PlusAuction onClick={incrementBid} />
              <PriceAuction id="bid-value">$0</PriceAuction>
              <MinusAuction onClick={decrementBid} />
            </InlineBidAuction>
          </ButtonsPriceAuction>
          <BidAuctionButton>Bid</BidAuctionButton>
        </BidBox>
      </AuctionDiv>
    </div>
  )
}

export default Auction
