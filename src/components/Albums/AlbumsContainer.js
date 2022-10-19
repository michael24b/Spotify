import classes from "./AlbumsContainer.module.css";
import Album from "./Album";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const AlbumsContainer = (props) => {
  const albumsss = useSelector((state) => state.sv.albums);
  const artist = useSelector((state) => state.sv.currentArtistName);

  const albums = albumsss.map((album) => (
    <Album
      key={album.id}
      id={album.id}
      url={album.images.length ? album.images[1].url : "No Image"}
      albumName={album.name}
      artistName={album.artists[0].name}
      date={album.release_date}
      tracks={album.total_tracks}
      preview={album.external_urls.spotify}
    />
  ));
  return (
    <Fragment>
      <div className={classes.titleSub}>
        <div className={classes.title}>{artist}</div>
        <div className={classes.subtitle}>Albums</div>
      </div>
      <div className={classes.albums}>{albums}</div>
    </Fragment>
  );
};
export default AlbumsContainer;
