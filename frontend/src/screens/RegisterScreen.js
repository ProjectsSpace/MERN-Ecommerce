import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  // Getting the query string from the url
  // Helps redirect user to relative path
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  // Getting user data from redux store
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  // Initiating the user action
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Client side confirm password matching
    password !== confirmPassword
      ? alert("Password and confirm password doesn't match")
      : dispatch(register(name, email, password));
  };

  // Redirecting user to the redirect path
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h1>Create Account</h1>
        </div>
        <div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
        </div>
        <div>
          <label htmlFor="email">Enter Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Adress</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Passwrord</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Passwrord</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm password"
            required
          />
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Create Account
          </button>
        </div>
        <div>
          <label />
          <div>
            Already have an account?{" "}
            <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
