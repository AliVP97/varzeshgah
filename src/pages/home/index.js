import { FilterBar, Product } from "components";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

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

  return (
    <div className="container bg-slate-900">
      <div className="h-[8rem] mx-8 relative flex justify-center items-center">
        <i class="fa-solid fa-arrow-right absolute right-0 text-yellow-400 text-xl"></i>
        <div className="flex gap-x-4">
          <i class="fa-solid fa-location-dot text-yellow-400 text-2xl"></i>
          <p className="text-3xl text-slate-50">گرگان</p>
        </div>
      </div>
      <div className="container bg-slate-50 py-3 rounded-3xl">
        <FilterBar />
        <div className="px-4 space-y-4">
          {data?.map((product) => (
            <Product key={product.name} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
