import React from 'react';
import logo from '../../image/Frame 1.png'

const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <img className=" normal-case w-24" src={logo} alt="" />
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="flex text-black">
                    <li className='p-4'><a href="">About</a></li>
                    <li className='p-4'><a href="">Stories</a></li>
                    <li className='p-4'><a href="">Blog</a></li>
                    <li className='p-4'><a href="">FAQ</a></li>
                    <li className='p-4'><a href="">Contacts</a></li>
                </ul>
                <a href='#' style={{ background: '#1F94AA' }} className="btn border-none w-52 ml-2 rounded-full text-white">Get the into kit</a>
            </div>

        </div>
    );
};

export default Navbar;