import { Loader } from "lucide-react";

const Loading = () => {
    return (
        <div className="animate-spin w-7 h-7 mx-auto mt-10">
            <Loader/>
        </div>
    );
};

export default Loading;