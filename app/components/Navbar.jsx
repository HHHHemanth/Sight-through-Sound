"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image';
const navLinks=[
    { title: 'About', path: '#about' },
    { title: 'Results', path: '#results' },
]
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#F6D46B] border-b border-black shadow-md">

        <div>
            <div className='flex flex-wrap items-center justify-between mx-auto p-4 py-2'>
            <Link href="/" className="text-lg lg:text-xl md:text-xl text-black font-semibold font-sans">
  <div className="relative w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] pt-5"> {/* Adjust size as needed */}
    <h3>STS</h3>
  </div>
</Link>

            <div className='mobile-menu block md:hidden'>{
                !navbarOpen ? (
                    <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-3 py-2   hover:text-black hover:border-black text-black '>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                ):(
                    <button onClick={()=> setNavbarOpen(false)}  className='flex items-center px-3 py-2 hover:text-black hover:border-black text-black'>
                        <XMarkIcon className='h-5 w-5'/>
                    </button>
                )
                }

            </div>
            <div className='menu hidden  md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link,index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> :null}
    </nav>
  )
}

export default Navbar