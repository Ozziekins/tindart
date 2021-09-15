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
                <div className="bid-box"></div>
            </div>
        </div>

    );
}

export default Auction;