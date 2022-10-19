import classes from "./ArtistsContainer.module.css";
import Artist from "./Artist";
import { useSelector } from "react-redux";

const ArtistsContainer = (props) => {
  const artistss = useSelector((state) => state.sv.artists);
  const artists = artistss.map((artist) => (
    <Artist
      key={artist.id}
      id={artist.id}
      url={artist.images.length ? artist.images[1].url : "No Image"}
      artistName={artist.name}
      followers={artist.followers.total}
      rating={Number.parseFloat(artist.popularity / 20) + 1}
      search={props.onClick}
    />
  ));
  return <div className={classes.artists}>{artists}</div>;
};
export default ArtistsContainer;
