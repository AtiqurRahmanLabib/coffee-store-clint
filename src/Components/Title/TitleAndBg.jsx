import React from 'react';
import './TitleAndBg.css'
import logo1 from '../../assets/images/more/logo1.png'

const TitleAndBg = () => {
    return (
        <div className='bg-custom fixed'>
            <div className='flex justify-center gap-2'>
                <img className='w-[35px] h-[40px]' src={logo1} alt="" />
                <h1  className='font-rancho-regular text-[30px] text-[#FFFFFF] text-center'>Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default TitleAndBg;