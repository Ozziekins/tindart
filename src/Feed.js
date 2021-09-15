import React from "react";
import "./Feed.css"
function Feed() {
    return (
        <div>
            <div className="logo-feed"/>
            <div className="user"/>
            <div className="post">
                <div className="post-user-name-time">
                    <ul>
                        <li className="post-user"> </li>
                        <li className="post-username">User Darryl</li>

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Feed;