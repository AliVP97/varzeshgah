import { useNavigate } from "react-router-dom";

const Navigator = ({ back = true, share = false, bookmark = false }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full pt-11 px-7 absolute z-10 flex justify-between">
      <div className="flex gap-x-3">
        {back && (
          <button
            className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-lg text-white"
            onClick={() => navigate("/")}
          >
            <i className="fa-regular fa-arrow-right"></i>
          </button>
        )}
      </div>
      <div className="flex gap-x-3">
        {share && (
          <button
            style={{ transform: "scale(-1,1)" }}
            className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-lg text-white"
          >
            <i className="fa-solid fa-share"></i>
          </button>
        )}
        {bookmark && (
          <button className="h-10 flex items-center justify-center rounded-full aspect-square bg-black bg-opacity-20 backdrop-blur-sm text-base text-white">
            <i className="fa-solid fa-bookmark"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigator;
