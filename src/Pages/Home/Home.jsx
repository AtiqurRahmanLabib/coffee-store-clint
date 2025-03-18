import React from 'react';
import Footer from '../../Components/Footer/Footer';
import TitleAndBg from '../../Components/Title/TitleAndBg';
import Header from '../../Components/Header/Header';
import icon1 from '../../assets/images/icons/1.png'
import icon2 from '../../assets/images/icons/2.png'
import icon3 from '../../assets/images/icons/3.png'
import icon4 from '../../assets/images/icons/4.png'
import './Home.css'
import { Link } from 'react-router-dom';
import cups1 from '../../assets/images/cups/Rectangle 9.png'
import cups2 from '../../assets/images/cups/Rectangle 10.png'
import cups3 from '../../assets/images/cups/Rectangle 11.png'
import cups4 from '../../assets/images/cups/Rectangle 12.png'
import cups5 from '../../assets/images/cups/Rectangle 13.png'
import cups6 from '../../assets/images/cups/Rectangle 14.png'
import cups7 from '../../assets/images/cups/Rectangle 15.png'
import cups8 from '../../assets/images/cups/Rectangle 16.png'

const Home = () => {
    return (
        <div className='home-bg'>
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

            <div className=''>
                <div className='text-center  mt-15'>
                    <h1 className='font-rancho-regular text-[20px]'>--- Sip & Savor ---</h1>
                    <p className='text-[#331A15] font-rancho-regular text-[55px]' >Our Popular Products</p>
                    <Link to='/AddNewCoffee'><button className='w-[150px] h-[48px] mt-5 rounded-[5px] bg-[#E3B577]  border border-[#331A15] text-[#FFFFFF] font-rancho-regular text-[24px] hover:bg-transparent text-shadow-inner hover:text-black'>Add Coffee</button></Link>
                </div>


                <div className='justify-items-center '>
                    <h1 className='font-rancho-regular text-[20px] text-[#1B1A1A] text-center mt-55'>Follow Us Now</h1>
                    <p className='text-[#331A15] font-rancho-regular text-[55px] text-center pt-1'>Follow on Instagram</p>
                    <div className='grid grid-cols-4 gap-5 mt-5'>
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups1} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups2} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups3} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups4} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups5} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups6} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups7} alt="" />
                        <img className='w-[312px] h-[350px] rounded-[10px]' src={cups8} alt="" />
                    </div>
                </div>
            </div>

            <div className='mt-25'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;