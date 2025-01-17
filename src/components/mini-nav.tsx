import { Home, Instagram, ShoppingCart } from "lucide-react";
import { GiMeal } from "react-icons/gi";
import { Link } from "react-router-dom";

const MiniNav = () => {
    return (
        <div className="border-t p-2">
            <div className="flex justify-around items-center">
                <Link to={''}  className="!w-[50px]">
                    <Home className="" size={32}/>
                </Link>
                <Link to={''}>
                    <GiMeal size={32} />
                </Link>
                <Link to={''} className="relative">
                    <ShoppingCart size={32}/>
                    <span className="absolute top-[-5px] right-[-5px] h-4 w-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                        1
                    </span>
                </Link>
                <Link to={''}>
                    <Instagram size={32} />
                </Link>
            </div>
        </div>
    );
};

export default MiniNav;