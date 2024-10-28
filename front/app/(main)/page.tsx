import Image from "next/image";
import {kMaxLength} from "buffer";

const HomePage: React.FC = async () => {

    return (
        <div className="p-[20px_10px] lg:p-10">
            <Image src="/banner.png" alt="Coding" width={kMaxLength} height={kMaxLength}/>
            <h3 className="text-2xl font-bold mt-8">New Courses</h3>
            <div className="flex flex-wrap my-4">
            </div>

            <h3 className="text-2xl font-bold mt-8">Popular Courses</h3>
            <div className="flex flex-wrap my-4">
            </div>
        </div>
    );
};

export default HomePage;

