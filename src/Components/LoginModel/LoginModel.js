import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./LoginModel.css";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

function LoginModel({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginType, setLoginType] = useState(true);
  const dispatch = useDispatch();

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (data.user) {
      alert("Account created.  Please verify your email.");
    }
  };

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error?.message);
      return;
    }
    dispatch(setUser(data.user));
  };

  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left_container">
            <p className="Login_title">Login</p>
            <p className="Login_desc">
              Get access to your orders, Whishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            className="Login_input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Login_input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcond">
            <span style={{ color: "blue" }}>Terms of Use</span>
            <span style={{ color: "blue" }}>Privacy Policy</span>
          </p>
          {loginType ? (
            <button className="Login_btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login_btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login_signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login_signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={() => setIsOpen(false)}>
          <RxCross2 />
        </div>
      </div>
    </div>
  ) : (
    <> </>
  );
}

export default LoginModel;
