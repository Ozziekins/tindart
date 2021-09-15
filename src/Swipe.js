import React from "react";
import { Link } from "react-router-dom";
import "./swipe.css"

function Swipe() {
    return (
        <div>
            <Link to="/" className="logo-feed swipe-logo"/>
            <Link to="/profile" className="user"/>

            <div className="card-swipe">
                <div className="swipe-title">Art title</div>
                <ul className="swipe-buttons ">
                    <li className="swipe-nope li-swipe"></li>
                    <li className="swipe-like li-swipe"></li>
                    <li className="swipe-info li-swipe"></li>
                    <li className="swipe-fav li-swipe"></li>
                    <li className="swipe-next li-swipe"></li>
                </ul>
            </div>

        </div>
    );
}

export default Swipe;