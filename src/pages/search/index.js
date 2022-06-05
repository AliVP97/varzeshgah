import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";

const Search = () => {
  return (
    <div className="search-page">
      <div style={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" color="white" />
        پیش نمایش صفحه جستجو
      </div>
    </div>
  );
};

export default Search;
