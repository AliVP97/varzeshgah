import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navigator, ImageCarousel, Tab, Tabs } from "components/baseComponents";

const Place = ({ className, ...props }) => {
  const [data, setData] = useState();
  const id = Number(useParams().id);

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
    <div
      className={`h-screen relative grid grid-rows-[repeat(7,1fr)] bg-slate-800 ${
        className ? className : ""
      }`}
      {...props}
    >
      <Navigator share bookmark />
      <ImageCarousel className="h-52" data={data?.imageSrc} />
      <div className="relative z-10 row-span-6 flex flex-col overflow-y-auto bg-slate-50 px-5 py-3 rounded-t-3xl divide-y">
        <div className="w-full h-28 grid grid-cols-4 py-4">
          <div className="col-span-3 flex flex-col justify-between">
            <p className="leading-5 row-span-2 flex text-xl font-bold text-slate-900">{`${data?.surfaceType} ${data?.name}`}</p>
            <p className="text-sm text-slate-500 pt-2">{data?.address}</p>
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
        <a className="flex py-3 gap-x-4" href="geo:35.699784,51.338026">
          <div className="relative h-12 aspect-square bg-gray-200 rounded-xl">
            <i className="absolute bottom-0 left-[-5px] text-lg text-fuchsia-800 fa-solid fa-location-dot"></i>
          </div>
          <div>
            <p className="text-slate-600 font-medium">{data?.address}</p>
            <p className="text-fuchsia-800 font-medium">نمایش در نقشه</p>
          </div>
        </a>
        <Tabs
          className="h-full"
          // classNameContainer="h-full"
          classNameTitle="text-slate-900"
        >
          <Tab eventKey="calendar" title="تقویم">
            <p className="text-xl font-black text-center border-2 border-slate-200 border-dotted p-5">
              تقویم
            </p>
          </Tab>
          <Tab eventKey="specification" title="مشخصات">
            <p className="text-xl font-black text-center border-2 border-slate-200 border-dotted p-5">
              مشخصات
            </p>
          </Tab>
          <Tab eventKey="comments" title="نظرات">
            <p className="text-xl font-black text-center border-2 border-slate-200 border-dotted p-5">
              نظرات
            </p>
          </Tab>
        </Tabs>
      </div>
      <button className="h-12 w-[87%] absolute bottom-0 left-0 right-0 z-10 mx-auto mb-7 bg-yellow-400 font-black tracking-widest rounded-lg">
        رزرو
      </button>
    </div>
  );
};

export default Place;
