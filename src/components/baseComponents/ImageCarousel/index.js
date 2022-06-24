import { useState } from "react";

const ImageCarousel = ({ data, className, ...props }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`relative items-center${className ? ` ${className}` : ""}`}
      {...props}
    >
      <div className="flex overflow-x-auto">
        {data?.map((src) => (
          <img
            className="w-full h-56 object-cover"
            key={src}
            src={src}
            alt=""
          />
        ))}
      </div>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center mx-auto gap-x-1.5">
        {data?.map((src, index) => (
          <div
            key={src}
            className={`h-2 ${
              index === activeIndex ? "w-7 bg-yellow-300" : "bg-gray-100"
            } aspect-square rounded-full`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
