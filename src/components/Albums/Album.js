import classes from "./Album.module.css";

const Album = (props) => {
  return (
    <li key={props.id}>
      <div className={classes.card}>
        <div className={classes.imgDiv}>
          <img className={classes.img} src={props.url} alt="" />
        </div>
        <div className={classes.albumInfo}>
          <div className={classes.albumName}>
            {props.albumName.length > 27
              ? `${props.albumName.substring(0, 30)}...`
              : `${props.albumName}`}
          </div>
          <div className={classes.artistName}>{props.artistName}</div>
          <div className={classes.dateTrack}>
            <span className={classes.trackdatespans}>{props.date}</span>
            <span className={classes.trackdatespans}>
              {props.tracks} tracks
            </span>
          </div>
        </div>
        <div className={classes.preview}>
          <a href={props.preview} alt="">
            Preview on Spotify
          </a>
        </div>
      </div>
    </li>
  );
};

export default Album;
