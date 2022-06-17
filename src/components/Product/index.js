import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "components";

const Product = ({ name, address, surfaceType, price, imageSrc }) => {
  return (
    <Card className="bg-emerald-400 space-y-2">
      <img className="rounded-md" src={imageSrc} alt="varzeshgah" />
      <div className="container flex flex-row justify-between">
        <div className="space-y-2">
          <p className="text-xl font-bold text-white">{`${surfaceType} ${name}`}</p>
          <div className="text-base text-gray-50 flex items-center">
            <FontAwesomeIcon
              className="ml-2 ltr:mr-2"
              icon="fa-solid fa-location-pin"
            />
            <p>{address}</p>
          </div>
        </div>
        <div className="flex items-center -m-4">
          <p className="text-xl font-bold text-white ml-2 ltr:mr-2">{price}</p>
          <p className="text-xs text-gray-50">تومان</p>
        </div>
      </div>
    </Card>
  );
};

export default Product;
