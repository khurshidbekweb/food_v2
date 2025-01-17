import { ChevronRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Restaurant } from "@/types";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import LanguageComponent from "../language";
import { useNavigate, useParams } from "react-router-dom";
import { useRestuarantOne } from "@/querys";

const HomeNav = () => {
  const {restaurentId} = useParams()
  const navigate = useNavigate()
  const restaurant:Restaurant = useRestuarantOne(restaurentId as string)?.data
  const {language} = useStore()
  
    return (
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-zinc-900 rounded-full flex items-center justify-center">
              <img className="!w-[40px] !h-[40px] rounded-full object-cover" src={`${IMG_BASE_URL}${restaurant?.image}`} alt="restaurant img" />
            </div>
            <span className="font-semibold text-2xl font-mono">{restaurant?.name[language?.code]}</span>
          </div>
          <div className="flex items-center gap-1">
            <LanguageComponent/>
            <Button onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${restaurant?.categories[0]?._id}`)} variant="ghost" size="icon" className="text-white">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
};

export default HomeNav;