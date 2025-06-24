import { Button } from "../ui/button";
import { FaChevronLeft } from "react-icons/fa";
import Language from "../language";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const { restaurentId } = useParams()
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <nav className="flex max-w-4xl justify-between px-4 bg-gradient-to-r from-purple-500 to-pink-500  text-white fixed w-full top-0 left-0 right-0 mx-auto h-[90px] ">
            <div className="flex items-center gap-3">
                <Button onClick={() => navigate(`/${restaurentId}`)} variant="ghost" size="icon" className="text-white border  hover:bg-white/20">
                    <FaChevronLeft size={25} className="text-white" />
                    <span className="sr-only">Back</span>
                </Button>
                <span className="text-2xl font-medium">{t('menu')}</span>
            </div>
            <Language />
        </nav>
    );
};

export default Navbar;