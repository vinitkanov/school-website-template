'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar () {

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
    setIsOpen(!isOpen)
}

    return (
        <navbar className="flex justify-between items-center p-4 pt-8 border-b-1 border-[#C8C8C8] pb-6">
            <div>
                <img src="/IpsumSCH.svg" alt="Ipsum School Logo" draggable="false"/>
            </div>

            <Menu className='md:hidden h-6 w-6' onClick={toggleMenu} aria-expanded={isOpen}/>

            <div className="hidden nav-links md:flex items-center gap-6">
                <ul className="flex gap-8 font-regular">
                    <li><a href="/">Jenjang</a></li>
                    <li><a href="/about">Tentang</a></li>
                    <li><a href="/courses">Galeri</a></li>
                    <li><a href="/contact">Kontak</a></li>
                </ul> 
                <button className="bg-[#E70CFF] shadow-lg rounded-xl pl-8 pr-8 pt-2 pb-2 text-white">PPDB</button>  
            </div>

            <div className={`nav-links md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-lg p-4`}>
                <ul className="flex flex-col gap-6 font-regular text-center mt-5">
                    <li><a href="/">Jenjang</a></li>
                    <li><a href="/about">Tentang</a></li>
                    <li><a href="/courses">Galeri</a></li>
                    <li><a href="/contact">Kontak</a></li>
                </ul> 
                <button className="bg-[#E70CFF] shadow-lg rounded-xl pl-8 pr-8 pt-2 pb-2 text-white mt-4 w-full">PPDB</button>  
            </div>
            
        </navbar>
    )
}