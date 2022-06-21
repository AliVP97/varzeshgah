import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "components";

const Product = ({
  data: {
    name,
    address,
    rating,
    surfaceType,
    priceFrom,
    availableSlots,
    imageSrc,
  },
}) => {
  return (
    <Card className="flex flex-col bg-white shadow-2xl space-y-2 divide-y">
      <div className="container grid grid-cols-7">
        <img
          className="col-span-2 aspect-square rounded-xl"
          src={imageSrc}
          alt="varzeshgah"
          loading="lazy"
        />
        <div className="grid grid-rows-4 col-span-4 px-2">
          <p className="leading-5 row-span-2 flex text-base font-bold text-slate-900">{`${surfaceType} ${name}`}</p>
          <p className="text-sm text-slate-500">{address}</p>
          <div className="flex items-center gap-0.5">
            <FontAwesomeIcon
              className="text-[0.9em] pb-1"
              icon="fa-solid fa-star"
              color="#FEC200"
            />
            <p className="text-sm font-light text-slate-500">{rating}</p>
          </div>
        </div>
        <div className="col-span-1 relative flex flex-col justify-between">
          <div className="flex justify-center items-center p-0.25 font-bold rounded-full bg-yellow-300">
            <p className="text-[0.5em] pt-0.5 pl-0.5">km</p>
            <p className="text-[0.7em] pt-0.5">1.6</p>
          </div>
          <div className="flex items-center absolute bottom-0 left-0">
            <p className="text-base font-black text-slate-900">{priceFrom}</p>
            <p className="w-[23px] text-center leading-[7px] text-[7px] font-semibold">
              هــــزار تومان
            </p>
            <p className="text-[9px] font-light w-[31px]">/ سانس</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-2 pt-2">
        <div className="flex items-center gap-1">
          <div className="h-[18px] flex items-center justify-center aspect-square bg-[#FF9C08] rounded-full">
            <FontAwesomeIcon
              className="text-[10px]"
              icon="fa-solid fa-percent"
              color="white"
            />
          </div>
          <p className="text-sm font-medium text-slate-500">10 درصد تخفیف</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-green-500">
            {availableSlots} سانس موجود
          </p>
        </div>
      </div>
    </Card>
  );
};

// const sth = (
//   <>
//     <div className="space-y-2">
//       <p className="text-xl font-bold text-#111234">{`${surfaceType} ${name}`}</p>
//       <div className="text-base text-slate-500 flex items-center">
//         <FontAwesomeIcon
//           className="ml-2 ltr:mr-2"
//           icon="fa-solid fa-location-pin"
//         />
//         <p>{address}</p>
//       </div>
//     </div>
//     <div className="flex items-center">
//       <p className="text-xl font-bold text-#111234 ml-2 ltr:mr-2">{price}</p>
//       <p className="text-xs text-slate-500">تومان</p>
//     </div>
//   </>
// );

export default Product;
