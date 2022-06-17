import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home, Search } from "pages";

const Routes = () => (
  <RouterRoutes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
    </Route>
  </RouterRoutes>
);

export default Routes;