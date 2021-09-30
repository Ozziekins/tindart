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
import { useHistory } from 'react-router'
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

  const { username, description, photo } = useSelector((state) => state.user)

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
          <ArtPiece />
          <ArtH3>Art information</ArtH3>
          <ArtP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar fringilla porttitor. Maecenas
            porttitor ipsum eu ipsum sagittis, sed mollis neque aliquet. Sed vitae molestie ex. Vestibulum dapibus
            sagittis odio, non vestibulum felis accumsan sit amet...
          </ArtP>
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
              <PriceAuction id="bid-value">$100</PriceAuction>
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
