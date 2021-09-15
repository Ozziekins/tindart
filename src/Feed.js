import React from "react";
import "./Feed.css"
function Home() {
    return (
        <div className="container">
            <div className="logo"/>
            <ul>
                <li><a>Feed</a></li>
                <li><a>Swipe</a></li>
                <li><a>Auction</a></li>
                <li><a>Contact</a></li>
                <li className="login" ч><a>Log in</a></li>
            </ul>
            <div className="swipe-art">Swipe Art</div>
            <div className="sign-up">Sign up</div>
        </div>
    );
}

export default Home;