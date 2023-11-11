import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Notfound } from "./components/NotFound";
import { Movie } from "./components/movie/Movie";

const routes = (
  <Routes>
    <Route path="*" element={<Notfound />}></Route>
    <Route path="/" element={<Home />}></Route>
    <Route path="/movie/:movieId" element={<Movie />}></Route>
  </Routes>
)
export const App = () => {
  return <div>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </div>;
};