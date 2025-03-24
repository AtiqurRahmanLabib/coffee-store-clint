import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, Supplier, Cetegory, Chef, taste, Details, Photo } = coffee;
    console.log(coffee)

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                <div className='w-[40px] h-[150px] grid items-center cursor-pointer'>
                    <button className='bg-[#D2B48C] rounded-[5px] w-[40px] h-[40px] content-center'>
                        <Link to={`/viewPage/${_id}`}>
                            <FaEye className='text-[#FFFFFF] justify-self-center'></FaEye>
                        </Link>
                    </button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className='bg-[#3C393B] rounded-[5px] w-[40px] h-[40px] content-center cursor-pointer'>
                            <FaPen className='text-[#FFFFFF] justify-self-center'></FaPen>
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className='bg-[#EA4744] rounded-[5px] w-[40px] h-[40px] content-center cursor-pointer'>
                        <MdDelete className='text-[#FFFFFF] justify-self-center'></MdDelete>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;