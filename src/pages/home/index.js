import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FilterBar, Product } from "components";

const Home = () => {
  const [data, setData] = useState();
  const [compactMode, setCompactMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const scrollHandler = ({ target: { scrollTop } }) => {
    if (scrollTop > 80) {
      setCompactMode(true);
    } else {
      setCompactMode(false);
    }
  };

  return (
    <div className="h-screen bg-slate-900">
      <div
        style={{ height: compactMode ? 25 : 80 }}
        className={`relative transition-[height] py-5 mx-8 flex justify-center items-center`}
      >
        <i className="fa-solid fa-arrow-right absolute right-0 text-yellow-400 text-xl"></i>
        <div className="flex items-center gap-x-4">
          <i
            style={{ fontSize: compactMode ? "1.25rem" : "1.5rem" }}
            className="fa-solid fa-location-dot pb-1 text-yellow-400 text-2xl"
          ></i>
          <p
            style={{ fontSize: compactMode ? "1.5rem" : "1.875rem" }}
            className="transition-[font-size] text-slate-50"
          >
            گرگان
          </p>
        </div>
      </div>
      <div
        style={{
          height: compactMode
            ? window.innerHeight - 25 - 15
            : window.innerHeight - 80,
        }}
        className="overflow-y-auto transition-[height] bg-slate-50 py-3 rounded-t-3xl"
        onScroll={scrollHandler}
      >
        <FilterBar className="sticky top-0 z-10" />
        <div className="px-4 space-y-4">
          {data?.map((product) => (
            <Product
              key={product.id}
              data={product}
              onClick={() => navigate(String(product.id))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
