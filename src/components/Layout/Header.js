import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { svActions } from "../../store/search-value";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const loginToken = useSelector((state) => state.sv.loginToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(svActions.setToken(""));
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.flex}>
          <h2>Spotify Artist Search</h2>
          {loginToken && (
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
