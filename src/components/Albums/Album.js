import classes from "./Album.module.css";
import Card from "../UI/Card";

const Album = (props) => {
  return (
    <Card>
      <li key={props.id}>
        <div className={classes.imgDiv}>
          <img className={classes.img} src={props.url} alt="" />
        </div>
        <div className={classes.albumName}>
          {props.albumName.length > 27
            ? `${props.albumName.substring(0, 22)}...`
            : `${props.albumName}`}
        </div>
        <div className={classes.artistName}>{props.artistName}</div>
        <div className={classes.dateTrack}>
          <span className={classes.trackdatespans}>{props.date}</span>
          <span className={classes.trackdatespans}>{props.tracks} tracks</span>
        </div>

        <div className={classes.preview}>
          <a href={props.preview} alt="">
            Preview on Spotify
          </a>
        </div>
      </li>
    </Card>
  );
};

export default Album;
