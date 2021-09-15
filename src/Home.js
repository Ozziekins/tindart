import React from "react";
import "./Home.css"
function Home() {
    return (
        <div className="container">
            <div className="logo"/>
            <ul className="menu">
                <li><a>Feed</a></li>
                <li><a>Swipe</a></li>
                <li><a>Auction</a></li>
                <li><a>Contact</a></li>
            </ul>
            <a className="login">Log in</a>
            <div className="swipe-art">Swipe Art</div>
            <div className="sign-up">Sign up</div>
        </div>
    );
}

export default Home;