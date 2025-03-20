import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
    const { coffeeName, Supplier, Cetegory, Chef, taste, Details, Photo } = coffee;
    console.log(coffee)
    return (
        <div className=''>
            <div className='w-[648px] h-[300px] rounded-[10px] bg-[#F5F4F1]  content-center justify-center flex items-center gap-5'>
                <div>
                    <img className='w-[200px] h-[250px]' src={Photo} alt="" />
                </div>
                <div className='w-[259px] h-[99px] grid gap-3 '>
                    <p className='font-semibold text-[20px] font-raleway-<uniquifier> text-[#1B1A1A]'>Name: <span className='text-[20px] text-[#5C5B5BB3] font-raleway-<uniquifier>'>{coffeeName}</span></p>
                    <p className='font-semibold text-[20px] font-raleway-<uniquifier> text-[#1B1A1A]'>Chef: <span className='text-[20px] text-[#5C5B5BB3] font-raleway-<uniquifier>'>{Chef}</span></p>
                    <p className='font-semibold text-[20px] font-raleway-<uniquifier> text-[#1B1A1A]'>Cetegory: <span className='text-[20px] text-[#5C5B5BB3] font-raleway-<uniquifier>'>{Cetegory}</span></p>
                </div>
                <div className='w-[40px] h-[150px] grid items-center'>
                    <div className='bg-[#D2B48C] rounded-[5px] w-[40px] h-[40px] content-center'>
                        <FaEye className='text-[#FFFFFF] justify-self-center'></FaEye>
                    </div>
                    <div className='bg-[#3C393B] rounded-[5px] w-[40px] h-[40px] content-center'>
                        <FaPen className='text-[#FFFFFF] justify-self-center'></FaPen>
                    </div>
                    <div className='bg-[#EA4744] rounded-[5px] w-[40px] h-[40px] content-center'>
                        <MdDelete className='text-[#FFFFFF] justify-self-center'></MdDelete>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;