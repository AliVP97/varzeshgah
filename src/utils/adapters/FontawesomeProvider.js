import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

const FontawesomeProvider = ({ children }) => {
  library.add(faMagnifyingGlass, faHouse);

  return children;
};

export default FontawesomeProvider;
