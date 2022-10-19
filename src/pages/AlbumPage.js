
import MainSearchBar from "../components/UI/MainSearchBar";
import AlbumsContainer from "../components/Albums/AlbumsContainer";
import { Fragment } from "react";

const AlbumPage = () => {
  return (
    <Fragment>
      <MainSearchBar />
      <AlbumsContainer />
    </Fragment>
  );
};

export default AlbumPage;
