import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import TitleAndBg from "../../Components/Title/TitleAndBg";
import { FaArrowLeft } from "react-icons/fa";
import './AddNewCoffee.css'
import Swal from 'sweetalert2'

const AddNewCoffee = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const coffeeName = form.get('coffeeName');
        const Supplier = form.get('Supplier');
        const Cetegory = form.get('Cetegory');
        const Chef = form.get('Chef');
        const taste = form.get('taste');
        const Details = form.get('Details');
        const Photo = form.get('Photo')
        // console.log('coffeeName:', coffeeName, 'Supplier:', Supplier, 'Cetegory:', Cetegory, 'Chef:', Chef, 'Taset:', taste, 'Details:', Details)
        const newCoffee = { coffeeName, Supplier, Cetegory, Chef, taste, Details, Photo }
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Coffee added successfully',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }
    return (
        <div className="add-new-coffee">
            <div className="">
                <TitleAndBg></TitleAndBg>
                <div className="w-[1320px] h-[965px]  mx-auto ">
                    <div className="pt-15">
                        <Link className='flex gap-2 items-center justify-center w-[172px] h-[72px] rounded-[10px] hover:bg-[#D2B48C] hover:text-[#374151]' to='/home'>
                            <FaArrowLeft></FaArrowLeft>
                            <button className=' font-rancho-regular text-[30px] text-[#374751]' >Back to home</button>
                        </Link>
                        <form onSubmit={handleSubmit}>
                            <div className="w-[1320px] h-[878px] bg-[#F4F3F0] rounded-[5px] pt-5 mt-5">
                                <h1 className="font-rancho-regular text-[45px] text-[#374151] text-center pt-5 mt-5">Add New Coffee</h1>
                                <p className="font-raleway-<uniquifier> text-[18px] text-[#1B1A1AB2] text-center pt-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>

                                <div className="flex mx-auto justify-center gap-15 mt-5">
                                    <div className="LSD space-y-6">
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Name">Name</label>
                                            <input className=" bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="coffeeName" placeholder="Enter coffee name" id="name" />
                                        </div>
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Supplier">Supplier</label>
                                            <input className=" bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="Supplier" placeholder="Enter coffee supplier" id="Supplier" />
                                        </div>
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Cetegory">Category</label>
                                            <input className="bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="Cetegory" placeholder="Enter coffee Cetegory" id="Cetegory" />
                                        </div>
                                    </div>
                                    <div className="RSD space-y-6">
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Chef">Chef</label>
                                            <input className="bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="Chef" placeholder="Enter coffee Chef" id="Chef" />
                                        </div>
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Taste">Taste</label>
                                            <input className="bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="taste" placeholder="Enter coffee Taste" id="Taste" />
                                        </div>
                                        <div className="grid">
                                            <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Details">Details</label>
                                            <input className="bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[536px] h-[48px]" type="text" name="Details" placeholder="Enter coffee Details" id="Details" />
                                        </div>

                                    </div>

                                </div>
                                <div className="justify-center grid mt-5">
                                    <label className="font-semibold text-[20px] text-[#1B1A1A88] font-raleway-<uniquifier>" htmlFor="Photo">Photo</label>
                                    <input className="bg-[#FFFFFF] mt-3 p-5 text-[1B1A1A6A] rounded-[5px] w-[1130px] h-[48px]" type="text" name="Photo" placeholder="Enter coffee Photo" id="Photo" />
                                    <button type="submit" className="w-[1130px] h-[48px] bg-[#D2B48C] border border-[#331A15] rounded-[5px] mt-9 text-[#331A15] font-rancho-regular text-[24px]" >Add Coffee</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="mt-35">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default AddNewCoffee;