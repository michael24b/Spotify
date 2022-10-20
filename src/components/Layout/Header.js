import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { svActions } from "../../store/search-value";

const Header = () => {
  const accessToken = useSelector((state) => state.sv.accessToken);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(svActions.setAccessToken(""));
    window.localStorage.removeItem("token");
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.flex}>
          <h2>Spotify Artist Search</h2>
          {accessToken && (
            <div className={classes.background}>
              <button onClick={logoutHandler} className={classes.btn}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Header;
