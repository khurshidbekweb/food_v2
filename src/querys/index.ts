/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-key";
import { languageUtils } from "@/utils/language.utils";
import { userUtils } from "@/utils/user.util";
import { categoryImgUtils } from "@/utils/categoryImg.utils";
import { restaurantUtils } from "@/utils/restaurant";
import { categoryUtils } from "@/utils/category";
import { foodUtils } from "@/utils/food.utils";


// ============== Language
const uselanguageAll = () => (
    useQuery({
        queryKey: [QUERY_KEYS.language_all],
        queryFn: () => languageUtils.getLanguage(),
    })
);
const useLanguageId = (id: string) => (
    useQuery({
        queryKey: [QUERY_KEYS.language_one],
        queryFn: () => languageUtils.getLanguageId(id)
    })
);
// ============== Users
const useUserAll = () => (
    useQuery({
        queryKey: [QUERY_KEYS.user],
        queryFn: () => userUtils.getUser()
    })
);
const useUserMe = () => (
    useQuery({
        queryKey: [QUERY_KEYS.user_me],
        queryFn: () => userUtils.getUserMe()
    })
);
// ============== categorys 

const useCategoryAll = (restaurantId: string) => (
    useQuery({
        queryKey: [QUERY_KEYS.category, restaurantId],
        queryFn:  () => restaurantId ? categoryUtils.getCategory(restaurantId) :Promise.resolve([]),
    })
)
const useCategoryOne = (id: string) => (
    useQuery({
        queryKey: [QUERY_KEYS.category],
        queryFn:  () =>categoryUtils.getCategoryOne(id)
    })
)

// ============== categorys IMAGE
const useCategoryImg = () => (
    useQuery({
        queryKey: [QUERY_KEYS.categoryImg],
        queryFn: () => categoryImgUtils.getcategoryImg()
    })
);
// ============== Restaurants
const useRestuarant = () => (
    useQuery({
        queryKey: [QUERY_KEYS.restuarant_all],
        queryFn: () => restaurantUtils.getRestaurant()
    })
);
const useRestuarantOne = (id:string) => (
    useQuery({
        queryKey: [QUERY_KEYS.restuarant_one],
        queryFn: () => restaurantUtils.getRestaurantOneId(id)
    })
)
// ============== Food
const useFoodAll = (restaurantId:string) => (
    useQuery({
        queryKey: [QUERY_KEYS.food, restaurantId],
        queryFn: () => restaurantId ? foodUtils.getFood(restaurantId) : Promise.resolve([]),
    })
)
const useFoodId = (id:string) => (
    useQuery({
        queryKey: [QUERY_KEYS.food],
        queryFn: () => foodUtils.getFoodId(id)
    })
)


export {uselanguageAll,useCategoryAll,useFoodAll,useFoodId,useCategoryOne, useLanguageId, useUserMe, useUserAll,useCategoryImg,useRestuarant,useRestuarantOne}