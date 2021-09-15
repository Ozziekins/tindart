import React from "react";
import "./profile.css"
function Profile() {
    return (
        <div>
            <div className="logo-profile"/>
            <div className="user"/>
            <div className='profile-user'></div>
            <div className="username-profile">User Daryll</div>
            <div className="desc-profile">Vestibulum dapibus sagittis odio,
                non vestibulum felis accumsan sit amet</div>
            <ul className="profile-buttons">
                <li className="li-profile fav-profile">Favorites</li>
                <li className="li-profile">Uploads</li>
            </ul>
            <ul className="fav-box-profile">
                <li className=" li-fav-profile fav-box1"/>
                <li className=" li-fav-profile fav-box2"/>
                <li className="li-fav-profile fav-box3"/>
            </ul>


        </div>
    );
}

export default Profile;