import React from 'react'
import home_bg from '../assets/home_bg.png';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BsBagCheckFill } from 'react-icons/bs'
import { IoLocationSharp } from 'react-icons/io5'
import { BiSolidTruck } from 'react-icons/bi'

const Home = () => {
  


  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex flex-col ml-20 mt-[-2.75rem]'>
          <p className='text-5xl font-bold'>Order Your Favourite</p>
          <p className='text-5xl font-bold mt-2'>Food Easily</p>
        </div>

        <div className='flex flex-col ml-20'>
          <p className='text-md mt-[2rem]'>
            We deliver 100% organic and fresh food. You can </p>
          <p className='text-md mt-1'> order right away! </p>
        </div>


        <div>
          <button className='flex flex-box py-[8px] px-[23px] rounded-[30px] border  
        mt-6 ml-20 bg-yellow-400 shadow-sm hover:shadow-yellow-300'
        >
            Our Menu
            <AiOutlineArrowRight className='flex flex-box ml-3 mt-1' />
          </button>
        </div>
      </div>

      <div className=''>
        <img src={home_bg} alt='landing-page-img' height={500} width={450} loading='lazy'
          className='float-right mt-[-20rem] mr-300'
        ></img>
      </div>
      <div className='flex space-x-2 my-4 '>
        <button className='py-[10px] px-[23px] rounded-[8px] border 
        mt-6 ml-20 mr-3 text-justify inline-block align-middle shadow-md hover:shadow-red-200/75'>
        <BsBagCheckFill className='flex flex-box'/>
          Select your favourite food
          and order!
        </button>
        <button className='py-[8px] px-[23px] rounded-[8px] border 
        mt-6 ml-20 mx-2 text-justify inline-block align-middle shadow-md hover:shadow-red-200/75'>
        <IoLocationSharp/>
          Select your receiving place
          place 
        </button>
        <button className='py-[8px] px-[23px] rounded-[8px] border  
        mt-6 ml-20 mx-2 text-justify inline-block align-middle shadow-md hover:shadow-red-200/75'>
        <BiSolidTruck/>
          Get your food within
          1-2 hours       
        </button>
      </div>

    </div>
  )
}

export default Home