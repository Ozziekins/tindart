import React from "react";
import "./Login.css"

function Login() {
    return (
        <div id="card">
            <div id="card-content">
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
    );
}

export default Login;