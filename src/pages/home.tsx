import Loading from '@/components/loader';
import HomeNav from '@/components/navbar/home-nav';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { IMG_BASE_URL } from '@/constants';
import { useCategoryAll, useRestuarantOne } from '@/querys';
import { useStore } from '@/store';
import { category } from '@/types';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';


const HomePage = () => {
  const { restaurentId } = useParams()
  const { language } = useStore()
  const {t} = useTranslation()
  const { data: restaurant, error, isLoading } = useRestuarantOne(restaurentId!);
  const { data: menuCategories } = useCategoryAll(restaurentId!);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (restaurant) {
      localStorage.setItem('restaurant', JSON.stringify(restaurant));
    }
  }, [restaurant]);
  if (isLoading) {
    return <Loading/>
  }
  
  if (error) {
    return <div>Error: {error.message}</div>;
  }  

  return (
    <div className="flex flex-col border h-screen max-w-md mx-auto bg-white">
      {/* Header */}
      <HomeNav />

      {/* Online menu header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground font-bold text-xl">{t("kategory")}</span>
          <Button onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${restaurant?.categories[0]?._id}`)} variant="outline" size="sm">
            {t("kategory_btn")}
          </Button>
        </div>
      </div>

      {/* Menu categories */}
      <ScrollArea className="flex-1 px-2 mt-2">
        <div className="flex flex-col space-y-3">
          {menuCategories?.map((category: category) => (
            <Button
              key={category._id}
              variant="ghost"
              className="relative w-full h-[120px] rounded-full overflow-hidden p-0"
              onClick={() => navigate(`/${restaurant?._id}/food?categoryId=${category._id}`)}
            >              
                <img className='w-full h-full rounded-full object-cover' src={`${IMG_BASE_URL}${category.image}`} alt="" />
                <span className="absolute rounded-full inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-2xl font-bold">{category.name[language?.code]}</h1>
                </div>
            </Button>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom navigation */}
      {/* <MiniNav /> */}
    </div>
  );
};

export default HomePage;