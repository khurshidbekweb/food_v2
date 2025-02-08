import { useCartStore } from "@/basketStore";
import { Button } from "@/components/ui/button";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
type Product = {
    _id: string;
    name: { uz: string; en: string; ru: string };
    price: number;
    count: number;
    image: string
};

const Basket = () => {
    const { language } = useStore();
    const { items, totalPrice, increaseCount, decreaseCount, removeFromCart } = useCartStore();
    console.log(items);

    return (
        <div className="px-2">
            {items?.length && items.map((el: Product) => (
                <div className="flex justify-between items-start gap-x-2" key={el._id}>
                    <img
                        src={`${IMG_BASE_URL}${el.image}`}
                        alt="food img"
                        className="rounded-lg object-cover !w-[45%] h-[120px]"
                    />
                    <div className="mt-2 flex-1">
                        <h3 className="font-semibold text-xl text-gray-800">
                            {el.name[language?.code as "uz" | "en" | "ru"]}
                        </h3>
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    className="bg-[#8833EE] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#8833EE]"
                                    onClick={() => decreaseCount(el._id)}
                                >
                                    -
                                </Button>
                                <span className="text-xl">{el.count}</span>
                                <Button
                                    variant="outline"
                                    className="bg-[#8833EE] text-white text-3xl rounded-full w-12 h-12 pb-3 flex items-center justify-center border-[#8833EE] leading-none"
                                    onClick={() => increaseCount(el._id)}
                                >
                                    +
                                </Button>
                            </div>
                            <p className="text-gray-600 text-3xl font-medium mt-2">
                                {el.price.toLocaleString()} so'm
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Basket;