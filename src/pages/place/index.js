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
            <i className="fa-solid fa-bookmark"></i>
          </button>
        </div>
      </div>
      <ImageCarousel className="h-52" data={data?.imageSrc} />
      <div className="h-full relative z-10 flex flex-col overflow-y-auto bg-slate-50 px-5 py-3 rounded-t-3xl divide-y">
        <div className="w-full h-28 grid grid-cols-4 py-4">
          <div className="col-span-3 flex flex-col justify-between">
            <p className="leading-5 row-span-2 flex text-xl font-bold text-slate-900">{`${data?.surfaceType} ${data?.name}`}</p>
            <p className="text-sm text-slate-500">{data?.address}</p>
            <div className="flex gap-x-2 items-center">
              <div className="flex items-center gap-0.5">
                <i className="fa-solid fa-star text-[0.9em] text-yellow-300 "></i>
                <p className="text-sm font-normal text-slate-500 pt-0.5">
                  {data?.rating}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-badge-percent text-yellow-400"></i>
                <p className="text-sm font-normal text-slate-500">
                  10 درصد تخفیف
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between place-items-end">
            <div className="w-fit flex justify-center items-center py-0.25 px-2 font-bold rounded-full bg-yellow-400">
              <p className="text-xs pt-0.5 pl-0.5">km</p>
              <p className="text-base pt-0.5">1.6</p>
            </div>
            <div className="flex items-center">
              <p className="text-lg font-black text-slate-900">
                {data?.priceFrom}
              </p>
              <p className="w-[23px] text-center leading-[7px] text-[7px] font-semibold">
                هــــزار تومان
              </p>
              <p className="text-[9px] font-light w-[32px]">/ سانس</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Place;
