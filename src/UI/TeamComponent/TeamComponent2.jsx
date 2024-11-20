import React from 'react'
import team2  from '../AboutComponent/AboutPictures/team1.jpg'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";


function TeamComponent2() {
  return (
    <div>
        <div  className='min-h-[200px]  w-full bg-white grid grid-cols-1   gap-5  md:grid-cols-2 lg:grid-cols-3 p-[10px]'>
            <div>
                <img src={team2} width='100%' height='100%' alt="" />
            </div>
            <div>
                <div>
                    <h1 className='font-custom  text-boldtext font-semibold text-[1.9rem] cursor-pointer'>Cameron Williamson</h1>
                    <h1 className='font-custom text-textc  font-medium  text-[1.3rem]'>GENETIC SPECIALIST</h1>
                </div>
                <article className='mt-[20px] leading-6'>
                    <p className='font-custom  text-start'>
                        Providing insight-driven transformation to
                        investment banks, wealth and asset mana,
                        exchanges, Finance
                    </p>
                </article>
                <div className='mt-[20px] leading-8 font-custom text-[1.2rem]'>
                    <h1>EXPERTISE:  Genetic Specialist</h1>
                    <h1>Experience: 15years</h1>
                    <h1>Email:  chideracollins24@gmail.com</h1>
                </div>
            </div>
            <div className='flex gap-6 justify-center md:justify-start lg:justify-center'>
                <a href="#"><span className='h-[40px] w-[40px]  bg-blue-800 flex items-center justify-center rounded-md  text-[1rem] text-white'><FaFacebook /></span></a>
                <a href="#">
                 <span className='h-[40px] w-[40px]  bg-blue-600 flex items-center justify-center rounded-md  text-[1rem] text-white'><FaInstagram /> </span>
                </a>
                <a href="#">
                 <span  className='h-[40px] w-[40px]  bg-blue-500 flex items-center justify-center rounded-md  text-[1rem] text-white'><FaTwitter /></span>
                </a>
               <a href="#">
                  <span className='h-[40px] w-[40px]  bg-red-500 flex items-center justify-center rounded-md  text-[1rem] text-white'><FaPinterest /></span>
               </a>
            </div>

        </div>
    </div>
  )
}

export default TeamComponent2