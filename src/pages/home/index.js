import { Product } from "components";
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
    <div className="container overflow-y-auto">
      {data?.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
};

export default Home;
