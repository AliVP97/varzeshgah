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
  ...props
}) => {
  return (
    <Card
      className="flex flex-col bg-white shadow-xl space-y-2 divide-y"
      {...props}
    >
      <div className="grid grid-cols-7">
        <img
          className="col-span-2 aspect-square rounded-xl"
          src={imageSrc[0]}
          alt="varzeshgah"
          loading="lazy"
        />
        <div className="grid grid-rows-4 col-span-4 px-2">
          <p className="leading-5 row-span-2 flex text-base font-bold text-slate-900">{`${surfaceType} ${name}`}</p>
          <p className="text-sm text-slate-500">{address}</p>
          <div className="flex items-center gap-0.5">
            <i className="fa-solid fa-star text-[0.9em] text-yellow-300 pb-1"></i>
            <p className="text-sm font-light text-slate-500">{rating}</p>
          </div>
        </div>
        <div className="col-span-1 relative flex flex-col justify-between">
          <div className="flex justify-center items-center p-0.25 font-bold rounded-full bg-yellow-400">
            <p className="text-[0.5em] pt-0.5 pl-0.5">km</p>
            <p className="text-[0.8em] pt-0.5">1.6</p>
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
          <i className="fa-solid fa-badge-percent text-yellow-400"></i>
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

export default Product;
