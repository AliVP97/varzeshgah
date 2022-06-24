import { ImageCarousel } from "components/baseComponents";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Place = ({ ...props }) => {
  const [data, setData] = useState();
  const id = Number(useParams().id);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data.find(({ id: dataId }) => dataId === id)));
  }, [id]);

  return (
    <div className="h-screen relative bg-slate-800" {...props}>
      <div className="w-full pt-11 px-7 absolute z-10 flex justify-between">
        <button
          className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-lg text-white"
          onClick={() => navigate("/")}
        >
          <i className="fa-regular fa-arrow-right"></i>
        </button>
        <div className="flex gap-x-3">
          <button
            style={{ transform: "scale(-1,1)" }}
            className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-lg text-white"
          >
            <i className="fa-solid fa-share"></i>
          </button>
          <button className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-base text-white">
            <i class="fa-solid fa-bookmark"></i>
          </button>
        </div>
      </div>
      <ImageCarousel className="h-52" data={data?.imageSrc} />
      <div className="h-full relative z-10 overflow-y-auto bg-slate-50 py-3 rounded-t-3xl"></div>
    </div>
  );
};

export default Place;
