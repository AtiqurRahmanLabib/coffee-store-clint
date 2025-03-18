import React from 'react';
import Footer from '../../Components/Footer/Footer';
import TitleAndBg from '../../Components/Title/TitleAndBg';
import Header from '../../Components/Header/Header';
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <TitleAndBg></TitleAndBg>
            <Header></Header>
            <div className='w-full h-[240px] bg-[#ECEAE3] flex gap-25 justify-center items-center' >
                <div className=''>
                    <img src={icon1} alt="" />
                    <h1 className='font-rancho-regular text-[35px] text-[#331A15] '>Awesome Aroma</h1>
                    <p className='text-[#1B1A1A] font-raleway-<uniquifier> text-[16px]'>You will definitely be a fan of the design <br /> & aroma of your coffee</p>
                </div>
                <div className=''>
                    <img src={icon2} alt="" />
                    <h1 className='font-rancho-regular text-[35px] text-[#331A15] '>High Quality</h1>
                    <p className='text-[#1B1A1A] font-raleway-<uniquifier> text-[16px]'>We served the coffee to you maintaining <br /> the best quality</p>
                </div>
                <div className=''>
                    <img src={icon3} alt="" />
                    <h1 className='font-rancho-regular text-[35px] text-[#331A15] '>Pure Grades</h1>
                    <p className='text-[#1B1A1A] font-raleway-<uniquifier> text-[16px]'>The coffee is made of the green coffee <br /> beans which you will love</p>
                </div>
                <div className=''>
                    <img src={icon4} alt="" />
                    <h1 className='font-rancho-regular text-[35px] text-[#331A15] '>Proper Roasting</h1>
                    <p className='text-[#1B1A1A] font-raleway-<uniquifier> text-[16px]'>Your coffee is brewed by first roasting <br /> the green coffee beans</p>
                </div>
            </div>

            <div className='home-bg'>
            
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;