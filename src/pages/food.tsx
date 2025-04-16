import { useCartStore } from "@/basketStore";
import RowCard from "@/components/card/row-card";
import HomeNav from "@/components/navbar/home-nav";
import { useStore } from "@/store";
import { category, Food, Restaurant } from "@/types";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const FoodPage = () => {
    const { viewCard, language } = useStore();
    const location = useLocation();
    const { items } = useCartStore()
    const { restaurentId } = useParams()
    const restaurant: Restaurant | null = (() => {
        try {
            const data = localStorage.getItem('restaurant');
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    })();
    const navigate = useNavigate()
    const categories = restaurant?.categories || [];
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("categoryId");
    useEffect(() => {
        if (categoryId) {
            const element = document.getElementById(categoryId);
            if (element) {
                const offset = element.getBoundingClientRect().top + window.pageYOffset - 0;
                window.scrollTo({ top: offset, behavior: "smooth" });
            }
        }
    }, [categoryId]);

    return (
        <div className="max-w-md mx-auto border overflow-hidden lg:overflow-hidden relative">
            <HomeNav parents={true} navigation={`/${restaurentId}`}/>
            <div className="p-2 w-full flex flex-col md:px-5 space-y-2 mt-[-20px] rounded-t-3xl bg-white">
                {viewCard === 'row' ? (
                    categories.length > 0 ? (
                        categories.map((el: category, i: number) => (
                            <div key={el._id} className="flex flex-col space-y-2" id={el._id}>
                                <hr className={`${i == 0 ? 'hidden' : 'block'} my-3`} />
                                <div className="flex items-center  gap-x-2">
                                    <h2 className="text-[32px]  font-bold">{el.name[language?.code]}</h2>
                                </div>
                                {el.foods.length > 0 ? (
                                    el.foods.map((food: Food) => (
                                        <RowCard key={food._id} food={food} />
                                    ))
                                ) : (
                                    <p className="text-gray-500">No foods available in this category.</p>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No categories available.</p>
                    )
                ) : (
                    <p className="text-gray-500">Invalid view mode.</p>
                )}
            </div>
            {items?.length && <div onClick={() => navigate(`/${restaurentId}/basket`)} className="fixed flex justify-between items-center z-20 bottom-14 right-2">
                <motion.button
                    className="relative bg-[#24823e] text-white p-4 rounded-full text-lg font-semibold shadow-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <ShoppingCart size={30}/>
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
    );
};

export default FoodPage;
