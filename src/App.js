import Routes from "routes";
import { Navbar } from "components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar title="ورزشگاه" />
      <Routes />
    </div>
  );
};

export default App;
