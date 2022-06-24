import { Routes as RouterRoutes, Route } from "react-router-dom";
import { DataEntry, Home, Place } from "pages";

const Routes = () => (
  <RouterRoutes>
    <Route path="/">
      <Route index element={<Home />} />
      <Route path=":id" element={<Place />} />
      <Route path="dataEntry" element={<DataEntry />} />
    </Route>
  </RouterRoutes>
);

export default Routes;
