import React from 'react'
import about from './HomePictures/about1.png'
import about2 from './HomePictures/about2.png'
import { Link } from 'react-router-dom'

function HomeComponent2() {
  return (
    <div>
        <div className='min-h-[600px] bg-bodybg  p-[20px]  grid grid-cols-1 lg:grid-cols-2 '>
           <div className='relative'>
                <div className='min-h-[100px] W-[100px]'>
                   <img src={about} alt="" />
                </div>
                <div className='min-h-[100px] w-[200px] absolute hidden md:block bottom-[50px] left-4'>
                    <img src={about2} alt="" />
                </div>
           </div>
            <div className='min-h-[100px]  mt-[40px] p-[10px]'>
                <div>
                    <h2 className=' before:h-[3px] before:w-[40px] before:bg-textc relative text-textc flex items-center font-custom font-semibold text-2xl gap-2'>ABOUT US</h2>
                    <h1 className='text-start text-[28px] md:text-[30px] font-custom font-semibold mt-[20px] text-boldtext'>Best Laboratory For Testing And Research</h1>
                    <p className='text-start font-custom font-light text-[19px] md:text-[20px] lg:text-[23px] mt-[30px]'>Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings</p>
                    <p className='text-start font-custom font-light text-[19px] md:text-[20px] lg:text-[23px] mt-[30px]'>Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent claritatem insitamconse quat.</p>
                </div>
                <div className='min-h-[50px] w-[70%] md:w-[40%] bg-textc mt-8 text-bodybg flex items-center justify-center font-custom font-semibold rounded-lg cursor-pointer hover:bg-opacity-55 hover:transition hover:transition-ease-in'>
                    <Link to={'/Contact'}>TALK WITH EXPERT</Link>

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default HomeComponent2