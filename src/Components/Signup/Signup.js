import React from 'react';
import image from '../../image/dummy.png'
import './Signup.css'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';


const Signup = () => {
    return (
        <div>
            <div className='signup mx-32 p-5 flex justify-center items-center my-10   shadow-lg shadow-gray-400 rounded-md'>
                <div className='mr-10'>
                    <img className='w-96' src={image} alt="Album" />
                </div>
                <div>
                    <h2 class="text-3xl font-semibold text-gray-100 mb-5">Signup with</h2>
                    <div className='flex ml-28'>
                    <AiFillGoogleCircle className='bg-gray-100 w-12 h-12 p-1 rounded-full text-orange-500 cursor-pointer' size={30}></AiFillGoogleCircle>
                    <BsFacebook className='ml-3 bg-gray-100  w-12 h-12 p-2 rounded-full text-orange-500 cursor-pointer' size={30}></BsFacebook> 
                    <AiFillTwitterCircle className='ml-3 bg-gray-100  w-12 h-12 p-1 rounded-full text-orange-500 cursor-pointer' size={30}></AiFillTwitterCircle> 
                    </div>
                    <div class="flex flex-col w-full border-opacity-50">
                    
                    <div class="divider ">OR</div>
                    <h3 className='text-orange-600 text-xl'>Create an account for free</h3>
                    </div>

                <form action="#" class="p-0">
                <div class="mt-5 flex">
                    <input type="text" class="block w-44 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="First name" />
                    <input type="text" class="ml-3 block w-44 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Last name" />
                </div>
                <div class="mt-5">
                    <input type="text" class="block w-96 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email" />
                </div>
                <div class="mt-5">
                    <input type="date" class="block w-96 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Date of birth" />
                </div>
                <div class="mt-5">
                    <input type="text" class="block w-96 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name" />
                </div>
                <div class="mt-5">
                    <input type="number" class="block w-96 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Phone Number" />
                </div>
                <div class="mt-5">
                    <input type="password" class="block w-96 p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password" />
                </div>

                <div class="my-6 block w-96 text-sm  text-gray-800">
                    <input type="checkbox" class="inline-block border-0 mr-3 " />
                    <span display="inline">By creating an account you are agreeing to our 
                        <a  href="#" target="_blank" data-test="Link">
                        <span class="underline hover:text-orange-500 "> Terms and Conditions</span> </a> and
                    <a href="#" target="_blank" data-test="Link">
                        <span class="underline hover:text-orange-500"> Privacy Policy</span> </a>
                    </span>
                </div>
                        
                <div>
                            <button className=' bg-orange-500 text-white border hover:bg-white hover:border-orange-500 hover:text-orange-500 font-bold hover:translate-y-2 hover:transition hover:duration-500 duration-500 p-3  cursor-pointer  '>SUBMIT</button>
                </div>
            </form>
  </div>
            </div>
        </div>
    );
};

export default Signup;