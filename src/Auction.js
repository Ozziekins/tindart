import React from "react";
import "./Auction.css"

function Auction() {
    return (
        <div>
            <div className="logo-auction"/>
            <div className="user-auction"/>
            <div className="auction">
                <div className="art-info">
                    <div className="art-piece"/>
                    <h3>Art information</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar fringilla porttitor. Maecenas
                        porttitor ipsum eu ipsum sagittis, sed mollis neque aliquet. Sed vitae molestie ex. Vestibulum dapibus
                        sagittis odio, non vestibulum felis accumsan sit amet...
                    </p>
                </div>
                <div className="bid-box">
                    <div className="money-auction">$50</div>
                    <div className="current-bids-auction">Current bids:<span> 5 people</span></div>
                    <div className="time-left-auction">12 hours remaining</div>
                    <div className="buttons-price-auction">
                        <ul className="inline-bid-auction" >
                            <li className="plus-auction li-bid-auction"></li>
                            <li className="price-auction li-bid-auction">$100</li>
                            <li className="minus-auction li-bid-auction"></li>
                        </ul>
                    </div>
                    <div className="bid-auction-button">Bid</div>
                </div>
            </div>
        </div>

    );
}

export default Auction;