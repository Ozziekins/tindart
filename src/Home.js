import React from "react";
import "./Home.css"
function Home() {
    return (
        <div className="container">
            <div className="logo"/>
            <ul className="menu">
                <li className="li-home"><a>Feed</a></li>
                <li className="li-home"><a>Swipe</a></li>
                <li className="li-home"><a>Auction</a></li>
                <li className="li-home"><a>Contact</a></li>
            </ul>
            <a className="login">Log in</a>
            <div className="swipe-art">Swipe Art</div>
            <div className="sign-up">Sign up</div>
        </div>
    );
}

export default Home;