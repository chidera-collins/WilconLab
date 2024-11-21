import React, { useState } from 'react'
import { BsLungs } from "react-icons/bs";
import { MdDialpad } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Button from '../../ReusableComponent/Button';
import { FaYoutube } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import subpic from './Subnavpictures/subpic1.jpg'
import subnav2 from './Subnavpictures/subnav2.jpg'
import subnav3 from './Subnavpictures/subnav3.jpg'



function HeaderComponent() {
    let [nav, setNav] = useState('-80%')
    function sidenav() {
        if (nav =='-80%') {
            setNav('0')
            
        } else {
            setNav('-80%')
            
        }
        
    }
  return (
    <div className='min-h-[120px] w-full fixed top-0 z-50'>
        <div className='min-h-[100px] bg-[#b7d0d6]  flex items-center p-[10px] box-border lg:hidden '>
            <div className=' gap-1 flex items-center justify-start w-[60%]  '>
                <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                <h1 className=' font-custom text-3xl font-bold text-boldtext'> WILCON LAB </h1>
            </div>
            <div className='flex justify-end w-[40%] p-[20px] box-border items-center'>
                <Button
                        height='90px'
                        width ='4000px'
                        className='bg-textc text-2xl font-bold p-[10px]'
                        label = 'Ξ'
                        onClick = {sidenav}
                    />
            </div>
        </div>




        {/* for large screen  */}
        <div className='min-h-[140px] bg-[#b7d0d6] hidden lg:grid grid-cols-[25%,75%] w-full overflow-x-hidden '>
            <div className=' gap-1 flex items-center justify-center'>           
                    <h1  className='font-bold text-3xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-4xl font-bold text-boldtext'> WILCON LAB </h1>
            </div>
            <div className=' grid grid-cols-1 w-full '>
                <div className='grid grid-cols-3 justify-around p-[10px] border-b-[2px] border-b-white  '>
                    <div className='flex items-center p-[10px]'>
                        <h1 className='text-boldtext text-2xl font-bold'><MdDialpad /></h1>
                        <h1 className='font-custom text-[19px] font-semibold'> HELP DESK: +234 90 3459 900</h1>
                    </div>
                    <div className='flex items-center'>
                        <h1 className='text-boldtext text-2xl font-bold'><IoTimeOutline /></h1>
                        <h1 className='font-custom text-[17px] font-semibold'>MONDAY - FRIDAY 09:00AM-05:00PM</h1>
                    </div>
                    <div className='flex items-center'>
                          <h1 className='font-custom text-[19px] font-semibold'>MONDAY - FRIDAY 09:00AM-05:00PM</h1>
                    </div>
                </div>
                <div className=' grid grid-cols-[70%,30%] gap-6 items-center'>
                    <div className='p-[5px] box-border font-custom text-[20px] font-semibold'> 
                    <ul className='flex gap-4'>
                            <li className='nav-item hover:border-b-[2px] hover:border-[yellow]'><Link to={'/'}>HOME</Link></li>
                            <li className='nav-item hover:border-b-[2px] hover:border-[yellow]'><Link to={'/About'}>ABOUT</Link></li>
                            <li className='nav-item john-bro cursor-pointer hover:border-b-[2px] hover:border-[yellow]'>
                               PAGES +
                            </li>
                            <div className=" john opacity-0 absolute top-[150px] left-[540px] " style={{transition:'1s'}}>
                                   <ul className='flex flex-col font-custom font-extrabold text-[1.4rem]'>
                                        <li><Link to={'/Service'}>SERVICES</Link></li>
                                        <li><Link to={'/Pricing'}>Pricing Plan</Link></li>
                                        <li><Link to={'/Shop'}>Shop</Link></li>
                                        <li><Link to={'/cart'}>Cart</Link></li>
                                        <li><Link to={'/Checkout'}>Checkout</Link></li>
                                        <li><Link to={'/FAQ'}>FAQs</Link></li>
                                    </ul>
                                </div>
                            <li className='nav-item hover:border-[yellow] hover:border-b-[2px]'><Link to={'/Research'}>RESEARCH</Link></li>
                            <li className='nav-item hover:border-[yellow] hover:border-b-[2px]'><Link to={'/Team'}>TEAM DETAILS</Link></li>
                            <li className='nav-item hover:border-[yellow] hover:border-b-[2px]'><Link to={'/Contact'}>CONTACT</Link></li>
                        </ul>
                    </div>
                    
                    <div className='grid grid-cols-[20%,80%]'>
                        <div>
                            <Button
                                height='90px'
                                width ='4000px'
                                className=' text-2xl font-bold p-[10px]'
                                label = 'Ξ'
                                onClick = {sidenav}
                            />
                        </div>
                        <div className='flex items-center justify-center bg-boldtext text-bodybg font-custom font-semibold text-2xl w-[90%]'>
                            <Link to={'/About'}><h1>BOOK APPOINTMENT</h1></Link>
                        </div>
                    </div>

                </div>

            </div>
        
        </div>

        {/* <div className='h-[200px] drops w-[10%] flex absolute left-[550px] justify-center bg-red-500   overflow-hidden '>
            <ul className='flex flex-col font-custom font-extrabold drops text-[1.4rem]'>
                <li>
                    <Link to={'/Service'}>SERVICES</Link>
                </li>
                <li>
                    <Link to={'/Pricing'}>Pricing Plan</Link>
                </li>
                <li>
                    <Link to={'/Cart'}>Cart</Link>
                </li>
                <li>
                    <Link to={'/Checkout'}>Checkout</Link>
                </li>
                <li>
                    <Link to={'/FAQ'}>FAQs</Link>
                </li>
            </ul>
        </div> */}



                        {/* SIDENAV DISPLAY  */}

        <div className=' absolute bg-[#4f4fe0] min-h-[1000px] z-[2] top-[20px] w-[80%]  flex flex-col gap-2 p-[10px]'style={{right:nav, transition:'1s',}}>
            <div className=' gap-4 flex items-center justify-between  '>   
                <div className='flex'>
                    <h1  className='font-bold text-2xl text-textc '><BsLungs /></h1>
                    <h1 className=' font-custom text-3xl font-bold text-boldtext'> WILCON LAB </h1>    
                </div>        
              
                    <Button
                        height='50px'
                        width ='100px'
                        className='bg-boldtext'
                        label = '✖'
                        onClick ={sidenav}
                    
                    />
            </div>
                        {/* THIS PART OF THE SIDENAV IS HIDDEN FOR LARGE SCREEN  */}
            <section className='p-[10px] lg:hidden ' onClick={sidenav}>
                <div className='border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px]'> <Link to={'/'}>HOME</Link> </h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white min-h-[20px]'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] '><Link to={'/About'}>ABOUT</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'>+</h1>

                    {/* <div className="dropdown dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="btn m-1">Click</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                    </div> */}
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] '><Link to={'/Service'}>SERVICE</Link></h1>
                    <h1 className='font-custom text-[25px] font-semibold'>+</h1>
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] '><Link to={'/Research'}>RESEARCH</Link></h1>
                    {/* <h1>+</h1> */}
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] '><Link to={'/Team'}>TEAM</Link></h1>
                    {/* <h1>+</h1> */}
                </div>
                <div className='flex items-center justify-between border-b-[1px] border-b-white'>
                    <h1 className='font-custom font-semibold text-[19px] lg:text-[24px] '><Link to={'/Contact'}>CONTACT</Link></h1>
                    {/* <h1>+</h1> */}
                </div>
            </section>

                    {/* THIS PART OF SIDENAV IS TO BE SHOWN ON THE LARGE SCREEN  */}
            <section className='hidden lg:block p-[20px] font-custom font-semibold text-6xl'>
                <div>
                    <h1>Our Mission is to ensure  the generation of accurate and precise finding </h1>
                </div>


            </section>
         

            <div className='mt-[20px] p-[10px] lg:p-[20px]'>
                <h1 className='lg:text-2xl font-custom'>CONTACT US</h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> Ta-134/A,Gulshan Badda Link</a></h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#" className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl'> +234 90 8788 8999</a></h1>
                <h1 className='hover:text-[red] text-bodybg'>⭐<a href="#"className='font-light font-custom text-[17px] md:text-[20px] lg:text-3xl '> Wilconlab@gmail.com</a></h1>

                
            </div>
            <div className='hidden lg:block p-[20px]'>
                <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text font-custom text-[26px]">Get Update</span>
                        </div>
                        <div className='flex items-center'>
                            <input type="text" placeholder="Enter Mail" className="input input-bordered w-full max-w-xs" />
                            <span className='text-2xl bg-boldtext text-bodybg h-12 rounded flex items-center w-7 cursor-pointer hover:bg-textc'><IoIosSend /></span>

                        </div>                  
                </label>         
            </div>

            <div className='p-[20px] min-h-[100px] hidden lg:block'>
                <div>
                    <h1 className='text-2xl font-custom font-semibold'>Check Instagram Post</h1>
                </div>
                <div className=' min-h-[100px] flex gap-5 mt-5'>
                    <div className='min-h-[100px] rounded-2xl'>
                        <img src={subpic} height='100%' width='100%' alt="microscope" />
                    </div>
                    <div>
                        <img src={subnav2} height='100%' width='100%' alt="looking through microscope" />

                    </div>
                    <div>
                          <img src={subnav3} height='100%' width='100%' alt="Observing" />

                    </div>
                </div>
            </div>

            <div className='flex items-center gap-6 mt-[20px] text-[20px] md:text-[25px] p-[10px] lg:p-[20px]'>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                      <h1><FaYoutube /></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1 className=''><a href="#"><GrTwitter /></a></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1><a href="#"><FaFacebookF /></a></h1>
                </div>
                <div className='hover:bg-textc hover:scale-x-[130%] '>
                    <h1><a href="#"><FaSkype /></a></h1>
                </div>

            </div>

          

                

         </div>
         {/* <Test/> */}

    </div>
  )
}

export default HeaderComponent