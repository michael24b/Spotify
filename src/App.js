import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { svActions } from "./store/search-value";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const Welcome = React.lazy(() => import("./pages/Welcome"));
const ArtistSearch = React.lazy(() => import("./pages/ArtistSearch"));
const AlbumPage = React.lazy(() => import("./pages/AlbumPage"));

const CLIENT_ID = "254b931fc846457f85650434991bf284";
const CLIENT_SECRET = "87e41b8fe89b46a6b5f8b43ca45a93d3";

function App() {
  const dispatch = useDispatch();
  const loginToken = useSelector((state) => state.sv.loginToken);

  useEffect(() => {
    const authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((response) => response.json())
      .then((data) => dispatch(svActions.setAccessToken(data.access_token)));
  }, [dispatch]);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centeredDiv">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          {!loginToken && <Route path="/" element={<AuthPage />} />}
          {loginToken && <Route path="/welcome" element={<Welcome />} />}
          {loginToken && <Route path="/artists" element={<ArtistSearch />} />}
          {loginToken && (
            <Route path="/artists/:artistID" element={<AlbumPage />} />
          )}
          {!loginToken && (
            <Route path="*" element={<Navigate replace to="/" />} />
          )}
          {loginToken && (
            <Route path="*" element={<Navigate replace to="/welcome" />} />
          )}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
