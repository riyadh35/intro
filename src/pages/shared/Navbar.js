import React from 'react';
import logo from '../../image/Frame 1.png'
import Btn from './Btn';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <img className=" normal-case w-24" src={logo} alt="" />
            </div>
            <div className="navbar-end  hidden lg:flex">
                <ul className="flex text-black">

                    <li className='p-4'><Link>About</Link></li>
                    <li className='p-4'><Link>Stories</Link></li>
                    <li className='p-4'><Link>Blog</Link></li>
                    <li className='p-4'><Link>FAQ</Link></li>
                    <li className='p-4'><Link>Contract</Link></li>
                </ul>
                <Btn></Btn>
            </div>

        </div>
    );
};

export default Navbar;