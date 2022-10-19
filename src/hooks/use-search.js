import { useSelector, useDispatch } from "react-redux";
import { svActions } from "../store/search-value";

const useHttp = () => {
  console.log("use-search is runing");
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.sv.accessToken);
  const inputValue = useSelector((state) => state.sv.inputValue);

  const searchParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  const artistSearch = async () => {
    await fetch(
      `https://api.spotify.com/v1/search?q=${inputValue}&type=artist&limit=20`,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(svActions.setArtists(data.artists.items));
      });
  };

  const albumSearch = async (artistID) => {
    await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&limit=20`,
      searchParameters
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(svActions.setAlbums(data.items));
      });
  };

  return {
    artistSearch,
    albumSearch,
  };
};
export default useHttp;
