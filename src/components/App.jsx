import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { lazy } from "react";

const Movies = lazy(() => import('../pages/Movies'));
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('../pages/NotFound'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <SharedLayout/> }>
        <Route index element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/movies/:movieId" element={ <MovieDetails /> }>
          <Route path="/movies/:movieId/cast" element={<Cast />} /> 
          <Route path="/movies/:movieId/reviews" element={ <Reviews/> } /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App