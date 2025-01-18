import { Button } from "../ui/button";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import { Food } from "@/types";
import { useState } from "react";

interface PropsFood {
  food: Food;
}

const RowCard = ({ food }: PropsFood) => {
  const { language } = useStore();
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="">
      <img
        src={`${IMG_BASE_URL}${food.image}`}
        alt="food img"
        className="rounded-lg object-cover w-full h-[300px]"
      />

      <div className="mt-2">
        <h3 className="font-semibold text-xl text-gray-800">
          {food.name[language?.code]}
        </h3>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600 text-3xl font-medium mt-2">
              {food.price.toLocaleString()} so'm
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {count > 0 && (
              <Button
                variant="outline"
                className="bg-[#8833EE] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#8833EE]"
                onClick={handleDecrease}
              >
                -
              </Button>
            )}
            {count > 0 && <span className="text-xl">{count}</span>}
            <Button
              variant="outline"
              className="bg-[#8833EE] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#8833EE] leading-none"
              onClick={handleIncrease}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowCard;
