import { Button } from "../ui/button";
import { FaChevronLeft } from "react-icons/fa";
import Language from "../language";
import { useStore } from "@/store";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const {changeCardView, viewCard} = useStore()
    const {restaurentId} = useParams()
    const navigate = useNavigate()
    const {t} = useTranslation()
    
    return (
        <nav className="flex items-center max-w-md justify-between px-4 py-3 bg-[#8833EE] text-white fixed w-full top-0 left-0 right-0 mx-auto h-[65px] ">
            <div className="flex items-center gap-3">
                <Button onClick={() => navigate(`/${restaurentId}`)} variant="ghost" size="icon" className="text-white border hover:bg-white/20">
                    <FaChevronLeft size={25} className="text-white" />
                    <span className="sr-only">Back</span>
                </Button>
                <span className="text-2xl font-medium">{t('menu')}</span>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex items-center w-[100px] h-[40px] bg-white/20 rounded-md justify-between">
                    <div onClick={() => changeCardView('row')} className={`h-full rounded-md cursor-pointer flex items-center justify-center px-3 flex-col space-y-1 ${viewCard=='row'?'bg-white':''}`}>
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                        <span className="blog p-[6px] px-4 bg-[#8833EE] rounded-md"></span>
                    </div>
                    <div onClick={() => changeCardView('col')} className={`h-full px-[9px] flex justify-center items-center rounded-md cursor-pointer ${viewCard=='col'?'bg-white':''}`}>
                        <span className={`inline-block h-[25px] w-[25px] px-[10px] rounded-sm z-50 ${viewCard=='col'?'bg-[#8833EE]':'bg-white/20'}`}></span>
                    </div>
                </div>
                <Language />
            </div>
        </nav>
    );
};

export default Navbar;