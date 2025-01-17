// import { Button } from "../ui/button";

import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import { Food } from "@/types";

interface PropsFood{
    food:Food
}

const RowCard = ({food}:PropsFood) => {
    const {language} = useStore()
    console.log(food);
    
    return (
        <div className="flex items-start space-x-4 p-1 border rounded-lg shadow-sm">
            <img
                src={`${IMG_BASE_URL}${food.image}`}
                alt={'food img'}
                className="rounded-md object-cover w-[180px] h-[120px]"
            />
            <div className="flex-1 flex flex-col justify-start items-start">
                    <h3 className="font-semibold text-lg">{food.name[language?.code]}</h3>
                    <p className="text-gray-600 text-[18px] font-medium mt-5">{food.price} so'm</p>
                {/* <Button variant="outline" className="bg-[#E8FAF9] text-[#1BC5BD] h-[30px] py-2 px-7 rounded-full">
                    +Qo'shish
                </Button> */}
            </div>            
        </div>
    );
};

export default RowCard;