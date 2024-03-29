import React, { useEffect, useState, useRef } from 'react'
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
  BidAuctionButton,
  Overlay,
  OverlayContent,
  CloseButton,
  BidAcceptedMessage
} from './Auction.styles'
import { useSelector } from 'react-redux'
import NavProfile from '../../components/profile/NavProfile'

function showProfile() {
  const profileElement = document.getElementById('profile1');
  if (profileElement.style.display === 'block') {
    profileElement.style.display = 'none';
  } else {
    profileElement.style.display = 'block';
  }
}


function Auction() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showErrorOverlay, setShowErrorOverlay] = useState(false);
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

  const handleBidClick = () => {
    const bidValueElement = document.getElementById('bid-value');
    const bidValue = parseInt(bidValueElement.innerText.replace('$', ''), 10);
    if (bidValue < 0) {
      setShowErrorOverlay(true);
    } else {
      setShowOverlay(true);
    }
  };

  const handleCloseOverlay = () => {
    setShowErrorOverlay(false)
    setShowOverlay(false);
  };

  const bidRef = useRef(null);

  const handleClickOutside = (event) => {
    if (bidRef.current && !bidRef.current.contains(event.target)) {
      handleCloseOverlay();
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
      <LogoAuction to="/home" />
      <UserAuction
        onClick={showProfile}
        style={{
          backgroundImage: 'url(' + photo + ')',
          backgroundSize: '60px',
          objectFit: 'contain'
        }}
      />
      <NavProfile id="profile1" currentPage="auction" />
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
              <MinusAuction onClick={decrementBid} />
              <PriceAuction id="bid-value">$5</PriceAuction>
              <PlusAuction onClick={incrementBid} />
            </InlineBidAuction>
          </ButtonsPriceAuction>
          <BidAuctionButton onClick={handleBidClick}>Bid</BidAuctionButton>
        </BidBox>
      </AuctionDiv>
      {showOverlay && (
        <Overlay>
          <OverlayContent ref={bidRef}>
            <CloseButton onClick={handleCloseOverlay} title="Close Bid">&times;</CloseButton>
            <BidAcceptedMessage>Bid accepted!</BidAcceptedMessage>
          </OverlayContent>
        </Overlay>
      )}
      {showErrorOverlay && (
        <Overlay>
          <OverlayContent ref={bidRef}>
            <CloseButton onClick={handleCloseOverlay} title="Close Bid">&times;</CloseButton>
            <BidAcceptedMessage>Invalid bid!</BidAcceptedMessage>
          </OverlayContent>
        </Overlay>
      )}
    </div>
  )
}

export default Auction
