import { useCartStore } from "@/basketStore";
import { Button } from "../ui/button";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import { Food } from "@/types";

interface PropsFood {
  food: Food;
}

const RowCard = ({ food }: PropsFood) => {
  const { language } = useStore();
  const { addToCart, increaseCount, decreaseCount, getCount, removeFromCart } = useCartStore()
  const count = getCount(food._id);

  const handleIncrease = () => {
    increaseCount(food._id);
    addToCart({
      _id: food._id,
      name: food?.name as { uz: string; en: string; ru: string },
      price: food?.price,
      image: food?.image
    })
  };
  const decreaseCountRemove = () => {
    if (count == 1) {
      removeFromCart(food._id)
    }
    decreaseCount(food._id)
  }
  return (
    <div className="">
      <img
        src={`${IMG_BASE_URL}${food?.image}`}
        alt="food img"
        className="rounded-lg md:rounded-3xl object-cover w-full h-[300px]"
      />

      <div className="mt-2">
        <h3 className="font-semibold text-xl text-gray-800 md:text-3xl">
          {food?.name?.[language?.code]}
        </h3>
        <div className="flex justify-between">
          <div>
            <p className="text-gray-600 text-3xl font-medium mt-2 md:text-4xl">
              {food?.price?.toLocaleString()} so'm
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {count > 0 && (
              <Button
                variant="outline"
                className="bg-[#24823e] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#24823e]"
                onClick={decreaseCountRemove}
              >
                -
              </Button>
            )}
            {count > 0 && <span className="text-xl">{count}</span>}
            <Button
              variant="outline"
              className="bg-[#24823e] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#24823e] leading-none"
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
