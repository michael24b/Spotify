import Button from "./Button";
import { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { svActions } from "../../store/search-value";

const CLIENT_ID = "254b931fc846457f85650434991bf284";
// const CLIENT_SECRET = "87e41b8fe89b46a6b5f8b43ca45a93d3";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3001";
const RESPONSE_TYPE = "token";

const LoginBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    console.log("HASH", hash);
    let token = window.localStorage.getItem("token");
    console.log("TOKEN", token);

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((e) => e.startsWith("access_token"))
        .split("=")[1];
      console.log("TOKEN", token);
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch(svActions.setAccessToken(token));
  }, [dispatch]);

  // useEffect(() => {
  //   const authParameters = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  //   };

  //   const token = fetch(
  //     "https://accounts.spotify.com/api/token",
  //     authParameters
  //   )
  //     .then((response) => response.json())
  //     .then((data) => dispatch(svActions.setAccessToken(data.access_token)));
  //   setToken(token);
  // }, [dispatch]);

  return (
    <Fragment>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        style={{ textDecoration: "none" }}
      >
        <Button />
      </a>
    </Fragment>
  );
};

export default LoginBar;
