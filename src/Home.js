import React from "react";
import "./Home.css"
import "./Login.css"

function showLogin() {
    document.getElementById('login1').style.display='block';
}

function hideLogin() {
    document.getElementById('login1').style.display='none';
}

function Home() {
    return (
        <div>
            <div className="container">
                <div className="logo"/>
                <ul className="menu">
                    <li className="li-home"><a>Feed</a></li>
                    <li className="li-home"><a>Swipe</a></li>
                    <li className="li-home"><a>Auction</a></li>
                    <li className="li-home"><a>Contact</a></li>
                </ul>
                <button onClick={showLogin} className="login"> Log in </button>
                {/*<a onclick="document.getElementById('login1').style.display='block'" className="login">Log in</a>*/}
                <div className="swipe-art">Swipe Art</div>
                <div className="sign-up">Sign up</div>
            </div>

            <div id="login1" className="login-card">
                <div className="card">
                    <div id="card-content">
                        <span onClick={hideLogin} className="close" title="Close Login">&times;</span>
                        <div id="card-title">
                            <h2>Login</h2>
                        </div>
                        <form method="post" className="form">
                            <label htmlFor="user-name" style={{"paddingTop": "13px", "color": "#ABAAAA"}}>
                                &nbsp;User Name
                            </label>
                            <input id="user-name" className="form-content" type="username" name="username"
                                   required/>
                            <label htmlFor="user-password" style={{"padding-top": "22px", "color": "#ABAAAA"}}>&nbsp;Password
                            </label>
                            <input id="user-password" className="form-content" type="password" name="password" required/>
                            <a href="#" style={{"padding-top": "22px"}}>
                                <legend id="forgot-pass">Forgot password?</legend>
                            </a>
                            <div className="btns">
                                <input id="login-btn" type="submit" name="submit" value="Login"/>
                                <input id="signup-btn" type="submit" name="submit" value="Signup"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Home;