import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import TitleAndBg from "../../Components/Title/TitleAndBg";
import { FaArrowLeft } from "react-icons/fa";
import './ViewPage.css'
const ViewPage = () => {
    const loadedData = useLoaderData();
    const { Photo, coffeeName, Chef, Supplier, taste, Cetegory } = loadedData
    return (
        <div className="bg">
            <div>
                <TitleAndBg></TitleAndBg>
            </div>
            <div className="w-[1320px] mx-auto mt-5">
                <Link className='flex gap-2 items-center justify-center w-[172px] h-[72px] rounded-[10px] hover:bg-[#D2B48C] hover:text-[#374151]' to='/home'>
                    <FaArrowLeft></FaArrowLeft>
                    <button className=' font-rancho-regular text-[30px] text-[#374751]' >Back to home</button>
                </Link>
                <div className="w-[1320px] h-[600px] bg-[#F4F3F0] rounded-[5px] mx-auto mt-5 content-center">
                    <div className="flex items-center justify-center gap-55">
                        <div>
                            <img className="w-[351px] h-[455px]" src={Photo} alt="" />
                        </div>
                        <div className="w-[308px] h-[291px]">
                            <h1 className="font-rancho-regular text-[36.67px] text-[#331A15]">Niceties</h1>
                            <div className="grid gap-2 mt-6">
                                <h1 className="font-raleway-<uniquifier> font-semibold text-[20px] text-[#1B1A1A]">Name: <span className="font-raleway-<uniquifier> text-[20px] text-[#1B1A1AB3]">{coffeeName}</span></h1>
                                <h1 className="font-raleway-<uniquifier> font-semibold text-[20px] text-[#1B1A1A]">Chef: <span className="font-raleway-<uniquifier> text-[20px] text-[#1B1A1AB3]">{Chef}</span></h1>
                                <h1 className="font-raleway-<uniquifier> font-semibold text-[20px] text-[#1B1A1A]">Supplier: <span className="font-raleway-<uniquifier> text-[20px] text-[#1B1A1AB3]">{Supplier}</span></h1>
                                <h1 className="font-raleway-<uniquifier> font-semibold text-[20px] text-[#1B1A1A]">Taste: <span className="font-raleway-<uniquifier> text-[20px] text-[#1B1A1AB3]">{taste}</span></h1>
                                <h1 className="font-raleway-<uniquifier> font-semibold text-[20px] text-[#1B1A1A]">Cetegory: <span className="font-raleway-<uniquifier> text-[20px] text-[#1B1A1AB3]">{Cetegory}</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-35">
                <Footer></Footer>
            </div>
        </div>
    )

};
export default ViewPage;