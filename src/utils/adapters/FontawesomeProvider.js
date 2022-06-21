import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faHouse,
  faLocationPin,
  faStar,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

const FontawesomeProvider = ({ children }) => {
  library.add(faMagnifyingGlass, faHouse, faLocationPin, faStar, faPercent);

  return children;
};

export default FontawesomeProvider;
