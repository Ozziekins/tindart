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
                        <li className="post-user li-feed"> </li>
                        <li className="li-feed">User Darryl</li>

                    </ul>
                    <div className="description-pic">
                        <div className="description-feed">
                            Check out this exquisite painting from Luxembourgh!...
                        </div>
                        <div className="pic-feed">

                        </div>
                    </div>
                    <div >
                        <ul className="footer-desc-pic">
                            <li className="like-pic"></li>
                            <li className="like-feed">Like</li>
                            <li className="comment-pic"></li>
                            <li className="comment-feed">Comment </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Feed;