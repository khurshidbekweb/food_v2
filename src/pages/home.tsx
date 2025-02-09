import Loading from "@/components/loader";
import HomeNav from "@/components/navbar/home-nav";
import { Button } from "@/components/ui/button";
import LanguageComponent from "../components/language";
import { IMG_BASE_URL } from "@/constants";
import { useCategoryAll, useRestuarantOne } from "@/querys";
import { useStore } from "@/store";
import { category } from "@/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const HomePage = () => {
  const { restaurentId } = useParams();
  const { language } = useStore();
  const { t } = useTranslation();
  const {
    data: restaurant,
    error,
    isLoading,
  } = useRestuarantOne(restaurentId!);
  const { data: menuCategories } = useCategoryAll(restaurentId!);

  const navigate = useNavigate();
  useEffect(() => {
    if (restaurant) {
      localStorage.setItem("restaurant", JSON.stringify(restaurant));
    }
  }, [restaurant]);
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-md mx-auto">
      <HomeNav parents={false} navigation=""/>
      <div className="flex flex-col -mt-6 border-l border-r  max-w-md mx-auto my-auto bg-white rounded-tl-3xl rounded-tr-3xl">
      {/* Header */}
        <div className="pt-4 px-3 flex items-center justify-between">
          <h2 className="text-4xl">{restaurant?.name[language?.code]}</h2>
          <LanguageComponent />
        </div>

        {/* Online menu header */}
        <div className="border-b p-3">
          <div className="flex items-center justify-between pb-4">
            <span className="text-white bg-[#8833EE] px-2 py-1 font-bold rounded-full">
              {t("kategory")}
            </span>
            <Button
              onClick={() =>
                navigate(
                  `/${restaurant?._id}/food?categoryId=${restaurant?.categories[0]?._id}`
                )
              }
              variant="outline"
              size="sm"
            >
              {t("kategory_btn")}
            </Button>
          </div>
          {/* Menu categories */}
          <div className="grid grid-cols-1 gap-4 ">
            {menuCategories?.map((category: category) => (
              <Button
                key={category._id}
                variant="ghost"
                className="relative w-full !h-[140px] rounded-3xl overflow-hidden p-0"
                onClick={() =>
                  navigate(`/${restaurant?._id}/food?categoryId=${category._id}`)
                }
              >
                <img
                  className="w-full h-full object-cover"
                  src={`${IMG_BASE_URL}${category.image}`}
                  alt=""
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-2xl font-bold">
                    {category.name[language?.code]}
                  </h1>
                </div>
              </Button>
            ))}
          </div>
        </div>
        {/* Bottom navigation */}
        {/* <MiniNav /> */}
      </div>
    </div>
  );
};

export default HomePage;
