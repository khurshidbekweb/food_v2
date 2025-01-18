import RowCard from "@/components/card/row-card";
import HomeNav from "@/components/navbar/home-nav";
import { useStore } from "@/store";
import { category, Food, Restaurant } from "@/types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const FoodPage = () => {
    const { viewCard, language } = useStore();
    const location = useLocation();

    const restaurant: Restaurant | null = (() => {
        try {
            const data = localStorage.getItem('restaurant');
            return data ? JSON.parse(data) : null;
        } catch {
            return null;
        }
    })();

    const categories = restaurant?.categories || [];
    const queryParams = new URLSearchParams(location.search);
    const categoryId = queryParams.get("categoryId");

    useEffect(() => {
        if (categoryId) {
            const element = document.getElementById(categoryId);
            if (element) {
                const offset = element.getBoundingClientRect().top + window.pageYOffset - 110;
                window.scrollTo({ top: offset, behavior: "smooth" });
            }
        }
    }, [categoryId]);

    return (
        <div className="max-w-md mx-auto border overflow-hidden lg:overflow-hidden">
            <HomeNav />
            <div className="p-2 w-full flex flex-col md:px-5 space-y-2 mt-[-20px] rounded-t-3xl bg-white">
                {viewCard === 'row' ? (
                    categories.length > 0 ? (
                        categories.map((el: category) => (
                            <div key={el._id} className="flex flex-col space-y-2" id={el._id}>
                                <div className="flex items-center  gap-x-2">
                                    <h2 className="text-[20px]  font-bold">{el.name[language?.code]}</h2>
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
        </div>
    );
};

export default FoodPage;
