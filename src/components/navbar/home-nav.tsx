import { Restaurant } from "@/types";
import { IMG_BASE_URL } from "@/constants";
import { useNavigate, useParams } from "react-router-dom";
import { useRestuarantOne } from "@/querys";
import { MoveLeft } from "lucide-react";

interface headerProps{
  parents: boolean;
  navigation: string
}

const HomeNav = ({parents, navigation}:headerProps) => {
  const { restaurentId } = useParams();
  const restaurant: Restaurant = useRestuarantOne(restaurentId as string)?.data;
  const navigate  = useNavigate()
  const handleNavigate = () => {
    if(navigation==" "){
      navigate(-1)
    }else{
      navigate(`/${restaurentId}`)
    }
  }

  return (
    <div className="bg-gradient-to-r from-purple-500 top-0 to-pink-500 p-4 text-white">
      <div className="pt-1 pb-2 justify-between relative">
        {parents && <button onClick={handleNavigate} className="absolute bg-inherit inline-block p-2 rounded-full hover:bg-[#8833EE] transition-colors"><MoveLeft className="text-[15px]" size={24}/></button>}
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
