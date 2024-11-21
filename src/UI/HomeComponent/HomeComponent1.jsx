import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import slider1 from './HomeEffectPictures/slider1.png'
import slider2 from './HomeEffectPictures/slider2.png'
import bgg from './HomePictures/bgg.png'
import { motion } from 'framer-motion'

function HomeComponent1() {
    const images = [slider1, slider2]
    const [num , setNum] =useState(0);
    useEffect(() => {
      let ss = setInterval(()=>{
        setNum((prevNum) => (prevNum + 1) % images.length);
      },3000)
    
      return () => {
        clearInterval(ss)
      }
    }, [images.lenght])
    
  return (
    <div>
        <div className='min-h-[600px] p-[20px]  grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center'>
            <div className=' lg:hidden'>
                <div className='min-h-[100px] w-[320px] '>
                 <img src={images[num]} alt="" />

                </div>
                <div className='hidden md:block min-h-[200px] w-[200px] absolute top-[200px] left-[360px]'>
                  <img src={bgg} alt="" />

                </div>

            </div>
            <div className='min-h-[100px] lg:hidden '>
                <motion.div
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                
                >
                    <h1 className='font-custom text-textc font-semibold text-[20px]'>Our Passion is to Give you Better Service</h1>
                    <p className='font-custom text-[19px] font-medium text-start'>Your full service lab for clinical trials.Our mission is to ensure the generation of accurate and precise findings</p>
                </motion.div>
                <div className='md:flex items-center gap-2'>
                    <div className='min-h-[54px] w-[40%] md:w-[20%] bg-boldtext rounded-xl flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/Contact'}>APPOINTMENT</Link>

                    </div>
                    <div className='min-h-[50px] w-[35%] md:w-[20%] bg-textc rounded-xl mt-[10px] flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/About'}>ABOUT US</Link>

                    </div>
              
                </div>
            </div>

              {/* FOR LARGE SCREEN  */}
              <div className='min-h-[100px] hidden lg:block '>
                <div>
                    <h1 className='font-custom text-textc font-semibold text-[39px]'>Our Passion is to Give you Better Service</h1>
                    <p className='font-custom text-[25px] font-medium text-start'>Your full service lab for clinical trials.Our mission is to ensure the generation of accurate and precise findings</p>
                </div>
                <div className='md:flex items-center gap-2'>
                    <div className='min-h-[54px] w-[40%] md:w-[20%] bg-boldtext rounded-xl flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/Contact'}>APPOINTMENT</Link>

                    </div>
                    <div className='min-h-[50px] w-[35%] md:w-[20%] bg-textc rounded-xl mt-[10px] flex justify-center items-center text-bodybg font-custom text-[19px] cursor-pointer'>
                      <Link to={'/About'}>ABOUT US</Link>

                    </div>
              
                </div>
              </div>
            <div className=' hidden lg:block '>
                <div className='min-h-[400px]  w-[400px] lg:min-h-[400px] lg:w-[400px]  relative  rounded-xl'>
                    <img src={images[num]} alt="" />
                    <div className='hidden md:block min-h-[200px] w-[200px] absolute top-[100px] right-[-170px]'>
                  <img src={bgg} alt="" />

                </div>
                </div>
                

            </div>
            


        </div>
    </div>
  )
}

export default HomeComponent1