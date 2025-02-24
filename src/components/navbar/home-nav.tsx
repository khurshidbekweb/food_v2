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
  console.log(restaurant);
  
  return (
    <div className={`${restaurant?.coverImage?'':'bg-gradient-to-r from-purple-500 top-0 to-pink-500 p-4 h-[160px]'} text-white`}>
      <div className="pb-2 justify-between relative">
        {parents && <button onClick={handleNavigate} className="absolute bg-inherit inline-block p-2 rounded-full hover:bg-[#8833EE] transition-colors"><MoveLeft className="text-[15px]" size={24}/></button>}
        <div className="relative w-full h-full">
          <div className="rounded-full flex justify-center relative">
            <img
              className={`${restaurant?.coverImage?'absolute w-full h-full top-6':''} !w-[80px] !h-[80px] rounded-full object-cover`}
              src={`${IMG_BASE_URL}${restaurant?.image}`}
              alt="restaurant img"
            />
          {restaurant?.coverImage && <div className="w-full h-full -z-10">
              <img className="-z-10 w-full h-[160px]" src={`${IMG_BASE_URL}${restaurant?.coverImage}`} alt="cover image" />
              <span className="absolute w-full h-full bg-[#37363634] top-0 left-0"></span>
            </div>}        
          </div>  
        </div>
      </div>
    </div>
  );
};

export default HomeNav;
