import { useCartStore } from "@/basketStore";
import HomeNav from "@/components/navbar/home-nav";
import { Button } from "@/components/ui/button";
import { IMG_BASE_URL } from "@/constants";
import { useStore } from "@/store";
import { MinusIcon, Plus } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
type Product = {
    _id: string;
    name: { uz: string; en: string; ru: string };
    price: number;
    count: number;
    image: string
};

const Basket = () => {
    const { language } = useStore();
    const navigate = useNavigate()
    const {t} = useTranslation()
    const { items, totalPrice, increaseCount, decreaseCount, removeFromCart } = useCartStore();
    console.log(items);
    const decreaseCountRemove = (count: number, _id: string) => {
        if(count==1){
            removeFromCart(_id)
        }
        decreaseCount(_id)
    }
    useEffect(() => {
        if(items?.length===0){
            navigate(-1)
        }
    }, [items?.length, navigate])
    return (
        <div className="basket-page max-w-md mx-auto border h-screen overflow-x-hidden relative ">
            <HomeNav parents={true} navigation=" "/>
            <div className="p-2 mt-[-20px] bg-white rounded-t-3xl">
            <h2 className="text-[25px] font-medium py-2">{t('my_order')}</h2>
            {items?.length && items.map((el: Product) => (
                <div className="mt-2 flex justify-between items-start gap-x-4" key={el._id}>
                    <img
                        src={`${IMG_BASE_URL}${el.image}`}
                        alt="food img"
                        className="rounded-lg object-cover !w-[50%] h-[120px]"
                    />
                    <div className="flex-1">
                        <h3 className="font-semibold text-[22px] text-gray-800">
                            {el.name[language?.code as "uz" | "en" | "ru"]}
                        </h3>
                        <div className="flex flex-col justify-between space-y-2">
                            <p className="text-gray-600 text-xl font-medium mt-1">
                                {el.price.toLocaleString()} so'm
                            </p>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    className="bg-[#24823e] text-white rounded-full w-10 h-10 flex items-center justify-center border-[#24823e]"
                                    onClick={() => decreaseCountRemove(el.count, el._id)}
                                >
                                    <MinusIcon/>
                                </Button>
                                <span className="text-xl">{el.count}</span>
                                <Button
                                    variant="outline"
                                    className="bg-[#24823e] text-white text-3xl rounded-full w-10 h-10 flex items-center justify-center border-[#24823e] leading-none"
                                    onClick={() => increaseCount(el._id)}
                                >
                                    <Plus/>
                                </Button>
                            </div>                            
                        </div>
                    </div>
                </div>
            ))}
            <hr className="my-2"/>
            <h2 className="text-[25px] font-semibold mb-6">{t('total')} {totalPrice.toLocaleString()} so'm</h2>
            </div>
        </div>
    );
};

export default Basket;