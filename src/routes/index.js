import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home, Place, Search } from "pages";

const Routes = () => (
  <RouterRoutes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path=":id" element={<Place />} />
      <Route path="search" element={<Search />} />
    </Route>
  </RouterRoutes>
);

export default Routes;
