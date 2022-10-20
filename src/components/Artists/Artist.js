import React, { useCallback } from "react";
import classes from "./Artist.module.css";
import { Link, useNavigate } from "react-router-dom";
import { svActions } from "../../store/search-value";
import { useDispatch } from "react-redux";
import useHttp from "../../hooks/use-search";

const Artist = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { albumSearch: search } = useHttp();

  const albumSearchHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(svActions.setCurrentArtistName(props.artistName));
      search(props.id);
      navigate(`/artists/${props.id}`);
    },
    [search, navigate, dispatch, props.artistName, props.id]
  );

  return (
    <Link onClick={albumSearchHandler}>
      <li key={props.id}>
        <div className={classes.card}>
          <div className={classes.imgDiv}>
            <img className={classes.img} src={props.url} alt={props.url} />
          </div>
          <div className={classes.infoCont}>
            <div className={classes.artistName}>{props.artistName}</div>
            <div className={classes.followers}>{props.followers} followers</div>
          </div>
          <div className={classes.preview}>{"☆".repeat(props.rating)}</div>
        </div>
      </li>
    </Link>
  );
};

export default React.memo(Artist);
