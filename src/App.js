import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const Welcome = React.lazy(() => import("./pages/Welcome"));
const ArtistSearch = React.lazy(() => import("./pages/ArtistSearch"));
const AlbumPage = React.lazy(() => import("./pages/AlbumPage"));

function App() {
  const accessToken = useSelector((state) => state.sv.accessToken);
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
          {!accessToken && <Route path="/" element={<AuthPage />} />}
          {accessToken && <Route path="/welcome" element={<Welcome />} />}
          {accessToken && <Route path="/artists" element={<ArtistSearch />} />}
          {accessToken && (
            <Route path="/artists/:artistID" element={<AlbumPage />} />
          )}
          {!accessToken && (
            <Route path="*" element={<Navigate replace to="/" />} />
          )}
          {accessToken && (
            <Route path="*" element={<Navigate replace to="/welcome" />} />
          )}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
