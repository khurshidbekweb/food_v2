import { Restaurant } from "@/types";
import { IMG_BASE_URL } from "@/constants";
import { useParams } from "react-router-dom";
import { useRestuarantOne } from "@/querys";

const HomeNav = () => {
  const { restaurentId } = useParams();
  const restaurant: Restaurant = useRestuarantOne(restaurentId as string)?.data;

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
      <div className="pt-1 pb-2 justify-between">
        <div className="">
          <div className="rounded-full flex items-center pb-8 justify-center">
            <img
              className="!w-[80px] !h-[80px] rounded-full object-cover"
              src={`${IMG_BASE_URL}${restaurant?.image}`}
              alt="restaurant img"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
