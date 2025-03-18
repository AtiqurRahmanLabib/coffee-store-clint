import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header-bg-custom justify-items-end pr-25'>
                <div className='justify-end  h-full content-center'>
                    <h1 className='font-rancho-regular text-[55px] text-[#FFFFFF] '>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='font-raleway-<uniquifier> text-[16px] text-[#FFFFFF]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>

                    <button className='w-[130px] h-[48px] bg-[#E3B577] text-[24px] font-rancho-regular hover:bg-transparent hover:border-[#FFFFFF] hover:border hover:text-[#FFFFFF] mt-5'>Learn More</button>

                </div>
            </div>
        </div>
    );
};

export default Header;