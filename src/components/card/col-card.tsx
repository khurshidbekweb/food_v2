// import { Button } from "../ui/button";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import { Food } from "@/types";

interface PropsFood {
  food: Food
}

const ColCard = ({ food }: PropsFood) => {
  const { language } = useStore()

  return (
    <div className="border rounded-lg shadow-sm p-2">
      <img
        src={`${IMG_BASE_URL}${food.image}`}
        alt={'image food'}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold mb-2">{food.name[language?.code]}</h2>
        <h2 className="text-lg font-semibold mb-2">{food.description[language?.code]}</h2>
      </div>
      <p className="text-gray-700 text-sm mb-4 text-[20px] font-semibold mt-3">{food.price} so'm</p>
      {/* <Button className="w-full bg-teal-500 text-white hover:bg-teal-600">
        +Qo'shish
      </Button> */}
    </div>
  );
};

export default ColCard;