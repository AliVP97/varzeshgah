import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div style={{ display: "flex", columnGap: "10px", alignItems: "center" }}>
        <FontAwesomeIcon icon="fa-solid fa-house" />
        پیش نمایش صفحه اصلی
      </div>
    </div>
  );
};

export default Home;
