import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faHouse,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const FontawesomeProvider = ({ children }) => {
  library.add(faMagnifyingGlass, faHouse, faLocationPin);

  return children;
};

export default FontawesomeProvider;
