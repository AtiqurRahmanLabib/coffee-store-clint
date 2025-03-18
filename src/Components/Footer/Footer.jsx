import React from 'react';
import './Footer.css'
import logo1 from '../../assets/images/more/logo1.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-bg-custom'>

            <div className='footer-container flex h-full items-center justify-center gap-55'>
                <div className='information-container grid items-center pl-55r'>
                    <img className='w-[75px] h-[90px]' src={logo1} alt="" />
                    <h1 className='text-[#331A15] font-rancho-regular text-[45px]'>Espresso Emporium</h1>
                    <p className='text-[#1B1A1A] font-rancho-regular text-[20px] '>Always ready to be your friend. Come & Contact with us to share your <br />memorable moments, to share with your best companion.</p>
                    <div className='flex gap-5 text-[30px] text-[#331A15] mt-5'>
                        <FaFacebook></FaFacebook>
                        <FaTwitter></FaTwitter>
                        <FaInstagram></FaInstagram>
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <p className='text-[#331A15] text-[45px] font-rancho-regular mt-5'>Get in touch</p>
                    <p className='font-raleway-<uniquifier> text-[20px] text-[#1B1A1A]'>+88 01533 333 333</p>
                    <p className='font-raleway-<uniquifier> text-[20px] text-[#1B1A1A]'>info@gmail.com</p>
                    <p className='font-raleway-<uniquifier> text-[20px] text-[#1B1A1A]'>72, Wall street, King Road, Dhaka</p>
                </div>

                <div className='contact-container grid  items-center'>
                    <h1 className='font-rancho-regular text-[45px] text-[#331A15]'>
                        Connect with Us
                    </h1>
                    <form className='grid items-center'>
                        <input className='p-4 rounded-[5px] w-[403px] h-[48px] bg-[#FFFFFF] ' type="text" name='name' placeholder='Name' />

                        <input className='p-4 rounded-[5px] w-[403px] mt-5 h-[48px] bg-[#FFFFFF] ' type="email" name='email' placeholder='Email' />
                        <input className='p-4 rounded-[5px] w-[403px] mt-5 h-[130px] bg-[#FFFFFF] ' type="text" name='message' placeholder='message' />

                        <input className='text-[#331A15] rounded-[30px]  font-rancho-regular text-[25px] w-[150px] h-[48px] border border-[#331A15] mt-5' type="button" value="Send message" />
                    </form>
                </div>
            </div>
            <div className='copystick text-[#FFFFFF] font-rancho-regular text-[20px] text-center mt-5'>

                &copy; Copyright Espresso Emporium ! All Rights Reserved
            </div>
        </div>
    );
};

export default Footer; 