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

function Auction() {
  return (
    <div>
      <LogoAuction to="/" />
      <UserAuction to="/profile" />
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
              <PlusAuction />
              <PriceAuction>$100</PriceAuction>
              <MinusAuction />
            </InlineBidAuction>
          </ButtonsPriceAuction>
          <BidAuctionButton>Bid</BidAuctionButton>
        </BidBox>
      </AuctionDiv>
    </div>
  )
}

export default Auction
