import React from 'react';
import errorImage from '../assets/images/404/404.gif'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import TitleAndBg from '../Components/Title/TitleAndBg';
const Error = () => {
    return (
        <div>
            <TitleAndBg></TitleAndBg>
            <div className='mt-5 w-[172px] mx-auto'>

                <Link className='flex gap-2 items-center justify-center w-[172px] h-[72px] rounded-[10px] hover:bg-[#D2B48C] hover:text-[#374151]' to='/home'>
                    <FaArrowLeft></FaArrowLeft>
                    <button className=' font-rancho-regular text-[30px] text-[#374751]' >Back to home</button></Link>
            </div>


            <div className='mx-auto content-center items-center'>
                <img className='content-center items-center mx-auto' src={errorImage} alt="" />
            </div>

        </div>
    );
};

export default Error;