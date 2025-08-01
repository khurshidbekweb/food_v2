import { useCartStore } from "@/basketStore";
import RowCard from "@/components/card/row-card";
import HomeNav from "@/components/navbar/home-nav";
import { useStore } from "@/store";
import { category, Food, Restaurant } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const CategoryFood = () => {
    const { restaurentId, id } = useParams()
    const { language } = useStore();
    const navigate = useNavigate()

    const restaurant: Restaurant | null = (() => {
        try {
            const data = localStorage.getItem('restaurant');
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    })();
    const category = restaurant?.categories.find(el => el._id === id) as category
    const { items } = useCartStore()

    return (
        <div className="max-w-4xl mx-auto overflow-hidden lg:overflow-hidden relative">
            <HomeNav parents={true} navigation={`/${restaurentId}`} />
            <div className="w-full flex flex-col md:px-5 space-y-2 mt-[-20px] rounded-t-3xl bg-white">
                {<div className="flex flex-col space-y-2 px-2">
                    <hr />
                    <div className="flex items-center  gap-x-2">
                        <h2 className="text-[32px]  font-bold">{category?.name?.[language?.code]}</h2>
                    </div>
                    {category?.foods?.length > 0 ? (
                        category?.foods.map((food: Food) => (
                            <RowCard key={food._id} food={food} />
                        ))
                    ) : (
                        <p className="text-gray-500">No foods available in this category.</p>
                    )}
                </div>}
                {items?.length && <div onClick={() => navigate(`/${restaurentId}/basket`)} className="fixed flex justify-between items-center z-20 bottom-14 right-2">
                    <motion.button
                        className="relative bg-[#24823e] text-white p-4 rounded-full text-lg font-semibold shadow-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <ShoppingCart size={30} />
                        <motion.span
                            className="absolute -z-10 w-full top-0 left-0 h-full rounded-full bg-[#24823e] opacity-30"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                                duration: 2.9,
                                repeat: Infinity,
                            }}
                        />
                    </motion.button>
                </div>}
            </div>
        </div>
    );
};

export default CategoryFood;