import MainSearchBar from "../components/UI/MainSearchBar";
import ArtistsContainer from "../components/Artists/ArtistsContainer";
import { Fragment } from "react";

const ArtistSearch = () => {
  return (
    <Fragment>
      <MainSearchBar />
      <ArtistsContainer />
    </Fragment>
  );
};

export default ArtistSearch;
