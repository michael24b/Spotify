import { Fragment, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { svActions } from "../../store/search-value";
import { useNavigate } from "react-router-dom";
import classes from "./MainSearchBar.module.css";
import useHttp from "../../hooks/use-search";
import { Outlet } from "react-router-dom";

const MainSearchBar = (props) => {
  const { artistSearch: search } = useHttp();
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState("");
  const navigate = useNavigate();

  const searchValueHandler = (event) => {
    dispatch(svActions.setInputValue(event.target.value));
    setCurrentValue(event.target.value);
  };
  const searchSubmissionHandler = useCallback(
    (event) => {
      event.preventDefault();
      search();
      navigate("/artists");
    },
    [search, navigate]
  );

  return (
    <Fragment>
      <div>
        <form className={classes.form} onSubmit={searchSubmissionHandler}>
          <input
            required
            className={classes.input}
            id="search"
            type="text"
            placeholder="Search for an artist…"
            value={currentValue}
            onChange={searchValueHandler}
          />

          <div>
            <button className={classes.button}>
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEzIDMgQyA3LjQ4ODk5NzEgMyAzIDcuNDg4OTk3MSAzIDEzIEMgMyAxOC41MTEwMDMgNy40ODg5OTcxIDIzIDEzIDIzIEMgMTUuMzk2NTA4IDIzIDE3LjU5NzM4NSAyMi4xNDg5ODYgMTkuMzIyMjY2IDIwLjczNjMyOCBMIDI1LjI5Mjk2OSAyNi43MDcwMzEgQSAxLjAwMDEgMS4wMDAxIDAgMSAwIDI2LjcwNzAzMSAyNS4yOTI5NjkgTCAyMC43MzYzMjggMTkuMzIyMjY2IEMgMjIuMTQ4OTg2IDE3LjU5NzM4NSAyMyAxNS4zOTY1MDggMjMgMTMgQyAyMyA3LjQ4ODk5NzEgMTguNTExMDAzIDMgMTMgMyB6IE0gMTMgNSBDIDE3LjQzMDEyMyA1IDIxIDguNTY5ODc3NCAyMSAxMyBDIDIxIDE3LjQzMDEyMyAxNy40MzAxMjMgMjEgMTMgMjEgQyA4LjU2OTg3NzQgMjEgNSAxNy40MzAxMjMgNSAxMyBDIDUgOC41Njk4Nzc0IDguNTY5ODc3NCA1IDEzIDUgeiI+PC9wYXRoPjwvc3ZnPg=="
              />
            </button>
          </div>
        </form>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default MainSearchBar;
