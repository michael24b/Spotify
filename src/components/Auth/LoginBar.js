import classes from "./LoginBar.module.css";
import Button from "./Button";
import { Fragment } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { svActions } from "../../store/search-value";
import { useDispatch } from "react-redux";

const API_KEY = "AIzaSyC2HVCMR7LKzhwr0UuIk0QtKdYWi0fNq1A";
const URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const LoginBar = () => {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const showFormHandler = () => {
    setShowForm(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    fetch(URL + API_KEY, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(svActions.setToken(data.idToken));
        localStorage.setItem("token", data.idToken);
        navigate("/welcome", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      {showForm && (
        <section className={classes.auth}>
          <h1>Login</h1>
          <form onSubmit={submitHandler}>
            <div className={classes.control}>
              <label htmlFor="email">UserName</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </div>
            {isLoading ? <p>Sending request...</p> : <Button />}
          </form>
        </section>
      )}
      {!showForm && <Button onClick={showFormHandler} />}
    </Fragment>
  );
};

export default LoginBar;
