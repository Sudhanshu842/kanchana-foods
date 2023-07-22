
import React, { useState, useEffect } from "react"
import logo from '../assets/main_logo.png'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
// import { AiOutlineInstagram} from 'react-icons/ai'
// import {  BiLogoFacebook } from 'react-icons/bi'

const Navbar = () => {

    const [navColor, setnavColor] = useState("md:bg-transparent")


    const listenScrollEvent = () => {
        window.scrollY > 40 ? setnavColor("md:bg-white") : setnavColor("md:bg-transparent")

    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
        return () => {
            window.removeEventListener("scroll", listenScrollEvent)
        };
    }, [])
    const [nav, setNav] = useState(true)

    const links = [

        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'Products',
        },
        {
            id: 3,
            link: 'About',
        },
        {
            id: 4,
            link: 'Contact',
        },

    ]

    return (
        <>
            <nav  // eslint-disable-next-line
                className={"z-40 mx-auto top-0 flex items-center justify-evenly md:justify-between sticky max-w-7xl h-auto sm:h-26 md:h-28 bg-white rounded-xl md:bg-opacity-70 bg-opacity-100" + " " + navColor}>
                <div className="flex md:ml-12" >
                    <a href="kanchanafoods.com">
                        <img className="h-24 md:h-32 w-auto" src={logo} alt="Bhojaji" ></img>
                    </a>
                </div>
                <div className="hidden  md:flex items-center justify-center  md:mr-12">
                    <div className="flex space-x-4 ">
                        <ul className='hidden md:flex '>
                            {links.map(({ id, link }) => (
                                <li
                                    key={id} className={'flex px-4 cursor-pointer capitalize text-2xl font-playfair hover:scale-105 hover:text-black text-black duration-200 '}>
                                    <Link to={link} smooth duration={500} className='flex flex-col items-center'>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <a
                        href='/'
                        className=' text-black '
                        target='blank'>
                        <AiOutlineInstagram size={25} />
                    </a>
                    <a
                        href='/'
                        className=' text-black '
                        target='blank'>
                        <BiLogoFacebook size={25} />
                    </a> */}
                </div>
                {nav && (
                    <div className="md:hidden h-36 md:h-44 w-44 ml-8 sm:w-auto">
                        <div className="flex justify-center items-center px-2 ">
                            <ul className='flex flex-col sm:flex-row justify-items-center md:hidden'>
                                {links.map(({ id, link }) => (
                                    <li
                                        key={id} className='flex m-auto sm:px-4 cursor-pointer capitalize mb-2 text-lg sm:text-xl font-playfair text-gray-700 hover:scale-105 hover:text-black duration-200'>
                                        <Link to={link} smooth duration={500} className='flex flex-col justify-normal items-center'>
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <div className="absolute  right-4 z-50 flex items-center md:hidden">
                    <button type="button" onClick={() => setNav(!nav)} className="inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500" aria-controls="mobile-menu" aria-expanded="false">
                        {nav ?
                            <><FaTimes size={20} /></> : <><FaBars size={20} /></>}
                    </button>
                </div>

            </nav>


        </>
    )
}

export default Navbar

